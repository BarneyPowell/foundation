const withPlugins = require('next-compose-plugins');
const { withNextBundleAnalyzer } = require('@foundation/build-utils/nextBundleAnalyzer');

const withBundleAnalyzer = withNextBundleAnalyzer({
  enabled: true,
  generateStatsFile: true,
  analyzerMode: 'json',
});

const nextBuildId = require('next-build-id');

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = withPlugins([
  // [withBundleAnalyzer],
  // your other plugins here
], nextConfig);
