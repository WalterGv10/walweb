import { Services } from "@/components/Services";
import { TechExpertise } from "@/components/TechExpertise";
import { CommercialBanner } from "@/components/CommercialBanner";
import { DigitalCVAction } from "@/components/DigitalCVAction";
import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArchBackground } from "@/components/ArchBackground";
import { ManualsSection } from "@/components/ManualsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios Digitales y Tech | WalWeb",
    description: "Desarrollo web, apps para quinielas, automatización de negocios e integración de IA. Tecnología para gente que trabaja.",
};

export default function ServicesPage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Background Grid */}
            <ArchBackground />

            <div className="relative z-10">
                <Services />
                <ManualsSection />
                <TechExpertise />
                <CommercialBanner />
                <DigitalCVAction />
                <PageNavigation nextPath="/trayectoria" nextLabel="Ver mi Trayectoria" />
            </div>
        </div>
    );
}
