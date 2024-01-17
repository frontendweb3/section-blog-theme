import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/utility/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "nx-z-50 nx-overflow-hidden nx-rounded-md nx-bg-primary nx-px-3 nx-py-1.5 nx-text-xs nx-text-primary-foreground nx-animate-in nx-fade-in-0 nx-zoom-in-95 data-[state=closed]:nx-animate-out data-[state=closed]:nx-fade-out-0 data-[state=closed]:nx-zoom-out-95 data-[side=bottom]:nx-slide-in-from-top-2 data-[side=left]:nx-slide-in-from-right-2 data-[side=right]:nx-slide-in-from-left-2 data-[side=top]:nx-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
