import { NextSeo } from "next-seo";
import { BlogFrontMatter, TypeSectionBlogTheme } from "@/src/types";
import { Next_URL } from "@/utility/NextURL";

export function Seo({ frontMatter, themeConfig }: { frontMatter: BlogFrontMatter, themeConfig?: TypeSectionBlogTheme }) {

  const imageURL = frontMatter.image && typeof frontMatter.image === "string" ? frontMatter?.image : frontMatter?.image as string
  const keyword = typeof frontMatter.tags !== "object" ? frontMatter?.tags?.toString() : frontMatter?.tags
  const author: string[] = typeof frontMatter.author === "string" ? [...frontMatter?.author] : frontMatter?.author
  const twitterCardType = imageURL !== undefined ? { cardType: "summary_large_image" } : { cardType: "summary" }


  if ((frontMatter.image && typeof frontMatter.image === "string" !== undefined) || (frontMatter.tags && typeof frontMatter.tags === "string" ? frontMatter?.tags : frontMatter?.tags)) {

    const keyword = typeof frontMatter.tags !== "object" ? frontMatter?.tags?.toString() : frontMatter?.tags

    return (<NextSeo
      title={frontMatter.title}
      description={frontMatter.description}
      openGraph={
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
        }
      }
    />)
  }

  return (
    <NextSeo
      title={frontMatter.title}
      description={frontMatter.description}
      openGraph={{
        url: Next_URL(themeConfig?.settings?.SiteURL),
        title: frontMatter.title,
        description: frontMatter.description,
      }}
    />
  );
}
