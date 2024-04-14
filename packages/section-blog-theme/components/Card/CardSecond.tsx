import Link from "next/link";
import type { authorType } from "@/src/types";
import { CardContent, Card } from "@/components/ui/card";

export function CardSeccond({ title, description, date, url, author }: { title: string; description: string; date: string; url: string; author?: string | authorType; }) {
  return (
    <Card className="hover:nx-bg-secondary sm:nx-p-4 nx-w-fill sm:nx-w-6/6 md:nx-w-5/6  lg:nx-w-4/6 nx-mx-auto nx-shadow-none nx-border-none">
      <CardContent className="nx-p-2 md:nx-p-6">
        {typeof author === "string" ? (
          <time className="nx-text-sm nx-font-bold" dateTime={date} title={date}>
            By {author} on {date}
          </time>
        ) : typeof author === "object" ? (
          <time className="nx-text-sm nx-font-bold" dateTime={date} title={date}>
            Published By {author.name} on {date}
          </time>
        ) : (
          ""
        )}
      <Link href={url}>
       <h1 className="nx-scroll-m-20 nx-my-3 nx-text-2xl nx-font-bold nx-tracking-tight sm:nx-text-3xl lg:nx-text-4xl">       
          {title}
        </h1>
      </Link>
      <Link href={url}>
        <p>{description}</p>
      </Link> 
      </CardContent>
    </Card>
  );
}
