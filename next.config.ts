import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repo = 'portfolio-2025-nextjs-tailwind' // <-- your repo

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true, // good for GitHub Pages
}

export default nextConfig
