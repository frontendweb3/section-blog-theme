import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { Logo, Navigation } from "@/src/types";
import Link from "next/link";
import NavigationItem from "@/components/Navigation/NavgationItem";
import Image from "next/image";

export function Footer(
  { Logo, SecondaryNavigation }: {
    Logo: Logo;
    SecondaryNavigation: Navigation[];
  },
) {
  return (
    <footer className="px-4 lg:px-3 py-8 flex justify-between bg-green-400 flex-wrap flex-row md:justify-between items-center mx-auto max-w-screen-xl">
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

      <div
        className="my-3 flex justify-between items-center mx-auto md:my-0"
        id="mobile-menu-2"
      >
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
    </footer>
  );
}
