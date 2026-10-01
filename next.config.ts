// Hello World
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "viraweb.online",
      },
    ],
  },
};

export default nextConfig;
