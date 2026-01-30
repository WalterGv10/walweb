import { Services } from "@/components/Services";
import { TechExpertise } from "@/components/TechExpertise";
import { CommercialBanner } from "@/components/CommercialBanner";
import { DigitalCVAction } from "@/components/DigitalCVAction";

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
