import { ArticleCard } from "@/components/Card/Card";
import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { useContent } from "@/utility/useContent";
import dayjs from "dayjs";

export function Posts(
  { children, themeConfig, pageOpts }: {
    pageOpts: PageOpts;
    themeConfig: ThemeConfig;
    children: React.ReactNode;
  },
) {
  const [posts, frontMatter] = useContent(pageOpts);
  return (
    <>
      <Article>{children}</Article>
      {posts?.map(
        (post, i) => {
          return post.kind !== "Meta"
            ? (
              <ArticleCard
                key={post.frontMatter.date + i}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                tag={post.frontMatter.tags}
                date={dayjs(post.frontMatter.date).format("DD MMM YYYY")}
                URL={"/"}
                authorName={post.frontMatter.author}
                authorURL="/"
              />
            )
            : null;
        },
      )}
    </>
  );
}
