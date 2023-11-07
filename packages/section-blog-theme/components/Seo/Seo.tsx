import { NextSeo } from "next-seo";
import { TypeSectionBlogTheme } from "@/src/types";
import { Next_URL } from "@/utility/NextURL";
import { useContent } from "@/utility/useContent";
import { PageOpts } from "nextra";
import { OpenGraphMedia } from "next-seo/lib/types";

export function Seo({ pageOpts, themeConfig }: { pageOpts: PageOpts; themeConfig?: TypeSectionBlogTheme; }) {

  let getSiteURL = Next_URL(themeConfig?.settings?.SiteURL)

  const { frontMatter } = useContent(pageOpts);

  const getDate = frontMatter.date

  if ((frontMatter.image !== undefined) || (frontMatter.tags !== undefined) || (getDate !== undefined) || (frontMatter.author !== undefined)) {

    const getAuthor: string[] = typeof frontMatter.author === "object" ? [frontMatter?.author?.url] : [getSiteURL]

    const keyword = frontMatter.tags && typeof frontMatter.tags !== "object" ? frontMatter?.tags?.split(',') : frontMatter?.tags

    const getImages: OpenGraphMedia[] = frontMatter.image !== undefined && typeof frontMatter.image === "string" ? [{ url: frontMatter?.image }] : [{ url: frontMatter?.image }]

    return (
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={
          {

            title: frontMatter.title,
            description: frontMatter.description,
            images: getImages,
            type: 'article',
            article: {
              publishedTime: getDate,
              authors: getAuthor,
              tags: keyword,
            }
          }
        }
        twitter={{ cardType: "summary_large_image" }}
      />)
  }

  return (
    <NextSeo
      title={frontMatter.title}
      description={frontMatter.description}
      openGraph={{
        url: getSiteURL,
        title: "frontMatter is title",
        description: frontMatter.description,
      }}
      twitter={{ cardType: "summary" }}
    />
  );
}
