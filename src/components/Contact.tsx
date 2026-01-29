"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Empezar?</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg px-4">
                        Disponible para nuevos proyectos y colaboraciones estratégicas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Tarjeta de Correo */}
                    <motion.a
                        href="mailto:wgarcia.10@outlook.com"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between">
                            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <ArrowUpRight size={18} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div className="mt-6 md:mt-8 space-y-1 md:space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Enviar un correo</p>
                            <h3 className="text-lg md:text-2xl font-bold text-white break-all">wgarcia.10@outlook.com</h3>
                        </div>
                    </motion.a>

                    {/* Tarjeta de Teléfono / WhatsApp */}
                    <motion.a
                        href="https://wa.me/50254122572"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between">
                            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <ArrowUpRight size={18} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <div className="mt-6 md:mt-8 space-y-1 md:space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">WhatsApp / Teléfono</p>
                            <h3 className="text-lg md:text-2xl font-bold text-white">+502 5412 2572</h3>
                        </div>
                    </motion.a>
                </div>

                {/* Banner Visual Premium */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 relative h-40 md:h-64 rounded-3xl md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group"
                >
                    <Image
                        src="/footer-bg.png"
                        alt="WalWeb Architecture and Tech Banner"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                        <div className="text-center space-y-1 md:space-y-2">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl overflow-hidden border border-white/20 bg-white/5">
                                <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                            </div>
                            <p className="text-white text-base md:text-2xl font-black tracking-[0.1em] md:tracking-[0.2em] uppercase">Architecture & Systems</p>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Final */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-gray-500 text-[10px]">
                    <p className="text-center md:text-left">© {new Date().getFullYear()} WalWeb by Walter García.</p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center">
                        <span className="flex items-center gap-2 hover:text-blue-400 transition-colors uppercase tracking-widest leading-none">
                            Guatemala 🇬🇹
                        </span>
                        <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                        <span className="hover:text-blue-400 transition-colors tracking-widest uppercase leading-none">
                            Premium Digital & Structural Engineering
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
