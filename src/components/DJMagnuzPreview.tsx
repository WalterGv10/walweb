"use client";

import { motion } from "framer-motion";
import { Music, Zap, Users, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";

export function DJMagnuzPreview() {
    return (
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Interactive Neon Display */}
            <div className="relative">
                <Card variant="glass" className="p-8 relative overflow-hidden bg-black border-purple-500/20">
                    {/* Cyberpunk Background Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Dark gradient base */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-pink-950/20" />

                        {/* Neon grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,204,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,204,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* Glowing orbs */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 space-y-8">
                        {/* Stranger Things Style Title */}
                        <div className="text-center space-y-4">
                            <motion.h2
                                className="text-6xl font-black tracking-tighter uppercase"
                                style={{
                                    color: '#fff',
                                    textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00cc, 0 0 40px #ff00cc, 0 0 80px #ff00cc'
                                }}
                                animate={{
                                    textShadow: [
                                        '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00cc, 0 0 40px #ff00cc',
                                        '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #ff00cc, 0 0 80px #ff00cc',
                                        '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00cc, 0 0 40px #ff00cc',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                DJ<br />MAGNUZ
                            </motion.h2>

                            <p className="text-sm font-bold tracking-widest text-purple-300 uppercase">
                                El Emperador del Techno
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Music, label: "5 Años", sublabel: "Experiencia" },
                                { icon: Users, label: "7+ Venues", sublabel: "Top Clubes" },
                                { icon: Zap, label: "Techno", sublabel: "Especialidad" },
                                { icon: Radio, label: "Live", sublabel: "Sets" },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 rounded-lg bg-black/40 border border-purple-500/20 text-center"
                                >
                                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                                    <div className="font-black text-white text-lg">{stat.label}</div>
                                    <div className="text-xs text-purple-300">{stat.sublabel}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Glitch effect line */}
                        <div className="relative h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scaleX: [1, 1.1, 1],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-3xl font-black text-white mb-4">
                        Presencia Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Premium</span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Tarjeta de presentación digital con temática Stranger Things y estética cyberpunk.
                        Diseño inmersivo con efectos de neón, glitch y animaciones basadas en scroll.
                    </p>
                </div>

                {/* Key Features */}
                <div className="grid gap-4">
                    {[
                        { icon: "🎨", title: "Temática Stranger Things", desc: "Efectos de neón y glitch estilo retro-futurista" },
                        { icon: "✨", title: "Animaciones Scroll", desc: "Secciones que se revelan con efectos cinematográficos" },
                        { icon: "🎵", title: "Integración Multimedia", desc: "Videos de Instagram y galería de presentaciones" },
                        { icon: "⚡", title: "Efectos 3D", desc: "Pilares de luz con Three.js y partículas flotantes" },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-3xl">{feature.icon}</span>
                            <div>
                                <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                <p className="text-sm text-slate-400">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="https://djmagnuz.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                    <Radio size={20} />
                    Ver Sitio en Vivo
                </a>
            </div>
        </div>
    );
}
