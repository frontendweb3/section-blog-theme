import * as React from "react"

import { cn } from "@/utility/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "nx-flex nx-h-9 nx-w-full nx-rounded-md nx-border nx-border-input nx-bg-transparent nx-px-3 nx-py-1 nx-text-sm nx-shadow-sm nx-transition-colors file:nx-border-0 file:nx-bg-transparent file:nx-text-sm file:nx-font-medium placeholder:nx-text-muted-foreground focus-visible:nx-outline-none focus-visible:nx-ring-1 focus-visible:nx-ring-ring disabled:nx-cursor-not-allowed disabled:nx-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
