"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Linkedin, Youtube, Music2 } from "lucide-react";
import Image from "next/image";

export function Contact() {
    const satellites = [
        {
            icon: <Mail size={24} />,
            href: "mailto:wgarcia.10@outlook.com",
            label: "Email",
            // Desktop: Top (12 o'clock)
            position: "md:top-[-50px] md:left-1/2 md:-translate-x-1/2"
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            ),
            href: "https://wa.me/50254122572",
            label: "WhatsApp",
            // Desktop: Bottom Right (4 o'clock)
            position: "md:bottom-[10%] md:right-[-10px]"
        },
        {
            icon: <Linkedin size={24} />,
            href: "https://www.linkedin.com/in/waltetergv/",
            label: "LinkedIn",
            // Desktop: Bottom Left (8 o'clock)
            position: "md:bottom-[10%] md:left-[-10px]"
        },

    ];

    return (
        <section id="contact" className="py-0 px-4 relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[70vh] md:min-h-[600px] w-full">
            {/* Background Atmosphere - Optimized blur for mobile performance */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-blue-500/5 blur-[60px] md:blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left Column: Content & CTA */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-1 lg:order-1">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                            CONECTA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AHORA</span>
                        </h2>
                        <p className="text-slate-400 text-xs lg:text-sm font-bold uppercase tracking-[0.3em] max-w-sm lg:max-w-none mx-auto lg:mx-0">
                            Un clic para empezar tu transformación digital
                        </p>
                    </div>

                    <div className="hidden lg:block w-20 h-1 bg-blue-500/20 rounded-full" />

                    <div className="pt-8 lg:pt-0">
                        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                            © {new Date().getFullYear()} WalWeb By W.García
                        </p>
                    </div>
                </div>

                {/* Right Column: Interactive Visuals */}
                <div className="flex flex-col items-center justify-center order-2 lg:order-2 relative">

                    {/* Desktop Orbit */}
                    <div className="hidden lg:flex relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] items-center justify-center">
                        {/* Orbit Rings */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                        {/* Central Photo (Desktop) */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-64 h-64 rounded-full p-3 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] z-20"
                        >
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                                <Image
                                    src="/walter_pro.png"
                                    alt="Walter García"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>
                            {/* Status Indicator */}
                            <div className="absolute bottom-5 right-5 w-5 h-5 bg-green-500 rounded-full border-[3px] border-slate-900 z-30 animate-pulse" />
                        </motion.div>

                        {/* Desktop Satellites - Ajustados para el nuevo layout (Cargados a la derecha/abajo) */}
                        {satellites.map((sat, i) => (
                            <motion.a
                                key={i}
                                href={sat.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`
                                    absolute flex items-center justify-center 
                                    w-20 h-20 rounded-full
                                    bg-slate-950/80 backdrop-blur-md border border-white/10
                                    shadow-[0_0_15px_rgba(0,0,0,0.5)]
                                    hover:scale-110 transition-all duration-300 z-30 group cursor-pointer
                                    ${sat.position}
                                    
                                    /* Brand Specific Glow */
                                    ${i === 0 ? "hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:border-blue-500/50" : ""}
                                    ${i === 1 ? "hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:border-green-500/50" : ""}
                                    ${i === 2 ? "hover:shadow-[0_0_25px_rgba(10,102,194,0.6)] hover:border-blue-400/50" : ""}
                                `}
                                title={sat.label}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className={`relative z-10 transition-colors duration-300 text-slate-300 group-hover:text-white`}>
                                    {sat.icon}
                                </div>
                                <div className="absolute opacity-0 group-hover:opacity-100 -bottom-10 bg-black/90 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border border-white/10 backdrop-blur-md text-white shadow-xl translate-y-2 group-hover:translate-y-0">
                                    {sat.label}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Layout (Stack) */}
                    <div className="flex lg:hidden flex-col items-center gap-8 w-full max-w-[320px]">
                        {/* Central Photo (Mobile) */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10"
                        >
                            <div className="relative w-32 h-32 rounded-full p-1.5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                                    <Image
                                        src="/walter_pro.png"
                                        alt="Walter García"
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Status Indicator */}
                            <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-[3px] border-slate-900 animate-pulse z-20" />
                        </motion.div>

                        {/* Grid of Glass Orbs (Mobile) */}
                        <div className="grid grid-cols-3 gap-x-5 gap-y-6 w-full place-items-center">
                            {satellites.map((sat, i) => (
                                <motion.a
                                    key={i}
                                    href={sat.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative flex flex-col items-center justify-center gap-2 group"
                                >
                                    <div className={`
                                        w-14 h-14 rounded-full flex items-center justify-center
                                        bg-slate-950/80 backdrop-blur-md border border-white/10
                                        shadow-lg
                                        transition-all duration-300 active:scale-95
                                        ${i === 0 ? "shadow-blue-900/20 border-blue-500/30 text-blue-400" : ""}
                                        ${i === 1 ? "shadow-green-900/20 border-green-500/30 text-green-400" : ""}
                                        ${i === 2 ? "shadow-blue-900/20 border-sky-600/30 text-[#0077b5]" : ""}
                                    `}>
                                        {sat.icon}
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-active:text-white">
                                        {sat.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
