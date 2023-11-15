import type { PageOpts } from "nextra";
import { useTagContent } from "@/utility/useTagContent"
import { ArticleCard } from "@/components/Card/Card";
import dayjs from "dayjs";
import { Article } from "@/components/Article/Article";
import { Error404 } from "./404";
import { TypeSectionBlogTheme } from "@/src/types"
import type {ReactNode} from "react";
import { useRouter } from 'next/router'


export function Tag({ pageOpts, themeConfig, children }: { pageOpts: PageOpts; themeConfig: TypeSectionBlogTheme; children: ReactNode; }) {

  const { DateFormat } = themeConfig;

  const router = useRouter()

  let tagSlug = router.query && router.query.tag && typeof router.query.tag === "string" ? router.query.tag : router?.query?.tag as string

  const { posts } = useTagContent(pageOpts, tagSlug)

  if (posts === undefined || posts.length === 0) {
    return (<Error404 />)
  }
  return (
    <>
      <Article>{children}</Article>

      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {posts?.map(
            (post) => {

              let getDate = dayjs(post.frontMatter.date).format(DateFormat ? DateFormat : "MMM DD, YYYY");

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
      </section>
    </>
  );
}
