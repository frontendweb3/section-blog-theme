import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItems from "@/components/Navigation/NavigationItems";
import NavigationItem from "@/components/Navigation/NavgationItem";
import Image from "next/image";
import { OramaSearch } from "@/plugins/Orama";
import { SocialLink } from "@/components/SocialLink/SocialLink";

export function Header({ Logo, PrimaryNavigation, socialLinks }: { Logo: Logo; PrimaryNavigation: Navigation[]; socialLinks: SocialLinks[]; }) {

  return (

    <header className="container print:hidden mt-3 px-4 lg:px-6 py-8 flex justify-center flex-wrap flex-row md:justify-between items-center mx-auto">

      <Link href="/" className="flex items-center">
        {
          Logo.ImageLightPath
            ? (
              <>
                <Image
                  className="block dark:hidden"
                  width="34"
                  height="34"
                  src={Logo.ImageDarkPath}
                  alt="logo"
                />
                <Image
                  className="hidden dark:block"
                  width="34"
                  height="34"
                  src={Logo.ImageLightPath}
                  alt="logo"
                />
              </>
            )
            : ""
        }
        {
          Logo.TextLogo
            ? (
              <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap !text-foreground dark:text-white">
                {Logo.TextLogo}
              </span>
            )
            : ""}
      </Link>

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

        <OramaSearch
          boost={{ title: 30, description: 15, content: 10 }}
          limitResults={10}
        />

        <ThemeToggle />

        {
          socialLinks && socialLinks?.map((link) => (<SocialLink key={link.name} socialLink={link} />))
        }

      </div>

    </header>
  );
}
