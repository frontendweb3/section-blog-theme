import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import type { Logo, Navigation } from "@/src/types";
import Link from "next/link";
import NavigationItems from "@/components/Navigation/NavigationItems";
import NavigationItem from "@/components/Navigation/NavgationItem";
import Image from "next/image";

export function Header(
  { Logo, PrimaryNavigation }: { Logo: Logo; PrimaryNavigation: Navigation[] },
) {
  return (
    <header className="px-4 lg:px-6 py-4 flex justify-center flex-wrap flex-row md:justify-between items-center mx-auto max-w-screen-xl">
      <Link href="/" className="flex items-center">
        {Logo.ImageLightPath
          ? (
            <Image
              width="34"
              height="34"
              src={Logo.ImageLightPath}
              alt="logo"
            />
          )
          : ""}
        {Logo.TextLogo
          ? (
            <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {Logo.TextLogo}
            </span>
          )
          : ""}
      </Link>

      <nav
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
      </nav>

      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
