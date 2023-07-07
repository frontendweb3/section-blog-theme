import React from "react";
import {
  Box,
  TypographyStylesProvider,
  Title,
  Image as MImage,
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

          <MImage maw={1024} mah={724} mx="auto" radius="md" 
            alt={
                pageOpts?.frontMatter.imageAlt
                  ? pageOpts.frontMatter.imageAlt
                  : pageOpts?.frontMatter.title
              }
            src={getImage(imageType) as string}
              caption={
                pageOpts?.frontMatter.imageCaption
                  ? pageOpts.frontMatter.imageCaption
                  : pageOpts?.frontMatter.imageAlt
              }
            />


      <Box maw={964} mt={"xl"} mx="auto">

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

<Text>{  pageOpts?.readingTime?.text} </Text>

            {pageOpts?.frontMatter.tags[0] ? (
              <Link
                href={`/tags/${slugify(pageOpts?.frontMatter.tags[0], {
                  lower: true,
                  trim: true,
                })}`}
              >
                <Text transform={"capitalize"}>
                {pageOpts?.frontMatter.tags[0]}{" "}
                </Text>
              </Link>
            ) : (
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
