import Link from "next/link";
import type { authorType } from "@/src/types"

export function ArticleCard({ title, description, date, tag, URL, author }: { title: string; description: string; date: string; tag: string[] | undefined; URL: string; author?: string | authorType; }) {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        { tag && tag.length > 0
          ? (
            <span className="bg-[#1E429F] px-2.5 py-0.5 text-white text-xs font-medium inline-flex items-center rounded">
              {tag[0]}
            </span>
          )
          : ""}
        <time className="text-sm" dateTime={date} title={date}>
          {date}
        </time>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <Link href={URL}>{title}</Link> </h2>
      <p className="mb-5 font-light">{description}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {typeof author === 'string' ? <span className="font-medium text-black dark:text-white"> {author}</span> : typeof author === 'object' ? <span className="font-medium dark:text-white"> {author.name}</span> : ""}
        </div>
        <Link href={URL} className="inline-flex items-center font-medium">
          Read More
        </Link>
      </div>
    </article>
  );

}