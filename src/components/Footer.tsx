"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Linkedin,
    MessageSquare,
    ArrowUpRight,
    Globe,
    Zap,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/waltetergv/",
        icon: <Linkedin className="w-6 h-6" />,
        color: "group-hover:text-blue-400",
        label: "WalteterGV"
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/walwebede",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        ),
        color: "group-hover:text-blue-600",
        label: "WalWebEde"
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@waltergarciaveliz?is_from_webapp=1&sender_device=pc",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
        ),
        color: "group-hover:text-cyan-400",
        label: "@waltergarciaveliz"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/waltergv.10/",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ),
        color: "group-hover:text-pink-500",
        label: "@waltergv.10"
    }
];

export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const textX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <footer
            ref={containerRef}
            className="relative w-full bg-[#050505] pt-24 pb-12 overflow-hidden border-t-2 border-zinc-900"
        >
            {/* Massive Kinetic Text Background - Opaque and bold */}
            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none whitespace-nowrap opacity-[0.07] select-none">
                <motion.h2
                    style={{ x: textX }}
                    className="text-[20vw] font-black tracking-tighter text-white"
                >
                    WALWEB DIGITAL TRANSFORMATION • INNOVACIÓN REAL •
                </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-24">

                    {/* Brutalist Call to Action Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                        <div className="lg:col-span-8 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="inline-block px-4 py-2 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xs">
                                    ¿Listo para el siguiente nivel?
                                </div>
                                <h3 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">
                                    VAMOS A CREAR <br />
                                    <span className="text-blue-500">
                                        ALGO ÉPICO
                                    </span>
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center gap-6 group"
                                >
                                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center transition-all group-hover:scale-110 active:scale-95 group-hover:bg-blue-600 shadow-2xl">
                                        <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 text-black transition-colors group-hover:text-white" />
                                    </div>
                                    <span className="text-3xl md:text-5xl font-black text-white group-hover:text-blue-500 transition-colors uppercase border-b-[12px] border-white group-hover:border-blue-500 pb-2">
                                        Empieza tu viaje
                                    </span>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-10">
                            <div className="flex flex-col lg:items-end gap-2">
                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Localización</span>
                                <span className="text-white text-2xl font-black flex items-center gap-3">
                                    <Globe className="w-6 h-6 text-blue-500" />
                                    GUATEMALA, GLOBAL
                                </span>
                            </div>
                            <div className="flex flex-col lg:items-end gap-2">
                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Contacto Directo</span>
                                <a href="mailto:wgarcia.10@outlook.com" className="text-white text-2xl font-black hover:text-blue-500 transition-colors">
                                    wgarcia.10@outlook.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Grid - Massive Solid Tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-4 border-zinc-900 rounded-3xl overflow-hidden bg-zinc-950">
                        {socialLinks.map((social, i) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "group relative p-12 transition-all hover:bg-zinc-900 border-zinc-900",
                                    i < 3 && "lg:border-r-4",
                                    i < 2 && "sm:border-b-4",
                                    i >= 2 && "lg:border-b-0",
                                    i === 1 && "sm:border-r-0 lg:border-r-4"
                                )}
                            >
                                <div className={cn("transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-125 mb-10 w-fit", social.color, "text-zinc-500")}>
                                    {social.icon}
                                </div>
                                <div className="space-y-2">
                                    <p className="text-white font-black uppercase tracking-tighter text-4xl">
                                        {social.name}
                                    </p>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                        {social.label}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Footer Bottom Metadata - Solid and clear */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 border-t-4 border-zinc-900">
                        <div className="flex items-center gap-8">
                            <div className="relative w-20 h-20">
                                <Image
                                    src="/wal-logo.png"
                                    alt="WalWeb"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black tracking-tighter text-white">WALWEB</span>
                                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">© {new Date().getFullYear()} By Walter García</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-12">
                            <Link href="/servicios" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Servicios</Link>
                            <Link href="/trabajo" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Proyectos</Link>
                            <Link href="/trayectoria" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Trayectoria</Link>
                        </div>

                        <div className="flex items-center gap-5 px-8 py-4 bg-zinc-900 rounded-xl border-2 border-zinc-800">
                            <span className="flex h-4 w-4 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                            <span className="text-[12px] font-black uppercase tracking-widest text-white">READY FOR PROD</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
