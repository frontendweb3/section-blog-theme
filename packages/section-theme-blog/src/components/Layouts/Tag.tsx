import React from "react";
import { ArticleCard } from "../Cards/ArticleCard";
import {
  SimpleGrid,
  Container,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import type { PageOpts, PageMapItem, ThemeConfig } from "nextra";
import { useRouter } from "next/router";
import type { MdxFileCard } from "../../types";
import slugify from "slugify";
import { NextSeo } from "next-seo";
import { getMetaImage } from "@/utlis/meta-images";
export function Tag({
  children,
  pageOpts,
  themeConfig,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}) {
  const { siteURL } = themeConfig;
  const { query } = useRouter();

  const getURL =
    process.env.NODE_ENV !== "development"
      ? `${siteURL}/tags/${pageOpts?.route}`
      : `http://localhost:3000/tags/${pageOpts?.route}`;
  return (
    <>
      <NextSeo
        title={query?.slug ? query.slug : pageOpts?.frontMatter.title}
        description={pageOpts?.frontMatter.description}
        canonical={getURL}
        openGraph={{
          url: pageOpts?.route,
          title: query?.slug ? query.slug : pageOpts?.frontMatter.title,
          description: query?.slug ? query.slug : pageOpts?.frontMatter.description,
          images: getMetaImage(pageOpts?.frontMatter.image),
        }}
      />

      <Box my={"md"} maw={724} mx="auto">
        <TypographyStylesProvider> {children}</TypographyStylesProvider>
      </Box>

      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {pageOpts?.pageMap.map((item: PageMapItem) => {
            if (
              item !== undefined &&
              item?.kind !== "Meta" &&
              item?.kind === "Folder"
            ) {
              return (
                item?.children &&
                item?.children.map((subItem) => {
                  let subItemCard: MdxFileCard = subItem as MdxFileCard;
                  let getDraft = subItemCard.frontMatter?.draft
                    ? subItemCard.frontMatter.draft
                    : false;

                  if (
                    subItem !== undefined &&
                    subItem?.kind === "MdxPage" &&
                    getDraft === false &&
                    subItem?.frontMatter !== undefined
                  ) {
                    if (
                      typeof subItem.frontMatter?.tags !== "string" &&
                      subItem.frontMatter?.tags !== undefined
                    ) {
                      return subItem.frontMatter?.tags.map(
                        (itemSlug: string) => {
                          if (
                            slugify(itemSlug, { lower: true, trim: true }) ===
                            query.slug
                          ) {
                            let subItemCard: MdxFileCard =
                              subItem as MdxFileCard;
                            return (
                              <ArticleCard
                                key={query.slug}
                                subItem={subItemCard}
                              />
                            );
                          }
                        }
                      );
                    }
                  }
                })
              );
            }
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
