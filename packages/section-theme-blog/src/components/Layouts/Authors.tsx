import React from "react";
import type { PageOpts, PageMapItem } from "nextra";
import { AuthorCard } from "../Cards/AuthorCard";
import {
  SimpleGrid,
  Container,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import { useRouter } from "next/router.js";
import { MdxFileAuthorCard } from "../../../types";

export function Authors({
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
