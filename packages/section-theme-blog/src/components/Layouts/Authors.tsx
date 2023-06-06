import React from "react";
import type { PageOpts, PageMapItem, ThemeConfig } from "nextra";
import { AuthorCard } from "../Cards/AuthorCard";

import {
  SimpleGrid,
  Container,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import { useRouter } from "next/router";
import { MdxFileAuthorCard } from "../../types";
import { NextSeo } from "next-seo";
import { getMetaImage } from "@/utlis/meta-images";

export function Authors({
  children,
  pageOpts,
  themeConfig,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}) {
  const router = useRouter();

  const { siteURL } = themeConfig;

  const getURL =
    process.env.NODE_ENV !== "development"
      ? `${siteURL}${pageOpts?.route}`
      : `http://localhost:3000${pageOpts?.route}`;

  return (
    <>
      <NextSeo
        title={pageOpts?.frontMatter.title}
        description={pageOpts?.frontMatter.except}
        canonical={getURL}
        openGraph={{
          url: pageOpts?.route,
          title: pageOpts?.frontMatter.name,
          description: pageOpts?.frontMatter.except,
          images: getMetaImage(pageOpts?.frontMatter.image),
        }}
      />

      <Box my={"md"} maw={724} mx="auto">
        <TypographyStylesProvider> {children}</TypographyStylesProvider>
      </Box>

      <Container py="xl">
        <SimpleGrid cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {pageOpts?.pageMap.map((item: PageMapItem) => {
            if (
              item !== undefined &&
              item.kind === "Folder" &&
              item?.name === "authors"
            ) {
              if (item.route === router.route) {
                return item.children.map((subItem) => {
                  let subItemCard: MdxFileAuthorCard =
                    subItem as MdxFileAuthorCard;
                  if (
                    subItemCard.name !== "index" &&
                    subItem?.kind === "MdxPage" &&
                    subItem !== null &&
                    subItem !== undefined
                  ) {
                    return (
                      <AuthorCard
                        key={subItem?.frontMatter?.name}
                        subItem={subItemCard}
                      />
                    );
                  }
                });
              }
            }
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
