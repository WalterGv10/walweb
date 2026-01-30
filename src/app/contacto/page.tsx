import { Contact } from "@/components/Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | WalWeb",
    description: "¿Listo para modernizar tu negocio? Hablemos de tu próximo proyecto digital en Guatemala.",
};

export default function ContactPage() {
    return (
        <div className="w-full pt-20">
            <Contact />
        </div>
    );
}
