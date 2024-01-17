import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/Navigation/ListItem";
import type { Navigation, SubNavigation } from "@/src/types";

const NavigationItems = ({ navigation }: { navigation: Navigation }) => {
  return (
    <NavigationMenuItem className="nx-my-2 md:nx-my-0">
      <NavigationMenuTrigger>{navigation.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="nx-grid nx-w-[400px] nx-gap-3 nx-p-4 md:nx-w-[500px] md:nx-grid-cols-2 lg:nx-w-[600px]">
          {navigation?.subNavigation &&
            navigation?.subNavigation.map((component: SubNavigation) => (
              <ListItem key={component.title} title={component.title} href={component.href}>
                {component.description}
              </ListItem>
            ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationItems;
