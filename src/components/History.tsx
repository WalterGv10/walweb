"use client";
import { CreditCard, ShieldCheck, Terminal, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function History() {
    const timeline = [
        {
            year: "2007",
            title: "El Origen",
            desc: "Mi primera PC, mueble y Encarta gracias a mi madre. La inversión que lo cambió todo. ¡Infinitas gracias por creer antes que nadie! ❤️",
            icon: "🏠",
        },
        {
            year: "2010",
            title: "Primeros Pasos",
            desc: "Gestión de conectividad y servicio al cliente en Café Internet.",
            icon: "🖥️",
        },
        {
            year: "2012",
            title: "LEC COMPUTACIÓN",
            desc: "Donde me certifiqué en Office, Fundamentos de Redes y Servidores. Experto en todos los S.O. de la época, CCTV y enlaces Ubiquiti. Infinitas gracias a mi mentor Selvin Argüello por impulsarme a ser un profesional, enseñándome con su ejemplo a estar siempre a la vanguardia y nunca dejar de aprender. Especialista en gestión de Windows Server 2008 R2/2012.",
            icon: "🖥️",
        },
        {
            year: "2019",
            title: "Corporación Tecnológica Bancaria",
            desc: "Soporte nacional de alto nivel a usuarios bancarios. Gestión de infraestructura crítica: WAN/LAN, telefonía IP, impresoras, CRMs y emulaciones. Administración de sistemas de cobro y plataformas sobre Windows Server 2012 y bases de datos.",
            icon: "🏦",
        },
        {
            year: "2022",
            title: "Especialista ATM",
            desc: "Reparación y mantenimiento de cajeros automáticos a nivel nacional bajo altos estándares.",
            icon: "💳",
        },
        {
            year: "Presente",
            title: "WalWeb & Arch",
            desc: "Fusionando tecnología y arquitectura. Soluciones digitales y planos profesionales.",
            icon: "🏗️",
        },
    ];

    return (
        <section id="history" className="py-16 md:py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
                <div className="text-center space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Trayectoria
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
                        Evolución técnica constante: de la conectividad local al soporte bancario nacional.
                    </p>
                </div>

                <div className="relative space-y-6 md:space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-xl shadow-xl shadow-blue-500/20 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className={`w-[calc(100%-4rem)] md:w-[45%] p-5 md:p-6 rounded-2xl border ${item.year === "2022" ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/10 bg-white/5'} backdrop-blur-md hover:bg-white/10 transition-all overflow-hidden relative group/card`}>
                                {item.year === "2022" && (
                                    <>
                                        <div className="absolute top-0 right-0 p-2 opacity-20">
                                            <CreditCard size={40} className="text-emerald-400 rotate-12" />
                                        </div>
                                        <div className="absolute top-2 right-4 flex gap-1">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse delay-75" />
                                        </div>
                                    </>
                                )}

                                <div className="flex items-center justify-between mb-1 md:mb-2 text-xs md:text-sm">
                                    <span className={`font-bold ${item.year === "2022" ? 'text-emerald-400' : 'text-cyan-400'}`}>{item.year}</span>
                                    {item.year === "2022" && (
                                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/20">
                                            <ShieldCheck size={10} className="text-emerald-400" />
                                            <span className="text-[8px] font-black text-emerald-400 uppercase">Secure Link</span>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 flex items-center gap-2">
                                    {item.title}
                                    {item.year === "2022" && <Terminal size={14} className="text-emerald-400/50" />}
                                </h3>

                                <p className="text-gray-300 text-[11px] md:text-sm leading-relaxed relative z-10">
                                    {item.desc}
                                </p>

                                {item.year === "2022" && (
                                    <div className="mt-3 pt-3 border-t border-emerald-500/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="h-1 w-12 bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ x: ["-100%", "100%"] }}
                                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                                    className="h-full w-1/2 bg-emerald-500"
                                                />
                                            </div>
                                            <span className="text-[8px] font-mono text-emerald-500/60 uppercase">Processing...</span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="w-3 h-1 bg-emerald-500/20 rounded-full" />
                                            <div className="w-3 h-1 bg-emerald-500/20 rounded-full" />
                                            <div className="w-3 h-1 bg-emerald-500/50 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
