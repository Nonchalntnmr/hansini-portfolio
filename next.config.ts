import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Required for Three.js / React Three Fiber
  transpilePackages: ["three"],
};

export default nextConfig;
