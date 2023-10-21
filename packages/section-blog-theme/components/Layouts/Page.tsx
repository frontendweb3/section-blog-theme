import { Article } from "@/components/Article/Article"
import * as React from "react";
import { Seo } from "../Seo/Seo";
import type { PageOpts } from "nextra";
import { TypeSectionBlogTheme } from "@/src/types";

export function Page({ pageOpts, children,themeConfig }: { pageOpts: PageOpts; children: React.ReactNode; themeConfig:TypeSectionBlogTheme }) {
  return (
    <>
      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />
      <Article> {children} </Article>
    </>
  )
}
