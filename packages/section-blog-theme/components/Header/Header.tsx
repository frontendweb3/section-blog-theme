import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItems from "@/components/Navigation/NavigationItems";
import NavigationItem from "@/components/Navigation/NavgationItem";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { SearchCommandDialog } from "@/components/Command/Command";

export function Header({ Logo, PrimaryNavigation, socialLinks }: { Logo: Logo; PrimaryNavigation: Navigation[]; socialLinks: SocialLinks[]; }) {

  return (

    <header className="container print:hidden mt-3 px-4 lg:px-6 py-8 flex justify-center flex-wrap flex-row md:justify-between items-center mx-auto">


      {Logo.TextLogo && <Link href="/" className="ml-2 self-center text-xl font-semibold whitespace-nowrap !text-foreground dark:text-white">
        {Logo.TextLogo}
      </Link>}

      <NavigationMenu className="my-3 flex flex-wrap justify-between items-center mx-auto md:my-0">

        <NavigationMenuList>

          {

            PrimaryNavigation.map((navigation: Navigation) => {
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
            })
          }

        </NavigationMenuList>

      </NavigationMenu>


      <div className="flex flex-row justify-between gap-2 items-center">

        <SearchCommandDialog />

        <ThemeToggle />

        {
          socialLinks && socialLinks?.map((link) => (<SocialLink key={link.name} socialLink={link} />))
        }

      </div>

    </header>
  );
}
