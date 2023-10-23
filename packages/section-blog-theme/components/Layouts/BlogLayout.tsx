import { Error404, Error500, HomePage, Page, Posts, Read, Tag } from "@/components/Layouts";
import * as React from "react";
import type { PageOpts } from "nextra";
import type { LayoutTypes,TypeSectionBlogTheme } from "@/src/types";

const Layouts = {
  home: HomePage,
  posts: Posts,
  page: Page,
  post: Read,
  404: Error404,
  tag: Tag,
  500: Error500,
};

export function BlogLayout(
  { pageOpts, themeConfig, children }: {
    pageOpts?: PageOpts;
    themeConfig: TypeSectionBlogTheme;
    children: React.ReactNode;
  }) {
  let LayoutType: LayoutTypes = pageOpts?.frontMatter.type ||
    ("home" as string);

  let Layout = Layouts[LayoutType];

  if (!Layout) {
    throw new Error(
      `Section blog theme does not support the layout type "${LayoutType}" It only supports "Post","Posts", "Page", "Home","404","500", and "Tag"`,
    );
  }

  if (pageOpts === undefined) {
    throw new Error(`Not found pageOpts`);
  }

  if (LayoutType === 500) {
    return <Error500 />
  }

  if (LayoutType === 404) {
    return <Error404 />
  }  

  return (
    <Layout pageOpts={pageOpts} themeConfig={themeConfig}>
      {children}
    </Layout>
  );
}
