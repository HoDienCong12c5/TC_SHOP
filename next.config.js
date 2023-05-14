
/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withAntdLess = require('next-plugin-antd-less')
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
    swcTraceProfiling: true,
    // forceSwcTransforms:true,
    optimizeCss: true
    // appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/Home'
  //     }
  //   ]
  // },
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
// module.exports = withPlugins([
//   [optimizedImages, {
//     handleImages: ['jpeg', 'png', 'gif', 'svg', 'ico']
//   }],
//   withAntdLess({modifyVars:{}}),
//   withFonts
// ], nextConfig)
module.exports = nextConfig
