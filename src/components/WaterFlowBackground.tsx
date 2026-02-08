"use client";

import { motion } from "framer-motion";

export function WaterFlowBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradiente base con tonos de agua más intensos */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/30 to-blue-950/40" />

            {/* Círculos de presión de fondo */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`pressure-${i}`}
                        className="absolute rounded-full border-2 border-cyan-500/10"
                        style={{
                            width: 200 + i * 100,
                            height: 200 + i * 100,
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.05, 0.1],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            {/* Ondas de agua animadas mejoradas */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#0891b2" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0e7490" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="waterGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                {/* Onda superior */}
                <motion.path
                    d="M0,200 Q250,150 500,200 T1000,200 T1500,200 L1500,0 L0,0 Z"
                    fill="url(#waterGradient)"
                    animate={{
                        d: [
                            "M0,200 Q250,150 500,200 T1000,200 T1500,200 L1500,0 L0,0 Z",
                            "M0,180 Q250,220 500,180 T1000,180 T1500,180 L1500,0 L0,0 Z",
                            "M0,200 Q250,150 500,200 T1000,200 T1500,200 L1500,0 L0,0 Z",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Onda media */}
                <motion.path
                    d="M0,300 Q300,250 600,300 T1200,300 T1800,300 L1800,100 L0,100 Z"
                    fill="url(#waterGradient2)"
                    opacity="0.6"
                    animate={{
                        d: [
                            "M0,300 Q300,250 600,300 T1200,300 T1800,300 L1800,100 L0,100 Z",
                            "M0,280 Q300,320 600,280 T1200,280 T1800,280 L1800,100 L0,100 Z",
                            "M0,300 Q300,250 600,300 T1200,300 T1800,300 L1800,100 L0,100 Z",
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Onda inferior */}
                <motion.path
                    d="M0,450 Q200,400 400,450 T800,450 T1200,450 L1200,250 L0,250 Z"
                    fill="url(#waterGradient)"
                    opacity="0.4"
                    animate={{
                        d: [
                            "M0,450 Q200,400 400,450 T800,450 T1200,450 L1200,250 L0,250 Z",
                            "M0,420 Q200,470 400,420 T800,420 T1200,420 L1200,250 L0,250 Z",
                            "M0,450 Q200,400 400,450 T800,450 T1200,450 L1200,250 L0,250 Z",
                        ],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </svg>

            {/* Burbujas flotantes */}
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={`bubble-${i}`}
                    className="absolute rounded-full bg-cyan-400/20 border border-cyan-300/30"
                    style={{
                        width: 4 + Math.random() * 12,
                        height: 4 + Math.random() * 12,
                        left: `${Math.random() * 100}%`,
                        bottom: -20,
                    }}
                    animate={{
                        y: [-20, -800],
                        x: [0, (Math.random() - 0.5) * 100],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.8],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Ondas de presión (golpe de ariete) */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
                {[0, 1, 2, 3].map((i) => (
                    <motion.circle
                        key={`shock-${i}`}
                        cx="70%"
                        cy="60%"
                        r="30"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="3"
                        initial={{ r: 20, opacity: 0.6 }}
                        animate={{
                            r: [20, 120, 180],
                            opacity: [0.6, 0.3, 0],
                            strokeWidth: [3, 2, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 1.2,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </svg>

            {/* Partículas de flujo */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={`flow-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-cyan-300/50 to-blue-400/50 blur-sm"
                    style={{
                        left: `${5 + i * 8}%`,
                        top: "20%",
                    }}
                    animate={{
                        y: [0, 600],
                        x: [0, Math.sin(i * 0.5) * 80],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: 4 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Grid hidráulico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Resplandor ambiental */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            {/* Viñeta final */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>
    );
}
