import type { MdxFile } from "nextra";
import type { BlogFrontMatter } from "../../types";

export function getStaticTags(page: MdxFile<BlogFrontMatter>) {
  if (!page.frontMatter) {
    return [];
  }
  return page.frontMatter.tags;
}
