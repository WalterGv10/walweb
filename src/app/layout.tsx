import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightPillar from "@/components/LightPillar";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WalWeb | Walter García - Soluciones Web, Redes y Arquitectura",
  description: "Portafolio profesional de Walter García. Especialista en desarrollo web con Next.js, infraestructura de redes (Cisco/Ubiquiti) y diseño arquitectónico profesional en Guatemala.",
  keywords: ["Walter Garcia", "WalWeb", "Desarrollo Web Guatemala", "Redes Cisco Ubiquiti", "Arquitectura Planos", "Sistemas de Inventario", "Soporte Bancario", "MTA Microsoft"],
  authors: [{ name: "Walter García" }],
  openGraph: {
    title: "WalWeb | Soluciones Digitales & Arquitectura",
    description: "Transformo ideas en experiencias digitales de alto impacto y diseños arquitectónicos profesionales.",
    url: "https://walweb.com.gt",
    siteName: "WalWeb",
    images: [
      {
        url: "/walter.png",
        width: 800,
        height: 800,
        alt: "Walter García - WalWeb",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WalWeb | Walter García",
    description: "Desarrollo Web, Redes y Arquitectura.",
    images: ["/walter.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen relative`}
      >
        {/* Background Layer */}
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <LightPillar
            topColor="#1E40AF"
            bottomColor="#06B6D4"
            intensity={1.5}
            rotationSpeed={0.5}
            glowAmount={0.003}
            pillarWidth={5.0}
            pillarHeight={0.4}
            noiseIntensity={0.6}
            pillarRotation={20}
            interactive={true}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        {/* Legibility Overlay: Much more subtle now to keep the background vibrant */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

        <Header />
        <main className="relative z-10 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
