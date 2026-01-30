"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";

export function Services() {
    const services = servicesData;

    return (
        <section id="servicios" className="py-24 px-4 relative z-10 bg-black/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4"
                    >
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Soluciones Reales</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Tecnología para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gente que Trabaja</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Herramientas digitales diseñadas para vender más, ahorrar tiempo y modernizar tu imagen. Sin palabras complicadas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 
                                ${/* @ts-ignore */
                                service.highlight
                                    ? "bg-gradient-to-br from-purple-900/60 via-slate-900/80 to-black border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] md:col-span-2 lg:col-span-1"
                                    : "bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                }`
                            }
                        >
                            {/* @ts-ignore */
                                service.highlight ? (
                                    <>
                                        <div className="absolute inset-0 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 flex flex-col h-full justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="p-3 rounded-2xl bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] ring-1 ring-purple-400/50">
                                                        {service.icon}
                                                    </div>
                                                    <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-black uppercase tracking-widest">
                                                        Special Focus
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
                                                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                                                    {service.desc}
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {service.tags.map((tag, tIndex) => (
                                                        <span key={tIndex} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-200 border border-purple-500/20">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <a href="#contact" className="flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest">
                                                    Let's Collab <ArrowUpRight size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">
                                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                                                {service.icon}
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 h-auto min-h-[40px]">
                                                {service.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                                {service.tags.map((tag, tIndex) => (
                                                    <span key={tIndex} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
