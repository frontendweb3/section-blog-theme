import type { PageOpts } from "nextra";
import type { MdxFileCard } from "@/src/types";
import dayjs from "dayjs";

export function useContent({ pageMap, frontMatter }: PageOpts) {

  // posts
  let tempPosts: MdxFileCard[] | undefined = [];

  for (let page of pageMap) {
    if (page.kind === "Folder" && page.name === "posts") {
      tempPosts?.push(...page?.children);
    }
  }

  // posts
  let posts = tempPosts.filter((temp: MdxFileCard) => temp?.name !== "index" && temp?.kind !== "Meta");

   // Descending
   let formatPostBasedOnDate = posts.sort(function (a, b) {
    let dateA = dayjs(a.frontMatter.date)
    let dateB = dayjs(b.frontMatter.date)
    return dateB - dateA
  });

  // Authors
  let tempAuthors: MdxFileCard[] | undefined = [];

  for (let page of pageMap) {
    if (page.kind === "Folder" && page.name === "authors") {
      tempAuthors?.push(...page?.children);
    }
  }

  let authors = tempAuthors.filter((temp) => temp?.name !== "index" && temp?.kind !== "Meta");

  return { posts: formatPostBasedOnDate, frontMatter: frontMatter };
}
