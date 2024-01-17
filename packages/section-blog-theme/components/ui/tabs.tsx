import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/utility/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "nx-inline-flex nx-h-9 nx-items-center nx-justify-center nx-rounded-lg nx-bg-muted nx-p-1 nx-text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "nx-inline-flex nx-items-center nx-justify-center nx-whitespace-nowrap nx-rounded-md nx-px-3 nx-py-1 nx-text-sm nx-font-medium nx-ring-offset-background nx-transition-all focus-visible:nx-outline-none focus-visible:nx-ring-2 focus-visible:nx-ring-ring focus-visible:nx-ring-offset-2 disabled:nx-pointer-events-none disabled:nx-opacity-50 data-[state=active]:nx-bg-background data-[state=active]:nx-text-foreground data-[state=active]:nx-shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "nx-mt-2 nx-ring-offset-background focus-visible:nx-outline-none focus-visible:nx-ring-2 focus-visible:nx-ring-ring focus-visible:nx-ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
