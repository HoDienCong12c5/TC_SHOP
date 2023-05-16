
/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }
    return config
  },
  cleanDistDir: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    // swcTraceProfiling: true,
    optimizeCss: true,
    // appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: false,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Home'
      }
    ]
  },
  images: {
    // domains: ['https://skywalker.infura-ipfs.io']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skywalker.infura-ipfs.io',
        pathname:'/ipfs/**'
      },
    ],
  },
}
module.exports = nextConfig
