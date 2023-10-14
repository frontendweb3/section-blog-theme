import { useTags } from "@/utility/useTags";
import type { GetStaticProps } from "next";

const NEXTRA_INTERNAL = Symbol.for("__nextra_internal__");

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

  const globalData = (globalThis as any)[NEXTRA_INTERNAL].pageMap

  let { paths } = useTags(globalData)

  return {
    paths: paths,
    fallback: true,
  };
}
