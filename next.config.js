/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["data.lukaszponiatowski.pl"],
  },
};

module.exports = nextConfig;
