import { RamPumpDiagram } from "@/components/RamPumpDiagram";
import { PageNavigation } from "@/components/ui/PageNavigation";
import { WaterFlowBackground } from "@/components/WaterFlowBackground";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bomba de Ariete - Visualización Interactiva | Walter García",
    description: "Visualización técnica interactiva del funcionamiento de una bomba de ariete hidráulico. Simulación física del golpe de ariete y flujo de agua para fines educativos y demostración de capacidades de ingeniería.",
};

export default function RamPumpProjectPage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Water Flow Background */}
            <WaterFlowBackground />

            <div className="relative z-10">
                {/* Header Section */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Back Button */}
                        <Link
                            href="/trabajo"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Volver a Mis Proyectos
                        </Link>

                        {/* Project Title */}
                        <div className="space-y-4 mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                                <span>ITEVERGT - Ingeniería & Educación</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                Bomba de Ariete{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    Hidráulico
                                </span>
                            </h1>
                            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
                                Visualización interactiva del principio del golpe de ariete, un fenómeno físico que permite
                                bombear agua sin energía externa. Esta simulación educativa demuestra cada fase del ciclo
                                con animaciones precisas y explicaciones técnicas.
                            </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {["React", "Framer Motion", "SVG Animation", "TypeScript", "Next.js"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-bold px-3 py-1.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interactive Diagram Section */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <RamPumpDiagram />
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Objetivo */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Objetivo del Proyecto</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Crear una herramienta educativa interactiva que explique de forma visual y dinámica
                                    el funcionamiento de una bomba de ariete hidráulico, haciendo accesible un concepto
                                    de ingeniería complejo a través de animaciones fluidas y explicaciones claras.
                                </p>
                            </div>

                            {/* Características */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Características Técnicas</h2>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span>Animaciones SVG con Framer Motion para transiciones fluidas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span>Ciclo automático con pausas estratégicas en fase crítica</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span>Interacción manual para explorar cada fase del proceso</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span>Responsive design optimizado para mobile y desktop</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visit Site CTA */}
                        <div className="mt-12 text-center">
                            <a
                                href="https://itevergt.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                Visitar ITEVERGT
                            </a>
                        </div>
                    </div>
                </section>

                <PageNavigation nextPath="/trabajo" nextLabel="Ver Más Proyectos" />
            </div>
        </div>
    );
}
