import { ArticleCard } from "@/components/Card/Card";
import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts } from "nextra";
import { useContent } from "@/utility/useContent";
import dayjs from "dayjs";
import { Seo } from "@/components/Seo/Seo";
import { TypeSectionBlogTheme } from "@/src/types";

export function Posts({
  children,
  themeConfig,
  pageOpts,
}: {
  pageOpts: PageOpts;
  themeConfig: TypeSectionBlogTheme;
  children: React.ReactNode;
}) {
  const { posts } = useContent(pageOpts);

  const { DateFormat } = themeConfig;

  return (
    <>
      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />

      <Article>{children}</Article>

      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {posts?.map((post) => {
          let getDate = dayjs(post.frontMatter.date).format(
            DateFormat ? DateFormat : "MMM DD, YYYY",
          );

          if (
            post.frontMatter.title === undefined &&
            post.frontMatter.description === undefined
          ) {
            throw new Error(
              `We could not find the title and description on the following router: ${post.route} `,
            );
          }

          return (
            <ArticleCard
              key={post.frontMatter.date + post.frontMatter.title}
              title={post.frontMatter.title}
              description={post.frontMatter.description}
              date={getDate}
              URL={post.route}
              author={post.frontMatter?.author}
            />
          );
        })}
      </section>
    </>
  );
}
