/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['homingos-magik.s3.ap-south-1.amazonaws.com'],
  },
});
