import Link from "next/link";
import type { authorType } from "@/src/types";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardFooter } from "@/components/ui/card";

export function DefaultArticleCard({ title, description, date, url, author }: { title: string; description: string; date: string; url: string; author?: string | authorType; }) {
  return (
    <Card className="nx-mb-10 nx-p-2 sm:nx-p-4 nx-w-fill sm:nx-w-6/6 md:nx-w-5/6 lg:nx-w-4/6 nx-mx-auto nx-shadow-sm">
      <CardContent className="nx-p-2 md:nx-p-6">
        <h2 className="nx-text-2xl nx-mb-1 nx-leading-8 nx-font-bold sm:nx-text-3xl">
          {title}
        </h2>
        {typeof author === "string" ? (
          <time className="nx-text-sm" dateTime={date} title={date}>
            Published By {author} on {date}
          </time>
        ) : typeof author === "object" ? (
          <time className="nx-text-sm" dateTime={date} title={date}>
            Published By {author.name} on {date}
          </time>
        ) : (
          ""
        )}

        <p className="nx-mt-2">{description}</p>
      </CardContent>

      <CardFooter className="nx-px-2 nx-pt-2 md:nx-pt-0 nx-pb-6 md:nx-px-6 md:nx-pb-6">
        <Link className="nx-block" href={url}>
          <Button variant="outline">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
