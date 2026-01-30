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
  metadataBase: new URL("https://walweb.com.gt"),
  title: "WalWeb | Soluciones Digitales que Funcionan",
  description: "Ayudo a que tu negocio, tienda o evento en Guatemala se vea profesional y atraiga clientes en internet con tecnología sencilla y efectiva.",
  keywords: ["Walter Garcia", "WalWeb", "Desarrollo Web Guatemala", "Redes Cisco Ubiquiti", "Arquitectura Planos", "Sistemas de Inventario", "Soporte Bancario", "MTA Microsoft"],
  authors: [{ name: "Walter García" }],
  openGraph: {
    title: "WalWeb | Soluciones Digitales que Funcionan",
    description: "Ayudo a que tu negocio o evento en Guatemala atraiga clientes con tecnología sencilla y diseño profesional.",
    url: "https://walweb.com.gt",
    siteName: "WalWeb",
    images: [
      {
        url: "/walter_pro.png",
        width: 800,
        height: 800,
        alt: "WalWeb - Soluciones Digitales",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WalWeb | Soluciones Digitales",
    description: "Tecnología sencilla para gente que trabaja en Guatemala.",
    images: ["/walter_pro.png"],
  },
  icons: {
    icon: [
      { url: "/wal-logo.png" },
      { url: "/wal-logo.png", sizes: "32x32" },
      { url: "/wal-logo.png", sizes: "16x16" },
    ],
    apple: "/wal-logo.png",
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
            intensity={1.2}
            rotationSpeed={0.4}
            glowAmount={0.003}
            pillarWidth={4.5}
            pillarHeight={0.3}
            noiseIntensity={0.3}
            pillarRotation={15}
            interactive={true}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        {/* Deep Ambient Gradient: Improved vignette and bottom fade */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        <Header />
        <main className="relative z-10 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
