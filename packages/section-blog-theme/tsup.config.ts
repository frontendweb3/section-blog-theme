import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "styles/globals.css", "src/tag.tsx","src/components.tsx", "src/icons.tsx"],
  dts: {
    entry: ["src/index.tsx", "src/tag.tsx","src/components.tsx", "src/icons.tsx"]
  },
  format: 'esm',
  name: "section-blog-theme",
  external: ["nextra"],
});
