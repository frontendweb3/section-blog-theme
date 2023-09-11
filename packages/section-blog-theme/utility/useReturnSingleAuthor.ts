import type { PageOpts } from "nextra";
import type { MdxFileCard } from "@/src/types";

export function useReturnSingleAuthor({ pageOpts, authorName }: { pageOpts: PageOpts; authorName: string }) {
  
   //  const { pageMap, frontMatter } = pageOpts
  
  // Authors
  let tempPosts: MdxFileCard[] | undefined = [];

  // for (let page of pageMap) {
  //   if (page.kind === "Folder" && page.name === "posts") {
  //      
  //      console.log("my page is here :",page)
  //      
  //    // tempPosts?.push(...page?.children);
  //   
  //   }
  // }

  // let posts = tempPosts.filter((temp) =>
  //   temp?.name !== "index" && temp?.kind !== "Meta"
  // );

  // console.log(" page Opts is here :", pageOpts)

  return { posts: tempPosts};

}
