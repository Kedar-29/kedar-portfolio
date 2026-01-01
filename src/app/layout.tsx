import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { NavBarItem } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBarItem />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
