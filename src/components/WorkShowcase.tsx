
"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export function WorkShowcase() {
    return (
        <section className="py-24 px-4 relative z-10 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                        >
                            Conoce un poco <br />
                            de mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Trabajo.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-md text-lg leading-relaxed text-right md:text-left"
                    >
                        Proyectos donde el diseño se encuentra con la funcionalidad. Soluciones reales para problemas complejos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-[32px] overflow-hidden bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            {/* Project Image Preview */}
                            {project.image && (
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                                </div>
                            )}

                            {/* Gradient Background (fallback/overlay) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative z-10 h-full p-8 flex flex-col justify-between pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium backdrop-blur-md">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-white leading-none tracking-tight group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 font-medium drop-shadow-md">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-black/40 text-slate-200 border border-white/10 backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Full Card Link Area */}
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target={project.link.startsWith("http") ? "_blank" : "_self"}
                                    className="absolute inset-0 z-20 group-hover:cursor-pointer"
                                >
                                    <span className="sr-only">Ver proyecto {project.title}</span>
                                    <div className="absolute bottom-8 right-8 p-4 rounded-full bg-white text-black group-hover:scale-110 transition-transform shadow-lg shadow-white/20 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300 flex items-center justify-center">
                                        <ArrowRight size={20} />
                                    </div>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
