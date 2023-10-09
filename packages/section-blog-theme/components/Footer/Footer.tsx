import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItem from "@/components/Navigation/NavgationItem";
import Image from "next/image";
import { SocialLink } from "@/components/SocialLink/SocialLink";

export function Footer(
  { Logo, SecondaryNavigation, socialLinks }: {
    Logo: Logo;
    SecondaryNavigation: Navigation[]; socialLinks: SocialLinks[]
  },
) {
  return (
    <footer className="print:hidden container flex flex-wrap flex-row item-center justify-center my-5 p-5 mx-auto md:p-10 lg:flex-row divide-gray-400">
      <Link href="/" className="flex justify-center items-center">
        {Logo.ImageLightPath
          ? (
            <picture>
              <source
                srcSet={Logo.ImageDarkPath}
                media="(prefers-color-scheme:dark)"
              />
              <source
                srcSet={Logo.ImageLightPath}
                media="(prefers-color-scheme:dark)"
              />
              <Image
                width="34"
                height="34"
                src={Logo.ImageLightPath}
                alt="logo"
              />
            </picture>
          )
          : ""}
        {Logo.TextLogo
          ? (
            <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap !text-foreground dark:text-white">
              {Logo.TextLogo}
            </span>
          )
          : ""}
      </Link>

      <div className="my-3 flex justify-between items-center mx-auto md:my-0" >
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            {SecondaryNavigation.map((navigation: Navigation) => {
              return (
                <NavigationItem
                  key={navigation.title}
                  navigation={navigation}
                />
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex flex-row justify-between gap-2 items-center">

        {socialLinks && socialLinks?.map(link => <SocialLink key={link.name} socialLink={link} />)}

      </div>

    </footer>
  );
}
