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

  const getURL =
    process.env.NODE_ENV !== "development"
      ? `${siteURL}${pageOpts?.route}`
      : `http://localhost:3000${pageOpts?.route}`;
  return (
    <>
      <NextSeo
        title={pageOpts?.frontMatter.title}
        description={pageOpts?.frontMatter.description}
        canonical={getURL}
        openGraph={{
          url: pageOpts?.route,
          title: pageOpts?.frontMatter.name,
          description: pageOpts?.frontMatter.description,
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
