import { AuthorCard } from "@/components/AuthorCard/AuthorCard";
import { Article } from "@/components/Article/Article";
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { useContent } from "@/utility/useContent";

export function Authors({ children, themeConfig, pageOpts }: { pageOpts: PageOpts; themeConfig: ThemeConfig; children: React.ReactNode;}) {
  
  const { authors } = useContent(pageOpts);
  
  return (
    <>
      <Article>{children}</Article>

      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {authors?.map(
            (post) => {
              return (
                <AuthorCard
                  key={post.frontMatter?.name}
                  name={post.frontMatter?.name}
                  description={post.frontMatter.description}
                  socialLinks={post.frontMatter.social}
                  image={post.frontMatter.image}
                  URL={post.route}
                />
              );
            },
          )}
        </div>
      </section>
    </>
  );
}
