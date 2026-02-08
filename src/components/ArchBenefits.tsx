"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    {
        title: "Cero Errores en Obra",
        desc: "Al construir primero en virtual, eliminamos los imprevistos costosos durante la ejecución física.",
    },
    {
        title: "Optimización de Presupuesto",
        desc: "Cálculos de materiales exactos gracias a la información extraída directamente del modelo 3D.",
    },
    {
        title: "Cumplimiento de Plazos",
        desc: "Planos claros y detallados evitan dudas en los albañiles y retrasos por consultas técnicas.",
    },
];

export function ArchBenefits() {
    return (
        <section className="py-24 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
                        >
                            ¿Por qué elegir nuestra <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Metodología Digital?
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg mb-8"
                        >
                            No solo dibujamos planos, gestionamos la información de tu proyecto para garantizar una inversión segura y eficiente.
                        </motion.p>
                    </div>

                    <div className="space-y-6">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
                            >
                                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
