"use client";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export function ManualsSection() {
    return (
        <section className="py-12 lg:py-20 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 lg:p-12 relative overflow-hidden group hover:border-cyan-500/20 transition-colors duration-700">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 -skew-x-12 translate-x-1/2 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 skew-x-12 -translate-x-1/2 blur-3xl pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4 lg:space-y-6"
                        >
                            <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                                Manuales Interactivos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                                    Next-Gen
                                </span>
                            </h2>

                            <p className="text-gray-400 text-base lg:text-lg leading-relaxed font-medium">
                                Olvida los aburridos PDFs. Entrego <strong>experiencias de aprendizaje gamificadas</strong>.
                                Portales de capacitación con estética <em>Cyberpunk</em>, animaciones fluidas y guías paso a paso que hacen que aprender cualquier sistema sea intuitivo y divertido.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                                {[
                                    "Tutoriales animados x3D",
                                    "Portal web dedicado",
                                    "Estética UI Premium",
                                    "Interactividad Total"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 font-semibold text-xs lg:text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-2">
                                <div className="p-3 lg:p-4 rounded-2xl bg-white/5 border border-white/10 inline-block">
                                    <p className="text-[10px] text-cyan-300/60 font-mono uppercase tracking-widest mb-1">Status: Operational</p>
                                    <p className="text-xs text-gray-400">Desarrollado originalmente para sistemas corporativos de alta complejidad.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-slate-950 aspect-video lg:aspect-[4/3] shadow-2xl shadow-cyan-500/20">
                                <Image
                                    src="/controlfac-ai.png"
                                    alt="Interactive Manual Experience"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 lg:p-8 pointer-events-none">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 lg:mb-6 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                    >
                                        <Zap size={24} className="text-cyan-400 lg:size-8" />
                                    </motion.div>
                                    <h3 className="text-xl lg:text-2xl font-black text-white mb-1 lg:mb-2 uppercase tracking-[0.2em] font-mono">
                                        Interface <span className="text-cyan-400 underline decoration-cyan-500/50 underline-offset-8">V2.0</span>
                                    </h3>
                                    <div className="flex gap-2 items-center">
                                        <div className="w-1 h-1 rounded-full bg-cyan-500 animate-ping" />
                                        <p className="text-cyan-500/60 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase">
                                            Simulation Protocol Active
                                        </p>
                                    </div>
                                </div>

                                {/* Scanline effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none opacity-20 bg-[length:100%_2px,3px_100%]" />
                            </div>

                            {/* Decorative badge */}
                            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 p-4 lg:p-6 rounded-3xl bg-blue-600 border border-blue-400 shadow-2xl z-30 hidden lg:block">
                                <p className="text-white font-black text-[10px] lg:text-xs uppercase tracking-widest mb-0.5 lg:mb-1">Extra Mile</p>
                                <p className="text-blue-100 text-[8px] lg:text-[10px] font-bold uppercase">Valor añadido</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
