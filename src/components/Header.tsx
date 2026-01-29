"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Experiencia", href: "#history" },
        { name: "Workflow", href: "#workflow" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none">
            <motion.div
                initial={false}
                animate={{
                    y: scrolled ? 10 : 0,
                    width: scrolled ? "100%" : "100%",
                }}
                className="max-w-7xl mx-auto pointer-events-auto"
            >
                <div
                    className={`relative flex items-center justify-between transition-all duration-500 rounded-2xl md:rounded-[2.5rem] px-6 md:px-10 ${scrolled
                            ? "py-3 bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            : "py-6 bg-transparent border border-transparent"
                        }`}
                >
                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-all bg-black/40 backdrop-blur-md">
                            <Image
                                src="/wal-logo.png"
                                alt="WalWeb Logo"
                                fill
                                className="object-contain mix-blend-screen scale-110 group-hover:scale-125 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-black tracking-tighter text-white leading-none">
                                WAL<span className="text-blue-500 group-hover:text-cyan-400 transition-colors">WEB</span>
                            </span>
                            <span className="text-[8px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1 group-hover:text-blue-400 transition-colors">Digital Studio</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                                {hoveredLink === link.name && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/5 rounded-full -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="#contact"
                            className="group relative px-6 py-2.5 rounded-full bg-blue-600 overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest">
                                Contratar
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-xl transition-colors ${mobileMenuOpen ? 'bg-white/10' : 'bg-transparent'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 pointer-events-auto bg-black/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:hidden flex flex-col gap-6 shadow-2xl overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />

                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-black text-white hover:text-blue-400 transition-colors uppercase tracking-tight"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-6 border-t border-white/5"
                        >
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center gap-3 font-black uppercase tracking-widest shadow-xl shadow-blue-500/20"
                            >
                                Contratar Ahora
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

