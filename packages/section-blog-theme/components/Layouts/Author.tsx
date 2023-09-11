// import { Article } from "@/components/Article/Article";
import { useContent } from "@/utility/useContent";
import { PageOpts, ThemeConfig } from "nextra";
import { Seo } from "@/components/Seo/Seo";
import { AuthorCard } from "@/components/AuthorCard/AuthorCard";
import { useReturnSingleAuthor } from "@/utility/useReturnSingleAuthor";

export function Author({ pageOpts, themeConfig, children }: { pageOpts: PageOpts; themeConfig: ThemeConfig; children: React.ReactNode; }) {
  
  const { frontMatter } = useContent(pageOpts); 
  
  const { posts } = useReturnSingleAuthor(pageOpts, frontMatter?.name)
 
  console.log("posts : ", posts)

  return (
    <>
      <Seo frontMatter={frontMatter} /> 
      <AuthorCard
        key={frontMatter.name}
        name={frontMatter.name}
        description={frontMatter.description}
        socialLinks={frontMatter.social}
        image={frontMatter.image}
      />
    </>
  );
}
