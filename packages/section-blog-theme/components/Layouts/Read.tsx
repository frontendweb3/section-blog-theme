import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import dayjs from "dayjs";
import Image from "next/image";
import { getImage } from "@/utility/getImage";
import { GetImage } from "@/src/types";
import { Button } from "../ui/button";
import { PrinterIcon, Share2Icon } from "lucide-react";
import { RWebShare } from "react-web-share";
import { Next_URL } from "@/utility/NextURL";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
export function Read(
  {
    pageOpts,
    themeConfig,
    children,
  }: {
    pageOpts: PageOpts;
    themeConfig: ThemeConfig;
    children: React.ReactNode;
  },
) {
  const { frontMatter } = pageOpts;

  let imageType: GetImage = frontMatter.image as GetImage;

  let imageUrl = getImage(imageType);

  let { SiteURL } = themeConfig;

  return (
    <>
      <div className="print:block container p-4">
        <h3 className="mt-3 text-xl font-extrabold text-gray-600 lg:mb-6 lg:text-2xl">
          #{frontMatter.tags[0]}
        </h3>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight lg:mb-6 lg:text-5xl">
          {frontMatter.title}
        </h1>
        <h2 className="text-gray-500 -mt-3 mb-3 text-xl font-extrabold leading-tight lg:mb-6 lg:text-md">
          {frontMatter.description}
        </h2>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <Link
              href="#"
              rel="author"
              className="text-xl"
            >
              {frontMatter?.author}
            </Link>

            <p className="ml-1 text-lg font-light ">
              Posted on{"  "}
              <time
                dateTime={frontMatter.date}
                title={dayjs(frontMatter.date).format("DD MMM YYYY")}
              >
                {dayjs(frontMatter.date).format("DD MMM YYYY")}
              </time>
            </p>
          </div>
          <div>
            <RWebShare
              data={{
                text: frontMatter.description,
                url: `${Next_URL(SiteURL)}${pageOpts.route}`,
                title: frontMatter.title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button variant="ghost" size="icon">
                <Share2Icon className="h-4 w-4" />
              </Button>
            </RWebShare>
            <Button onClick={() => print()} variant="ghost" size="icon">
              <PrinterIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <figure className="mt-14 max-w-screen-xl">
          <Image
            src={imageUrl}
            alt={frontMatter.alt ? frontMatter.alt : frontMatter.title}
            height="724"
            width="1024"
            className="w-full"
          />
          {frontMatter.image.caption
            ? (
              <figcaption className="text-center">
                {frontMatter.image.caption}
              </figcaption>
            )
            : ""}
        </figure>
      </div>
      <Article>{children}</Article>
    </>
  );
}
