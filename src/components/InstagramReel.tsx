"use client";

interface InstagramReelProps {
  url: string;
  width?: number;
  title?: string;
}

export default function InstagramReel({ url, width = 320, title }: InstagramReelProps) {
  const embedUrl = url.replace(/\/$/, "") + "/embed/";
  const height = Math.round(width * (16 / 9));

  return (
    <div
      style={{ width, borderRadius: 16, overflow: "hidden", background: "#000" }}
    >
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        allowTransparency
        allowFullScreen
        title={title ?? "Instagram Reel"}
        style={{ display: "block", border: "none" }}
      />
    </div>
  );
}
