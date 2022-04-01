const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  }),
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://mateuszperczak.github.io/"
      : "",
};

module.exports = nextConfig;
