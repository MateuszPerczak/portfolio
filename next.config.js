/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://mateuszperczak.github.io/"
      : "",
};

module.exports = nextConfig;
