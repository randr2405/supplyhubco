/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/randr2405/ImagesforPOS/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/randr2405/ImagesforPOS/**',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig