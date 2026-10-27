import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { createHash } from "node:crypto";
import sharp from "sharp";
import { optimize } from "svgo";

// Keep originals outside the export, and record hashes to avoid repeated lossy encoding.
const root = process.cwd();
const manifestPath = path.join(root, "scripts/image-optimization-report.json");
const backup = await fs.mkdtemp(path.join(os.tmpdir(), "fidel-original-images-"));
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
const slash = (value) => value.split(path.sep).join("/");
let previous = [];
try { previous = JSON.parse(await fs.readFile(manifestPath, "utf8")).images; }
catch (error) { if (error.code !== "ENOENT") throw error; }

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  }));
  return nested.flat();
}

async function saveOriginal(file, contents) {
  const target = path.join(backup, path.relative(root, file));
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, contents);
}

async function encodeWebp(contents, metadata) {
  const encoder = sharp(contents, { animated: true });
  return metadata.hasAlpha
    ? encoder.webp({ nearLossless: true, quality: 88, alphaQuality: 100, effort: 6 }).toBuffer()
    : encoder.webp({ quality: 88, smartSubsample: true, effort: 6 }).toBuffer();
}

async function optimizeSvg(contents) {
  let svg = contents.toString();
  for (const match of [...svg.matchAll(/data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/=\r\n]+)/g)]) {
    const embedded = Buffer.from(match[2], "base64");
    const metadata = await sharp(embedded).metadata();
    const candidate = await encodeWebp(embedded, metadata);
    if (candidate.length < embedded.length) {
      svg = svg.replace(match[0], `data:image/webp;base64,${candidate.toString("base64")}`);
    }
  }
  return Buffer.from(optimize(svg, {
    multipass: true,
    plugins: [{ name: "preset-default", params: { overrides: { cleanupIds: false } } }],
  }).data);
}

async function optimizeIco(contents) {
  const count = contents.readUInt16LE(4);
  const directory = Buffer.from(contents.subarray(0, 6 + count * 16));
  const frames = [];
  let offset = directory.length;
  for (let index = 0; index < count; index++) {
    const entry = 6 + index * 16;
    const start = contents.readUInt32LE(entry + 12);
    let frame = contents.subarray(start, start + contents.readUInt32LE(entry + 8));
    if (frame.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
      const candidate = await sharp(frame).png({ compressionLevel: 9, effort: 10 }).toBuffer();
      if (candidate.length < frame.length) frame = candidate;
    }
    directory.writeUInt32LE(frame.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    frames.push(frame);
    offset += frame.length;
  }
  return Buffer.concat([directory, ...frames]);
}

const files = [...await walk(path.join(root, "public")), ...await walk(path.join(root, "src"))]
  .filter((file) => /\.(png|jpe?g|webp|avif|svg|ico)$/i.test(file)).sort();
const images = [];
for (const file of files) {
  const original = await fs.readFile(file);
  const relative = slash(path.relative(root, file));
  const cached = previous.find((entry) => entry.to === relative && entry.sha256 === hash(original));
  if (cached && relative !== "public/canvas.webp") { images.push(cached); continue; }
  await saveOriginal(file, original);
  const extension = path.extname(file).toLowerCase();
  let target = file;
  let candidate;
  let metadata;
  if (extension === ".svg") candidate = await optimizeSvg(original);
  else if (extension === ".ico") candidate = await optimizeIco(original);
  else {
    metadata = await sharp(original, { animated: true }).metadata();
    if (extension === ".avif" || relative === "public/canvas.webp") {
      candidate = await sharp(original).avif({ quality: relative === "public/canvas.webp" ? 65 : 70, effort: 6 }).toBuffer();
      if (relative === "public/canvas.webp") target = file.replace(/\.webp$/, ".avif");
    } else {
      candidate = await encodeWebp(original, metadata);
      if (/\.(png|jpe?g)$/.test(extension)) {
        target = file.replace(/\.[^.]+$/, ".webp");
      }
    }
  }
  // Already compressed formats are kept when another pass saves less than 10%.
  const threshold = /\.(webp|avif)$/.test(extension) ? 0.9 : 1;
  if (candidate.length >= original.length * threshold) {
    target = file;
    candidate = original;
  }
  if (target !== file) {
    try {
      await fs.access(target);
      throw new Error(`Refusing to overwrite existing asset: ${target}`);
    } catch (error) { if (error.code !== "ENOENT") throw error; }
  }
  const after = /\.(svg|ico)$/.test(extension) ? null : await sharp(candidate, { animated: true }).metadata();
  const lostTransparency = metadata?.hasAlpha && !after.hasAlpha && !(await sharp(original).stats()).isOpaque;
  if (metadata && (metadata.width !== after.width || metadata.height !== after.height || lostTransparency)) {
    throw new Error(`Dimensions or transparency changed: ${relative}`);
  }
  await fs.writeFile(target, candidate);
  if (target !== file) await fs.unlink(file);
  images.push({ from: relative, to: slash(path.relative(root, target)),
    beforeBytes: original.length, afterBytes: candidate.length,
    ...(metadata ? { width: metadata.width, height: metadata.height, alpha: metadata.hasAlpha } : {}),
    sha256: hash(candidate) });
  console.log(`${relative}: ${Math.round(original.length / 1024)} → ${Math.round(candidate.length / 1024)} KB`);
}

const mappings = images.filter((entry) => entry.from !== entry.to && entry.from.startsWith("public/"));
for (const file of await walk(path.join(root, "src"))) {
  if (!/\.(tsx?|jsx?|css|json|md)$/.test(file)) continue;
  const original = await fs.readFile(file, "utf8");
  let contents = original;
  for (const entry of mappings) {
    const from = entry.from.slice(7).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    contents = contents.replace(new RegExp(`(?<![\\w.-])${from}(?![\\w.-])`, "g"), entry.to.slice(7));
  }
  for (const match of [...contents.matchAll(/(["'`])((?:\/fidel\/|\/)?[\w./-]+\.(?:webp|avif|png|jpe?g|svg|ico))\1/g)]) {
    const asset = match[2].replace(/^\/(?:fidel\/)?/, "");
    if (asset.startsWith("..") || match[2].startsWith("/fidel/")) continue;
    try { await fs.access(path.join(root, "public", asset)); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }
    contents = contents.replaceAll(match[0], `${match[1]}/fidel/${asset}${match[1]}`);
  }
  if (contents !== original) {
    await saveOriginal(file, original);
    await fs.writeFile(file, contents);
  }
}
const beforeBytes = images.reduce((sum, entry) => sum + entry.beforeBytes, 0);
const afterBytes = images.reduce((sum, entry) => sum + entry.afterBytes, 0);
await fs.writeFile(manifestPath, `${JSON.stringify({ beforeBytes, afterBytes, images }, null, 2)}\n`);
console.log(JSON.stringify({ beforeBytes, afterBytes, reduction: `${(100 * (1 - afterBytes / beforeBytes)).toFixed(1)}%`, backup }));
