import React from "react";
import { TypographyStylesProvider, Box, Title, Text } from "@mantine/core";
import type { PageOpts, ThemeConfig } from "nextra";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import { getMetaImage } from "@/utlis/meta-images";

export const Page = ({
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
        canonical={`${siteURL}${pageOpts?.route}`}
        openGraph={{
          url: pageOpts?.route,
          title: pageOpts?.frontMatter.name,
          description: pageOpts?.frontMatter.except,
          images: getMetaImage(pageOpts?.frontMatter.image),
        }}
      />

      <Box maw={724} mx="auto">
        <Box py={"lg"} mt={"lg"}>
          <Title order={1}>{pageOpts?.frontMatter.title}</Title>
          {pageOpts?.frontMatter.date ? (
            <Text>
              {dayjs(pageOpts?.frontMatter.date).format("MMM DD, YYYY")}
            </Text>
          ) : (
            ""
          )}
        </Box>
        <TypographyStylesProvider> {children}</TypographyStylesProvider>
      </Box>
    </>
  );
};
