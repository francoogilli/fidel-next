import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fidel: Sistema Web de Gestión para Empresas",
  description:
    "Fidel es un sistema avanzado de gestión empresarial diseñado para optimizar procesos y mejorar la productividad.",
  keywords: [
    "Fidel",
    "Sistema de Gestión",
    "Gestión Empresarial",
    "Productividad",
  ],
  openGraph: {
    title: "Fidel: Sistema Web de Gestión para Empresas",
    description:
      "Optimiza los procesos de tu empresa con Fidel, el sistema web de gestión empresarial.",
    url: "https://fidel.com.ar/",
    images: [
      {
        url: "https://fidel.com.ar/Content/Idea/images/logo_red.png",
        alt: "Fidel - Sistema Web de Gestión",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} ${plusJakartaSans.variable} ${instrumentSerif}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
