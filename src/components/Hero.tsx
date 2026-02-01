"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Layout, HardHat } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] lg:min-h-[600px] xl:min-h-[700px] flex flex-col items-center justify-center pt-16 pb-6 lg:pt-20 lg:pb-12 px-4 overflow-hidden">
            {/* Contenedor Principal */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">

                {/* Contenido Texto - Segundo en Desktop (Col 1-7), Primero en Mobile (order-1) */}
                <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left order-1 lg:order-2">
                    <div className="space-y-2 lg:space-y-4">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.04, delayChildren: 0.1 }
                                }
                            }}
                            className="text-[10px] lg:text-sm font-bold text-blue-400/90 tracking-wider lg:tracking-[0.2em] flex flex-wrap items-center justify-center lg:justify-start uppercase will-change-transform"
                        >
                            {"Estratega Digital & Software Engineer".split(" ").map((word, wIndex, words) => (
                                <span key={wIndex} className="inline-block flex items-center">
                                    {Array.from(word).map((char, cIndex) => (
                                        <motion.span
                                            key={cIndex}
                                            variants={{
                                                hidden: { opacity: 0, x: -5 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    {wIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                                </span>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-0.5 h-3 lg:h-4 bg-blue-400 ml-1 inline-block"
                            />
                        </motion.h2>

                        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[1.05]">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="inline-block"
                            >
                                {Array.from("Innovación Digital").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.1, duration: 0 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl mt-1 lg:mt-2">
                                hecha para trascender.
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="text-sm sm:text-base lg:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-2 border-l-2 border-blue-500/50 lg:border-blue-500/30 pl-4 py-2 lg:py-1 bg-white/5 lg:bg-transparent rounded-r-xl lg:rounded-none"
                        >
                            "Si tu propósito es <strong className="text-white font-black text-base sm:text-lg lg:text-base">innovar</strong> o <strong className="text-white font-black text-base sm:text-lg lg:text-base">hacerte la vida más fácil</strong>, has llegado al lugar correcto."
                        </motion.p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 lg:pt-4 px-6 sm:px-0 justify-center lg:justify-start">
                        {/* Botón Principal - Solo visible en Desktop */}
                        <Link
                            href="/contacto"
                            className="hidden lg:flex group px-8 py-4 bg-white text-black font-black rounded-xl transition-all hover:scale-105 active:scale-95 items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] text-base"
                        >
                            Impulsa tu Proyecto
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        {/* Botón Secundario - Siempre visible, pero discreto en móvil */}
                        <Link
                            href="/trabajo"
                            className="px-6 py-3 lg:px-8 lg:py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white lg:text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all flex items-center justify-center text-xs lg:text-base underline lg:no-underline underline-offset-4 decoration-blue-500/30 lg:decoration-transparent"
                        >
                            Ver mi Trabajo
                        </Link>
                    </div>

                    {/* Skill Badges - Compacto para móvil */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-gray-400 group cursor-default">
                            <Code size={12} className="text-purple-500 group-hover:scale-110 transition-transform lg:w-[14px] lg:h-[14px]" />
                            <span className="text-[9px] lg:text-xs font-medium uppercase tracking-widest text-purple-300/80">Desarrollo Web</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 group cursor-default">
                            <Layout size={12} className="text-blue-500 group-hover:scale-110 transition-transform lg:w-[14px] lg:h-[14px]" />
                            <span className="text-[9px] lg:text-xs font-medium uppercase tracking-widest text-blue-300/80">Sistemas UI/UX</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 group cursor-default">
                            <HardHat size={12} className="text-cyan-500 group-hover:scale-110 transition-transform lg:w-[14px] lg:h-[14px]" />
                            <span className="text-[9px] lg:text-xs font-medium uppercase tracking-widest text-cyan-300/80">Consultoría TI</span>
                        </div>
                    </div>
                </div>

                {/* Aspecto Visual: Avatar - Ajustado para Viewport Height */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                        className="relative will-change-transform"
                    >
                        {/* Marco del Avatar - Optimizado para 384x701 (Móvil) y 1366x599 (Desktop) */}
                        <div className="relative z-10 w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[300px] md:h-[400px] lg:w-[320px] lg:h-[420px] xl:w-[350px] xl:h-[480px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/walter_contact.png"
                                alt="Walter Fernando GV"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                                priority
                                fetchPriority="high"
                                sizes="(max-width: 768px) 220px, 400px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
                        </div>

                        {/* Card Flotante - Ajustada */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-2 top-4 lg:top-6 z-20 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hidden sm:block"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[8px] lg:text-[9px] shadow-lg shadow-blue-500/50">
                                    15+
                                </div>
                                <div>
                                    <p className="text-[5px] lg:text-[6px] uppercase tracking-widest text-gray-400 font-bold">Años</p>
                                    <p className="text-[7px] lg:text-[8px] font-bold text-white uppercase">Experiencia</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decoración de Fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            </div>
        </section>
    );
}
