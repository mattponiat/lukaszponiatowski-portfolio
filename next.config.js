/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["s3.eu-west-3.amazonaws.com"],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
