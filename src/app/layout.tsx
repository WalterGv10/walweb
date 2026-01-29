import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightPillar from "@/components/LightPillar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WalWeb - LightPillar Project",
  description: "A modern web application with dynamic background effects.",
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
            glowAmount={0.002}
            pillarWidth={5.3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        {/* Legibility Overlay: Subtle vignette/darkening to make text pop */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black/40 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />

        <main className="relative z-10 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
