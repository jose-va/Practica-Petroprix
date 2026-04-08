// @ts-ignore
import "./globals.css";
import LayoutComponent from "@/common/components/PageLayoutComponent";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
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
