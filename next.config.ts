import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: false,
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:3000",
  },
};

export default nextConfig;
