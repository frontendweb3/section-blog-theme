import * as React from "react";
import { cn } from "@/utility/utils";

interface ArticleProps {
  children: React.ReactNode;
  className?: object | string;
}

export function Article({ className, children }: ArticleProps) {
  return (
    <article
      className={cn(
        "mt-5 px-5 sm:px-0 mb-20 prose dark:prose-p:text-white prose-img:mx-auto prose-pre:bg-primary-foreground prose-slate sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-1xl dark:prose-invert mx-auto",
        className,
      )}
    >
      {" "}
      {children}{" "}
    </article>
  );
}
