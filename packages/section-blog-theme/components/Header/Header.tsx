import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItems from "@/components/Navigation/NavigationItems";
import NavigationItem from "@/components/Navigation/NavgationItem";
import Image from "next/image";
import { OramaSearch } from "@/plugins/Orama";
import { SocialLink } from "@/components/SocialLink/SocialLink";

export function Header(
  { Logo, PrimaryNavigation, socialLinks }: {
    Logo: Logo;
    PrimaryNavigation: Navigation[];
    socialLinks: SocialLinks[];
  },
) {
  return (
    <header className="container print:hidden mt-3 px-4 lg:px-6 py-8 flex justify-center flex-wrap flex-row md:justify-between items-center mx-auto max-w-screen-xl">
      <Link href="/" className="flex items-center">
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

      <div
        className="my-3 flex justify-between items-center mx-auto md:my-0"
        id="mobile-menu-2"
      >
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            {PrimaryNavigation.map((navigation: Navigation) => {
              if (navigation.subNav === true) {
                return (
                  <NavigationItems
                    key={navigation.title}
                    navigation={navigation}
                  />
                );
              }
              if (navigation.href !== undefined) {
                return (
                  <NavigationItem
                    key={navigation.title}
                    navigation={navigation}
                  />
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex flex-row justify-between gap-2 items-center">
        <OramaSearch
          boost={{ title: 30, description: 15, content: 10 }}
          limitResults={10}
        />
        <ThemeToggle />

        {socialLinks &&
          socialLinks?.map((link) => (
            <SocialLink key={link.name} socialLink={link} />
          ))}
      </div>
    </header>
  );
}
