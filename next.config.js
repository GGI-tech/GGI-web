/** @type {import('next').NextConfig} */

const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
    ]
  }
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer.push(new TerserPlugin());
    }

    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
