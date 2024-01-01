import { Article } from "@/components/Article/Article";
import { useState, useEffect } from "react";
import type { PageOpts } from "nextra";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { PrinterIcon, Share2Icon } from "lucide-react";
import { RWebShare } from "react-web-share";
import { Next_URL } from "@/utility/NextURL";
import Link from "next/link";
import { Seo } from "@/components/Seo/Seo";
import { slugify } from "@/utility/slugify";
import { TypeSectionBlogTheme } from "@/src/types";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Read({
  pageOpts,
  themeConfig,
  children,
}: {
  pageOpts: PageOpts;
  themeConfig: TypeSectionBlogTheme;
  children: ReactNode;
}) {
  const [domain, setDomain] = useState<string>();

  const { frontMatter, readingTime } = pageOpts;

  let { DateFormat, settings } = themeConfig;

  let getDate = dayjs(frontMatter.date).format(
    DateFormat ? DateFormat : "MMM DD, YYYY",
  );

  let getTag = slugify(frontMatter.tags[0]);

  let getSite = settings?.SiteURL;

  let getAuthorURL = frontMatter?.author?.url;

  useEffect(function () {
    let getDomain = window.location.origin as string;
    setDomain(getDomain);
  }, []);

  let getTagURL = Next_URL(getSite) + "tags/" + getTag;

  let getRwebURL = domain + "/" + pageOpts.route.replace("/", "");

  return (
    <>
      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />

      <div className=" px-5 sm:px-0 prose dark:prose-p:text-white prose-img:mx-auto prose-pre:bg-primary-foreground prose-slate sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-1xl dark:prose-invert mx-auto">
        <h1 className="text-black dark:text-white antialiased my-3 text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
          {" "}
          {frontMatter.title}{" "}
        </h1>

        <p className="text-black dark:text-white mt-1 mb-2 text-lg leading-8 ">
          {" "}
          {frontMatter.description}{" "}
        </p>

        <div className="mt-2.5 mb-1.5 flex flex-row items-center justify-between text-sm">
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-0  items-center print:block">
            {frontMatter?.author?.image ? (
              <Avatar className="mr-2 items-center justify-center">
                <AvatarImage
                  className="h-12 w-12"
                  src={frontMatter?.author?.image}
                />
                <AvatarFallback>
                  {" "}
                  {typeof frontMatter.author === "string"
                    ? frontMatter?.author
                    : typeof frontMatter.author === "object"
                      ? frontMatter?.author.name
                      : ""}{" "}
                </AvatarFallback>
              </Avatar>
            ) : (
              ""
            )}
            <span>
              {" "}
              By{" "}
              {typeof frontMatter.author === "string" ? (
                <Link
                  href={Next_URL(getSite)}
                  rel="author"
                  className="text-sm font-bold mr-2"
                >
                  {frontMatter?.author}
                </Link>
              ) : typeof frontMatter.author === "object" ? (
                <Link
                  href={getAuthorURL}
                  target="_blank"
                  rel="author"
                  className="text-sm font-bold mr-2"
                >
                  {frontMatter?.author.name}
                </Link>
              ) : (
                ""
              )}
            </span>
            •{" "}
            <time className="mx-2" dateTime={getDate} title={getDate}>
              {getDate}
            </time>{" "}
            •{" "}
            <Link
              href={getTagURL}
              className="mr-2 text-sm font-bold capitalize ml-2"
            >
              {" "}
              {getTag}{" "}
            </Link>{" "}
            •{" "}
            {readingTime !== undefined ? (
              <span className="text-sm font-bold capitalize ml-2">
                {" "}
                {readingTime.text}{" "}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="hidden sm:flex flex-row items-center print:block">
            <RWebShare
              data={{
                text: frontMatter.description,
                url: getRwebURL,
                title: frontMatter.title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button aria-label="Share a Post" variant="ghost" size="icon">
                <Share2Icon className="h-4 w-4" />
              </Button>
            </RWebShare>

            <Button
              aria-label="Print"
              onClick={() => print()}
              variant="ghost"
              size="icon"
            >
              <PrinterIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Article>{children}</Article>
    </>
  );
}
