"use client";

import dynamic from "next/dynamic";
const Squares = dynamic(() => import("./ui/Squares"), { ssr: false });

export function ArchBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
            <Squares
                direction="diagonal"
                speed={0.5}
                borderColor="#271E37"
                squareSize={40}
                hoverFillColor="#222222"
            />
        </div>
    );
}
