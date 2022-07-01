/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "us.123rf.com",
      "www.telegraph.co.uk",
      "ommcom.s3.ap-south-1.amazonaws.com",
    ],
  },

  locales: ["en", "hi", "es"],
  defaultLocale: "en",
};

module.exports = nextConfig;

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
