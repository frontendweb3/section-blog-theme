import React from "react";
import { ArticleCard } from "../Cards/ArticleCard";
import {
  SimpleGrid,
  Container,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import { useRouter } from "next/router";
import type { PageOpts, PageMapItem, ThemeConfig } from "nextra";
import { MdxFileCard } from "../../types";
import { NextSeo } from "next-seo";
import { getMetaImage } from "@/utlis/meta-images";

export function Posts({
  children,
  pageOpts,
  themeConfig,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}) {
  const { siteURL } = themeConfig;
  const router = useRouter();
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
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {pageOpts?.pageMap.map((item: PageMapItem) => {
            if (item !== undefined && item?.kind === "Folder") {
              if (item.route === router.route) {
                return item.children.map((subItem) => {
                  let subItemCard: MdxFileCard = subItem as MdxFileCard;

                  let getDraft = subItemCard.frontMatter?.draft
                    ? subItemCard.frontMatter.draft
                    : false;

                  if (
                    subItemCard.name !== "index" &&
                    subItem !== undefined &&
                    subItem?.kind === "MdxPage" &&
                    getDraft === false &&
                    subItem?.frontMatter !== undefined &&
                    subItem !== null
                  ) {
                    return (
                      <ArticleCard
                        key={subItemCard.frontMatter.title}
                        subItem={subItemCard}
                      />
                    );
                  }
                });
              }
            }
          })}
        </SimpleGrid>
      </Container>{" "}
    </>
  );
}
