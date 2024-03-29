import slugify from "slugify";
import type { MdxFileCard } from "@/src/types";

export function useTags(pageMap: MdxFileCard[]) {
  let paths: { params: { tag: string } }[] = [];

  for (let page of pageMap) {
    if (page?.name === "posts") {
      for (let post of page?.children) {
        if (post.kind !== "Meta" && post?.frontMatter?.type === "post") {
          post?.frontMatter?.tags.map((item: string) => {
            paths.push({
              params: { tag: slugify(item, { lower: true, trim: true }) },
            });
          });
        }
      }
    }
  }

  return { paths };
}
