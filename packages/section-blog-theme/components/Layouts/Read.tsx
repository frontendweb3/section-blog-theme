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
import type {ReactNode} from "react";

export function Read({ pageOpts, themeConfig, children }: { pageOpts: PageOpts; themeConfig: TypeSectionBlogTheme; children: ReactNode; }) {
  const [domain, setDomain] = useState<string>()

  const { frontMatter } = pageOpts;

  let { DateFormat, settings } = themeConfig;

  let getDate = dayjs(frontMatter.date).format(DateFormat ? DateFormat : "MMM DD, YYYY");

  let getTag = slugify(frontMatter.tags[0])

  let getSite = settings?.SiteURL

  let getAuthorURL = frontMatter?.author?.url

  useEffect(function () {
    let getDomain = window.location.origin as string
    setDomain(getDomain)
  }, [])

  let getTagURL = Next_URL(getSite) + "tags/" + getTag

  let getRwebURL = domain + "/" + (pageOpts.route.replace("/", ""))

  return (
    <>

      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />

      <div className="px-3 sm:px-0 mx-auto my-6 print:block prose prose-pre:bg-primary-foreground prose-zinc sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">

        <section className="not-prose flex flex-row justify-between items-center">

          <div className="flex flex-row items-center text-sm">

            <span> By {

              typeof frontMatter.author === 'string' ?
                <Link
                  href={Next_URL(getSite)}
                  rel="author"
                  className="mr-2 hover:text-gray-400"
                >
                  {frontMatter?.author}
                </Link> : typeof frontMatter.author === 'object' ? <Link
                  href={getAuthorURL}
                  target="_blank"
                  rel="author"
                  className="mr-2 hover:text-gray-400 "
                >
                  {frontMatter?.author.name}
                </Link> : ""
            } </span>
            • <time
              className="mx-2"
              dateTime={getDate}
              title={getDate}
            >
              {getDate}
            </time> • <Link href={getTagURL} className="capitalize ml-2 hover:text-gray-400"> {getTag} </Link>
          </div>

          <div className="hidden sm:flex flex-row print:block">

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

            <Button aria-label="Print" onClick={() => print()} variant="ghost" size="icon">

              <PrinterIcon className="h-4 w-4" />

            </Button>

          </div>
        </section>

        <h1 className="mb-2 font-bold">{frontMatter.title}</h1>
        <p className="mb-4 mt-0 font-medium">{frontMatter.description}</p>

      </div>

      <Article>{children}</Article>
    </>
  );
}
