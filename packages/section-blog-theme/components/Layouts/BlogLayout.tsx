import { Page, Error404, Error500, Posts,HomePage,Read} from "@/components/Layouts"
import * as React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import type { LayoutTypes } from "@/src/types";


const Layouts = {
  home: HomePage,
  posts: Posts,
  page: Page,
  post:Read,
  404: Error404,
  500: Error500,
};

export function BlogLayout({ pageOpts, themeConfig, children }:{ pageOpts?: PageOpts;themeConfig?: ThemeConfig; children: React.ReactNode }) {

  let LayoutType: LayoutTypes = pageOpts?.frontMatter.type || ("home" as string);

  let Layout = Layouts[LayoutType];

  if (!Layout) {
    throw new Error(
      `Section blog theme does not support the layout type "${LayoutType}" It only supports "Post","Posts", "Page", "Home","Author","Authors","405","500", and "Tag"`
    );
  }

  if (pageOpts === undefined) {
    throw new Error(`Not found pageOpts`);
  }

  if (LayoutType === 404 || LayoutType === 500) {
    return <Layout pageOpts={pageOpts}> {children} </Layout>;
  }

  return (
    <Layout pageOpts={pageOpts} themeConfig={themeConfig}>
      {children}
    </Layout>
  )
}
