import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Navigation } from "@/src/types";
import Link from "next/link";

const NavigationItem = ({ navigation }: { navigation: Navigation }) => {
  return (
    <NavigationMenuItem className="my-2 md:my-0">
      <Link href={navigation.href as string} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {navigation.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavigationItem;
