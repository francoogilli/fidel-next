import { NextResponse } from "next/server";
import { instagramGetUrl } from "instagram-url-direct";

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
    const result = await instagramGetUrl(url);
    const videoUrl = result?.url_list?.[0];

    if (!videoUrl) {
      return NextResponse.json({ error: "No video URL found" }, { status: 404 });
    }

    cache.set(url, { url: videoUrl, expiresAt: Date.now() + 30 * 60 * 1000 });

    return NextResponse.json({ videoUrl });
  } catch {
    return NextResponse.json({ error: "Failed to extract video URL" }, { status: 500 });
  }
}
