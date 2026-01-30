"use client";

import { useEffect, useState } from "react";

export function StarField() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-15 pointer-events-none mix-blend-screen overflow-hidden">
            {/* Capa 1: Estrellas lejanas (estáticas o muy lentas) */}
            <div
                className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
                style={{
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                }}
            />

            {/* Capa 2: Estrellas medianas con parpadeo suave */}
            <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite] opacity-30"
                style={{
                    backgroundImage: `radial-gradient(2px 2px at 100px 50px, #fff, rgba(0,0,0,0)),
                             radial-gradient(2px 2px at 200px 150px, #eee, rgba(0,0,0,0)),
                             radial-gradient(1px 1px at 300px 250px, #fff, rgba(0,0,0,0)),
                             radial-gradient(2px 2px at 400px 350px, #fff, rgba(0,0,0,0)),
                             radial-gradient(1px 1px at 500px 100px, #eee, rgba(0,0,0,0)), // Added more stars
                             radial-gradient(2px 2px at 50px 400px, #fff, rgba(0,0,0,0))`,
                    backgroundSize: '550px 550px'
                }}
            />

            {/* Capa 3: Estrellas brillantes dispersas (twinkle) */}
            <div className="absolute inset-0 animate-twinkle opacity-30"
                style={{
                    backgroundImage: `radial-gradient(2px 2px at 50px 80px, white, rgba(0,0,0,0)),
                             radial-gradient(2px 2px at 150px 300px, white, rgba(0,0,0,0))`,
                    backgroundSize: '400px 400px',
                    animationDelay: '1s'
                }}
            />
        </div>
    );
}
