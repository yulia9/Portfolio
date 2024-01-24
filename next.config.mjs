/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  distDir: 'out',
  output: 'export',
  images: { unoptimized: true }
};

export default nextConfig;
