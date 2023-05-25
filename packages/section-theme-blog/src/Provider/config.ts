import { PageOpts, ThemeConfig } from "nextra";
import { createContext } from "react";

interface themeConfig {
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}
export const ThemeContext = createContext<themeConfig>({});
