/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'example.com', 'another-example.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
