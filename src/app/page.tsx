import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { StrategicVision } from "@/components/StrategicVision";
import { Services } from "@/components/Services";
import { WorldCup2026 } from "@/components/WorldCup2026";
import { TechExpertise } from "@/components/TechExpertise";
import { CommercialBanner } from "@/components/CommercialBanner";

// Lazy loading below-the-fold components for better FID/TBT
const ArchWorkflow = dynamic(() => import("@/components/ArchWorkflow").then(mod => mod.ArchWorkflow));
const History = dynamic(() => import("@/components/History").then(mod => mod.History));
const DigitalCVAction = dynamic(() => import("@/components/DigitalCVAction").then(mod => mod.DigitalCVAction));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <StrategicVision />
      <Services />
      <WorldCup2026 />
      <TechExpertise />
      <CommercialBanner />
      <ArchWorkflow />
      <History />
      <DigitalCVAction />
      <Contact />
    </div>
  );
}
