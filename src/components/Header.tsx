"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10" : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-all bg-black/40 backdrop-blur-md">
                        <Image
                            src="/wal-logo.png"
                            alt="WalWeb Logo"
                            fill
                            className="object-contain mix-blend-screen scale-110 group-hover:scale-125 transition-transform duration-500"
                        />
                    </div>
                    <span className="text-lg md:text-xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                        WAL<span className="text-blue-500 group-hover:text-white transition-colors">WEB</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
                    >
                        Contratar
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-1.5 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-4 right-4 mt-2 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-5 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-bold text-white hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-3 rounded-xl bg-blue-600 text-white text-center font-bold"
                        >
                            Contratar Ahora
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
