import React from "react";
import {
  Box,
  Title,
  TypographyStylesProvider,
  Text,
  Group,
  ActionIcon,
  Container,
  SimpleGrid,
} from "@mantine/core";
import type { PageMapItem, PageOpts, ThemeConfig } from "nextra";
import dayjs from "dayjs";
import Link from "next/link";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";
import { ArticleCard } from "@/components/Cards/ArticleCard";
import { MdxFileCard } from "../../../types";
import { NextSeo } from "next-seo";
import { getMetaImage } from "@/utlis/meta-images";
export function Author({
  children,
  pageOpts,
  themeConfig,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}) {
  const { siteURL } = themeConfig;
  return (
    <>
      <NextSeo
        title={pageOpts?.frontMatter.name}
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
          <Title order={1}>{pageOpts?.frontMatter.name}</Title>
          <Text>
            {dayjs(pageOpts?.frontMatter.date).format("MMM DD, YYYY")}
          </Text>
        </Box>

        <TypographyStylesProvider> {children}</TypographyStylesProvider>

        <Group>
          {pageOpts?.frontMatter?.social &&
            pageOpts?.frontMatter?.social.map(
              (item: { name: string; url: string }) => {
                return (
                  <Link key={item.name} target="_blank" href={item.url}>
                    <ActionIcon size="lg">
                      {item.name === "github" ? (
                        <IconBrandGithub size={"1.1rem"} stroke={"1.5"} />
                      ) : (
                        <IconBrandTwitter size={"1.1rem"} stroke={"1.5"} />
                      )}
                    </ActionIcon>
                  </Link>
                );
              }
            )}
        </Group>
      </Box>

      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {pageOpts?.pageMap.map((item: PageMapItem) => {
            if (
              item !== undefined &&
              item?.kind === "Folder" &&
              item?.name === "posts"
            ) {
              return item?.children.map((subItem) => {
                if (
                  subItem !== undefined &&
                  subItem?.kind === "MdxPage" &&
                  subItem?.frontMatter !== undefined &&
                  subItem?.frontMatter.author === pageOpts.frontMatter.name
                ) {
                  let subItemCard: MdxFileCard = subItem as MdxFileCard;
                  return (
                    <ArticleCard
                      key={pageOpts.frontMatter.name}
                      subItem={subItemCard}
                    />
                  );
                }
              });
            }
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
