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
  title: "Competencia de Matemáticas Intercolegial | CMI",
  description:
    "Bienvenido a la Competencia de Matemáticas Intercolegial (CMI). ¡Descubre cómo puedes participar, potenciar tus habilidades matemáticas y competir con estudiantes de colegios de varios paises!",
  keywords: [
    "CMI",
    "matemáticas",
    "matematica ecuador",
    "america latina",
    "competencia de matemáticas",
    "competencia",
    "olimpiada",
    "competencia intercolegial",
    "competencia internacional",
    "olimpiada internacional",
    "estudiantes",
    "colegios",
    "participación",
    "ecuador",
    "panamá",
    "venezuela",
    "chile",
    "republica dominicana",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Competencia de Matemáticas Intercolegial | CMI",
    description:
      "Bienvenido a la Competencia de Matemáticas Intercolegial (CMI). ¡Descubre cómo puedes participar, potenciar tus habilidades matemáticas y competir con estudiantes de colegios de varios paises!",
    type: "website",
    locale: "es_ES",
    siteName: "Competencia de Matemáticas Intercolegial",
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
        <main className="mt-5 md:mt-12 flex-1">
          <div className="flex justify-center">
            <div className="w-full md:w-11/12 justify-center">{children}</div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
