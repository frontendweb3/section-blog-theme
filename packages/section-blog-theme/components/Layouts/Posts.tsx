import { DefaultArticleCard } from "@/components/Card/Card";
import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts } from "nextra";
import { useContent } from "@/utility/useContent";
import dayjs from "dayjs";
import { Seo } from "@/components/Seo/Seo";
import { TypeSectionBlogTheme } from "@/src/types";
import { CardFirst } from "@/components/Card/CardFirst";
import { CardSeccond } from "@/components/Card/CardSecond";

export function Posts({ children, themeConfig, pageOpts }: { pageOpts: PageOpts; themeConfig: TypeSectionBlogTheme; children: React.ReactNode; }) {

  const { posts } = useContent(pageOpts);

  const { DateFormat, CardType } = themeConfig;

  return (
    <>
      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />

      <Article>{children}</Article>

      <section className={CardType?.post === "one" ? "px-12 nx-grid nx-grid-cols-1 md:nx-grid-cols-2 lg:nx-grid-cols-3 nx-gap-8" : "nx-py-8 nx-px-4 nx-mx-auto nx-max-w-screen-xl lg:nx-px-6"}>

        {
          posts?.map((post) => {

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

            let getTag = post?.frontMatter?.tags !== undefined ? post?.frontMatter?.tags[0] : undefined

            if (CardType?.post === "one") {
              return (
                <CardFirst
                  imageurl={post.frontMatter.image}
                  tag={getTag}
                  key={post.frontMatter.date + post.frontMatter.title} title={post.frontMatter.title}
                  description={post.frontMatter.description}
                  date={getDate}
                  url={post.route}
                  author={post.frontMatter?.author}
                />
              )
            } else if (CardType?.post === "two") {

              return (
                <CardSeccond
                  key={post.frontMatter.date + post.frontMatter.title}
                  title={post.frontMatter.title}
                  description={post.frontMatter.description}
                  date={getDate}
                  url={post.route}
                  author={post.frontMatter?.author}
                />
              )

            } else {
              return (<DefaultArticleCard
                key={post.frontMatter.date + post.frontMatter.title}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                date={getDate}
                url={post.route}
                author={post.frontMatter?.author}
              />)

            }

          })}
      </section>
    </>
  );
}
