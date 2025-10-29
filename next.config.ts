import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable custom domain support
  trailingSlash: false,
  
  // Static export for Namecheap hosting
  output: 'export',
  
  // Image optimization for custom domain
  images: {
    domains: ['electricalworksingapore.com'],
    unoptimized: true, // Required for static export
  },
  
  // Note: Headers don't work with static export, will be handled by hosting provider
};

export default nextConfig;
