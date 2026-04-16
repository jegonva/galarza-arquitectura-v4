import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Galarza | El Ciclo de Vida de tu Propiedad. Resuelto.",
  description:
    "El único motor de soluciones integrales en México que diseña, construye, urbaniza y mantiene tu proyecto desde el plano y no lo suelta nunca.",
  openGraph: {
    title: "Grupo Galarza | Motor de Soluciones 24/7",
    description: "Diseño, Construcción, Urbanización y Mantenimiento.",
    url: "https://galarzagroup.com",
    siteName: "Grupo Galarza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo Galarza Arquitectura y Mantenimiento",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import MeshGradient from "@/components/MeshGradient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <MeshGradient />
        <CustomCursor />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
