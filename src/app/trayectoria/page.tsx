import { History } from "@/components/History";
import { ArchWorkflow } from "@/components/ArchWorkflow";
import { PersonalStats } from "@/components/PersonalStats";

export default function TrayectoriaPage() {
    return (
        <div className="w-full pt-20">
            <History />
            <PersonalStats />
            <ArchWorkflow />
        </div>
    );
}
