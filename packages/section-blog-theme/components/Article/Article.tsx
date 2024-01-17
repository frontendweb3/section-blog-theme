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
        "max-w-none nx-mt-5 nx-px-5 sm:nx-px-0 nx-mb-20 nx-format nx-format-section nx-format-img:nx-mx-auto sm:nx-format-sm md:nx-format-base lg:nx-format-lg xl:nx-format-2xl 2xl:nx-format-2xl nx-mx-auto",
        className,
      )}
    >
      {" "}
      {children}{" "}
    </article>
  );
}
