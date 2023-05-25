import React from "react";
import { ArticleCard } from "../Cards/ArticleCard";
import {
  SimpleGrid,
  Container,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import { useRouter } from "next/router";
import type { PageOpts, PageMapItem } from "nextra";
import { MdxFileCard } from "../../../types";

export function Posts({
  children,
  pageOpts,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
}) {
  const router = useRouter();
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
              item?.kind === "Folder" &&
              item?.name === "posts"
            ) {
              if (item.route === router.route) {
                return item.children.map((subItem) => {
                  let subItemCard: MdxFileCard = subItem as MdxFileCard;
                  if (
                    subItemCard.name !== "index" &&
                    subItem !== undefined &&
                    subItem?.kind === "MdxPage" &&
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
