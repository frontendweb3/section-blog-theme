import * as React from "react"
import { cn } from "@/utility/utils"

interface ArticleProps {
  children: React.ReactNode;
  className?: object | string;
}

export function Article({className, children}:ArticleProps) {
  return (
       <article className={ cn("py-3 px-3 mt-12 sm:px-0 prose prose-zinc prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert mx-auto",className)}> { children } </article> 
  );
}