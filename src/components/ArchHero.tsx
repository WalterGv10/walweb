"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArchHero() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-transparent">
            {/* Background removed, now handled by parent page */}



            <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >


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
                            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                        >
                            Ver Servicios
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
