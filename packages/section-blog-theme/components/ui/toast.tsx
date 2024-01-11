import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utility/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "nx-fixed nx-top-0 nx-z-[100] nx-flex nx-max-h-screen nx-w-full nx-flex-col-reverse nx-p-4 sm:nx-bottom-0 sm:nx-right-0 sm:nx-top-auto sm:nx-flex-col md:nx-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "nx-group nx-pointer-events-auto nx-relative nx-flex nx-w-full nx-items-center nx-justify-between nx-space-x-2 nx-overflow-hidden nx-rounded-md nx-border nx-p-4 nx-pr-6 nx-shadow-lg nx-transition-all data-[swipe=cancel]:nx-translate-x-0 data-[swipe=end]:nx-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:nx-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:nx-transition-none data-[state=open]:nx-animate-in data-[state=closed]:nx-animate-out data-[swipe=end]:nx-animate-out data-[state=closed]:nx-fade-out-80 data-[state=closed]:nx-slide-out-to-right-full data-[state=open]:nx-slide-in-from-top-full data-[state=open]:sm:nx-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "nx-border nx-bg-background nx-text-foreground",
        destructive:
          "nx-destructive nx-group nx-border-destructive nx-bg-destructive nx-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "nx-inline-flex nx-h-8 nx-shrink-0 nx-items-center nx-justify-center nx-rounded-md nx-border nx-bg-transparent nx-px-3 nx-text-sm nx-font-medium nx-transition-colors hover:nx-bg-secondary focus:nx-outline-none focus:nx-ring-1 focus:nx-ring-ring disabled:nx-pointer-events-none disabled:nx-opacity-50 group-[.destructive]:nx-border-muted/40 group-[.destructive]:hover:nx-border-destructive/30 group-[.destructive]:hover:nx-bg-destructive group-[.destructive]:hover:nx-text-destructive-foreground group-[.destructive]:focus:nx-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "nx-absolute nx-right-1 nx-top-1 nx-rounded-md nx-p-1 nx-text-foreground/50 nx-opacity-0 nx-transition-opacity hover:nx-text-foreground focus:nx-opacity-100 focus:nx-outline-none focus:nx-ring-1 group-hover:nx-opacity-100 group-[.destructive]:nx-text-red-300 group-[.destructive]:hover:nx-text-red-50 group-[.destructive]:focus:nx-ring-red-400 group-[.destructive]:focus:nx-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <Cross2Icon className="nx-h-4 nx-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("nx-text-sm nx-font-semibold [&+div]:nx-text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("nx-text-sm nx-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
