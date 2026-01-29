"use client";
import { motion } from "framer-motion";
import { Server, ShieldCheck, CheckCircle2, Globe } from "lucide-react";

export function TechExpertise() {
    const expertise = [
        {
            category: "Administración de Sistemas",
            icon: <Server className="text-blue-400" />,
            skills: [
                "Clonación de S.O. & Despliegue",
                "Virtualización de Entornos",
                "Active Directory & Dominios",
                "Optimización de Registro Windows",
                "Gestión de DNS & DHCP"
            ]
        },
        {
            category: "Infraestructura & Redes",
            icon: <Globe className="text-cyan-400" />,
            skills: [
                "Protocolos TCP/IP & LAN",
                "Configuración de Firewalls",
                "Cableado Estructurado Pro",
                "Infraestructura Cisco/Ubiquiti",
                "Seguridad & Antivirus"
            ]
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center space-y-3 md:space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Experticia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Verificada</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
                        Competencias técnicas avanzadas respaldadas por certificaciones oficiales de Microsoft e infraestructura real.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">

                    {/* Lado Izquierdo: Lista Detallada de Habilidades */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {expertise.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl"
                            >
                                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                    <div className="p-2.5 rounded-xl bg-white/5 text-blue-400">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">{group.category}</h3>
                                </div>
                                <ul className="space-y-2 md:space-y-3">
                                    {group.skills.map((skill, si) => (
                                        <li key={si} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400 group cursor-default">
                                            <CheckCircle2 size={14} className="text-blue-500/50 group-hover:text-cyan-400 transition-colors shrink-0" />
                                            <span className="group-hover:text-white transition-colors">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Lado Derecho: Visualización de la Certificación Microsoft */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[32px] md:rounded-[42px] blur opacity-20 group-hover:opacity-40 transition duration-1000" />

                            <div className="relative p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-black/40 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col">
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest border border-blue-500/30">
                                            Official Certificate
                                        </div>
                                        <ShieldCheck className="text-blue-500 w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight">Microsoft Technology Associate</h3>
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                        Networking Fundamentals (Examen 98-366).
                                        Infraestructura de red global y seguridad de sistemas.
                                    </p>

                                    <div className="pt-4 grid grid-cols-2 gap-3">
                                        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                                            <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">ID Verificación</p>
                                            <p className="text-xs md:text-sm font-mono text-blue-400">2RP-NUXA</p>
                                        </div>
                                        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                                            <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Expedición</p>
                                            <p className="text-xs md:text-sm font-mono text-blue-400">Nov 2014</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <p className="text-[10px] md:text-xs text-blue-300 italic text-center leading-tight">
                                        "Infraestructura sólida para soluciones web escalables."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
