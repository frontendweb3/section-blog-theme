import { NextSeo } from "next-seo";
import { BlogFrontMatter, TypeSectionBlogTheme } from "@/src/types";
import { Next_URL } from "@/utility/NextURL";

export function Seo({ frontMatter, themeConfig }: { frontMatter: BlogFrontMatter, themeConfig?: TypeSectionBlogTheme }) {
  const imageURL = typeof frontMatter.image === "string" ? frontMatter?.image : undefined
  const keyword = frontMatter.tags !== undefined ? frontMatter?.tags : undefined
  const author = typeof frontMatter.author === "string" ? frontMatter?.author : frontMatter.author
  const twitterCardType = imageURL !== undefined ? {
    cardType: "summary_large_image",
  }
    : {
      cardType: "summary",
    }


  return (
    <NextSeo
      title={frontMatter.title}
      description={frontMatter.description}
      openGraph={

        imageURL !== undefined || keyword !== undefined ?
          {
            url: Next_URL(themeConfig?.settings?.SiteURL),
            title: frontMatter.title,
            description: frontMatter.description,
            images: [
              {
                url: imageURL,
              }
            ],
            keywords: keyword,
            authors: author,
            twitter: twitterCardType
          } : {
            url: Next_URL(themeConfig?.settings?.SiteURL),
            title: frontMatter.title,
            description: frontMatter.description,
          }

      }
    />
  );
}
