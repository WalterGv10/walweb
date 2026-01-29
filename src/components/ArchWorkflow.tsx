"use client";
import { motion } from "framer-motion";
import { Box, FileText, Map as MapIcon, ArrowRight } from "lucide-react";

export function ArchWorkflow() {
    const steps = [
        {
            title: "Modelación 3D",
            tool: "Software Web 3D",
            desc: "Visualización espacial completa mediante modelado avanzado.",
            icon: <Box className="text-blue-400" size={24} />,
            color: "blue"
        },
        {
            title: "Informe Detallado",
            tool: "Microsoft Office Pro",
            desc: "Documentación técnica exhaustiva para una gestión clara.",
            icon: <FileText className="text-cyan-400" size={24} />,
            color: "cyan"
        },
        {
            title: "Planos de Ejecución",
            tool: "AutoCAD Expert",
            desc: "Planos precisos listos para que el albañil ejecute sin errores.",
            icon: <MapIcon className="text-blue-500" size={24} />,
            color: "blue"
        }
    ];

    return (
        <section id="workflow" className="py-16 md:py-24 px-4 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-4"
                >
                    <div className="space-y-3 md:space-y-4 text-center md:text-left w-full md:w-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                            Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Arquitectónico</span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto md:mx-0">
                            Transformo conceptos en realidades construibles mediante un proceso técnico riguroso.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative">
                    {/* Línea conectora decorativa en escritorio */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative z-10 p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className="relative mb-4 md:mb-6">
                                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 w-fit">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                    {step.tool}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{step.title}</h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:-bottom-auto md:left-auto md:-right-4 md:top-1/2 md:-translate-y-1/2 z-20">
                                    <div className="p-1.5 md:p-2 rounded-full bg-blue-600 shadow-lg shadow-blue-500/50 rotate-90 md:rotate-0">
                                        <ArrowRight size={14} className="text-white" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 text-center"
                >
                    <p className="text-blue-300 text-xs md:text-sm font-medium italic px-2">
                        "Del modelo 3D al plano en mano: precisión garantizada para el personal de obra."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
