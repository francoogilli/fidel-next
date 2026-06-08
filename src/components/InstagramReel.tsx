"use client";

import { Instagram, Play } from "lucide-react";

interface InstagramReelProps {
  url: string;
  width?: number;
  title?: string;
  thumbnail?: string;
}

export default function InstagramReel({ url, width = 320, title, thumbnail }: InstagramReelProps) {
  const height = Math.round(width * (16 / 9));

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 34,
        border: "7px solid #afb0af2a",
        boxShadow: "0 8px 24px rgba(29, 179, 29, 0.12), 0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-full overflow-hidden rounded-[27px] select-none group"
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title ?? "Instagram Reel"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#111]" />
        )}

        {/* Overlay oscuro al hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200" />

        {/* Botón play central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center size-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-200">
            <Play className="size-7 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Título arriba a la izquierda */}
        {title && (
          <div className="absolute top-5 left-5 right-16">
            <p
              className="text-white text-sm font-semibold leading-snug drop-shadow-md"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              {title}
            </p>
          </div>
        )}

        {/* Ícono de Instagram arriba a la derecha */}
        <div className="absolute top-4 right-5 flex items-center justify-center size-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
          <Instagram className="size-4 text-white" />
        </div>
      </a>
    </div>
  );
}
