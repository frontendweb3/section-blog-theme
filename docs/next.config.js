/**
 * @type {import('next').NextConfig}
 */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true,
});

module.exports = withNextra({});
