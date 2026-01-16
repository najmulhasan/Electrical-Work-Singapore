import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Namecheap hosting
  output: 'export',
  
  // Image optimization for custom domain
  images: {
    domains: ['electricalworksingapore.com'],
    unoptimized: true, // Required for static export
  },

  // Allow cross-origin requests from local network during development
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: [
      'http://172.21.32.1',
      'http://172.21.32.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:3000',
    ],
  }),
};

export default nextConfig;
