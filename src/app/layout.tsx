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
      <body className="relative">
        <NavBarItem />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top-right fixed button */}
          <div className="absolute top-8 right-5 z-50">
            <ModeToggle />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
