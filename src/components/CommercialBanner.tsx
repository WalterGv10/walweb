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

    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Renamed to avoid collision if any
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="services"
            ref={containerRef}
            className="py-20 md:py-32 relative overflow-hidden bg-black/40 border-y border-white/5"
        >
            {/* Immersive Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-black/60" /> {/* Added solid base */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] brightness-50 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Column: Brand & Messaging */}
                    <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                        <div className="inline-flex flex-col md:flex-row items-center gap-5">
                            <motion.div
                                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                whileHover={{ rotate: 5, scale: 1.05 }}
                                className="relative w-20 h-20 md:w-24 md:h-24 p-0.5 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-white/10 to-transparent backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
                            >
                                <div className="absolute inset-0 bg-blue-500/20 blur-2xl group-hover:bg-blue-500/40 transition-colors" />
                                <div className="relative w-full h-full rounded-[1.4rem] bg-black/40 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/wal-logo.png"
                                        alt="WalWeb Premium"
                                        fill
                                        className="object-contain mix-blend-screen p-3 transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="space-y-1"
                            >
                                <p className="text-xs md:text-sm font-black text-blue-400 tracking-[0.3em] uppercase">WalWeb Premium</p>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-300 tracking-wider uppercase">
                                    <Sparkles size={11} className="animate-pulse" />
                                    Servicios Exclusivos 2026
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9]"
                            >
                                IMPULSA TU <br className="hidden lg:block" /> NEGOCIO AL <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-white/90 italic pr-2">
                                    NIVEL ÉLITE
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 text-base lg:text-lg max-w-xl font-light leading-relaxed mx-auto lg:mx-0"
                            >
                                Fusionando ingeniería estructural, conectividad de vanguardia y arquitectura digital para crear ecosistemas de alto rendimiento.
                            </motion.p>
                        </div>

                        {/* Social Proof Tags */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
                        >
                            {[
                                { icon: <Zap size={14} />, text: "VELOCIDAD" },
                                { icon: <Shield size={14} />, text: "SEGURIDAD" },
                                { icon: <Rocket size={14} />, text: "ESCALABILIDAD" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5 px-5 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-blue-500/30 transition-all cursor-default">
                                    <span className="text-blue-500">{item.icon}</span>
                                    <span className="text-[10px] font-black tracking-widest">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: High-End Bento Mesh */}
                    <div className="flex-1 w-full relative">
                        {/* Ambient Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none" />

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[140px] lg:auto-rows-[160px]">
                            {/* Card 1: Main Focus (Large) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                className="md:col-span-4 md:row-span-3 group relative p-6 lg:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between shadow-2xl min-h-[380px] md:min-h-0"
                            >
                                <div className="absolute top-8 right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
                                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_8s_infinite] pointer-events-none" />

                                <div className="relative z-10 space-y-4 lg:space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                                            <Globe size={24} className="lg:hidden" />
                                            <Globe size={32} className="hidden lg:block" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl lg:text-3xl font-black text-white tracking-tight uppercase">Web Architecture</h3>
                                        <p className="text-xs lg:text-sm text-gray-400 max-w-sm font-medium">Arquitecturas vanguardistas con alto rendimiento y escalabilidad global.</p>
                                    </div>

                                    {/* Tech Stack Horizontal List */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {[
                                            { name: "React", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", icon: "react" },
                                            { name: "Astro", bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", icon: "astro" },
                                            { name: "Angular", bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400", icon: "angular" },
                                            { name: "Next.js", bg: "bg-white/10", border: "border-white/20", text: "text-white", icon: "nextdotjs" },
                                            { name: "TypeScript", bg: "bg-blue-600/10", border: "border-blue-600/20", text: "text-blue-300", icon: "typescript" },
                                            { name: "JavaScript", bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400", icon: "javascript" },
                                            { name: "Tailwind CSS", bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", icon: "tailwindcss" }
                                        ].map((tech) => (
                                            <div
                                                key={tech.name}
                                                className={`px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl ${tech.bg} ${tech.border} border ${tech.text} text-[8px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 md:gap-2.5 hover:bg-white/10 transition-all cursor-default group/badge active:scale-95`}
                                            >
                                                <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${tech.icon}/${tech.text.replace('text-', '')}`}
                                                        alt={tech.name}
                                                        width="14"
                                                        height="14"
                                                        decoding="async"
                                                        className="w-full h-full object-contain filter brightness-110 group-hover/badge:brightness-150 transition-all"
                                                    />
                                                </div>
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Proof: Global Giants */}
                                <div className="pt-6 mt-4 border-t border-white/5 flex flex-col gap-3">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Tecnología en el corazón de:</p>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                                        {[
                                            { name: "Netflix", icon: "netflix" },
                                            { name: "Google", icon: "google" },
                                            { name: "Twitch", icon: "twitch" },
                                            { name: "TikTok", icon: "tiktok" },
                                            { name: "Nike", icon: "nike" }
                                        ].map((company) => (
                                            <div key={company.name} className="flex items-center gap-2">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${company.icon}/white`}
                                                    alt={company.name}
                                                    width="14"
                                                    height="14"
                                                    className="w-3.5 h-3.5 object-contain"
                                                />
                                                <span className="text-[9px] md:text-[10px] font-bold text-white tracking-widest uppercase">{company.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Vertical Secondary */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ y: -5 }}
                                className="md:col-span-2 md:row-span-3 group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center gap-6 min-h-[280px] md:min-h-0"
                            >
                                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                    <HardHat size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white tracking-tight uppercase leading-tight">Professional<br />Architecture</h3>
                                    <p className="text-xs text-gray-500 mt-3 font-medium uppercase tracking-widest">Structural Design</p>
                                </div>
                            </motion.div>

                            {/* Card 3: Horizontal Medium */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -5 }}
                                className="md:col-span-4 md:row-span-1 group relative p-6 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Network size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-white tracking-tight uppercase">Enterprise Networks</h3>
                                    <p className="text-xs text-gray-500">Cisco & Ubiquiti Core Infrastructure</p>
                                </div>
                            </motion.div>

                            {/* Card 4: Small Accents (Grid of 2 icons) */}
                            <div className="md:col-span-6 flex gap-4 mt-2">
                                {[
                                    { icon: <TrendingUp size={20} />, title: "Digital Mkt", color: "text-cyan-400" },
                                    { icon: <Cpu size={20} />, title: "Consultancy", color: "text-blue-400" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex-1 p-4 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                                    >
                                        <span className={item.color}>{item.icon}</span>
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </section>
    );
}
