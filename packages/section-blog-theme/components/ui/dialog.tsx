import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from 'lucide-react';

import { cn } from "@/utility/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "nx-fixed nx-inset-0 nx-z-50 nx-bg-black/80 nx-data-[state=open]:nx-animate-in data-[state=closed]:nx-animate-out data-[state=closed]:nx-fade-out-0 data-[state=open]:nx-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "nx-fixed nx-left-[50%] nx-top-[50%] nx-z-50 nx-grid nx-w-full nx-max-w-lg nx-translate-x-[-50%] nx-translate-y-[-50%] nx-gap-4 nx-border nx-bg-background nx-p-0 nx-shadow-lg nx-duration-200 data-[state=open]:nx-animate-in data-[state=closed]:nx-animate-out data-[state=closed]:nx-fade-out-0 data-[state=open]:nx-fade-in-0 data-[state=closed]:nx-zoom-out-95 data-[state=open]:nx-zoom-in-95 data-[state=closed]:nx-slide-out-to-left-1/2 data-[state=closed]:nx-slide-out-to-top-[48%] data-[state=open]:nx-slide-in-from-left-1/2 data-[state=open]:nx-slide-in-from-top-[48%] sm:nx-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="nx-absolute nx-right-4 nx-top-4 nx-rounded-sm nx-opacity-70 nx-ring-offset-background nx-transition-opacity hover:nx-opacity-100 focus:nx-outline-none focus:nx-ring-2 focus:nx-ring-ring focus:nx-ring-offset-2 disabled:nx-pointer-events-none data-[state=open]:nx-bg-accent data-[state=open]:nx-text-muted-foreground">
        <XIcon className="nx-h-4 nx-w-4" />
        <span className="nx-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "nx-flex nx-flex-col nx-space-y-1.5 nx-text-center sm:nx-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "nx-flex nx-flex-col-reverse sm:nx-flex-row sm:nx-justify-end sm:nx-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "nx-text-lg nx-font-semibold nx-leading-none nx-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("nx-text-sm nx-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
