import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export', // static HTML export
  images: { unoptimized: true }, // so Next/Image works without the image optimizer
  // If deploying to a subpath (like github.com/user/repo), set:
  // basePath: '/your-repo-name',
};

export default nextConfig;
