import type { NextraThemeLayoutProps } from "nextra";
import { Header } from "@/components/Header/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Footer } from "@/components/Footer/Footer"
import { BlogLayout } from "@/components/Layouts/BlogLayout"

export default function Layout(props: NextraThemeLayoutProps) {

  const { children, themeConfig,pageOpts } = props;

  const { Logo, PrimaryNavigation, SecondaryNavigation, SocialLinks } = themeConfig
 
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Header socialLinks={SocialLinks} Logo={Logo} PrimaryNavigation={PrimaryNavigation} />
      <BlogLayout pageOpts={pageOpts} themeConfig={themeConfig}>{children}</BlogLayout>
      <Footer socialLinks={SocialLinks} Logo={Logo} SecondaryNavigation={SecondaryNavigation} />
    </NextThemesProvider>
  );
}

export type * as types from "./types";
