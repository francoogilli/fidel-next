import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const videoUrl = request.nextUrl.searchParams.get("url");

  if (!videoUrl) {
    return new Response("No URL", { status: 400 });
  }

  const range = request.headers.get("range");

  const upstream = await fetch(videoUrl, {
    headers: {
      ...(range ? { Range: range } : {}),
      "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    },
  });

  const headers = new Headers();
  headers.set("Content-Type", upstream.headers.get("Content-Type") ?? "video/mp4");
  headers.set("Accept-Ranges", "bytes");
  const contentLength = upstream.headers.get("Content-Length");
  if (contentLength) headers.set("Content-Length", contentLength);
  const contentRange = upstream.headers.get("Content-Range");
  if (contentRange) headers.set("Content-Range", contentRange);

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}
