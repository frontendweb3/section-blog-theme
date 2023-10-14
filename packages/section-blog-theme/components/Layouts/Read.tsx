import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import dayjs from "dayjs";
import { Button } from "../ui/button";
import { PrinterIcon, Share2Icon } from "lucide-react";
import { RWebShare } from "react-web-share";
import { Next_URL } from "@/utility/NextURL";
import Link from "next/link";
import { Seo } from "../Seo/Seo";
import { slugify } from "@/utility/slugify";

export function Read(
  {
    pageOpts,
    themeConfig,
    children,
  }: {
    pageOpts: PageOpts;
    themeConfig: ThemeConfig;
    children: React.ReactNode;
  }
) {
  const { frontMatter } = pageOpts;

  let { SiteURL, HomePageAsAuthor, DateFormat } = themeConfig;

  let postTime = dayjs(frontMatter.date).format(DateFormat);

  return (
    <>

      <Seo frontMatter={frontMatter} />


      <div className="px-3 sm:px-0 mx-auto my-6 print:block prose prose-pre:bg-primary-foreground prose-zinc sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">

        <section className="not-prose flex flex-row justify-between items-center">

          <div className="flex flex-row items-center text-sm text-gray-500 dark:text-gray-400">

            <span> By {typeof frontMatter.author === 'string' ? <Link
              href={HomePageAsAuthor === true ? "/" : Next_URL(SiteURL)}
              rel="author"
              className="mr-2 hover:text-gray-600"
            >
              {frontMatter?.author}
            </Link> : typeof frontMatter.author === 'object' ? <Link
              href={HomePageAsAuthor === true ? "/" : Next_URL(SiteURL)}
              rel="author"
              className="mr-2 hover:text-gray-600 "
            >
              {frontMatter?.author.name}
            </Link> : ""} </span>
            • <time
              className="mx-2"
              dateTime={frontMatter.date}
              title={postTime}
            >
              {postTime}
            </time> • <Link href={`${Next_URL(SiteURL)}/tags/${slugify(frontMatter.tags[0])}`} className="ml-2 hover:text-gray-600"> {frontMatter.tags[0]} </Link>
          </div>

          <div className="hidden sm:flex flex-row print:block">
            <RWebShare
              data={{
                text: frontMatter.description,
                url: `${Next_URL(SiteURL)}${pageOpts.route}`,
                title: frontMatter.title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button aria-label="Share a Post" variant="ghost" size="icon">
                <Share2Icon className="h-4 w-4" />
              </Button>
            </RWebShare>
            <Button aria-label="Print" onClick={() => print()} variant="ghost" size="icon">
              <PrinterIcon className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <h1 className="mb-2">{frontMatter.title}</h1>
        <p className="mb-4 mt-0">{frontMatter.description}</p>

      </div>

      <Article>{children}</Article>
    </>
  );
}
