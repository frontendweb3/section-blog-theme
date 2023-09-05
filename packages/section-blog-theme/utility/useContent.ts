import type {  PageOpts } from "nextra";
import type { MdxFileCard } from "@/src/types"

export function useContent({ pageMap, frontMatter }: PageOpts) {

  // posts
  let tempPosts: MdxFileCard[] | undefined = [];

  for (let page of pageMap) {
    if (page.kind === "Folder" && page.name==="posts") {
      tempPosts?.push(...page?.children);
    }
  }
  let posts = tempPosts.filter((temp:MdxFileCard) => temp?.name !== "index" && temp?.kind !== "Meta");

  // Authors
    let tempAuthors: MdxFileCard[] | undefined = [];

  for (let page of pageMap) {
    if (page.kind === "Folder" && page.name==="authors") {      
      tempAuthors?.push(...page?.children);
    }
  }

  let authors = tempAuthors.filter((temp) => temp?.name !== "index" && temp?.kind !== "Meta");  
  return { posts: posts, authors:authors, frontMatter:frontMatter };

}
