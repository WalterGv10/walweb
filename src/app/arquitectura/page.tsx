import { ArchWorkflow } from "@/components/ArchWorkflow";
import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArchHero } from "@/components/ArchHero";
import { ArchServices } from "@/components/ArchServices";
import { ArchBenefits } from "@/components/ArchBenefits";
import { ArchBackground } from "@/components/ArchBackground";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arquitectura y Diseño 3D | WalWeb",
    description: "Servicios de modelado 3D, documentación técnica y planos de ejecución con precisión arquitectónica.",
};

export default function ArchitecturePage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Background Grid - Global for the entire page */}
            <ArchBackground />

            {/* Content Wrapper */}
            <div className="relative z-10">
                <ArchHero />
                <ArchServices />
                <ArchBenefits />
                <ArchWorkflow />
                <PageNavigation nextPath="/contacto" nextLabel="Hablemos de tu Proyecto" />
            </div>
        </div>
    );
}
