import { defineConfig } from "tsup";

export default defineConfig({
<<<<<<< Updated upstream
  entry: ["src/index.tsx", "styles/globals.css", "src/tag.tsx"],
=======
  entry: ["src/index.tsx", "styles/globals.css", "src/tag.tsx","src/components.tsx", "src/icons.tsx"],
>>>>>>> Stashed changes
  dts: {
    entry: ["src/index.tsx", "src/tag.tsx","src/components.tsx", "src/icons.tsx"]
  },
  format: 'esm',
  name: "section-blog-theme",
  external: ["nextra"],
});
