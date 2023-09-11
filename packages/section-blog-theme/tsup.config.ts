import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  entry: ["src/index.tsx","styles/globals.css"],
  dts:{
    entry: ["src/index.tsx"]
  },
  format: ["esm","cjs"],
  name: "section-blog-theme",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  target: tsconfig.compilerOptions.target as "es2016",
  external: ["nextra"],
});
