import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import Link from "next/link";
import type { SocialLinks } from "@/src/types";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import Image from "next/image";
import { getImage } from "@/utility/getImage";
import { GetImage } from "@/src/types";

export function AuthorCard(
  { name, description, socialLinks, image }: {
    name: string;
    description: string;
    socialLinks: SocialLinks[];
    image: GetImage;
  },
) {
  let imageType: GetImage = image as GetImage;

  let imageUrl = getImage(imageType);
  return (
    <div className="container">
      <Card className="items-center m-10 md:m-12 flex flex-col md:flex-row">
        {
          image !== undefined? (
            <CardHeader className="flex flex-row items-center justify-between">
              <Image
                src={imageUrl}
                alt={image.alt ? image?.alt : name}
                width={"424"}
                height={"164"}
                className="rounded-md object-cover h-[324px]"
              />
            </CardHeader>
          )
          : ""}

        <CardContent className="mt-3 flex flex-col item-center justify-center">
          <CardTitle className="text-left text-4xl font-bold">
            {name}
          </CardTitle>
          <CardDescription className="mt-3 text-left text-xl mt-3">
            {description}
          </CardDescription>
          <div className="flex flex-row my-5 justify-left gap-2 items-center">
            {socialLinks &&
              socialLinks?.map((link) => (
                <SocialLink key={link.name} socialLink={link} />
              ))}
          </div>
        </CardContent>

      </Card>
    </div>
  );
}
