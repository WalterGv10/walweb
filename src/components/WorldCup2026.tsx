"use client";
import { motion } from "framer-motion";
import { Trophy, Smartphone, Users, TrendingUp, ArrowRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";

export function WorldCup2026() {
    return (
        <section id="mundial2026" className="py-24 px-4 relative z-10 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1f13] to-black opacity-80" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-500/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Contenido Texto */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <Trophy className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Oportunidad 2026</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                            El Mundial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                Venderá por Ti
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-green-500/30 pl-6">
                            El Mundial 2026 será en nuestro horario laboral. La atención de todo Guatemala estará en las pantallas.
                            <span className="text-white font-bold block mt-2">¿Tu negocio será espectador o protagonista?</span>
                        </p>

                        <div className="space-y-6 pt-4">
                            <Feature
                                icon={<Users className="text-green-400" />}
                                title="Quinielas Corporativas (Marca Blanca)"
                                desc="Elimina el Excel. Una App Web con TU logo para que tus empleados o clientes predigan resultados. Aumenta la moral y la fidelidad."
                            />
                            <Feature
                                icon={<Smartphone className="text-green-400" />}
                                title="Menús Digitales HORECA"
                                desc="Precios y promociones que cambian en tiempo real durante los partidos. Si hay gol, hay oferta. Venta impulsiva garantizada."
                            />
                        </div>

                        <div className="pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 flex items-center gap-2 group transition-all"
                            >
                                Cotizar Solución Mundial
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Visual Mockup */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-xl group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* UI Mockup - Quiniela */}
                            <div className="p-6 md:p-8 space-y-6">
                                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
                                        <div className="space-y-1">
                                            <div className="w-24 h-2 bg-white/20 rounded-full" />
                                            <div className="w-16 h-2 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                                        EN VIVO
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <PredictionCard team1="GUA" team2="ARG" odds="1.25" />
                                    <PredictionCard team1="BRA" team2="FRA" odds="2.10" />
                                    <PredictionCard team1="USA" team2="MEX" odds="1.80" />
                                </div>

                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-4">
                                    <TrendingUp className="text-green-400" />
                                    <div>
                                        <p className="text-xs text-green-300 font-bold uppercase">Ranking Empleados</p>
                                        <p className="text-sm text-green-100">Juan Pérez lidera con 150 pts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500 rounded-full blur-[80px] opacity-20" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-white text-lg">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">{desc}</p>
            </div>
        </div>
    );
}

function PredictionCard({ team1, team2, odds }: { team1: string, team2: string, odds: string }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
                <span className="font-bold text-white">{team1}</span>
                <span className="text-xs text-gray-500">vs</span>
                <span className="font-bold text-white">{team2}</span>
            </div>
            <div className="px-3 py-1 rounded-lg bg-black/40 text-xs font-mono text-gray-300">
                x{odds}
            </div>
        </div>
    );
}
