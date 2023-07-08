import type { MdxFile } from "nextra";

export const sortDate = (a: MdxFile, b: MdxFile): number => {
  if (!a.frontMatter?.date || !b.frontMatter?.date) return -1;

  return (
    new Date(b.frontMatter.date).getTime() -
    new Date(a.frontMatter.date).getTime()
  );
};
