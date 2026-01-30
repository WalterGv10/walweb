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
            position: "md:top-[-60px] md:left-1/2 md:-translate-x-1/2"
        },
        {
            icon: <MessageSquare size={24} />,
            href: "https://wa.me/50254122572",
            label: "WhatsApp",
            // Desktop: Top Right (2 o'clock)
            position: "md:top-[10%] md:right-[-20px]"
        },
        {
            icon: <Linkedin size={24} />,
            href: "https://www.linkedin.com/in/waltergf",
            label: "LinkedIn",
            // Desktop: Bottom Right (4 o'clock)
            position: "md:bottom-[10%] md:right-[-20px]"
        },
        {
            icon: <Music2 size={24} />,
            href: "mailto:wgarcia.10@outlook.com?subject=Music%20Collab",
            label: "Music Collab",
            // Desktop: Bottom (6 o'clock)
            position: "md:bottom-[-60px] md:left-1/2 md:-translate-x-1/2"
        },
        {
            icon: <Youtube size={24} />,
            href: "https://www.youtube.com/@walwebsolutions",
            label: "YouTube",
            // Desktop: Bottom Left (8 o'clock)
            position: "md:bottom-[10%] md:left-[-20px]"
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
            ),
            href: "https://www.tiktok.com/@walwebsolutions",
            label: "TikTok",
            // Desktop: Top Left (10 o'clock)
            position: "md:top-[10%] md:left-[-20px]"
        }
    ];

    return (
        <section id="contact" className="py-12 md:py-32 px-4 relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] w-full">
            {/* Background Atmosphere - Optimized blur for mobile performance */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-blue-500/5 blur-[60px] md:blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 text-center mb-8 md:mb-20">
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-2 md:mb-3">
                    CONECTA <span className="text-blue-500">AHORA</span>
                </h2>
                <p className="text-slate-400 text-[10px] md:text-sm font-medium uppercase tracking-[0.3em] md:tracking-[0.3em]">
                    Un clic para empezar
                </p>
            </div>

            {/* =========================================
                DESKTOP LAYOUT (Orbit) - Hidden on Mobile
               ========================================= */}
            <div className="hidden md:flex relative w-[500px] h-[500px] items-center justify-center">
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
                            src="/walter_contact.png"
                            alt="Walter García"
                            fill
                            className="object-cover"
                            priority
                            sizes="256px"
                        />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-5 right-5 w-5 h-5 bg-green-500 rounded-full border-[3px] border-slate-900 z-30 animate-pulse" />
                </motion.div>

                {/* Desktop Satellites */}
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
                            ${i === 3 ? "hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:border-purple-500/50" : ""}
                            ${i === 4 ? "hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:border-red-500/50" : ""}
                            ${i === 5 ? "hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:border-pink-500/50" : ""}
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

            {/* =========================================
                MOBILE LAYOUT (Stack) - Visible on Mobile
               ========================================= */}
            <div className="flex md:hidden flex-col items-center gap-8 w-full max-w-[320px]">

                {/* Central Photo (Mobile) - Optimized Size */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                >
                    <div className="relative w-36 h-36 rounded-full p-1.5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                            <Image
                                src="/walter_contact.png"
                                alt="Walter García"
                                fill
                                className="object-cover"
                                sizes="144px"
                                priority
                            />
                        </div>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-[3px] border-slate-900 animate-pulse z-20" />
                </motion.div>

                {/* Grid of Glass Orbs (Mobile) - Compact Grid */}
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
                            className={`
                                relative flex flex-col items-center justify-center gap-2 group
                            `}
                        >
                            <div className={`
                                w-14 h-14 rounded-full flex items-center justify-center
                                bg-slate-950/80 backdrop-blur-md border border-white/10
                                shadow-lg
                                transition-all duration-300 active:scale-95
                                ${i === 0 ? "shadow-blue-900/20 border-blue-500/30 text-blue-400" : ""}
                                ${i === 1 ? "shadow-green-900/20 border-green-500/30 text-green-400" : ""}
                                ${i === 2 ? "shadow-blue-900/20 border-sky-600/30 text-[#0077b5]" : ""}
                                ${i === 3 ? "shadow-purple-900/20 border-purple-500/30 text-purple-400" : ""}
                                ${i === 4 ? "shadow-red-900/20 border-red-500/30 text-red-500" : ""}
                                ${i === 5 ? "shadow-pink-900/20 border-pink-500/30 text-pink-500" : ""}
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

            <div className="mt-12 md:mt-24 text-center">
                <p className="text-slate-600 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
                    © {new Date().getFullYear()} WalWeb By W.García
                </p>
            </div>
        </section>
    );
}
