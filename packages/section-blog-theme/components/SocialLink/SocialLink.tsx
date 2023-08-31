import { Button } from "@/components/ui/button";
import type { SocialLinks } from "@/src/types";
import Link from "next/link";
import Icon from "./DynmicIcon"; 

export function SocialLink({ socialLink }: { socialLink: SocialLinks[] }) {
  return socialLink &&  socialLink.map((item: SocialLinks) => {
    return (
      <Link key={item?.name} target="_blank" href={item.url}>
        <Button aria-label="Search article" variant={"ghost"} size={"icon"}>
          <Icon name={item?.name} className="h-4 w-4" />
        </Button>
      </Link>
    );
  });
}
