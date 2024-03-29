import { Button } from "@/components/ui/button";
import type { SocialLinks } from "@/src/types";
import Link from "next/link";
import Icon from "@/components/SocialLink/DynmicIcon";

export function SocialLink({ socialLink }: { socialLink: SocialLinks }) {
  return (
    <Link className={"nx-self-center"} key={socialLink.name} target="_blank" href={socialLink.url}>
      <Button aria-label="Search article" variant={"ghost"} size={"icon"}>
        <Icon name={socialLink.name} className="nx-h-5 nx-w-5" />
      </Button>
    </Link>
  );
}
