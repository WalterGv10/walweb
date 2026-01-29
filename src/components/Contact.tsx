"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Empezar?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Estoy disponible para nuevos proyectos y colaboraciones estratégicas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Tarjeta de Correo */}
                    <motion.a
                        href="mailto:wgarcia.10@outlook.com"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between">
                            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail size={32} />
                            </div>
                            <ArrowUpRight className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div className="mt-8 space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Enviar un correo</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white break-all">wgarcia.10@outlook.com</h3>
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
                        className="group p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between">
                            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                <MessageSquare size={32} />
                            </div>
                            <ArrowUpRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <div className="mt-8 space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">WhatsApp / Teléfono</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white">+502 5412 2572</h3>
                        </div>
                    </motion.a>
                </div>

                {/* Footer Footer */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} WalWeb by Walter García. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-blue-400 transition-colors cursor-default select-none">Guatemala</span>
                        <span className="hover:text-blue-400 transition-colors cursor-default select-none tracking-widest">ARCHITECTURE & CODE</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
