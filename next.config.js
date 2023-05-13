/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["th.bing.com"],
  },
};

module.exports = nextConfig;
