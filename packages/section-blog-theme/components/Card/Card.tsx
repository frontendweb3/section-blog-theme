import Link from "next/link";
import type { authorType } from "@/src/types"
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardFooter } from "@/components/ui/card"

export function ArticleCard({ title, description, date, URL, author }: { title: string; description: string; date: string; URL: string; author?: string | authorType; }) {
  return (
    <Card className="mb-10 p-2 sm:p-4  w-fill sm:w-6/6 md:w-5/6 lg:w-4/6  mx-auto shadow">
      <CardContent className="p-2 md:p-6">
        <h2 className="text-2xl mb-1 font-bold leading-7 sm:text-3xl">
          {title}
        </h2>
        {
          typeof author === 'string' ? <time className="text-sm" dateTime={date} title={date}>
            Published By  {author} on {date}
          </time> : typeof author === 'object' ? <time className="text-sm" dateTime={date} title={date}>
            Published By  {author.name} on {date}
          </time> : ""
        }

        <p className="mt-2">
          {description}
        </p>
      </CardContent>

      <CardFooter className="px-2 pb-6 md:px-6 md:pb-6">
        <Link className="block" href={URL}>
          <Button className="" variant="outline">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
