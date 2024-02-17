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
import { Card, CardContent, CardFooter } from "../ui/card";

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

      <Card className="nx-max-w-4xl nx-mt-12 nx-border-none nx-shadow-none nx-format nx-format-section sm:nx-format-sm md:nx-format-base lg:nx-format-lg xl:nx-format-xl 2xl:nx-format-xl nx-mx-auto">

        <CardContent className="nx-px-5 !nx-pb-0 sm:nx-px-0">
          <h1 className="nx-antialiased !nx-mb-3 nx-text-3xl nx-font-bold nx-tracking-wide sm:nx-text-4xl md:nx-text-5xl">{frontMatter.title}</h1>
          <p className="!nx-my-2 nx-text-lg nx-leading-8">{frontMatter.description}</p>
        </CardContent>

        <CardFooter className="nx-px-5 sm:nx-px-0 nx-flex nx-flex-row nx-items-center nx-justify-between nx-text-sm">

          <div className="nx-flex nx-flex-row nx-flex-wrap sm:nx-flex-nowrap nx-gap-3 sm:nx-gap-0 nx-items-center print:nx-block">
            {
              frontMatter?.author?.image ? (<Avatar className="nx-mr-2 nx-items-center nx-justify-center">
                <AvatarImage className="nx-h-12 nx-w-12" src={frontMatter?.author?.image} />
                <AvatarFallback>
                  {" "}
                  {typeof frontMatter.author === "string"
                    ? frontMatter?.author
                    : typeof frontMatter.author === "object"
                      ? frontMatter?.author.name
                      : ""}{" "}
                </AvatarFallback>
              </Avatar>
              ) : ("")
            }
            <span>
              {" "}
              By{" "}
              {
                typeof frontMatter.author === "string" ? (
                  <Link href={Next_URL(getSite)} rel="author" className="nx-text-sm nx-font-bold nx-transition nx-ease-in-out nx-mr-2 nx-underline hover:nx-text-secondary-foreground/80">
                    {frontMatter?.author}
                  </Link>
                ) : typeof frontMatter.author === "object" ? (
                  <Link href={getAuthorURL} target="_blank" rel="author" className="nx-text-sm nx-font-bold nx-transition nx-ease-in-out nx-mr-2 nx-underline hover:nx-text-secondary-foreground/80">
                    {frontMatter?.author.name}
                  </Link>
                ) : ("")
              }
            </span>
            •
            <time className="nx-mx-2" dateTime={getDate} title={getDate}>
              {getDate}
            </time>
            •{" "}
            <Link href={getTagURL} className="nx-mr-2 nx-text-sm nx-font-bold nx-transition nx-ease-in-out nx-capitalize nx-ml-2 nx-underline hover:nx-text-secondary-foreground/80">
              {" "}
              {getTag}{" "}
            </Link>{" "}
            •{" "}
            {
              readingTime !== undefined ? (
                <span className="nx-text-sm nx-capitalize nx-ml-2">
                  {readingTime.text}{" "}
                </span>
              ) : ("")
            }
          </div>

          <div className="nx-hidden sm:nx-flex nx-flex-row nx-items-center print:nx-block">
            <RWebShare
              data={{
                text: frontMatter.description,
                url: getRwebURL,
                title: frontMatter.title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button aria-label="Share a Post" variant="ghost" size="icon">
                <Share2Icon className="nx-h-4 nx-w-4" />
              </Button>
            </RWebShare>

            <Button
              aria-label="Print"
              onClick={() => print()}
              variant="ghost"
              size="icon"
            >
              <PrinterIcon className="nx-h-4 nx-w-4" />
            </Button>
          </div>

        </CardFooter>

      </Card>

      <Article>{children}</Article>

    </>
  );
}