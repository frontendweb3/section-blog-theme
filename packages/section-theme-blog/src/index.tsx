import {
  Alert,
  Blockquote,
  ColorScheme,
  ColorSchemeProvider,
  Divider,
  Highlight,
  MantineProvider,
  Mark,
  Space,
  Tabs,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import type { NextraThemeLayoutProps } from "nextra";
import { MDXProvider } from "nextra/mdx";
import { ThemeContext } from "./Provider/config";
import { Footer } from "./components/Footer/Footer";
import { HeaderMenu } from "./components/Header/Header";
import { MainLayout } from "./components/Layouts/Main";
import Iframe from "react-iframe";

export default function Layout(props: NextraThemeLayoutProps) {
  const { children, pageOpts, themeConfig } = props;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  let components = {
    Alert: Alert,
    Mark: Mark,
    Highlight: Highlight,
    Blockquote: Blockquote,
    Tabs: Tabs,
    Divider: Divider,
    Space: Space,
    Iframe: Iframe,
  };

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ pageOpts: pageOpts, themeConfig: themeConfig }}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MDXProvider components={components}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme }}
          >
            <HeaderMenu />

            <MainLayout>{children}</MainLayout>

            <Footer />
          </MantineProvider>
        </MDXProvider>
      </ColorSchemeProvider>
    </ThemeContext.Provider>
  );
}

export * from "./types";
