
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { PersonalStats } from "@/components/PersonalStats";
import { TechExpertise } from "@/components/TechExpertise";
import { ArchWorkflow } from "@/components/ArchWorkflow";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <PersonalStats />
      <TechExpertise />
      <ArchWorkflow />
      <History />
      <Contact />
    </div>
  );
}
