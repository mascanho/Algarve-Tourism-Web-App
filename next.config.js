/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: "z8r91y113x4j",
    CONTENTFUL_ACCESS_TOKEN: "mEmHEpC38vjPWaquWC2k2Qc3NzhEmti3_knDIKjf6Uc",
  },

  experimental: {
    appDir: true,
  },
  images: {
    domains: ["th.bing.com"],
  },
};

module.exports = nextConfig;
