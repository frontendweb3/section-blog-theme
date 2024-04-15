import * as React from "react";
import { cn } from "@/utility/utils";

interface ArticleProps {
  children: React.ReactNode;
  className?: object | string;
  raw?: boolean
}

export function Article({ className, children, raw }: ArticleProps) {

  if (raw === true) {
    return <article
      className={cn(className)}
    >{children}{" "} </article>
  }

  return (
    <article
      className={cn(
        "nx-max-w-4xl nx-px-4 nx-py-4 nx-mb-20 nx-format nx-format-section nx-format-img:nx-mx-auto sm:nx-format-sm md:nx-format-base lg:nx-format-lg nx-mx-auto",
        className,
      )}
    >
      {" "}
      {children}{" "}
    </article>


  );
}
