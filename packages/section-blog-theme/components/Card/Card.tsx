import Link from "next/link";
import type { authorType } from "@/src/types"
export function ArticleCard({ title, description, date, tag, URL, author }: { title: string; description: string; date: string; tag: string[] | undefined; URL: string; author?: string | authorType; }) {
  return (
    <Link href={URL}>
      <div className="my-16 container border-foreground/60 dark:border-foreground flex-row flex max-[479px]">
        <div className="px-0 sm:px-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-1">{title}</h1>
          <p className="text-ellipsis text-md lg:text-lg mb-2 md:mb-2 lg:mb-3">{description}</p>
          <div className="mt-1 text-xs sm:text-sm">
            {
              typeof author === 'string' ? <span>Published By {author}</span> : typeof author === 'object' ? <span>Published By {author.name}</span> : ""} • {tag && tag.length > 0
                ? (
                  <span>
                    {tag[0]}
                  </span>
                )
                : ""} • <time
                  dateTime={date}
                  title={date}
                >
              {date}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}
