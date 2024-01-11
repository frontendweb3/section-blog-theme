import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { ChevronRightIcon, CheckIcon, DotIcon} from 'lucide-react';

import { cn } from "@/utility/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "nx-flex nx-cursor-default nx-select-none nx-items-center nx-rounded-sm nx-px-2 nx-py-1.5 nx-text-sm nx-outline-none focus:nx-bg-accent data-[state=open]:nx-bg-accent",
      inset && "nx-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="nx-ml-auto nx-h-4 nx-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "nx-z-50 nx-min-w-[8rem] nx-overflow-hidden nx-rounded-md nx-border nx-bg-popover nx-p-1 nx-text-popover-foreground nx-shadow-lg data-[state=open]:nx-animate-in data-[state=closed]:nx-animate-out data-[state=closed]:nx-fade-out-0 data-[state=open]:nx-fade-in-0 data-[state=closed]:nx-zoom-out-95 data-[state=open]:nx-zoom-in-95 data-[side=bottom]:nx-slide-in-from-top-2 data-[side=left]:nx-slide-in-from-right-2 data-[side=right]:nx-slide-in-from-left-2 data-[side=top]:nx-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "nx-z-50 nx-min-w-[8rem] nx-overflow-hidden nx-rounded-md nx-border nx-bg-popover nx-p-1 nx-text-popover-foreground nx-shadow-md",
        "data-[state=open]:nx-animate-in data-[state=closed]:nx-animate-out data-[state=closed]:nx-fade-out-0 data-[state=open]:nx-fade-in-0 data-[state=closed]:nx-zoom-out-95 data-[state=open]:nx-zoom-in-95 data-[side=bottom]:nx-slide-in-from-top-2 data-[side=left]:nx-slide-in-from-right-2 data-[side=right]:nx-slide-in-from-left-2 data-[side=top]:nx-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "nx-relative nx-flex nx-cursor-default nx-select-none nx-items-center nx-rounded-sm nx-px-2 nx-py-1.5 nx-text-sm nx-outline-none nx-transition-colors focus:nx-bg-accent focus:nx-text-accent-foreground data-[disabled]:nx-pointer-events-none data-[disabled]:nx-opacity-50",
      inset && "nx-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "nx-relative nx-flex nx-cursor-default nx-select-none nx-items-center nx-rounded-sm nx-py-1.5 nx-pl-8 nx-pr-2 nx-text-sm nx-outline-none nx-transition-colors focus:nx-bg-accent focus:nx-text-accent-foreground data-[disabled]:nx-pointer-events-none data-[disabled]:nx-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="nx-absolute nx-left-2 nx-flex nx-h-3.5 nx-w-3.5 nx-items-center nx-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="nx-h-4 nx-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "nx-relative nx-flex nx-cursor-default nx-select-none nx-items-center nx-rounded-sm nx-py-1.5 nx-pl-8 nx-pr-2 nx-text-sm nx-outline-none nx-transition-colors focus:nx-bg-accent focus:nx-text-accent-foreground data-[disabled]:nx-pointer-events-none data-[disabled]:nx-opacity-50",
      className
    )}
    {...props}
  >
    <span className="nx-absolute nx-left-2 nx-flex nx-h-3.5 nx-w-3.5 nx-items-center nx-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotIcon className="nx-h-4 nx-w-4 nx-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold",
      inset && "nx-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("nx--mx-1 nx-my-1 nx-h-px nx-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("nx-ml-auto nx-text-xs nx-tracking-widest nx-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
