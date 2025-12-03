import type { NextConfig } from "next";

// Use 'export' for GitHub Pages, 'standalone' for Digital Ocean
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : 'standalone',
  basePath: isGitHubPages ? '/NeoStar' : '',
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: !isGitHubPages ? [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ] : [],
  },
};

export default nextConfig;
