import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

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
        className={`${poppins.variable} ${plusJakartaSans.variable} ${instrumentSerif} antialiased`}
      >
        {/*  Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '264310256211065');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=264310256211065&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
