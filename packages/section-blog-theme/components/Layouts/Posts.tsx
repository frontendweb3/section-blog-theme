import { ArticleCard } from "@/components/Card/Card";
import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { useContent } from "@/utility/useContent";
import dayjs from "dayjs";
import { Seo } from "../Seo/Seo";

export function Posts({ children, themeConfig, pageOpts }: { pageOpts: PageOpts; themeConfig: ThemeConfig; children: React.ReactNode; }) {

  const { posts, frontMatter } = useContent(pageOpts);

  const { DateFormat } = themeConfig

  return (
    <>

      <Seo frontMatter={frontMatter} />

      <Article>{children}</Article>

      <div className="mx-auto my-24 divide-y divide-slate-700 grid-cols-1 grid max-w-[724px] gap-4">
        {posts?.map(
          (post) => {
            return (
              <ArticleCard
                key={post.frontMatter.date + post.frontMatter.title}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                tag={post.frontMatter.tags}
                date={dayjs(post.frontMatter.date).format(DateFormat)}
                URL={post.route}
                author={post.frontMatter?.author}
              />
            );
          },
        )}
      </div>

    </>
  );
}
