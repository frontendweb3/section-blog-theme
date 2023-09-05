import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/Navigation/ListItem"
import type { Navigation, SubNavigation } from "@/src/types"

const NavigationItems = ({ navigation }:{ navigation:Navigation}) => {

  return (
    <NavigationMenuItem className="my-2 md:my-0">
      <NavigationMenuTrigger>{navigation.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          
          {
            navigation?.subNavigation && navigation?.subNavigation.map((component:SubNavigation) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))

          }
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationItems;
