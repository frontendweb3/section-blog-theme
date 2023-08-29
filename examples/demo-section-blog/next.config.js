/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.tsx",
  readingTime: true,
  codeHighlight: true,
  readingTime: true
});

module.exports = withNextra({
  reactStrictMode: true,
});
 
