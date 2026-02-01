"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Estados del ciclo del Golpe de Ariete
 */
type PumpPhase = "ACCELERATION" | "SHOCK" | "DELIVERY" | "RECOIL";

const phases: Record<PumpPhase, { title: string; desc: string }> = {
    ACCELERATION: {
        title: "1. Aceleración",
        desc: "El agua fluye por gravedad y escapa por la válvula de ímpetu, ganando velocidad cinética.",
    },
    SHOCK: {
        title: "2. GOLPE DE ARIETE (Carga)",
        desc: "¡EL MOMENTO CRÍTICO! La energía cinética del agua choca contra la válvula cerrada, convirtiéndose instantáneamente en PRESIÓN EXTREMA. Este fenómeno es el 'motor' que permite elevar el agua sin energía externa.",
    },
    DELIVERY: {
        title: "3. Entrega (Descarga)",
        desc: "La cámara de aire libera la energía acumulada, empujando el agua hacia el destino (Descarga).",
    },
    RECOIL: {
        title: "4. Retroceso",
        desc: "Las presiones se equilibran, la válvula de ímpetu cae por su peso y el ciclo se reinicia.",
    },
};

export function RamPumpDiagram() {
    const [phase, setPhase] = useState<PumpPhase>("ACCELERATION");
    const [isPlaying, setIsPlaying] = useState(true);

    // Ciclo automático
    useEffect(() => {
        if (!isPlaying) return;

        const cycle = async () => {
            if (!isPlaying) return;
            setPhase("ACCELERATION");
            await new Promise((r) => setTimeout(r, 2500));

            if (!isPlaying) return;
            // Fase de Golpe con Pausa Larga (Carga) - Prioridad lectura
            setPhase("SHOCK");
            await new Promise((r) => setTimeout(r, 8000));

            if (!isPlaying) return;
            // Fase de Entrega (Descarga)
            setPhase("DELIVERY");
            await new Promise((r) => setTimeout(r, 2000));

            if (!isPlaying) return;
            setPhase("RECOIL");
            await new Promise((r) => setTimeout(r, 800));

            if (isPlaying) cycle(); // Loop
        };

        cycle();

        return () => { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying]);

    return (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Visualización SVG */}
            <Card
                variant="glass"
                className="lg:col-span-2 aspect-video relative overflow-hidden bg-slate-900/50 border border-white/10 flex items-center justify-center p-8"
            >
                <svg viewBox="0 0 800 500" className="w-full h-full text-white">
                    <defs>
                        <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0066cc" />
                            <stop offset="100%" stopColor="#00f2ff" />
                        </linearGradient>
                    </defs>

                    {/* Tubería de alimentación (Drive Pipe) */}
                    <path
                        d="M50,350 L400,350"
                        stroke="#374151"
                        strokeWidth="40"
                        fill="none"
                    />

                    {/* Cuerpo de bomba */}
                    <rect
                        x="380"
                        y="300"
                        width="100"
                        height="100"
                        fill="#6b7280"
                        rx="10"
                    />

                    {/* Válvula de Ímpetu (Waste Valve) */}
                    <g transform="translate(430, 400)">
                        <m.rect
                            animate={{
                                y: phase === "SHOCK" || phase === "DELIVERY" ? -20 : 0,
                            }}
                            width="40"
                            height="10"
                            fill="#ef4444"
                            x="-20"
                            y="10"
                        />
                        <text x="30" y="20" fontSize="12" fill="#9ca3af">
                            Válvula Ímpetu
                        </text>
                    </g>

                    {/* Cámara de Aire */}
                    <path
                        d="M410,300 L410,150 Q410,100 450,100 Q490,100 490,150 L490,300"
                        fill="#9ca3af"
                        opacity="0.3"
                    />

                    {/* Aire en cámara (compresión) */}
                    <m.ellipse
                        animate={{
                            ry: phase === "DELIVERY" ? 15 : (phase === "SHOCK" ? 35 : 25),
                            fill: phase === "SHOCK" ? "#00f2ff" : "#bae6fd",
                            opacity: phase === "SHOCK" ? 0.4 : 0.1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: phase === "SHOCK" ? 300 : 100,
                            damping: 10
                        }}
                        cx="450"
                        cy="130"
                        rx="35"
                        ry="25"
                        fill="#bae6fd"
                        opacity="0.1"
                    />

                    {/* Efecto de Onda de Choque (Carga) */}
                    <m.circle
                        cx="430"
                        cy="350"
                        r="0"
                        stroke="#00f2ff"
                        strokeWidth="2"
                        fill="none"
                        animate={phase === "SHOCK" ? {
                            r: [0, 80],
                            opacity: [1, 0],
                        } : { r: 0, opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            repeat: phase === "SHOCK" ? Infinity : 0,
                            repeatDelay: 0.2
                        }}
                    />

                    {/* Brillo de Presión en el cuerpo (descarga) */}
                    <m.rect
                        x="380"
                        y="300"
                        width="100"
                        height="100"
                        fill="#00f2ff"
                        rx="10"
                        opacity={0}
                        animate={{
                            opacity: phase === "SHOCK" ? [0, 0.3, 0] : 0
                        }}
                        transition={{ duration: 0.3, repeat: Infinity }}
                    />

                    {/* Tubería de Entrega */}
                    <path
                        d="M490,250 L750,50"
                        stroke="#374151"
                        strokeWidth="20"
                        fill="none"
                    />

                    {/* Agua - Animación de flujo */}
                    {/* Flujo Entrada */}
                    <m.path
                        d="M50,350 L400,350"
                        stroke="url(#waterFlow)"
                        strokeWidth="30"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: phase === "RECOIL" ? 0.5 : 1,
                            strokeDasharray: phase === "ACCELERATION" ? "20 5" : "none",
                        }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Salida Válvula Ímpetu */}
                    <m.path
                        d="M430,410 L430,450"
                        stroke="#00f2ff"
                        strokeWidth="20"
                        opacity={0}
                        animate={{ opacity: phase === "ACCELERATION" ? 0.8 : 0 }}
                    />

                    {/* Flujo Entrega */}
                    <m.path
                        d="M450,300 L450,250 L750,50"
                        stroke="#00f2ff"
                        strokeWidth="15"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: phase === "DELIVERY" ? 1 : 0,
                            opacity: phase === "DELIVERY" ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </svg>

                <div className="absolute top-4 right-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? "Pausar" : "Reproducir"}
                    </Button>
                </div>
            </Card>

            {/* Explicación de Fase */}
            <div className="space-y-4">
                {Object.entries(phases).map(([key, info]) => {
                    const isActive = key === phase;
                    return (
                        <m.div
                            key={key}
                            className={cn(
                                "p-5 rounded-xl border transition-all duration-500 cursor-pointer relative overflow-hidden",
                                isActive
                                    ? "bg-cyan-500/10 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                                    : "bg-slate-900/50 border-transparent opacity-40 hover:opacity-70"
                            )}
                            onClick={() => {
                                setIsPlaying(false);
                                setPhase(key as PumpPhase);
                            }}
                        >
                            <h3
                                className={cn(
                                    "font-bold text-lg",
                                    isActive ? "text-cyan-400" : "text-white"
                                )}
                            >
                                {info.title}
                            </h3>
                            <AnimatePresence>
                                {isActive && (
                                    <m.p
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className={cn(
                                            "text-sm mt-2 leading-relaxed",
                                            isActive ? "text-slate-200" : "text-slate-400"
                                        )}
                                    >
                                        {info.desc}
                                    </m.p>
                                )}
                            </AnimatePresence>
                        </m.div>
                    );
                })}
            </div>
        </div>
    );
}
