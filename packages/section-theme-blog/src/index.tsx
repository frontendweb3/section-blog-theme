import type { NextraThemeLayoutProps } from "nextra";
import { HeaderMenu } from "./components/Header/Header";
import { ThemeContext } from "./Provider/config";
import { useLocalStorage } from "@mantine/hooks";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Mark,
  Highlight,
  Blockquote,
  Tabs,
  Divider,
  Alert,
} from "@mantine/core";
import { MainLayout } from "./components/Layouts/Main";
import { MDXProvider } from "nextra/mdx";
import { Footer } from "./components/Footer/Footer";

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
