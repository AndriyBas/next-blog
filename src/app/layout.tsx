import MainNavigation from "@/components/MainNavigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding with Andrii",
  description:
    "Blog about best coding practices. Make the world better with software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        <main>{children}</main>
        <div id="notifications"></div>
      </body>
    </html>
  );
}
