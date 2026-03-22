import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Enables static HTML export
  trailingSlash: true, // Forces `/tour/index.html` instead of `/tour.html`
  images: {
    unoptimized: true, // Just in case you add images later, this avoids build errors without a server
  },
};

export default nextConfig;
