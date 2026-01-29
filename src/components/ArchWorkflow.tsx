"use client";
import { motion } from "framer-motion";
import { Box, FileText, Map as MapIcon, ArrowRight } from "lucide-react";

export function ArchWorkflow() {
    const steps = [
        {
            title: "Modelación 3D",
            tool: "Software Web 3D",
            desc: "Visualización espacial completa mediante modelado tridimensional avanzado en plataformas web.",
            icon: <Box className="text-blue-400" size={32} />,
            color: "blue"
        },
        {
            title: "Informe Detallado",
            tool: "Microsoft Office Pro",
            desc: "Documentación técnica exhaustiva y especificaciones del proyecto para una gestión clara.",
            icon: <FileText className="text-cyan-400" size={32} />,
            color: "cyan"
        },
        {
            title: "Planos de Ejecución",
            tool: "AutoCAD Expert",
            desc: "Entrega de planos técnicos precisos listos para que el albañil ejecute la obra sin errores.",
            icon: <MapIcon className="text-blue-500" size={32} />,
            color: "blue"
        }
    ];

    return (
        <section className="py-24 px-4 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                            Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Arquitectónico</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Transformo conceptos abstractos en realidades construibles mediante un proceso técnico riguroso.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Línea conectora decorativa en escritorio */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative z-10 p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className="relative mb-6">
                                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-4 rounded-2xl bg-white/5 w-fit">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                    {step.tool}
                                </div>
                                <h3 className="text-2xl font-bold text-white leading-tight">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                                    <div className="p-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50">
                                        <ArrowRight size={16} className="text-white" />
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
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 text-center"
                >
                    <p className="text-blue-300 font-medium italic">
                        "Del modelo 3D al plano en mano: precisión garantizada para el personal de obra."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
