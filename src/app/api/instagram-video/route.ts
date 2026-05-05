import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const cache = new Map<string, { url: string; expiresAt: number }>();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  const cached = cache.get(url);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json({ videoUrl: cached.url });
  }

  try {
    const { stdout } = await execAsync(`yt-dlp -g "${url}" 2>/dev/null`, {
      timeout: 15000,
    });

    const videoUrl = stdout.trim().split("\n")[0];
    if (!videoUrl) {
      return NextResponse.json({ error: "No URL found" }, { status: 404 });
    }

    // Cache for 30 minutes
    cache.set(url, { url: videoUrl, expiresAt: Date.now() + 30 * 60 * 1000 });

    return NextResponse.json({ videoUrl });
  } catch {
    return NextResponse.json({ error: "yt-dlp failed" }, { status: 500 });
  }
}
