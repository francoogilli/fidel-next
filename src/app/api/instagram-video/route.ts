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
    console.log("[instagram-video] result:", JSON.stringify(result));
    const videoUrl = result?.url_list?.[0];

    if (!videoUrl) {
      console.error("[instagram-video] No videoUrl in result");
      return NextResponse.json({ error: "No video URL found" }, { status: 404 });
    }

    const thumbnailUrl = result?.media_details?.[0]?.thumbnail ?? null;

    cache.set(url, { url: videoUrl, expiresAt: Date.now() + 30 * 60 * 1000 });

    return NextResponse.json({ videoUrl, thumbnailUrl });
  } catch (err) {
    console.error("[instagram-video] error:", err);
    return NextResponse.json({ error: "Failed to extract video URL" }, { status: 500 });
  }
}
