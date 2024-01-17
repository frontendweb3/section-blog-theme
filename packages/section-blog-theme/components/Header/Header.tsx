import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import type { Logo, Navigation, SocialLinks } from "@/src/types";
import Link from "next/link";
import NavigationItems from "@/components/Navigation/NavigationItems";
import NavigationItem from "@/components/Navigation/NavgationItem";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { SearchCommandDialog } from "@/components/Command/Command";
import { renderComponent } from "@/utility/render";

export function Header({
  Logo,
  PrimaryNavigation,
  socialLinks,
}: {
  Logo: Logo;
  PrimaryNavigation: Navigation[];
  socialLinks: SocialLinks[];
}) {
  return (
    <header className="nx-container print:nx-hidden nx-mt-3 nx-px-4 lg:nx-px-6 nx-py-8 nx-flex nx-gap-y-5 nx-justify-center nx-flex-col sm:nx-flex-row md:nx-justify-between nx-items-center nx-mx-auto">
      <Link
        aria-label="brand logo"
        target={Logo.target ? Logo.target : "_blank"}
        href={Logo.link ? Logo.link : "/"}
        className="nx-flex nx-flex-row nx-items-center nx-justify-between"
      >
        {renderComponent(Logo.logo)}
      </Link>

      <NavigationMenu className="nx-my-3 nx-flex nx-flex-wrap nx-justify-between nx-items-center nx-mx-auto md:nx-my-0">
        <NavigationMenuList className="nx-flex-wrap sm:nx-fle-row">
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

      <div className="nx-flex nx-flex-row nx-justify-between nx-gap-2 nx-items-center">
        <SearchCommandDialog />

        <ThemeToggle />

        {socialLinks &&
          socialLinks?.map((link) => (
            <SocialLink key={link.name} socialLink={link} />
          ))}
      </div>
    </header>
  );
}
