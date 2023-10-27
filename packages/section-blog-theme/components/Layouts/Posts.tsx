import { ArticleCard } from "@/components/Card/Card";
import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { useContent } from "@/utility/useContent";
import dayjs from "dayjs";
import { Seo } from "../Seo/Seo";
import { TypeSectionBlogTheme } from "@/src/types";

export function Posts({ children, themeConfig, pageOpts }: { pageOpts: PageOpts; themeConfig: TypeSectionBlogTheme; children: React.ReactNode; }) {

  const { posts } = useContent(pageOpts);

  const { DateFormat } = themeConfig

  return (
    <>

      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />

      <Article>{children}</Article>

      <div className="mx-auto my-24 divide-y divide-slate-700 grid-cols-1 grid max-w-[724px] lg:max-w-[1024px] gap-4">
        {posts?.map(
          (post) => {

            let getDate  = dayjs(post.frontMatter.date).format(DateFormat? DateFormat : "MMM DD, YYYY");

            if (post.frontMatter.title === undefined && post.frontMatter.description === undefined) {
              throw new Error(`we coud not find litile and description on follwing router: ${post.route} `)
            }

            return (
              <ArticleCard
                key={post.frontMatter.date + post.frontMatter.title}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                tag={post.frontMatter.tags}
                date={getDate}
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
