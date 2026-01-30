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
                            <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <Image
                                    src="/wal-logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain mix-blend-screen scale-110"
                                />
                            </div>
                            <p className="text-white text-base md:text-2xl font-black tracking-[0.1em] md:tracking-[0.2em] uppercase">Architecture & Systems</p>
                        </div>
                    </div>
                </motion.div>

                {/* Social Media & Footer Final */}
                <div className="mt-16 md:mt-24 pt-12 border-t border-white/5 space-y-8">
                    <div className="flex justify-center gap-6 md:gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                ),
                                href: "https://www.linkedin.com/in/waltergf",
                                label: "LinkedIn",
                                color: "hover:text-blue-500"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                    </svg>
                                ),
                                href: "https://www.tiktok.com/@walwebsolutions",
                                label: "TikTok",
                                color: "hover:text-pink-500"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                ),
                                href: "https://www.youtube.com/@walwebsolutions",
                                label: "YouTube",
                                color: "hover:text-red-500"
                            }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`text-gray-500 transition-all duration-300 ${social.color}`}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-gray-500 text-[10px]">
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
            </div>
        </section>
    );
}
