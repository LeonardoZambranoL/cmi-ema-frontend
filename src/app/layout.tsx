import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //dark:bg-slate-800
  return (
    <html lang="en" className="h-full">
      <body className={`sm:h-full ${inter.className}`}>
        <Navbar />
        <main className="md:mt-12 flex-1">
          <div className="flex justify-center">
            <div className="w-full md:w-11/12 justify-center">{children}</div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
