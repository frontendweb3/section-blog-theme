import { Article } from "@/components/Article/Article";
import * as React from "react";
import { Seo } from "@/components/Seo/Seo";
import type { PageOpts } from "nextra";
import { TypeSectionBlogTheme } from "@/src/types";

export function HomePage({ pageOpts, themeConfig, children }: { pageOpts: PageOpts; themeConfig: TypeSectionBlogTheme; children: React.ReactNode; }) {

  return (
    <>   
      <Seo pageOpts={pageOpts} themeConfig={themeConfig} />
      <Article>{children}</Article>
    </>  
  );
}
