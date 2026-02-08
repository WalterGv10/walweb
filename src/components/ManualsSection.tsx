"use client";
import { motion } from "framer-motion";
import { BookOpen, Zap, Shield, Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Interactividad Total",
        desc: "Navegación fluida y elementos reactivos que mantienen al usuario comprometido.",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Estructura Robusta",
        desc: "Información organizada jerárquicamente para un aprendizaje progresivo.",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Estética Premium",
        desc: "Diseño visual impactante que eleva la calidad percibida de tu documentación.",
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    }
];

export function ManualsSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest"
                            >
                                <BookOpen className="w-3 h-3" />
                                Nueva Era de Documentación
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                MANUALES INTERACTIVOS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    NEXT-GEN
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                Olvida los aburridos PDFs. Transformamos tus guías técnicas en experiencias
                                de aprendizaje dinámicas con estética Cyberpunk y navegación intuitiva.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all group"
                                >
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", feature.bg, feature.color)}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                Ver Demostración
                                <PlayCircle className="w-5 h-5 group-hover:fill-black/10 transition-colors" />
                            </button>
                        </div>
                    </div>

                    {/* Right Visual Representation (Mockup-like) */}
                    <div className="relative order-first lg:order-last">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative z-10 p-4 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 shadow-2xl"
                        >
                            <div className="aspect-[4/3] rounded-2xl bg-black overflow-hidden relative group">
                                {/* Simulated UI Elements - CSS Grid Pattern */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                                        backgroundSize: '24px 24px'
                                    }}
                                />
                                <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="pt-16 px-8 flex flex-col gap-6">
                                    <div className="h-4 w-1/3 bg-blue-500/20 rounded-full animate-pulse" />
                                    <div className="space-y-3">
                                        <div className="h-8 w-3/4 bg-white/10 rounded-lg" />
                                        <div className="h-8 w-1/2 bg-white/10 rounded-lg" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="aspect-video bg-blue-500/10 border border-blue-500/20 rounded-xl" />
                                        <div className="aspect-video bg-purple-500/10 border border-purple-500/20 rounded-xl" />
                                    </div>
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Floating Decorative Orbs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full animate-pulse" />
                    </div>

                </div>
            </div>
        </section>
    );
}
