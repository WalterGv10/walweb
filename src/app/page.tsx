import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { StrategicVision } from "@/components/StrategicVision";
import { PageNavigation } from "@/components/ui/PageNavigation";

// Keep StrategicVision as the main hook after Hero
// Other sections are now on their own pages

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <StrategicVision />
      <PageNavigation nextPath="/servicios" nextLabel="Explorar Servicios" />
    </div>
  );
}
