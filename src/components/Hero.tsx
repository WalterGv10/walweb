"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Layout, HardHat } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] lg:min-h-[550px] flex flex-col items-center justify-center pt-20 pb-8 px-4 overflow-hidden">
            {/* Contenedor Principal */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">

                {/* Aspecto Visual: Avatar */}
                <div className="lg:col-span-5 lg:order-2 relative flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Marco del Avatar - Altamente optimizado para viewports bajos (1366x599) */}
                        <div className="relative z-10 w-[200px] h-[260px] sm:w-64 sm:h-80 md:w-80 md:h-[380px] lg:w-[300px] lg:h-[400px] rounded-[50px] md:rounded-[80px] p-1 bg-gradient-to-b from-blue-500/30 via-cyan-500/10 to-transparent backdrop-blur-sm overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/20">
                            <div className="relative w-full h-full rounded-[49px] md:rounded-[79px] overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/walter.png"
                                    alt="Walter Fernando García Véliz - WalWeb Solutions"
                                    fill
                                    className="object-cover object-top scale-110 hover:scale-100 transition-transform duration-1000"
                                    priority
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Card Flotante - Redimensionada y posicionada para no colisionar */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-2 top-6 z-20 p-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hidden sm:block"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[10px] shadow-lg shadow-blue-500/50">
                                    15+
                                </div>
                                <div>
                                    <p className="text-[7px] uppercase tracking-widest text-gray-400 font-bold">Años</p>
                                    <p className="text-[9px] font-bold text-white uppercase">Experiencia</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Contenido Texto */}
                <div className="lg:col-span-7 lg:order-1 space-y-4 md:space-y-6 text-center lg:text-left">
                    <div className="space-y-2 md:space-y-4">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.04,
                                        delayChildren: 0.1
                                    }
                                }
                            }}
                            className="text-sm sm:text-base md:text-lg font-medium text-blue-400/90 tracking-wide flex items-center justify-center lg:justify-start gap-1"
                        >
                            {Array.from("Hola, soy Walter Fernando García Véliz.").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -5 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-0.5 h-4 bg-blue-400 ml-1 inline-block"
                            />
                        </motion.h2>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                            <BlurText text="Soluciones Web & Arquitectura" delay={50} />
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                            Transformo ideas en experiencias digitales de alto impacto y diseños arquitectónicos profesionales.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2 px-4 lg:px-0">
                        <Link
                            href="#contact"
                            className="px-6 py-3.5 md:px-8 md:py-4 bg-white text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-xl text-sm md:text-base"
                        >
                            Iniciar Proyecto
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                            href="#history"
                            className="px-6 py-3.5 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all flex items-center justify-center text-sm md:text-base"
                        >
                            Trayectoria
                        </Link>
                    </div>

                    {/* Skill Badges - Más compactos para Laptop */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Code size={16} className="text-blue-500" />
                            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest">Web Dev</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Layout size={16} className="text-blue-500" />
                            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest">Sistemas UI</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <HardHat size={16} className="text-blue-500" />
                            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest">Arquitectura</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decoración de Fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            </div>
        </section>
    );
}
