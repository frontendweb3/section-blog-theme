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
  { Logo, SecondaryNavigation,socialLinks }: {
    Logo: Logo;
    SecondaryNavigation: Navigation[]; socialLinks: SocialLinks[]
  },
) {
  return (
    <footer className="container flex flex-row item-center justify-between my-5 p-5 mx-auto md:p-10 lg:flex-row divide-gray-400">

      <Link href="/" className="flex items-center">
        {
          Logo.ImageLightPath
            ? (
              <Image
                width="34"
                height="34"
                src={Logo.ImageLightPath}
                alt="logo"
              />
            )
            : ""
        }
        {
          Logo.TextLogo
            ? (
              <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                {Logo.TextLogo}
              </span>
            )
            : ""
        }
      </Link>

      <div className="self-center py-6 space-y-4 text-center mx-auto sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-center" id="mobile-menu-2" >
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

      <div className="flex flex-row item-center justify-between pt-6 lg:pt-0">

        {socialLinks && socialLinks?.map(link=> <SocialLink socialLink={link} />)}
 
      </div>

    </footer>
  );
}
