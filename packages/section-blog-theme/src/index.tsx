import type { PageOpts } from "nextra";
import { Header } from "@/components/Header/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Footer } from "@/components/Footer/Footer"
import { BlogLayout } from "@/components/Layouts/BlogLayout"
import { Banner } from "@/components/banner/banner";
import { useBannerCookies } from "@/utility/useCookies";
import { ReactNode, useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { TypeSectionBlogTheme } from "./types";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default function Layout({ pageOpts, themeConfig, children }: {
  pageOpts: PageOpts; themeConfig: TypeSectionBlogTheme;
  children: ReactNode;
}) {
  const { banner, hideBanner } = useBannerCookies();
  const [showBanner, setBanner] = useState<string>("hide")

  const { Logo, PrimaryNavigation, SecondaryNavigation, SocialLinks, bannerMessage, settings } = themeConfig;


  useEffect(function() {
    setBanner(banner)
  }, [banner])

  return (

    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>

        {settings && settings?.defaultSEO && <DefaultSeo {...settings.defaultSEO} />}

        {showBanner === "show" && bannerMessage !== undefined ? <Banner hideBanner={hideBanner} message={bannerMessage} /> : ""}

        <Header socialLinks={SocialLinks} Logo={Logo} PrimaryNavigation={PrimaryNavigation} />

        <BlogLayout pageOpts={pageOpts} themeConfig={themeConfig}>{children}</BlogLayout>

        <Footer socialLinks={SocialLinks} Logo={Logo} SecondaryNavigation={SecondaryNavigation} />

      </NextThemesProvider>
    </ErrorBoundary>
  );
}

export type * as types from "./types";
