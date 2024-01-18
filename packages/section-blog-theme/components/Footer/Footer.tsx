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
    <footer className="print:nx-hidden nx-container nx-flex nx-flex-wrap nx-flex-row nx-item-center nx-justify-center nx-my-5 nx-p-5 nx-mx-auto lg:nx-flex-row nx-divide-gray-400">
      <Link
        aria-label="brand logo"
        target={Logo.target ? Logo.target : "_blank"}
        href={Logo.link ? Logo.link : "/"}
        className="nx-flex nx-flex-row nx-items-center nx-justify-between"
      >
        {renderComponent(Logo.logo)}
      </Link>

      <NavigationMenu className="nx-my-3 nx-flex nx-flex-wrap nx-justify-between nx-items-center nx-mx-auto md:nx-my-0">
        <NavigationMenuList>
          {SecondaryNavigation.map((navigation: Navigation) => {
            return (
              <NavigationItem key={navigation.title} navigation={navigation} />
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="nx-flex nx-flex-row nx-justify-between nx-gap-2 nx-items-center">
        {socialLinks &&
          socialLinks?.map((link) => (
            <SocialLink key={link.name} socialLink={link} />
          ))}
      </div>
    </footer>
  );
}
