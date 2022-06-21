/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "us.123rf.com",
      "www.telegraph.co.uk",
      "ommcom.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
