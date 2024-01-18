import type { PageOpts } from "nextra";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { BlogLayout } from "@/components/Layouts/BlogLayout";
import { Banner } from "@/components/Banner/Banner";
import { ReactNode, useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { TypeSectionBlogTheme } from "./types";
import { useLocalStorage } from "usehooks-ts";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

export default function Layout({
  pageOpts,
  themeConfig,
  children,
}: {
  pageOpts: PageOpts;
  themeConfig: TypeSectionBlogTheme;
  children: ReactNode;
}) {
  // Handle banner
  const [banner, setBanner] = useLocalStorage("banner", true);

  const [showBanner, setShowbanner] = useState<boolean | undefined>();

  // toggle Banner
  const toggleBanner = () => {
    setBanner((prevValue: boolean) => !prevValue);
  };

  useEffect(
    function () {
      setShowbanner(banner);
    },
    [banner],
  );

  // get theme Configuration from theme.config.ts
  const {
    Logo,
    PrimaryNavigation,
    SecondaryNavigation,
    SocialLinks,
    bannerMessage,
    settings,
  } = themeConfig;

  return (
    <ThemeProvider
      enableColorScheme={true}
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {settings && settings?.defaultSEO && (
        <DefaultSeo {...settings.defaultSEO} />
      )}

      {showBanner && bannerMessage !== undefined ? (
        <Banner hideBanner={toggleBanner} message={bannerMessage} />
      ) : (
        ""
      )}

      <Header
        socialLinks={SocialLinks}
        Logo={Logo}
        PrimaryNavigation={PrimaryNavigation}
      />

      <BlogLayout pageOpts={pageOpts} themeConfig={themeConfig}>
        {children}
      </BlogLayout>

      <Footer
        socialLinks={SocialLinks}
        Logo={Logo}
        SecondaryNavigation={SecondaryNavigation}
      />
    </ThemeProvider>
  );
}

export type * as types from "./types";
