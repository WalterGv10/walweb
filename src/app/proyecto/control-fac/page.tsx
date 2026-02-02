
import { PageNavigation } from "@/components/ui/PageNavigation";
import { ArrowLeft, Database, FileText, Lock, ScanText, Smartphone, Cloud, CheckCircle, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ControlFAC - Sistema de Gestión de Gastos | Walter García",
    description: "Plataforma SaaS para la gestión automatizada de gastos técnicos con OCR. Desarrollada con React 18, PostgreSQL y Tesseract.js para optimizar la contabilidad operativa.",
    keywords: "SaaS, React, PostgreSQL, OCR, Tesseract.js, Automatización, Finanzas, Web App",
};

export default function ControlFacPage() {
    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
            {/* Elegant Background - Warmer tones for enterprise/finance */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                <div className="absolute top-[40%] right-[20%] w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
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

                        {/* Project Title */}
                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                                ControlFAC -{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-600">
                                    Gestión Inteligente
                                </span>
                            </h1>
                            <p className="text-slate-600 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed">
                                Plataforma interna de <strong>alto rendimiento</strong> diseñada para automatizar el reporte de gastos operativos en campo.
                                Integra tecnología <strong>OCR</strong> para lectura automática de facturas y sincronización en la nube.
                            </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-10">
                            {["React 18", "PostgreSQL", "Tesseract.js (AI)", "Google Cloud Storage", "PWA Ready"].map((tech) => (
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
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-slate-200 bg-slate-900 aspect-video flex items-center justify-center">
                            {/* Fallback container in case image is missing initially, or use the image if available */}
                            <Image
                                src="/controlfac-ai.png"
                                alt="ControlFAC Premium Dashboard"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                            {/* Overlay Badge */}
                            <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-orange-500/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest shadow-xl border border-white/20">
                                SaaS Live Preview
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Context & Solution */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-10">
                            <div className="p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4">El Desafío</h2>
                                <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
                                    <p>
                                        Los técnicos en campo invertían horas manualmente transcribiendo facturas de parqueo y viáticos al final del mes.
                                        Este proceso era propenso a <strong className="text-red-500">errores humanos</strong>,
                                        pérdida de tickets físicos y retrasos en los reembolsos contables.
                                    </p>
                                    <p>
                                        Se necesitaba una solución móvil, rápida y segura que validara la información fiscal en el momento de la compra.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4">La Solución: ControlFAC</h2>
                                <div className="space-y-3 md:space-y-4">
                                    <p className="text-sm md:text-base text-slate-700">
                                        Una <strong>Single Page Application (SPA)</strong> progresiva que permite al usuario:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle size={18} className="text-green-600 mt-0.5" />
                                            <span>Tomar foto a la factura y extraer datos automáticamente (OCR).</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle size={18} className="text-green-600 mt-0.5" />
                                            <span>Validar NIT, Serie y Monto en tiempo real.</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle size={18} className="text-green-600 mt-0.5" />
                                            <span>Generar reportes contables PDF listos para firmar.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Grid */}
                <section className="py-6 md:py-8 lg:py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 md:mb-12 text-center">
                            Arquitectura y <span className="text-orange-600">Funcionalidades</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-10">
                            {[
                                {
                                    icon: ScanText,
                                    title: "Tecnología OCR",
                                    description: "Implementación de Tesseract.js para lectura inteligente de facturas físicas y tickets térmicos.",
                                    image: "/controlfac-deteccion.png"
                                },
                                {
                                    icon: FileText,
                                    title: "Reportes Automáticos",
                                    description: "Generación de PDFs fiscalmente válidos con jsPDF, listos para impresión o archivo digital.",
                                    image: "/controlfac-pdf.png"
                                },
                                {
                                    icon: Smartphone,
                                    title: "Diseño Mobile-First",
                                    description: "Interfaz optimizada para uso en campo, compatible con Android y iOS.",
                                    image: "/controlfac-muni.png"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="group p-0 rounded-2xl md:rounded-3xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                                            <feature.icon size={20} />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Technical Specs Footer */}
                <section className="py-6 md:py-8 px-4 bg-slate-50 mt-12 rounded-t-[40px] border-t border-slate-200">
                    <div className="max-w-7xl mx-auto text-center">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Stack Tecnológico Completo</h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-bold text-slate-700">React 18</span>
                            <span className="text-xl font-bold text-slate-700">Vite</span>
                            <span className="text-xl font-bold text-slate-700">PostgreSQL</span>
                            <span className="text-xl font-bold text-slate-700">Tailwind CSS</span>
                            <span className="text-xl font-bold text-slate-700">Google Cloud</span>
                        </div>
                    </div>
                </section>

                <PageNavigation nextPath="/trabajo" nextLabel="Ver Más Proyectos" />
            </div>
        </div>
    );
}
