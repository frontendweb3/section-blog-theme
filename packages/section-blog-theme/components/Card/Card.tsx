import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function ArticleCard() {
  return (
      <Card className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
        
        <CardHeader className="flex flex-row items-center justify-between">
          <span className="text-sm">Jun 1, 2020</span>
          <span className="px-2 py-1 font-bold rounded-md dark:bg-violet-400">
            JavaScript
          </span>

        </CardHeader>

        <CardContent className="mt-3">

          <CardTitle className="text-2xl font-bold">
            Nos creasse pendere crescit angelos etc
          </CardTitle>

          <CardDescription className="mt-2">
            Tamquam ita veritas res equidem. Ea in ad expertus paulatim
            poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
            spero. Tantumdem naturales excaecant notaverim etc cau perfacile
            occurrere. Loco visa to du huic at in dixi aër.
          </CardDescription>

        </CardContent>

        <CardFooter className="flex flex-row items-center justify-between mt-4">
        
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </a>

            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Leroy Jenkins
                </span>
              </Link>
              
            </div>
        </CardFooter>
      </Card>
  );
}
