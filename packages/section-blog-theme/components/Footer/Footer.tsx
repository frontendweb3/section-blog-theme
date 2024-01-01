import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItem from "@/components/Navigation/NavgationItem";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { renderComponent } from "@/utility/render";

export function Footer({
  Logo,
  SecondaryNavigation,
  socialLinks,
}: {
  Logo: Logo;
  SecondaryNavigation: Navigation[];
  socialLinks: SocialLinks[];
}) {
  return (
    <footer className="print:hidden container flex flex-wrap flex-row item-center justify-center my-5 p-5 mx-auto lg:flex-row divide-gray-400">
      <Link
        aria-label="brand logo"
        target={Logo.target ? Logo.target : "_blank"}
        href={Logo.link ? Logo.link : "/"}
        className="flex flex-row items-center justify-between text-black dark:text-white"
      >
        {renderComponent(Logo.logo)}
      </Link>

      <NavigationMenu className="my-3 flex flex-wrap justify-between items-center mx-auto md:my-0">
        <NavigationMenuList>
          {SecondaryNavigation.map((navigation: Navigation) => {
            return (
              <NavigationItem key={navigation.title} navigation={navigation} />
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-row justify-between gap-2 items-center">
        {socialLinks &&
          socialLinks?.map((link) => (
            <SocialLink key={link.name} socialLink={link} />
          ))}
      </div>
    </footer>
  );
}
