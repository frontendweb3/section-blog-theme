import React from "react";
import {
  Box,
  TypographyStylesProvider,
  Title,
  Image,
  AspectRatio,
  Group,
  Text,
} from "@mantine/core";
import type { PageOpts, ThemeConfig } from "nextra";
import { Toc } from "../Toc/Toc";
import Link from "next/link";
import dayjs from "dayjs";
import slugify from "slugify";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { getImage } from "@/utlis/getImage";
import { GetImage } from "../../types";
import { getMetaImage } from "@/utlis/meta-images";

export function Post({
  children,
  pageOpts,
  themeConfig,
}: {
  children: React.ReactNode;
  pageOpts?: PageOpts;
  themeConfig?: ThemeConfig;
}) {
  const { siteURL, dateFormat } = themeConfig;
  const getURL =
    process.env.NODE_ENV !== "development"
      ? `${siteURL}${pageOpts?.route}`
      : `http://localhost:3000${pageOpts?.route}`;
  let imageType: GetImage = pageOpts?.frontMatter.image as GetImage;
  return (
    <>
      {pageOpts?.frontMatter ? (
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
          <ArticleJsonLd
            type="BlogPosting"
            url={pageOpts.route}
            title={pageOpts?.frontMatter.title}
            description={pageOpts?.frontMatter.except}
            canonical={`${siteURL}${pageOpts?.route}`}
            images={pageOpts.frontMatter.image}
            datePublished={pageOpts?.frontMatter.date}
            keywords={pageOpts?.frontMatter.tags}
            dateModified={
              pageOpts.frontMatter.dateModified
                ? pageOpts?.frontMatter.publish
                : pageOpts?.frontMatter.date
            }
            authorName={pageOpts?.frontMatter.author}
          />
        </>
      ) : (
        ""
      )}
      <Box maw={724} mx="auto">
        <Box py={"lg"}>
          <AspectRatio my={"lg"} ratio={1920 / 1080}>
            <Image
              src={getImage(imageType) as string}
              alt={pageOpts?.frontMatter.title}
              mb={"xl"}
              caption={pageOpts?.frontMatter.imageAlt}
            />
          </AspectRatio>

          <Title order={1}>{pageOpts?.frontMatter.title}</Title>

          <Group>
            <Text> Published By </Text>

            <Link
              href={`/authors/${slugify(pageOpts?.frontMatter.author, {
                lower: true,
                trim: true,
              })}`}
            >
              {pageOpts?.frontMatter.author}
            </Link>

            <time
              dateTime={dayjs(pageOpts?.frontMatter.date).format(dateFormat)}
            >
              {dayjs(pageOpts?.frontMatter.date).format(
                dateFormat ? dateFormat : "MMM DD, YYYY"
              )}
            </time>

            {pageOpts?.frontMatter.tags[0] ? (
              <Link
                href={`/tags/${slugify(pageOpts?.frontMatter.tags[0], {
                  lower: true,
                  trim: true,
                })}`}
              >
                {pageOpts?.frontMatter.tags[0]}{" "}
              </Link>
            ) : (
              ""
            )}
          </Group>
        </Box>

        <Toc />

        <TypographyStylesProvider> {children}</TypographyStylesProvider>
      </Box>
    </>
  );
}
