import { CamisolasPreview } from "@/components/CamisolasPreview";
import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catálogo de Camisolas - E-commerce Premium | Walter García",
    description: "Plataforma de e-commerce especializada en camisolas deportivas con galería 3D circular, videos de producto, carrito animado y sistema de temas dinámicos. Calidad G5 Premium - Versión Jugador.",
    keywords: "e-commerce, camisolas, sports merch, 3D gallery, React, Next.js, tienda online",
};

export default function CamisolasCatalogPage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradiente deportivo */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-red-950/20" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                                <span>E-commerce & Diseño UI/UX</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                Catálogo de{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-red-400">
                                    Camisolas
                                </span>
                            </h1>
                            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
                                Plataforma de e-commerce premium especializada en camisolas deportivas del Real Madrid
                                y FC Barcelona. Incluye galería circular 3D, videos de producto, sistema de carrito
                                con animaciones fluidas y temas dinámicos que cambian según el equipo seleccionado.
                            </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {["React", "JavaScript", "E-commerce", "3D Gallery", "Framer Motion", "Responsive Design", "Video Integration"].map((tech) => (
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

                {/* Interactive Preview Section */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <CamisolasPreview />
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Objetivo */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Objetivo</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Crear una experiencia de compra premium que destaque la calidad G5
                                    (versión jugador) de las camisolas mediante una presentación visual
                                    impactante y navegación intuitiva.
                                </p>
                            </div>

                            {/* Técnicas */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Técnicas Destacadas</h2>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Galería 3D con transformaciones CSS y perspective</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Context API para estado global del carrito</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Custom hooks para responsive design</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Integración de video con autoplay y loop</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Resultados */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Impacto</h2>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">✓</span>
                                        <span>Experiencia visual premium y diferenciadora</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">✓</span>
                                        <span>Navegación fluida en mobile y desktop</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">✓</span>
                                        <span>Tiempo de carga optimizado con lazy loading</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">✓</span>
                                        <span>Integración total con sistema de pagos</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visit Site CTA */}
                        <div className="mt-12 text-center">
                            <a
                                href="https://recamisolas2025.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                            >
                                <Globe size={24} />
                                Visitar Sitio en Vivo
                            </a>
                        </div>
                    </div>
                </section>

                <PageNavigation nextPath="/trabajo" nextLabel="Ver Más Proyectos" />
            </div>
        </div>
    );
}
