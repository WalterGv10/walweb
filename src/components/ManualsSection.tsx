"use client";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export function ManualsSection() {
    return (
        <section className="py-16 md:py-24 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 md:p-16 relative overflow-hidden group hover:border-cyan-500/20 transition-colors duration-700">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 -skew-x-12 translate-x-1/2 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 skew-x-12 -translate-x-1/2 blur-3xl pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                <Sparkles size={14} className="animate-pulse" />
                                <span>Innovación Educativa</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                                Manuales Interactivos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                                    Next-Gen
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                                Olvida los aburridos PDFs. Entrego <strong>experiencias de aprendizaje gamificadas</strong>.
                                Portales de capacitación con estética <em>Cyberpunk</em>, animaciones fluidas y guías paso a paso que hacen que aprender cualquier sistema sea intuitivo y divertido.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Tutoriales animados x3D",
                                    "Portal web dedicado",
                                    "Estética UI Premium",
                                    "Interactividad Total"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 font-semibold text-sm">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 inline-block">
                                    <p className="text-xs text-cyan-300/60 font-mono uppercase tracking-widest mb-1">Status: Operational</p>
                                    <p className="text-sm text-gray-400">Desarrollado originalmente para sistemas corporativos de alta complejidad.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-slate-950 aspect-[4/3] shadow-2xl shadow-cyan-500/20">
                                <Image
                                    src="/controlfac-ai.png"
                                    alt="Interactive Manual Experience"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                    >
                                        <Zap size={32} className="text-cyan-400" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-[0.2em] font-mono">
                                        Interface <span className="text-cyan-400 underline decoration-cyan-500/50 underline-offset-8">V2.0</span>
                                    </h3>
                                    <div className="flex gap-2 items-center">
                                        <div className="w-1 h-1 rounded-full bg-cyan-500 animate-ping" />
                                        <p className="text-cyan-500/60 text-[10px] font-mono tracking-[0.4em] uppercase">
                                            Simulation Protocol Active
                                        </p>
                                    </div>
                                </div>

                                {/* Scanline effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none opacity-20 bg-[length:100%_2px,3px_100%]" />
                            </div>

                            {/* Decorative badge */}
                            <div className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-blue-600 border border-blue-400 shadow-2xl z-30 hidden md:block">
                                <p className="text-white font-black text-xs uppercase tracking-widest mb-1">Extra Mile</p>
                                <p className="text-blue-100 text-[10px] font-bold">VALOR AÑADIDO PARA TU EMPRESA</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
