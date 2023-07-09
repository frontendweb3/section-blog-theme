import Link from "next/link";
import slugify from "slugify";
import type { homePageAsAuthor } from "../../types";

export function AuthorURL(
  {  author, siteURL,homePageAsAuthor=true }: {
    homePageAsAuthor: homePageAsAuthor;
    author: string;
    siteURL: string;
  }
) { 
  if( typeof homePageAsAuthor === "string"){

    return (
                <Link
                  href={homePageAsAuthor}
                >
                  {author}
                </Link>
              )
    }

 if (homePageAsAuthor === true) {
    return (
      <Link
        href={siteURL}
      >
        {author}
      </Link>
    );
  }

  if (homePageAsAuthor === false) {
    return (
      <Link
        href={`/authors/${
          slugify(author, {
            lower: true,
            trim: true,
          })
        }`}
      >
        {author}
      </Link>
    );
  }
}
