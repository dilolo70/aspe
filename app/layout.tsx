import "./globals.css";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/Section/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acceuil | Associations pour la prmotion de l'excelence",
  description:
    " Ceci est est le site de l'association by Sorci Dgit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "antialiased bg-white dark:bg-black text-primary width-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navigation />
          <div
            className={
              // "px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[1100px] mx-auto"
               " "
            }
          >
            {children}
          </div>
          <FooterSection/>

        </ThemeProvider>
      </body>
    </html>
  );
}
