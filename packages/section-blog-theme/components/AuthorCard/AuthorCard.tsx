import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import type { SocialLinks } from "@/src/types";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import Image from "next/image";
import { getImage } from "@/utility/getImage";
import { GetImage } from "@/src/types";

export function AuthorCard({ name, description, socialLinks, URL, image }: { name: string; description: string; socialLinks: SocialLinks[]; URL: string; image: GetImage;}) {

  let imageType: GetImage = image as GetImage;

  let imageUrl = getImage(imageType);

  return (
    <Card className="items-center flex flex-col rounded-lg shadow sm:flex dark:border-gray-700">
      { image !== undefined?
      <CardHeader className="flex flex-row items-center justify-between">
        <Link href={URL}>
          <Image
            src={imageUrl}
            alt={image.alt? image?.alt : name}
            width={"1224"}
            height={"724"}
            className="rounded-md object-cover h-[324px]"
          />
        </Link>
      </CardHeader> : "" }

      <CardContent className="mt-3 flex flex-col item-center justify-center">
        <Link href={URL}>
        <CardTitle className="text-center text-4xl font-bold">
          {name}
        </CardTitle>
        </Link>
        <CardDescription className="mt-3 text-center text-xl mt-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-row my-5 justify-between gap-2 items-center">
        {socialLinks &&
          socialLinks?.map((link) => (
            <SocialLink key={link.name} socialLink={link} />
          ))}
      </CardFooter>
    </Card>
  );
}
