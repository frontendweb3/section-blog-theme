import type { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";
import { getStaticTags } from "./utlis/get-tags";
import slugify from "slugify";

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
  const tags = getStaticTags((globalThis as any)[NEXTRA_INTERNAL].pageMap);

  let paths: { params: { slug: string } }[] = [];

  if (tags !== undefined) {
    for (var i = 0; i < tags?.length; i++) {
      let getSlugify = slugify(tags[i], { lower: true, trim: true });

      paths.push({
        params: { slug: getSlugify },
      });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
}
