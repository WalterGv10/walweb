import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArrowLeft, Briefcase, Calendar, GraduationCap, Mail, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CV Elite - Damaris Pérez | Walter García",
    description: "Currículum vitae digital premium para Damaris Aracely Pérez Gonzalez, profesional en administración y compras con enfoque en el sector financiero. Diseño minimalista con gradientes vibrantes, construido con Astro 5 y Tailwind CSS v4.",
    keywords: "CV digital, curriculum vitae, diseño web, personal branding, Astro, Tailwind CSS, Guatemala",
};

export default function DamarisCVPage() {
    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
            {/* Elegant Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft gradient orbs */}
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                <div className="absolute top-[40%] right-[20%] w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            </div>

            <div className="relative z-10">
                {/* Header Section */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Back Button */}
                        <Link
                            href="/trabajo"
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Volver a Mis Proyectos
                        </Link>

                        {/* Project Category Badge */}
                        <div className="flex mb-4 md:mb-6">
                            <div
                                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white shadow-lg"
                            >
                                <Sparkles size={14} className="text-blue-400" />
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    Diseño Web & Branding Personal
                                </span>
                            </div>
                        </div>

                        {/* Project Title */}
                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                                CV Elite -{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                    Damaris Pérez
                                </span>
                            </h1>
                            <p className="text-slate-600 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed">
                                Currículum vitae digital premium diseñado para profesionales del <strong>sector financiero</strong> que buscan destacar con una presencia web moderna y profesional. Este proyecto combina diseño minimalista con gradientes vibrantes para crear una experiencia única y memorable.
                            </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-10">
                            {["Astro 5", "Tailwind CSS v4", "TypeScript", "Personal Branding", "Responsive Design"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Preview Image Section */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-slate-200 bg-white">
                            <Image
                                src="/damaris-cv-preview.png"
                                alt="CV Elite - Damaris Pérez Preview"
                                width={1920}
                                height={1080}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Professional Info Section */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-10">
                            <div className="p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4">Sobre la Profesional</h2>
                                <div className="space-y-2 md:space-y-3 text-slate-700 text-sm md:text-base">
                                    <p><strong className="text-blue-600">Nombre:</strong> Damaris Aracely Pérez Gonzalez</p>
                                    <p><strong className="text-blue-600">Perfil:</strong> Perito en Mercadotecnia y Publicidad</p>
                                    <p><strong className="text-blue-600">Experiencia:</strong> +9 años en procesos administrativos</p>
                                    <p><strong className="text-blue-600">Sector:</strong> Financiero</p>
                                    <p className="pt-2 text-xs md:text-sm leading-relaxed">
                                        Especialista en gestión de compras y administración, enfocada en eficiencia operativa, ética profesional y transparencia financiera.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4">Áreas de Especialización</h2>
                                <div className="space-y-3 md:space-y-4">
                                    <div>
                                        <h3 className="text-xs md:text-sm font-bold text-blue-600 mb-1 md:mb-2">Sector Financiero:</h3>
                                        <p className="text-xs md:text-sm text-slate-700">Precisión, control de costos y cumplimiento normativo</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-bold text-purple-600 mb-1 md:mb-2">Ética Profesional:</h3>
                                        <p className="text-xs md:text-sm text-slate-700">Integridad en el manejo de recursos y negociaciones</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-bold text-pink-600 mb-1 md:mb-2">Eficiencia de Procesos:</h3>
                                        <p className="text-xs md:text-sm text-slate-700">Optimización de recursos y reducción de tiempos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 md:mb-6 lg:mb-8 text-center">
                            Características del <span className="text-blue-600">CV Digital</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-10">
                            {[
                                {
                                    icon: Target,
                                    title: "Hero Section Premium",
                                    description: "Presentación impactante con foto profesional, gradientes vibrantes y badge de disponibilidad en tiempo real"
                                },
                                {
                                    icon: Calendar,
                                    title: "Timeline Interactivo",
                                    description: "Visualización clara de trayectoria profesional y educativa con animaciones suaves"
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Grid de Habilidades",
                                    description: "Presentación visual de competencias técnicas y profesionales con iconos modernos"
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Educación Destacada",
                                    description: "Sección dedicada a formación académica y certificaciones profesionales"
                                },
                                {
                                    icon: Users,
                                    title: "Referencias Verificables",
                                    description: "Espacio para testimonios y contactos de referencia profesional"
                                },
                                {
                                    icon: Mail,
                                    title: "Formulario de Contacto",
                                    description: "Integración directa para oportunidades laborales y networking profesional"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="group p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-slate-900 mb-1 md:mb-2">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                            {/* Concepto */}
                            <div className="p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 mb-2 md:mb-3 lg:mb-4">Concepto de Diseño</h2>
                                <p className="text-xs md:text-sm lg:text-base text-slate-700 leading-relaxed">
                                    CV web que combina <strong>profesionalismo</strong> y <strong>modernidad</strong>.
                                    Diseño minimalista con gradientes suaves que transmite confianza y seriedad,
                                    ideal para el sector financiero. Cada sección cuenta una historia visual.
                                </p>
                            </div>

                            {/* Tecnología */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h2 className="text-2xl font-black text-slate-900 mb-4">Stack Tecnológico</h2>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span><strong>Astro 5</strong> - Framework ultra-rápido</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span><strong>Tailwind CSS v4</strong> - Utilidades modernas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Animaciones CSS personalizadas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Diseño 100% responsive</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Impacto */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h2 className="text-2xl font-black text-slate-900 mb-4">Valor Agregado</h2>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>Presencia profesional en línea 24/7</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>Diferenciación en procesos de selección</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>Experiencia interactiva para reclutadores</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>SEO optimizado para búsquedas</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 md:mt-8 lg:mt-12 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 mb-2 md:mb-3 lg:mb-4">El Diferenciador</h2>
                            <p className="text-xs md:text-sm lg:text-base text-slate-700 leading-relaxed mb-3 md:mb-4">
                                Este proyecto representa la <strong>evolución del currículum tradicional</strong> hacia una experiencia digital interactiva.
                                No solo presenta información, sino que cuenta una historia profesional de manera visual y atractiva.
                            </p>
                            <p className="text-xs md:text-sm lg:text-base text-slate-700 leading-relaxed">
                                Diseñado específicamente para profesionales que buscan destacar en el <strong>sector financiero</strong>,
                                donde la primera impresión y la profesionalidad son fundamentales. Puedes crear uno formal adicional
                                o usar este como tu propuesta premium.
                            </p>
                        </div>
                    </div>
                </section>

                <PageNavigation nextPath="/trabajo" nextLabel="Ver Más Proyectos" />
            </div>
        </div>
    );
}
