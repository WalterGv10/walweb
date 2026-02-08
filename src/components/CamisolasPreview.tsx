"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";

const jerseys = [
    {
        id: 1,
        name: "Real Madrid Third 25/26",
        team: "madrid",
        color: "Azul Grisáceo",
        image: "/camisolas/madrid-azul.jpg",
        price: "Q200",
    },
    {
        id: 2,
        name: "Barcelona Home 25/26",
        team: "barca",
        color: "Azul y Grana - Spotify",
        image: "/camisolas/barca-home.jpg",
        price: "Q200",
    },
    {
        id: 3,
        name: "Real Madrid Home 25/26",
        team: "madrid",
        color: "Blanco con Detalles Oro",
        image: "/camisolas/madrid-blanca.jpg",
        price: "Q200",
    },
    {
        id: 4,
        name: "Barcelona Training 25/26",
        team: "barca",
        color: "Rosa Coral",
        image: "/camisolas/barca-rosa.jpg",
        price: "Q200",
    },
];

export function CamisolasPreview() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentJersey = jerseys[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + jerseys.length) % jerseys.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % jerseys.length);
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Interactive Gallery Preview */}
            <div className="relative">
                <Card variant="glass" className="p-8 relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50">
                    {/* Team-colored glow */}
                    <motion.div
                        className="absolute inset-0 opacity-20 blur-3xl"
                        animate={{
                            background: currentJersey.team === "madrid"
                                ? "radial-gradient(circle, #FEBE10 0%, transparent 70%)"
                                : "radial-gradient(circle, #ff1e1e 0%, transparent 70%)",
                        }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Main Jersey Display */}
                    <div className="relative z-10">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                            transition={{ duration: 0.6 }}
                            className="aspect-square relative flex items-center justify-center mb-6"
                        >
                            {/* Real Jersey Image */}
                            <div className="w-full max-w-sm h-96 relative">
                                <img
                                    src={currentJersey.image}
                                    alt={currentJersey.name}
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>

                        {/* Jersey Info */}
                        <div className="text-center mb-6">
                            <motion.h3
                                key={`name-${currentIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl font-bold text-white mb-2"
                            >
                                {currentJersey.name}
                            </motion.h3>
                            <p className="text-slate-400 mb-2">{currentJersey.color}</p>
                            <div className="flex items-center justify-center gap-2">
                                <Sparkles size={16} className="text-yellow-400" />
                                <span className="text-yellow-400 font-bold text-sm">G5 Versión Jugador</span>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                            >
                                <ChevronLeft size={20} className="text-white" />
                            </button>

                            <div className="flex gap-2">
                                {jerseys.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                            ? "bg-cyan-400 w-6"
                                            : "bg-white/30"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                            >
                                <ChevronRight size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Features List */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-3xl font-black text-white mb-4">
                        E-commerce de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Élite</span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Catálogo premium de camisolas deportivas con experiencia de compra inmersiva,
                        galería 3D circular y sistema de personalización en tiempo real.
                    </p>
                </div>

                {/* Key Features */}
                <div className="grid gap-4">
                    {[
                        { icon: "🔄", title: "Galería 3D Circular", desc: "Navegación inmersiva con rotación en 3D" },
                        { icon: "🎨", title: "Temas Dinámicos", desc: "Colores que cambian según el equipo seleccionado" },
                        { icon: "📹", title: "Videos de Producto", desc: "Demostración en video de cada camisola" },
                        { icon: "🛒", title: "Carrito Animado", desc: "Efecto de vuelo cuando agregas productos" },
                        { icon: "⚡", title: "Calidad G5 Premium", desc: "Versión jugador - máxima calidad" },
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
                    href="https://recamisolas2025.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                    <ShoppingBag size={20} />
                    Ver Catálogo Completo
                </a>
            </div>
        </div>
    );
}
