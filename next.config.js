// This is a generic config file for nextJS

const withMDX = require("@next/mdx")();
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
