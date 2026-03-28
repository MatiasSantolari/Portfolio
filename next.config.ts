import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const internalBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: internalBasePath,
  assetPrefix: internalBasePath, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;