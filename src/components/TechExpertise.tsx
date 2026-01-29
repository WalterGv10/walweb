"use client";
import { motion } from "framer-motion";
import { Server, ShieldCheck, MonitorCog, Cpu, Globe, CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
        <section className="py-24 px-4 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Experticia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Verificada</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Competencias técnicas avanzadas respaldadas por certificaciones oficiales de Microsoft.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Lado Izquierdo: Lista Detallada de Habilidades */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {expertise.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-2xl bg-white/5 text-blue-400">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {group.skills.map((skill, si) => (
                                        <li key={si} className="flex items-center gap-3 text-sm text-gray-400 group cursor-default">
                                            <CheckCircle2 size={16} className="text-blue-500/50 group-hover:text-cyan-400 transition-colors" />
                                            <span className="group-hover:text-white transition-colors">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Lado Derecho: Visualización de la Certificación Microsoft */}
                    <div className="lg:col-span-5 h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative group h-full"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[42px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

                            <div className="relative h-full p-6 rounded-[40px] bg-black/40 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-start">
                                        <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/30">
                                            Official Certificate
                                        </div>
                                        <ShieldCheck className="text-blue-500" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white leading-tight">Microsoft Technology Associate</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Networking Fundamentals (Examen 98-366).
                                        Validación oficial de competencias en infraestructura de red global, gestión de protocolos y seguridad de sistemas.
                                    </p>

                                    <div className="pt-6 grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">ID Verificación</p>
                                            <p className="text-sm font-mono text-blue-400">2RP-NUXA</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Expedición</p>
                                            <p className="text-sm font-mono text-blue-400">Nov 2014</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                    <p className="text-xs text-blue-300 italic text-center">
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
