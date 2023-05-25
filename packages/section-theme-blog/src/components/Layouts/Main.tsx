import React from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/config";
import { Author } from "./Author";
import { Authors } from "./Authors";
import { Page } from "./Page";
import { Post } from "./Post";
import { Posts } from "./Posts";
import { HomePage } from "./HomePage";
import { Tag } from "./Tag";
import { LayoutTypes } from "../../../types";
import { NotFound } from "./404"; 
import { ServerError } from "./500";

const Layouts = {
  post: Post,
  posts: Posts,
  page: Page,
  home: HomePage,
  author: Author,
  authors: Authors,
  tag: Tag,
  404: NotFound,
  500: ServerError,
};

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { pageOpts } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  let LayoutType: LayoutTypes =
    pageOpts?.frontMatter.type || ("home" as string );

  let Layout = Layouts[LayoutType];

  if (!Layout) {
    throw new Error(
      `nextra theme does not support the layout type "${LayoutType}" It only supports "post","Posts", "page", "home","author","authors","404","500", and "tag"`
    ); 
  }

  if (pageOpts === undefined) {
    throw new Error(`Not found pageOpts`);
  }
  return <Layout pageOpts={pageOpts}> {children} </Layout>;
}