/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  output: 'export',
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
