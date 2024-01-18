import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {

  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="nx-h-[1.2rem] nx-w-[1.2rem] nx-rotate-0 nx-scale-100 nx-transition-all dark:nx-rotate-90 dark:nx-scale-0" />
          <MoonIcon className="nx-absolute nx-h-[1.2rem] nx-w-[1.2rem] nx-rotate-90 nx-scale-0 nx-transition-all dark:nx-rotate-0 dark:nx-scale-100" />
          <span className="nx-sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}