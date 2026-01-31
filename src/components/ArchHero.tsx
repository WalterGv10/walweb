"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
const Squares = dynamic(() => import("./ui/Squares"), { ssr: false });

export function ArchHero() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black/90">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Squares
                    direction="diagonal"
                    speed={0.5}
                    borderColor="#271E37"
                    squareSize={40}
                    hoverFillColor="#222222"
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10 pointer-events-none" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                        <span className="text-blue-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                            Arquitectura Digital & BIM
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight">
                        Precisión <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">
                            Constructiva
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                        Transformamos tus ideas en modelos 3D ejecutables y planos técnicos libres de errores.
                        La tecnología al servicio de la construcción.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="/contacto"
                            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
                        >
                            Cotizar Proyecto
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#servicios"
                            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            Ver Servicios
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
