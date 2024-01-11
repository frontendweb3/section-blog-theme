import * as React from "react"
import { ChevronDown } from 'lucide-react';
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/utility/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "nx-relative nx-z-10 nx-flex nx-max-w-max nx-flex-1 nx-items-center nx-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "nx-group nx-flex nx-flex-1 nx-list-none nx-items-center nx-justify-center nx-space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "nx-group nx-inline-flex nx-h-9 nx-w-max nx-items-center nx-justify-center nx-rounded-md nx-bg-background nx-px-4 nx-py-2 nx-text-sm nx-font-medium nx-transition-colors hover:nx-bg-accent hover:nx-text-accent-foreground focus:nx-bg-accent focus:nx-text-accent-foreground focus:nx-outline-none disabled:nx-pointer-events-none disabled:nx-opacity-50 data-[active]:nx-bg-accent/50 data-[state=open]:nx-bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "nx-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="nx-relative nx-top-[1px] nx-ml-1 nx-h-3 nx-w-3 nx-transition nx-duration-300 group-data-[state=open]:nx-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "nx-left-0 nx-top-0 nx-w-full data-[motion^=from-]:nx-animate-in data-[motion^=to-]:nx-animate-out data-[motion^=from-]:nx-fade-in data-[motion^=to-]:nx-fade-out data-[motion=from-end]:nx-slide-in-from-right-52 data-[motion=from-start]:nx-slide-in-from-left-52 data-[motion=to-end]:nx-slide-out-to-right-52 data-[motion=to-start]:nx-slide-out-to-left-52 md:nx-absolute md:nx-w-auto nx-",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("nx-absolute nx-left-0 nx-top-full nx-flex nx-justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "nx-origin-top-center nx-relative nx-mt-1.5 nx-h-[var(--radix-navigation-menu-viewport-height)] nx-w-full nx-overflow-hidden nx-rounded-md nx-border nx-bg-popover nx-text-popover-foreground nx-shadow data-[state=open]:nx-animate-in data-[state=closed]:nx-animate-out data-[state=closed]:nx-zoom-out-95 data-[state=open]:nx-zoom-in-90 md:nx-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "nx-top-full nx-z-[1] nx-flex nx-h-1.5 nx-items-end nx-justify-center nx-overflow-hidden data-[state=visible]:nx-animate-in data-[state=hidden]:nx-animate-out data-[state=hidden]:nx-fade-out data-[state=visible]:nx-fade-in",
      className
    )}
    {...props}
  >
    <div className="nx-relative nx-top-[60%] nx-h-2 nx-w-2 nx-rotate-45 nx-rounded-tl-sm nx-bg-border nx-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
