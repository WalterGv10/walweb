"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Zap, Shield, Rocket, Check, Globe, HardHat, Network, ClipboardList, Cpu, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function CommercialBanner() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="services"
            ref={containerRef}
            className="py-4 lg:py-10 relative overflow-hidden bg-transparent border-y border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

                    {/* Left Column: Brand & Messaging */}
                    <div className="flex-1 space-y-2 lg:space-y-4 text-center lg:text-left">
                        <div className="inline-flex flex-col md:flex-row items-center gap-3">
                            <motion.div
                                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                className="relative w-8 h-8 lg:w-12 lg:h-12 p-0.5 rounded-xl bg-white/5 border border-white/10 group"
                            >
                                <div className="absolute inset-0 bg-blue-500/20 blur-lg group-hover:bg-blue-500/40" />
                                <div className="relative w-full h-full rounded-[0.5rem] bg-black/40 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/wal-logo.png"
                                        alt="WalWeb Premium"
                                        fill
                                        className="object-contain mix-blend-screen p-1.5"
                                    />
                                </div>
                            </motion.div>
                            <p className="text-[8px] lg:text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">WalWeb Premium</p>
                        </div>

                        <div className="space-y-0.5 lg:space-y-2">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-black text-white tracking-tighter leading-tight"
                            >
                                IMPULSA TU <br className="hidden lg:block" /> NEGOCIO AL <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-white/90 italic">
                                    NIVEL ÉLITE
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="text-gray-400 text-[9px] lg:text-xs max-w-sm font-light leading-relaxed mx-auto lg:mx-0"
                            >
                                Fusionando ingeniería estructural, conectividad de vanguardia y arquitectura digital.
                            </motion.p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 pt-1">
                            {[
                                { icon: <Zap size={10} />, text: "VELOCIDAD" },
                                { icon: <Shield size={10} />, text: "SEGURIDAD" },
                                { icon: <Rocket size={10} />, text: "SCALABILITY" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-white/5 border border-white/5 text-gray-500 text-[7px] font-black tracking-widest">
                                    <span className="text-blue-500">{item.icon}</span>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: High-End Bento Mesh */}
                    <div className="flex-1 w-full relative">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 lg:gap-3 md:auto-rows-[60px] lg:auto-rows-[80px] xl:auto-rows-[90px]">
                            {/* Card 1: Web Architecture */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="md:col-span-4 md:row-span-3 group relative p-4 lg:p-6 rounded-2xl bg-zinc-900/80 border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_8s_infinite] pointer-events-none" />

                                <div className="relative z-10 space-y-2 lg:space-y-3">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                        <Globe size={18} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="text-xs lg:text-base font-black text-white tracking-tight uppercase">Web Architecture</h3>
                                        <p className="text-[8px] lg:text-[10px] text-gray-500 max-w-sm font-medium">Arquitecturas vanguardistas de alto rendimiento.</p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1">
                                        {["React", "Astro", "Next.js"].map((tech) => (
                                            <div key={tech} className="px-1 py-0.5 rounded-md bg-white/5 border border-white/10 text-[6px] lg:text-[7px] font-black uppercase text-gray-400">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-white/5 flex items-center gap-3 opacity-30 grayscale">
                                    {["netflix", "google", "twitch"].map((company) => (
                                        <div key={company} className="flex items-center gap-1">
                                            <img src={`https://cdn.simpleicons.org/${company}/white`} alt={company} width="8" height="8" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 2: Arquitectura Profesional */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="md:col-span-2 md:row-span-3 group relative p-4 rounded-2xl bg-white/5 border border-cyan-500/20 flex flex-col items-center justify-center text-center gap-2 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                    <HardHat size={20} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-[10px] lg:text-xs font-black text-white tracking-tight uppercase leading-tight text-center">Arquitectura<br />Profesional</h3>
                                    <p className="text-[7px] text-cyan-500 font-bold uppercase mt-1">Diseño Estructural</p>
                                </div>
                            </motion.div>

                            {/* Card 3: Horizontal Networks */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-4 md:row-span-1 group relative p-2 lg:p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3"
                            >
                                <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Network size={14} />
                                </div>
                                <h3 className="text-[9px] lg:text-[10px] font-black text-white tracking-tight uppercase">Enterprise Networks</h3>
                            </motion.div>

                            {/* Card 4: Bottom Accents */}
                            <div className="md:col-span-6 flex gap-2 mt-1">
                                {[
                                    { icon: <TrendingUp size={12} />, title: "Mkt", color: "text-cyan-400" },
                                    { icon: <Cpu size={12} />, title: "Consult", color: "text-blue-400" }
                                ].map((item, i) => (
                                    <div key={i} className="flex-1 p-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center gap-2">
                                        <span className={item.color}>{item.icon}</span>
                                        <span className="text-[7px] font-black text-white uppercase tracking-widest">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        </section>
    );
}
