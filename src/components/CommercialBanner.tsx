"use client";
import { motion } from "framer-motion";
import { Star, Zap, Shield, Rocket, Check, Globe, HardHat, Network, ClipboardList, Cpu, TrendingUp } from "lucide-react";
import Image from "next/image";

export function CommercialBanner() {
    const mainServices = [
        "Desarrollo Web Premium",
        "Arquitectura Profesional",
        "Redes Cisco/Ubiquiti",
        "Sistemas de Inventario",
        "Consultoría Tech",
        "Marketing Digital"
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-white/5 border-y border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Main Ad Text */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative w-20 h-20 rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                            >
                                <Image
                                    src="/wal-logo.png"
                                    alt="WalWeb Premium"
                                    fill
                                    className="object-contain mix-blend-screen"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest self-center md:self-start mb-auto"
                            >
                                <Star size={12} fill="currentColor" />
                                Servicios Exclusivos 2026
                            </motion.div>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none"
                        >
                            Impulsa tu Negocio al <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">Siguiente Nivel</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0"
                        >
                            Soluciones integrales que combinan ingeniería estructural, conectividad avanzada y presencia digital de alto impacto.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {[
                                { icon: <Zap size={16} />, text: "Entrega Rápida" },
                                { icon: <Shield size={16} />, text: "Garantía Técnica" },
                                { icon: <Rocket size={16} />, text: "Escalabilidad" },
                                { icon: <Check size={16} />, text: "Soporte 24/7" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-300">
                                    <div className="text-blue-500">{item.icon}</div>
                                    <span className="text-xs font-bold uppercase tracking-tight">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Services Interactive Grid */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { title: "Web Premium", icon: <Globe size={20} />, color: "from-blue-500" },
                                { title: "Arquitectura", icon: <HardHat size={20} />, color: "from-cyan-500" },
                                { title: "Redes Cisco", icon: <Network size={20} />, color: "from-blue-600" },
                                { title: "Inventarios", icon: <ClipboardList size={20} />, color: "from-cyan-600" },
                                { title: "Consultoría", icon: <Cpu size={20} />, color: "from-blue-400" },
                                { title: "Mkt Digital", icon: <TrendingUp size={20} />, color: "from-cyan-400" }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default"
                                >
                                    {/* Accent line on hover */}
                                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r ${service.color} to-transparent transition-all duration-300`} />

                                    <div className="flex flex-col items-center md:items-start gap-3">
                                        <div className="p-3 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Static Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </section>
    );
}
