import { useTags } from "@/utility/useTags";
import type { GetStaticProps } from "next";
// import { useData } from "nextra/data";
import Head from 'next/head'
import { useSSG } from 'nextra/ssg'

const NEXTRA_INTERNAL = Symbol.for("__nextra_internal__");

export const TagTitle = ({ prefix = 'Posts tagged with ' }: { prefix: string }) => {
  const { tag } = useSSG()
  const title = `${prefix}${tag}`
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export const TagName = () => {
  const { tag } = useSSG()
  return tag || null
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      ssg: {
        tag: params?.tag
      }
    }
  }
}
export function getStaticPaths() {

  const globalData = (globalThis as any)[NEXTRA_INTERNAL].pageMap

  let { paths } = useTags(globalData)

  return {
    paths: paths,
    fallback: true,
  };
}
