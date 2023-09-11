import { Article } from "@/components/Article/Article";
import * as React from "react";
import { Seo } from "@/components/Seo/Seo";
import { PageOpts, ThemeConfig } from "nextra";
import { useContent } from "@/utility/useContent";
export function HomePage({ pageOpts, themeConfig, children }: {
  pageOpts: PageOpts;
  themeConfig: ThemeConfig;
  children: React.ReactNode;
}) {

  const { frontMatter } = useContent(pageOpts);

  return (
    <>
      <Seo frontMatter={frontMatter} />
      <Article>{children}</Article>
    </>
  );
}
