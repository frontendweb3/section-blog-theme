import type { PageOpts } from "nextra";
import type { MdxFileCard } from "@/src/types"
import { slugify } from "./slugify";

export function useTagContent(pageOpts: PageOpts, slug: string) {

  const { pageMap } = pageOpts

  let tempPosts: MdxFileCard[] | undefined = [];

  for (let page of pageMap) {

    if (page.kind === "Folder" && page.name === "posts") {

      for (let post of page.children) {

        if (post.kind !== "Meta" && post?.frontMatter?.type === 'post') {
          let tags = post?.frontMatter?.tags

          for (const tagPosts of tags) {
            if (slug === slugify(tagPosts)) {
              tempPosts.push(post)
            }
          }
        }
      }
    }
  }
  return { posts: tempPosts };
}
