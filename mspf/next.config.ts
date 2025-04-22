import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts', // Add this to resolve the canvas import
      },
    },
  },
};

export default nextConfig;
