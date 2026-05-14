"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Instagram } from "lucide-react";

interface InstagramReelProps {
  url: string;
  width?: number;
  title?: string;
}

export default function InstagramReel({ url, width = 320, title }: InstagramReelProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [poster, setPoster] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const height = Math.round(width * (16 / 9));

  useEffect(() => {
    fetch(`/api/instagram-video?url=${encodeURIComponent(url)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.videoUrl) {
          setSrc(`/api/instagram-proxy?url=${encodeURIComponent(data.videoUrl)}`);
          if (data.thumbnailUrl) {
            setPoster(`/api/instagram-proxy?url=${encodeURIComponent(data.thumbnailUrl)}`);
          }
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [url]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 2500);
  }, [playing]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setHasPlayed(true);
    } else {
      v.pause();
      setPlaying(false);
      setShowControls(true);
    }
    resetHideTimer();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const val = parseFloat(e.target.value);
    v.volume = val;
    v.muted = val === 0;
    setVolume(val);
    setMuted(val === 0);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const currentTime = videoRef.current?.currentTime ?? 0;
  const duration = videoRef.current?.duration ?? 0;

  if (status === "loading") {
    return (
      <div
        className="bg-[#f0f0f0] rounded-[24px] border border-[#e9e9e9] animate-pulse"
        style={{ width, height }}
      />
    );
  }

  if (status === "error" || !src) {
    return (
      <div
        className="bg-[#f6f6f6] rounded-[24px] border border-[#e9e9e9] flex items-center justify-center"
        style={{ width, height }}
      >
        <p className="text-[#5c5c5c] text-sm" style={{ fontFamily: "Satoshi" }}>
          No se pudo cargar el video
        </p>
      </div>
    );
  }

  return (
    <div className="relative" style={{ width: isFullscreen ? "100%" : width }}>
    <div
      ref={containerRef}
      className="reel-container relative overflow-hidden rounded-[34px] cursor-pointer select-none"
      style={{
        width: isFullscreen ? "100%" : width,
        height: isFullscreen ? "100%" : height,
        border: isFullscreen ? "none" : "7px solid #afb0af2a",
        boxShadow: isFullscreen ? "none" : "0 8px 24px rgba(29, 179, 29, 0.12), 0 4px 12px rgba(0,0,0,0.06)",
      }}
      onClick={togglePlay}
      onMouseMove={resetHideTimer}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster ?? undefined}
        playsInline
        loop
        muted={muted}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        className="w-full h-full"
        style={{ objectFit: isFullscreen ? "contain" : "cover" }}
      />

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none transition-opacity duration-200"
        style={{ opacity: showControls ? 1 : 0 }}
      />

      {/* Play/Pause overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        {!playing && (
          <div className="flex items-center justify-center size-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            <Play className="size-7 text-white fill-white ml-1" />
          </div>
        )}
      </div>

      {/* Bottom controls bar */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-opacity duration-200"
        style={{ opacity: hasPlayed && showControls ? 1 : 0, pointerEvents: hasPlayed ? "auto" : "none" }}
      >
        <div className="h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex flex-col gap-2">
          {/* Progress bar */}
          <div
            className="w-full h-1 bg-white/30 rounded-full cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#81fc71] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow-md" />
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="text-white hover:text-[#81fc71] transition-colors"
              >
                {playing
                  ? <Pause className="size-4 fill-white" />
                  : <Play className="size-4 fill-white ml-0.5" />
                }
              </button>

              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#81fc71] transition-colors"
                >
                  {muted || volume === 0
                    ? <VolumeX className="size-4" />
                    : <Volume2 className="size-4" />
                  }
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  className="reel-volume w-16 cursor-pointer appearance-none bg-white/30 rounded-full"
                  style={{ accentColor: "#81fc71", height: 3 }}
                />
              </div>

              <span className="text-white/80 text-xs" style={{ fontFamily: "Satoshi" }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-[#81fc71] transition-colors"
            >
              {isFullscreen
                ? <Minimize2 className="size-4" />
                : <Maximize2 className="size-4" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Title + Instagram button — outside the clickable video div */}
    <div
      className="absolute top-0 left-0 right-0 transition-opacity duration-200 pointer-events-none"
      style={{ opacity: showControls ? 1 : 0 }}
    >
      {title && !isFullscreen && (
        <div className="absolute top-5 left-5 right-16">
          <p
            className="text-white text-sm font-semibold leading-snug drop-shadow-md"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {title}
          </p>
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={resetHideTimer}
        className="absolute top-4 right-5 flex items-center justify-center size-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/60 transition-colors pointer-events-auto"
      >
        <Instagram className="size-4 text-white" />
      </a>
    </div>
    </div>
  );
}
