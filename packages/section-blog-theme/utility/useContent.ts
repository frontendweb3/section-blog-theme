import type {  PageOpts } from "nextra";
import type { MdxFileCard } from "@/src/types"

export function useContent({ pageMap, frontMatter }: PageOpts) {
  
  let tempPosts: MdxFileCard[] | undefined = [];

  for (let page of pageMap) {
    if (page.kind === "Folder") {
      tempPosts?.push(...page?.children);
    }
  }
  let posts = tempPosts.filter((temp) => temp?.name !== "index");

  return [posts, frontMatter];
}
