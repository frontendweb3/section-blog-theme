import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utility/utils"

const buttonVariants = cva(
  "nx-inline-flex nx-items-center nx-justify-center nx-whitespace-nowrap nx-rounded-md nx-text-sm nx-font-medium nx-transition-colors focus-visible:nx-outline-none focus-visible:nx-ring-1 focus-visible:nx-ring-ring disabled:nx-pointer-events-none disabled:nx-opacity-50",
  {
    variants: {
      variant: {
        default:
          "nx-bg-primary nx-text-primary-foreground nx-shadow hover:nx-bg-primary/90",
        destructive:
          "nx-bg-destructive nx-text-destructive-foreground nx-shadow-sm hover:nx-bg-destructive/90",
        outline:
          "nx-border nx-border-input nx-bg-background nx-shadow-sm hover:nx-bg-accent hover:nx-text-accent-foreground",
        secondary:
          "nx-bg-secondary nx-text-secondary-foreground nx-shadow-sm hover:nx-bg-secondary/80",
        ghost: "hover:nx-bg-accent hover:nx-text-accent-foreground",
        link: "nx-text-primary nx-underline-offset-4 hover:nx-underline",
      },
      size: {
        default: "nx-h-9 nx-px-4 nx-py-2",
        sm: "nx-h-8 nx-rounded-md nx-px-3 nx-text-xs",
        lg: "nx-h-10 nx-rounded-md nx-px-8",
        icon: "nx-h-9 nx-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
