"use client";
import { motion } from "framer-motion";
import { User, Users, Heart, Cpu, Activity } from "lucide-react";

export function PersonalStats() {
    return (
        <section className="py-12 md:py-20 px-4 relative z-10 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

                    {/* Tarjeta 31 Años - Enfoque "Core Evolution" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <User size={80} className="md:size-[120px] text-blue-500" />
                        </div>

                        <div className="relative z-10 space-y-3 md:space-y-4">
                            <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                                <User size={20} className="md:size-6" />
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">31 <span className="text-lg font-light text-gray-500">Años</span></h3>
                                <p className="text-blue-400 font-bold tracking-widest uppercase text-[10px] mt-1">Sistemas Operativos & Experiencia</p>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                En el punto óptimo donde la energía converge con la madurez técnica.
                                Tres décadas de evolución profesional en el mundo digital.
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 w-[31%]" />
                    </motion.div>

                    {/* Tarjeta Papá de Gemelos - Enfoque "Dual Core / Multitasking" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900/50 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
                    >
                        {/* Processor Die Pattern Background */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* CPU Icon Visual */}
                            <div className="relative shrink-0">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center relative shadow-2xl">
                                    {/* Metallic Pins Effect */}
                                    <div className="absolute -inset-1 border border-cyan-500/20 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex flex-col items-center gap-1">
                                        <Cpu size={32} className="text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                                        <span className="text-[8px] font-black text-white/40 tracking-tighter uppercase">Socket 2x4Y</span>
                                    </div>

                                    {/* Active Core Lights */}
                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee] animate-pulse [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">2 GEMELOS <span className="text-sm font-light text-cyan-500/60">(4 Años)</span></h3>
                                        <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                                            <p className="text-cyan-400 font-black tracking-[0.2em] uppercase text-[10px]">Arquitectura Dual Core</p>
                                            <span className="px-1.5 py-0.5 rounded bg-cyan-500 text-black text-[8px] font-black">X2 THREADS</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                                        <Activity size={16} className="text-cyan-400" />
                                        <span className="text-[7px] font-black text-cyan-400 uppercase">Load: 100%</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                                    Padre orgulloso de un <span className="text-cyan-300">"Dual Core"</span> de energía inagotable. Gestionar gemelos
                                    ha optimizado mis algoritmos de <span className="italic text-white/60">multitasking</span> y resolución de conflictos bajo presión.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Performance Bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-cyan-600 via-blue-400 to-cyan-400"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
