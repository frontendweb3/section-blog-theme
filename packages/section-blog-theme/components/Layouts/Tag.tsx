import type { PageOpts, PageMapItem, ThemeConfig } from "nextra";
import { useRouter } from "next/router";
import { useTagContent } from "@/utility/useTagContent"
import { ArticleCard } from "../Card/Card";
import dayjs from "dayjs";

export function Tag({ pageOpts, themeConfig }: { pageOpts?: PageOpts; themeConfig?: ThemeConfig; }) {

  const { DateFormat } = themeConfig;

  const { query } = useRouter();

  const { posts } = useTagContent(pageOpts, query.slug)

  let slugToTitle = query.slug as string
  return (
    <>
      {query?.slug ? (
        <div className="my-24 container mx-auto capitalize">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{query?.slug?.replaceAll("-", " ")}</h1>
        </div>) : " "}
      <div className="mx-auto my-24 grid-cols-1 grid max-w-[724px] gap-4">
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
