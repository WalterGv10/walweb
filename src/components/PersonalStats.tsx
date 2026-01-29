"use client";
import { motion } from "framer-motion";
import { User, Users, Heart } from "lucide-react";

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
                        className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={80} className="md:size-[120px] text-cyan-500" />
                        </div>

                        <div className="relative z-10 space-y-3 md:space-y-4">
                            <div className="inline-flex p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                                <Heart size={20} className="md:size-6 fill-cyan-400/20" />
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">2 <span className="text-lg font-light text-gray-500">Gemelos (4 años)</span></h3>
                                <p className="text-cyan-400 font-bold tracking-widest uppercase text-[10px] mt-1">Arquitectura Dual & Multitasking</p>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                Padre orgulloso de un "Dual Core" de energía inagotable. Gestionar gemelos
                                me ha dado el doctorado en resolución de problemas bajo presión.
                            </p>
                        </div>
                        <div className="absolute bottom-4 right-8 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-500" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
