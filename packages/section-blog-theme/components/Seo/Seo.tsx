import { NextSeo } from "next-seo";
import { BlogFrontMatter } from "@/src/types";
import { FrontMatter } from "nextra";

export function Seo({ frontMatter }: { frontMatter: BlogFrontMatter }) {

  return (
    <NextSeo
      title={frontMatter.title}
      description={frontMatter.description}
      canonical="https://www.canonical.ie/"
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
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
