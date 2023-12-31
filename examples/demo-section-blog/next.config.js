/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.tsx",
  readingTime: true
});

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "picsum.photos",
      },
      {
        hostname:"cdn.pixabay.com"
      }
    ],
  },
});
