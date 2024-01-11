import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { SearchIcon } from "lucide-react";

import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/utility/utils"
import { Dialog, DialogContent } from "@/components//ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "nx-flex nx-h-full nx-w-full nx-flex-col nx-overflow-hidden nx-rounded-md nx-bg-popover nx-text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="nx-overflow-hidden nx-p-0">
        <Command className="[&_[cmdk-group-heading]]:nx-px-2 [&_[cmdk-group-heading]]:nx-font-medium [&_[cmdk-group-heading]]:nx-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:nx-pt-0 [&_[cmdk-group]]:nx-px-2 [&_[cmdk-input-wrapper]_svg]:nx-h-5 [&_[cmdk-input-wrapper]_svg]:nx-w-5 [&_[cmdk-input]]:nx-h-12 [&_[cmdk-item]]:nx-px-2 [&_[cmdk-item]]:nx-py-3 [&_[cmdk-item]_svg]:nx-h-5 [&_[cmdk-item]_svg]:nx-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="nx-flex nx-items-center nx-border-b nx-px-3" cmdk-input-wrapper="">
    <SearchIcon className="nx-mr-2 nx-h-4 nx-w-4 nx-shrink-0 nx-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "nx-flex nx-h-10 nx-w-full nx-rounded-md nx-bg-transparent nx-py-3 nx-text-sm nx-outline-none placeholder:nx-text-muted-foreground disabled:nx-cursor-not-allowed disabled:nx-opacity-50",
        className
      )}
      {...props}
    />
  </div>
)) 

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("nx-max-h-[300px] nx-overflow-y-auto nx-overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="nx-py-6 nx-text-center nx-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "nx-overflow-hidden nx-p-1 nx-text-foreground [&_[cmdk-group-heading]]:nx-px-2 [&_[cmdk-group-heading]]:nx-py-1.5 [&_[cmdk-group-heading]]:nx-text-xs [&_[cmdk-group-heading]]:nx-font-medium [&_[cmdk-group-heading]]:nx-text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("nx--mx-1 nx-h-px nx-bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "nx-relative nx-flex nx-cursor-default nx-select-none nx-items-center nx-rounded-sm nx-px-2 nx-py-1.5 nx-text-sm nx-outline-none aria-selected:nx-bg-accent aria-selected:nx-text-accent-foreground data-[disabled]:nx-pointer-events-none data-[disabled]:nx-opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "nx-ml-auto nx-text-xs nx-tracking-widest nx-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
