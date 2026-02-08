import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightPillar from "@/components/LightPillar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { StarField } from "@/components/ui/StarField";

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
  title: "WalWeb | Innovación Digital & Soluciones Tecnológicas",
  description: "Si tu propósito es innovar o hacerte la vida más fácil, estás en el lugar correcto. Especialista en Desarrollo Web, UI/UX y Consultoría TI en Guatemala.",
  keywords: ["Walter Garcia", "WalWeb", "Desarrollo Web Guatemala", "Software Guatemala", "Diseño UX/UI", "Sistemas a Medida", "Consultoría TI"],
  authors: [{ name: "Walter García" }],
  openGraph: {
    title: "WalWeb | Innovación Digital & Soluciones Tecnológicas",
    description: "Transformamos ideas en realidad digital con tecnología disruptiva y diseño premium.",
    url: "https://walweb.com.gt",
    siteName: "WalWeb",
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WalWeb | Innovación Digital",
    description: "Desarrollo de Software y Diseño Estratégico para impulsar tu visión.",
  },
  // icons: {
  //   icon: [
  //     { url: "/wal-logo.png" },
  //     { url: "/wal-logo.png", sizes: "32x32" },
  //     { url: "/wal-logo.png", sizes: "16x16" },
  //   ],
  //   apple: "/wal-logo.png",
  // },
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
            topColor="#7c3aed" /* Purple-600 */
            bottomColor="#22d3ee" /* Cyan-400 */
            intensity={1.3}
            rotationSpeed={0.5}
            glowAmount={0.004}
            pillarWidth={5.0}
            pillarHeight={0.35}
            noiseIntensity={0.2}
            pillarRotation={20}
            interactive={true}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        {/* Deep Ambient Gradient: Improved vignette and bottom fade */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Stars Effect */}
        <StarField />

        <Header />
        <main className="relative z-10 w-full h-full">
          {children}
        </main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
