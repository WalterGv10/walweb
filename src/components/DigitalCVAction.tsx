"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Share2, MousePointer2 } from "lucide-react";
import Link from "next/link";

export function DigitalCVAction() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/40">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="relative p-12 md:p-20 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl overflow-hidden group">
                    {/* Floating Icons Decoration */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 text-blue-500/20 hidden lg:block"
                    >
                        <Share2 size={120} />
                    </motion.div>

                    <div className="max-w-3xl space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em]"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Propuesta Digital 2026
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]"
                            >
                                ¿TE GUSTA LO QUE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-white/80 italic">ESTÁS VIENDO?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
                            >
                                Esto es más que un sitio web: es un <span className="text-white font-medium">Currículum Vitae Digital de élite</span>. Mi propuesta para revolucionar cómo el mundo percibe tu marca personal.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-6 pt-4"
                        >
                            <Link
                                href="#contact"
                                className="group relative px-8 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-white/10"
                            >
                                Quiero el mío
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-400">
                                <MousePointer2 size={20} className="text-blue-500" />
                                <p className="text-xs font-bold uppercase tracking-tight">Experiencia 100% Interactiva</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Gradient Overlay for the card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
