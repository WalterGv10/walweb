"use client";

import { motion } from "framer-motion";
import { Box, FileText, Layers, Layout, Ruler, Zap } from "lucide-react";

const services = [
    {
        title: "Modelado BIM 3D",
        desc: "Creamos gemelos digitales de tu proyecto antes de construir. Detectamos conflictos y visualizamos cada detalle.",
        icon: <Layers className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "Planos Ejecutivos",
        desc: "Documentación técnica precisa: plantas, elevaciones, secciones y detalles constructivos listos para obra.",
        icon: <Ruler className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "Renders Fotorrealistas",
        desc: "Visualización de alto impacto para ventas inmobiliarias y presentaciones de diseño.",
        icon: <Box className="w-8 h-8 text-purple-400" />,
    },
    {
        title: "Coordinación de Ingenierías",
        desc: "Integramos estructuras, instalaciones hidráulicas y eléctricas en un solo modelo centralizado.",
        icon: <Layout className="w-8 h-8 text-pink-400" />,
    },
];

export function ArchServices() {
    return (
        <section id="servicios" className="py-24 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Nuestros <span className="text-blue-500">Servicios</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Cubrimos todo el ciclo de vida del diseño arquitectónico, asegurando calidad técnica y estética.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="mb-6 p-3 rounded-2xl bg-black/50 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
