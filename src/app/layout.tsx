import { NavBarItem } from "@/components/navbar/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { ModeToggle } from "@/components/darkmode/darkmodebutton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavBarItem />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
