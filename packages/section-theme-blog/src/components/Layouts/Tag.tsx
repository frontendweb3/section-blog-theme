import React from "react";
import { ArticleCard } from "../Cards/ArticleCard";
import {
  SimpleGrid,
  Container,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import type { PageOpts, PageMapItem } from "nextra";
import { useRouter } from "next/router";
import type { MdxFileCard } from "../../../types";
import slugify from "slugify";

export function Tag({
  children,
  pageOpts,
}: {
  children: React.ReactNode;
  pageOpts: PageOpts;
}) {
  const { query } = useRouter();

  return (
    <>
      <Box my={"md"} maw={724} mx="auto">
        <TypographyStylesProvider> {children}</TypographyStylesProvider>
      </Box>

      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {pageOpts?.pageMap.map((item: PageMapItem) => {
            if (
              item !== undefined &&
              item?.kind !== "Meta" &&
              item?.kind === "Folder" &&
              item?.name === "posts"
            ) {
              if (item?.name === "posts" && item.kind === "Folder") {
                return (
                  item?.children &&
                  item?.children.map((subItem) => {
                    if (
                      subItem !== undefined &&
                      subItem?.kind === "MdxPage" &&
                      subItem?.frontMatter !== undefined
                    ) {
                      if (subItem.frontMatter.tags !== undefined) {
                        return subItem.frontMatter.tags.map(
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
            }
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
