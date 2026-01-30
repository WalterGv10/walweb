"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Cpu, Globe, ArrowRight, ChevronDown } from "lucide-react";

export function StrategicVision() {
    const [activeTab, setActiveTab] = useState<number | null>(0);

    const contextItems = [
        {
            title: "Entorno Económico 2026",
            icon: <TrendingUp className="text-blue-400" />,
            summary: "Costos suben, la tecnología ahorra.",
            details: "El salario mínimo sube y contratar personal es más caro. La tecnología ya no es un lujo, es la única forma de que tu negocio funcione mejor con menos gastos. Creamos sistemas que hacen el trabajo repetitivo por ti."
        },
        {
            title: "Revolución GEO (IA)",
            icon: <Cpu className="text-cyan-400" />,
            summary: "Aparece cuando le preguntan a la IA.",
            details: "La gente ya no busca en Google, le pregunta a la Inteligencia Artificial. Si tu negocio no está optimizado para esto, eres invisible. Hacemos que la IA recomiende tu marca cuando alguien busque tus servicios."
        },
        {
            title: "Oportunidad Mundial",
            icon: <Globe className="text-indigo-400" />,
            summary: "El Mundial 2026 venderá por ti.",
            details: "El Mundial será en nuestro horario. Aprovechamos la fiebre del fútbol para crear promociones, quinielas y menús digitales que atraigan clientes a tu negocio durante los partidos."
        }
    ];

    return (
        <section className="py-20 px-4 relative z-10 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Texto Introductorio */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">Visión Estratégica</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight"
                        >
                            No vendemos "Sitios Web". <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Diseñamos Eficiencia.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg leading-relaxed"
                        >
                            El panorama 2026 exige más que estética. Fusionamos la ingeniería de software con la visión comercial para navegar las fuerzas tectónicas del mercado: costos laborales, inteligencia artificial y eventos globales.
                        </motion.p>
                    </div>

                    {/* Acordeón de Contexto */}
                    <div className="space-y-4">
                        {contextItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeTab === index
                                    ? "bg-white/10 border-blue-500/50 shadow-lg shadow-blue-500/10"
                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveTab(activeTab === index ? null : index)}
                                    className="w-full p-6 flex items-start gap-4 text-left"
                                >
                                    <div className={`mt-1 p-2 rounded-lg transition-colors ${activeTab === index ? "bg-blue-500 text-white" : "bg-white/5 text-gray-400"}`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className={`text-lg font-bold ${activeTab === index ? "text-white" : "text-gray-300"}`}>
                                                {item.title}
                                            </h3>
                                            <ChevronDown className={`w-5 h-5 transition-transform ${activeTab === index ? "rotate-180 text-blue-400" : "text-gray-500"}`} />
                                        </div>
                                        <p className="text-sm text-gray-400 mt-1">{item.summary}</p>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeTab === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                                                <p className="text-sm text-gray-300 leading-relaxed border-l-2 border-blue-500/30 pl-4">
                                                    {item.details}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
