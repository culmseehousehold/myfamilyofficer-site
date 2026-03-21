import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Enables static HTML export
  images: {
    unoptimized: true, // Just in case you add images later, this avoids build errors without a server
  },
};

export default nextConfig;
