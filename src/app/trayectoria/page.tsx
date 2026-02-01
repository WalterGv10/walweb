import { History } from "@/components/History";
import { PersonalStats } from "@/components/PersonalStats";
import { PageNavigation } from "@/components/ui/PageNavigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Walter García - Trayectoria | WalWeb",
    description: "Mi historia profesional: desde cableado estructurado hasta desarrollo de software e inteligencia artificial. Conoce mi experiencia.",
};

export default function TrayectoriaPage() {
    return (
        <div className="w-full pt-20">
            <History />
            <PersonalStats />
            <PageNavigation nextPath="/trabajo" nextLabel="Ver Mi Trabajo" />
        </div>
    );
}
