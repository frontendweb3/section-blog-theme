import type { PageOpts, ThemeConfig } from "nextra";
import { useRouter } from "next/router";
import { useTagContent } from "@/utility/useTagContent"
import { ArticleCard } from "@/components/Card/Card";
import dayjs from "dayjs";
// import type { TypeSectionBlogTheme } from "@/src/types";
// import { Seo } from "@/components/Seo/Seo";
// import { useData } from 'nextra/data'
import { Article } from "@/components/Article/Article";
// import { useSSG } from 'nextra/ssg'


export function Tag({ pageOpts, themeConfig, children }: { pageOpts: PageOpts; themeConfig: ThemeConfig; children: React.ReactNode; }) {

  const { DateFormat } = themeConfig;
  // const data = useData()
  const router = useRouter()

  let tagSlug = router.query && router.query.tag && typeof router.query.tag === "string" ? router.query.tag : router?.query?.tag as string

  const { posts } = useTagContent(pageOpts, "health")

  console.log("My query :", tagSlug)

  return (
    <>

      <Article>{children}</Article>
      <div className="mx-auto my-24 divide-y divide-slate-700 grid-cols-1 grid max-w-[724px] lg:max-w-[1024px] gap-4">
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
