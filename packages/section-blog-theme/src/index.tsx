import type { NextraThemeLayoutProps } from "nextra";
import { Header } from "@/components/Header/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Footer } from "@/components/Footer/Footer"
import { BlogLayout } from "@/components/Layouts/BlogLayout"
import { Banner } from "@/components/banner/banner";
import { useBannerCookies } from "@/utility/useCookies";
import { useEffect, useState } from "react";

export default function Layout(props: NextraThemeLayoutProps) {
  const { banner, hideBanner } = useBannerCookies();
  const [showBanner, setBanner] = useState<string>("hide")
  const { children, themeConfig, pageOpts } = props;
  const { Logo, PrimaryNavigation, SecondaryNavigation, SocialLinks, bannerMessage } = themeConfig;

  useEffect(function() {
    setBanner(banner)
  }, [banner])

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>

      {showBanner === "show" && bannerMessage !== undefined ? <Banner hideBanner={hideBanner} message={bannerMessage} /> : ""}

      <Header socialLinks={SocialLinks} Logo={Logo} PrimaryNavigation={PrimaryNavigation} />

      <BlogLayout pageOpts={pageOpts} themeConfig={themeConfig}>{children}</BlogLayout>

      <Footer socialLinks={SocialLinks} Logo={Logo} SecondaryNavigation={SecondaryNavigation} />

    </NextThemesProvider>
  );
}

export type * as types from "./types";
