import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function ArticleCard(
  { title, description, date, tag, URL, authorName, authorURL }: {
    title: string;
    description: string;
    date: string;
    tag: string[] | undefined;
    URL: string;
    authorName: string;
    authorURL: string;
  },
) {
  return (
    <Card
      spellCheck={"true"}
      className="my-16 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm"
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <span className="text-xl">{date}</span>
        {tag && tag.length > 0
          ? (
            <span className="text-xl px-2 py-1 font-bold rounded-md dark:bg-violet-400">
              {tag[0]}
            </span>
          )
          : ""}
      </CardHeader>

      <CardContent className="mt-3">
        <CardTitle className="text-4xl font-bold">
          {title}
        </CardTitle>

        <CardDescription className="text-2xl mt-2">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex flex-row items-center justify-between mt-4">
        <Link
          href={URL}
          className="text-lg hover:underline dark:text-violet-400"
        >
          Read More
        </Link>
        <Link href={authorURL}>
          Publish By
          <span className="ml-1 text-lg">
            {authorName}
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
}
