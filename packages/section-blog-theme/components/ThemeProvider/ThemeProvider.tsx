import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode} from "react";

export function ThemeProvider({children }: {children: ReactNode;}) {

  
  return (
    <NextThemesProvider enableColorScheme={true} attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </NextThemesProvider>
  );
}
