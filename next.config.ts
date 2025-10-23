import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ← Esto es lo clave
  basePath: '/fidel',
  images: {
    domains: ["via.placeholder.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com", "plus.unsplash.com"],
    unoptimized: true, // ← Necesario con export
  },
};

export default nextConfig;