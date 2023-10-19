import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "styles/globals.css", "src/tag.tsx"],
  dts: {
    entry: ["src/index.tsx", "src/tag.tsx"]
  },
  format: 'esm',
  name: "section-blog-theme",
  external: ["nextra"],
});
