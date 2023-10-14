import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  entry: ["src/index.tsx", "styles/globals.css", "src/tag.tsx"],
  dts: {
    entry: ["src/index.tsx", "src/tag.tsx"]
  },
  format: ["esm", "cjs"],
  name: "section-blog-theme",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  target: tsconfig.compilerOptions.target as "es2016",
  external: ["nextra"],
});
