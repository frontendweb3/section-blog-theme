import { NextSeo } from "next-seo";
import { BlogFrontMatter, TypeSectionBlogTheme } from "@/src/types";
import { Next_URL } from "@/utility/NextURL";

export function Seo({ frontMatter, themeConfig }: { frontMatter: BlogFrontMatter, themeConfig?: TypeSectionBlogTheme }) {

  // const { settings } = themeConfig

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          url: "https://www.url.ie/a",
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-02.jpg" }
          ],
          siteName: "SiteName",
        }}
      />
    </>
  );
}
