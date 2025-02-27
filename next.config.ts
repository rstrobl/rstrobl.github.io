import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  distDir: 'docs',
  reactStrictMode: true,
};

export default nextConfig;
