import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
    turbopack: {
      resolveAlias: {
        canvas: './empty-module.ts', // Add this to resolve the canvas import
      },
    },

};

export default nextConfig;
