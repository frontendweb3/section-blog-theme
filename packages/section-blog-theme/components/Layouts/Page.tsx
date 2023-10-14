import { Article } from "@/components/Article/Article"
import * as React from "react";
import { Seo } from "../Seo/Seo";
import { useContent } from "@/utility/useContent";
import type { PageOpts } from "nextra";

export function Page({ pageOpts, children }: { pageOpts: PageOpts; children: React.ReactNode; }) {

  const { frontMatter } = useContent(pageOpts);

  return (
    <>
      <Seo frontMatter={frontMatter} />
      <Article> {children} </Article>
    </>
  )
}
