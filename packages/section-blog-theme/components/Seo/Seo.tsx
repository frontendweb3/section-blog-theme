import { ArticleJsonLd, NextSeo } from "next-seo";
import { TypeSectionBlogTheme } from "@/src/types";
import { Next_URL } from "@/utility/NextURL";
import { useContent } from "@/utility/useContent";
import { PageOpts } from "nextra";

export function Seo({ pageOpts, themeConfig }: {pageOpts: PageOpts; themeConfig?: TypeSectionBlogTheme; }) {

  const { frontMatter } = useContent(pageOpts);
  const getDate = frontMatter.date
  const getImages:string[] = frontMatter.image !== undefined && typeof frontMatter.image === "string" ? [frontMatter?.image] : frontMatter?.image

  if ((frontMatter.image !== undefined) || (frontMatter.tags !== undefined) || (getDate !== undefined) || (frontMatter.author !== undefined)) {
    
    const getAuthor: string[] = typeof frontMatter.author === "object" ? [frontMatter?.author?.url] : [Next_URL(themeConfig?.settings?.SiteURL)]
  
    const keyword = frontMatter.tags && typeof frontMatter.tags !== "object" ? frontMatter?.tags?.split(',') : frontMatter?.tags

    return (
      <>
        <NextSeo
          title={frontMatter.title}
          description={frontMatter.description}
          openGraph={
            {
              
              title: frontMatter.title,
              description: frontMatter.description,
              images:getImages,
              type: 'article',
              article: {
                publishedTime: getDate,
                authors: getAuthor,
                tags: keyword,
              }
            }
          }
          twitter={{ cardType: "summary_large_image" }}
        />

      </>)
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
