"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Layout, HardHat } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
            {/* Contenedor Principal con Layout Asimétrico y Moderno */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Lado Izquierdo: Texto e Impacto */}
                <div className="lg:col-span-7 space-y-8 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Disponible para proyectos</span>
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            WAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-white">WEB</span>
                        </h1>
                        <div className="text-2xl md:text-4xl font-light text-gray-300">
                            <BlurText text="Soluciones Web & Arquitectura" delay={50} />
                        </div>
                        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                            Transformo ideas en experiencias digitales de alto impacto y diseños arquitectónicos profesionales.
                            Donde el código se encuentra con la estructura.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Iniciar Proyecto
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#portfolio"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                        >
                            Ver Portafolio
                        </Link>
                    </div>

                    {/* Mini Badges de Skills */}
                    <div className="flex gap-6 pt-10 border-t border-white/5">
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Code size={20} />
                            </div>
                            <span className="text-sm font-medium text-gray-400">Desarrollo Web</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <Layout size={20} />
                            </div>
                            <span className="text-sm font-medium text-gray-400">Sistemas UI</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                <HardHat size={20} />
                            </div>
                            <span className="text-sm font-medium text-gray-400">Arquitectura</span>
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Visual Avatar con Composición Geométrica */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Elementos decorativos flotantes */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

                        {/* Marco del Avatar con Diseño de Cápsula */}
                        <div className="relative z-10 w-64 h-80 md:w-80 md:h-[450px] rounded-[60px] md:rounded-[100px] p-1 bg-gradient-to-b from-blue-500/30 via-cyan-500/10 to-transparent backdrop-blur-sm overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/20">
                            <div className="relative w-full h-full rounded-[59px] md:rounded-[99px] overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/walter.png"
                                    alt="Walter - WalWeb Solutions"
                                    fill
                                    className="object-cover object-top scale-110 hover:scale-100 transition-transform duration-1000"
                                    priority
                                    unoptimized
                                />
                                {/* Overlay de Degradado para Integración */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Card Flotante de Estadísticas / Info */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 top-1/4 z-20 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50">
                                    15+
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Años de</p>
                                    <p className="text-sm font-bold text-white">Experiencia</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decoración de Fondo Sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            </div>
        </section>
    );
}
