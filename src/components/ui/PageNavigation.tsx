"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PageNavigationProps {
    nextPath: string;
    nextLabel: string;
    subLabel?: string;
}

export const PageNavigation = ({ nextPath, nextLabel, subLabel = "Siguiente Sección" }: PageNavigationProps) => {
    return (
        <section className="w-full py-20 flex justify-center items-center bg-gradient-to-t from-black/20 to-transparent">
            <Link href={nextPath} className="group relative">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                        {subLabel}
                    </span>
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {nextLabel}
                        </h2>
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                </motion.div>
            </Link>
        </section>
    );
};
