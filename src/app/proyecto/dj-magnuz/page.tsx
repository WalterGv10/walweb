import { DJMagnuzPreview } from "@/components/DJMagnuzPreview";
import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DJ Magnuz - Tarjeta Digital Premium | Walter García",
    description: "Tarjeta de presentación digital para DJ Magnuz con temática Stranger Things y estética cyberpunk. Incluye efectos de neón, animaciones 3D con Three.js, galería multimedia y sistema de scroll cinematográfico. El Emperador del Techno - Guatemala.",
    keywords: "DJ, tarjeta digital, Stranger Things, cyberpunk, neón, Three.js, framer motion, Next.js, Guatemala",
};

export default function DJMagnuzPage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Cyberpunk Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/10 to-pink-950/10" />

                {/* Neon grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,204,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                                <span>Diseño Web & Branding Digital</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                DJ Magnuz -{" "}
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #ff00cc, #ff0066)',
                                        textShadow: '0 0 20px rgba(255, 0, 204, 0.5)'
                                    }}
                                >
                                    El Emperador del Techno
                                </span>
                            </h1>
                            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
                                Tarjeta de presentación digital con temática de <strong>Stranger Things</strong> y estética
                                cyberpunk para DJ Magnuz, uno de los DJs más destacados de la escena electrónica de Guatemala.
                                El diseño combina efectos de neón retro-futurista con tecnología web moderna para crear una
                                experiencia inmersiva y memorable.
                            </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {["Next.js 16", "Three.js", "Framer Motion", "Tailwind CSS v4", "Supabase", "Zustand", "TypeScript"].map((tech) => (
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
                        <DJMagnuzPreview />
                    </div>
                </section>

                {/* Artist Info Section */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 rounded-3xl bg-purple-900/10 border border-purple-500/20">
                                <h2 className="text-2xl font-black text-white mb-4">Sobre el Artista</h2>
                                <div className="space-y-3 text-slate-300">
                                    <p><strong className="text-purple-400">Nombre:</strong> DJ Magnuz</p>
                                    <p><strong className="text-purple-400">Alias:</strong> El Emperador del Techno</p>
                                    <p><strong className="text-purple-400">Experiencia:</strong> 5 años en la escena electrónica</p>
                                    <p><strong className="text-purple-400">Ubicación:</strong> Guatemala</p>
                                    <p className="pt-2 text-sm leading-relaxed">
                                        DJ versátil que combina diferentes estilos de mezcla con múltiples géneros,
                                        transformando cada presentación en una experiencia única e inolvidable.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-pink-900/10 border border-pink-500/20">
                                <h2 className="text-2xl font-black text-white mb-4">Géneros Musicales</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm font-bold text-pink-400 mb-2">Principales:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["Melodic Techno", "Minimal Techno", "Peak Techno", "Hard Techno", "Acid Techno"].map(genre => (
                                                <span key={genre} className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-200 border border-pink-500/30">
                                                    {genre}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-pink-400 mb-2">Subgéneros:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["Deep House", "Groove", "Afro House", "Funk House", "Zenonesque", "Psytech"].map(genre => (
                                                <span key={genre} className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                                                    {genre}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Concepto */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Concepto</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Fusión de la estética de <strong>Stranger Things</strong> con elementos
                                    cyberpunk modernos. Cada sección del sitio se presenta como un "capítulo"
                                    que se revela con animaciones cinematográficas.
                                </p>
                            </div>

                            {/* Tecnología */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Tecnología</h2>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span>Efectos 3D con <strong>Three.js</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span>Animaciones con <strong>Framer Motion</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span>Scroll-based storytelling</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span>Efectos de glitch CSS personalizados</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Impacto */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h2 className="text-2xl font-black text-white mb-4">Impacto</h2>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-pink-400 mt-1">✓</span>
                                        <span>Identidad visual única y memorable</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-pink-400 mt-1">✓</span>
                                        <span>Experiencia inmersiva de marca</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-pink-400 mt-1">✓</span>
                                        <span>Optimizado para mobile y desktop</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-pink-400 mt-1">✓</span>
                                        <span>Integración con redes sociales</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visit Site CTA */}
                        <div className="mt-12 text-center">
                            <a
                                href="https://magnuzdj.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
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
