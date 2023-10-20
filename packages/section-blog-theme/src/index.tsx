import type { PageOpts } from "nextra";
import { Header } from "@/components/Header/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Footer } from "@/components/Footer/Footer"
import { BlogLayout } from "@/components/Layouts/BlogLayout"
import { Banner } from "@/components/banner/banner";
import { ReactNode, useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { TypeSectionBlogTheme } from "./types";
import { ErrorBoundary } from "react-error-boundary";
import { useLocalStorage } from 'usehooks-ts'

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

  // Hanndle banner 
  const [banner, setBanner] = useLocalStorage('banner', true)
  const [showBanner, setShwobanner] = useState<boolean | undefined>()
  const toggleBanner = () => {
    setBanner((prevValue: boolean) => !prevValue)
  }
  useEffect(function() {
    setShwobanner(banner)
  }, [banner])

  // get theme Configuration from theme.config.ts
  const { Logo, PrimaryNavigation, SecondaryNavigation, SocialLinks, bannerMessage, settings } = themeConfig;

  return (

    <ErrorBoundary fallbackRender={fallbackRender} >

      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {settings && settings?.defaultSEO && <DefaultSeo {...settings.defaultSEO} />}

        {showBanner && bannerMessage !== undefined ? <Banner hideBanner={toggleBanner} message={bannerMessage} /> : ""}

        <Header socialLinks={SocialLinks} Logo={Logo} PrimaryNavigation={PrimaryNavigation} />

        <BlogLayout pageOpts={pageOpts} themeConfig={themeConfig}>{children}</BlogLayout>

        <Footer socialLinks={SocialLinks} Logo={Logo} SecondaryNavigation={SecondaryNavigation} />

      </NextThemesProvider>

    </ErrorBoundary>
  );
}

export type * as types from "./types";
