import * as React from "react"
import { cn } from "@/utility/utils"

interface ArticleProps {
  children: React.ReactNode;
  className?: object | string;
}

export function Article({ className, children }: ArticleProps) {
  return (
    <article className={cn("py-3 px-3 mt-5 mb-20 sm:px-0 prose dark:prose-p:text-white prose-img:mx-auto prose-pre:bg-slate-700/25 dark:prose-pre:bg-primary-foreground prose-zinc sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert mx-auto", className)}> {children} </article>
  );
}
