import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utility/utils"

const alertVariants = cva(
  "nx-relative nx-w-full nx-rounded-lg nx-border nx-px-4 nx-py-3 nx-text-sm [&>svg+div]:nx-translate-y-[-3px] [&>svg]:nx-absolute [&>svg]:nx-left-4 [&>svg]:nx-top-4 [&>svg]:nx-text-foreground [&>svg~*]:nx-pl-7",
  {
    variants: {
      variant: {
        default: "nx-bg-background nx-text-foreground",
        destructive:
          "nx-border-destructive/50 nx-text-destructive dark:nx-border-destructive [&>svg]:nx-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("nx-mb-1 nx-font-medium nx-leading-none nx-tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("nx-text-sm [&_p]:nx-leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
