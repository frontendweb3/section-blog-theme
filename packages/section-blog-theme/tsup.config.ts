import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  entry: ["src/index.tsx"],
  dts: true,
  format: ["esm"],
  name: "section-blog-theme",
  outExtension: () => ({ js: ".js" }),
  target: tsconfig.compilerOptions.target as "es2016",
  external: ["nextra"],
});
