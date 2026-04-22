// @ts-ignore
import "./globals.css";
import { ReactNode } from "react";
import LayoutComponent from "@/common/components/layout";

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <LayoutComponent>
          {children}
        </LayoutComponent>
      </body>
    </html>
  );
}
