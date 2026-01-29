"use client";
import { motion } from "framer-motion";
import { Network, FileSpreadsheet, Globe, Ruler } from "lucide-react";

export function TechSkills() {
    const skills = [
        {
            title: "Infraestructura de Redes",
            desc: "Especialista en configuración y despliegue de equipos Cisco y Ubiquiti para redes de alto rendimiento.",
            icon: <Network className="text-blue-400" size={32} />,
            tags: ["Cisco", "Ubiquiti", "Examen 98-366"]
        },
        {
            title: "Productividad Office",
            desc: "Certificación oficial en la suite de Microsoft Office, garantizando eficiencia en gestión de datos y documentación.",
            icon: <FileSpreadsheet className="text-cyan-400" size={32} />,
            tags: ["Excel Pro", "Word", "PowerPoint"]
        },
        {
            title: "Desarrollo Web",
            desc: "Creación de ecosistemas digitales modernos y escalables usando las últimas tecnologías del mercado.",
            icon: <Globe className="text-blue-500" size={32} />,
            tags: ["Next.js", "React", "Sistemas de Inventario"]
        },
        {
            title: "Diseño Arquitectónico",
            desc: "Fusión de tecnología y arquitectura para la creación de planos y soluciones estructurales profesionales.",
            icon: <Ruler className="text-cyan-500" size={32} />,
            tags: ["Planos", "Diseño Estructural", "WalWeb Arch"]
        }
    ];

    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Técnico</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                        Combinando certificaciones oficiales con años de experiencia en campo para entregar resultados excepcionales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {skill.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skill.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
