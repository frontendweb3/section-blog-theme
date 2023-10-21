import type { PageOpts, ThemeConfig } from "nextra";
import { useRouter } from "next/router";
import { useTagContent } from "@/utility/useTagContent"
import { ArticleCard } from "@/components/Card/Card";
import dayjs from "dayjs";
import { Article } from "@/components/Article/Article";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Next_URL } from "@/utility/NextURL";

export function Tag({ pageOpts, themeConfig, children }: { pageOpts: PageOpts; themeConfig: ThemeConfig; children: React.ReactNode; }) {

  const { DateFormat, settings } = themeConfig;

  const router = useRouter()

  let tagSlug = router.query && router.query.tag && typeof router.query.tag === "string" ? router.query.tag : router?.query?.tag as string

  const { posts } = useTagContent(pageOpts, tagSlug)
  if (posts.length === 0) {
    return (
      <>
        <NextSeo title="404 Error" description="Something went wrong, sorry, we couldn't find this page." noindex={true} />
        <div className="grid my-16 px-4 place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-gray-500">We can't find that Result.</p>

            <Link
              href={Next_URL(settings?.SiteURL)}
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </>
    )
  }
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
