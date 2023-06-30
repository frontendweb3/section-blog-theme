import type { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";
import slugify from "slugify";

import { MdxFileCard } from "./types";


const NEXTRA_INTERNAL = Symbol.for("__nextra_internal__");

export const TagName = () => {
  const getSlug = useSSG();
  return getSlug !== undefined ? getSlug.slug : " ";
};

export const getStaticProps: GetStaticProps = ({ params }) => {

  return {
    props: {
      ssg: {
        slug: params?.slug,
      },
    },
  };
};

export function getStaticPaths() {
  const globalData = (globalThis as any)[NEXTRA_INTERNAL].pageMap;

  let paths: { params: { slug: string } }[] = [];

  for (var i = 0; i < globalData.length; i++) {
    let item = globalData[i];

    if (
      item !== undefined &&
      item?.kind !== "Meta" &&
      item?.kind === "Folder"
    ) {

      item?.children &&
        item?.children.map((subItem) => {
          let subItemCard: MdxFileCard = subItem as MdxFileCard;
          let getDraft = subItemCard.frontMatter?.draft
            ? subItemCard.frontMatter.draft
            : false;

          if (
            subItem !== undefined &&
            subItem?.kind === "MdxPage" &&
            getDraft === false &&
            subItem?.frontMatter !== undefined
          ) {
            if (
              typeof subItem.frontMatter?.tags !== "string" &&
              subItem.frontMatter?.tags !== undefined
            ) {
              
              let tagsList=subItem.frontMatter?.tags
              
              for (var i = 0; i < tagsList.length; i++) {

                 let getSlugify = slugify(tagsList[i], { lower: true, trim: true });
                
                 paths.push({
                          params: { slug: getSlugify },
                      });
        
             }
            }
          }
        });
    }
  }
  return {
    paths: paths,
    fallback: true,
  };
}
