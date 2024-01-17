import * as React from "react";
import { cn } from "@/utility/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "nx-block nx-select-none nx-space-y-1 nx-rounded-md nx-p-3 nx-leading-none nx-no-underline nx-outline-none nx-transition-colors hover:nx-bg-accent hover:nx-text-accent-foreground focus:nx-bg-accent focus:nx-text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="nx-text-sm nx-font-medium nx-leading-none">{title}</div>
          <p className="nx-line-clamp-2 nx-text-sm nx-leading-snug nx-text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { ListItem };
