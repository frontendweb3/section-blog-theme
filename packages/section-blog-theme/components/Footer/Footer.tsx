import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItem from "@/components/Navigation/NavgationItem";
import { SocialLink } from "@/components/SocialLink/SocialLink";

export function Footer({ Logo, SecondaryNavigation, socialLinks }: { Logo: Logo; SecondaryNavigation: Navigation[]; socialLinks: SocialLinks[] }) {

  return (
    <footer className="print:hidden container flex flex-wrap flex-row item-center justify-center my-5 p-5 mx-auto lg:flex-row divide-gray-400">

     { Logo.TextLogo && <Link href="/" className="ml-2 self-center text-xl font-semibold whitespace-nowrap !text-foreground dark:text-white">
        {Logo.TextLogo}
      </Link>}

      <NavigationMenu className="my-3 flex flex-wrap justify-between items-center mx-auto md:my-0">
        <NavigationMenuList>
          {
            SecondaryNavigation.map((navigation: Navigation) => {
              return (
                <NavigationItem
                  key={navigation.title}
                  navigation={navigation}
                />
              );
            })
          }
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-row justify-between gap-2 items-center">

        {socialLinks && socialLinks?.map(link => <SocialLink key={link.name} socialLink={link} />)}

      </div>

    </footer>
  );
}
