import { NavBarItem } from "@/components/navbar/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBarItem />
        {children}
      </body>
    </html>
  );
}
