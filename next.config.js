/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL:
      "mongodb+srv://mascanho:ZU721qsgl0igWqNn@cluster0.sdeivps.mongodb.net/test",
    CONTENTFUL_SPACE_ID: "z8r91y113x4j",
    CONTENTFUL_ACCESS_TOKEN: "mEmHEpC38vjPWaquWC2k2Qc3NzhEmti3_knDIKjf6Uc",
    NEXTAUTH_SECRET: "nextauth_secret",
    GITHUB_ID: "80bce4f3f70e831a493d",
    GITHUB_SECRET: "f52cdf6a021fb9b9d66f7ea1b38e13234561f576",
    GOGGLE_CLIENT_ID:
      "877838669950-qg8n8bevusdapoh161q50tbds53geeus.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },

  experimental: {
    appDir: true,
  },
  images: {
    domains: ["th.bing.com", "images.ctfassets.net"],
  },
};

module.exports = nextConfig;
