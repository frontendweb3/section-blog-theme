import React from "react";
import {
  Box,
  Group,
Image as MImage,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import type { PageOpts, ThemeConfig } from "nextra";
import { Toc } from "../Toc/Toc";
import dayjs from "dayjs";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { getImage } from "@/utlis/getImage";
import { GetImage } from "../../types";
import { getMetaImage } from "@/utlis/meta-images";
import slugify from "slugify";
import { AuthorURL } from "../Other/AuthorURL";
import Link from "next/link";
export function Post(
  { children, pageOpts, themeConfig }: {
    children: React.ReactNode;
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  },
) {
  const { siteURL, dateFormat, homePageAsAuthor } = themeConfig;

  const getURL = process.env.NODE_ENV !== "development"
    ? `${siteURL}${pageOpts?.route}`
    : `http://localhost:3000${pageOpts?.route}`;

  let imageType: GetImage = pageOpts?.frontMatter.image as GetImage;
  return (
    <>
      {pageOpts?.frontMatter
        ? (
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

            <ArticleJsonLd
              type="BlogPosting"
              url={pageOpts.route}
              title={pageOpts?.frontMatter.title}
              description={pageOpts?.frontMatter.description}
              canonical={`${siteURL}${pageOpts?.route}`}
              images={pageOpts.frontMatter.image}
              datePublished={pageOpts?.frontMatter.date}
              keywords={pageOpts?.frontMatter.tags}
              dateModified={pageOpts.frontMatter.dateModified
                ? pageOpts?.frontMatter.publish
                : pageOpts?.frontMatter.date}
              authorName={pageOpts?.frontMatter.author}
            />
          </>
        )
        : (
          ""
        )}

      <MImage
        maw={1024}
        mah={724}
        mx="auto"
        radius="md"
        alt={pageOpts?.frontMatter.imageAlt
          ? pageOpts.frontMatter.imageAlt
          : pageOpts?.frontMatter.title}
        src={getImage(imageType) as string}
        caption={pageOpts?.frontMatter.imageCaption
          ? pageOpts.frontMatter.imageCaption
          : pageOpts?.frontMatter.imageAlt}
      />

      <Box maw={964} mt={"xl"} mx="auto">
        <Title order={1}>{pageOpts?.frontMatter.title}</Title>

        <Group>
          <Text>Published By</Text>
           
          <time dateTime={dayjs(pageOpts?.frontMatter.date).format(dateFormat)}>
            {dayjs(pageOpts?.frontMatter.date).format(
              dateFormat ? dateFormat : "MMM DD, YYYY",
            )}
          </time>

          <Text>{pageOpts?.readingTime?.text}</Text>
           <AuthorURL siteURL={siteURL} homePageAsAuthor={homePageAsAuthor} author={pageOpts?.frontMatter.author} />
          
          {pageOpts?.frontMatter.tags[0]
            ? (
              <Link
                href={`/tags/${
                  slugify(pageOpts?.frontMatter.tags[0], {
                    lower: true,
                    trim: true,
                  })
                }`}
              >
                <Text transform={"capitalize"}>
                  {pageOpts?.frontMatter.tags[0]}
                  {" "}
                </Text>
              </Link>
            )
            : (
              ""
            )}
        </Group>

        <Toc />
      </Box>

      <Box maw={1024} my={20} mx="auto">
        <TypographyStylesProvider fz={"20"}>
          {" "}
          {children}
        </TypographyStylesProvider>
      </Box>
    </>
  );
}
