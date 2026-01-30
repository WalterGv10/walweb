import { Services } from "@/components/Services";
import { TechExpertise } from "@/components/TechExpertise";
import { CommercialBanner } from "@/components/CommercialBanner";
import { DigitalCVAction } from "@/components/DigitalCVAction";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios Digitales y Tech | WalWeb",
    description: "Desarrollo web, apps para quinielas, automatización de negocios e integración de IA. Tecnología para gente que trabaja.",
};

export default function ServicesPage() {
    return (
        <div className="w-full pt-20">
            <Services />
            <TechExpertise />
            <CommercialBanner />
            <DigitalCVAction />
        </div>
    );
}
