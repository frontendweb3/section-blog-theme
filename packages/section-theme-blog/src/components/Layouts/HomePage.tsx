import React from "react";
import { TypographyStylesProvider, Box } from "@mantine/core";
import { NextSeo } from "next-seo";
import type { PageOpts, ThemeConfig } from "nextra";
import { getMetaImage } from "@/utlis/meta-images";

export const HomePage = ({
  children,
  pageOpts,
  themeConfig,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}) => {
  const { siteURL } = themeConfig;

  return (
    <>
      <NextSeo
        title={pageOpts?.frontMatter.title}
        description={pageOpts?.frontMatter.except}
        canonical={siteURL}
        openGraph={{
          url: pageOpts?.route,
          title: pageOpts?.frontMatter.name,
          description: pageOpts?.frontMatter.except,
          images: getMetaImage(pageOpts?.frontMatter.image),
        }}
      />
      <Box maw={724} mx="auto">
        <TypographyStylesProvider> {children}</TypographyStylesProvider>
      </Box>
    </>
  );
};
