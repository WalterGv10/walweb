import { ArchWorkflow } from "@/components/ArchWorkflow";
import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArchHero } from "@/components/ArchHero";
import { ArchServices } from "@/components/ArchServices";
import { ArchBenefits } from "@/components/ArchBenefits";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arquitectura y Diseño 3D | WalWeb",
    description: "Servicios de modelado 3D, documentación técnica y planos de ejecución con precisión arquitectónica.",
};

export default function ArchitecturePage() {
    return (
        <div className="w-full">
            <ArchHero />
            <ArchServices />
            <ArchBenefits />
            <ArchWorkflow />
            <PageNavigation nextPath="/trayectoria" nextLabel="Mi Trayectoria" />
        </div>
    );
}
