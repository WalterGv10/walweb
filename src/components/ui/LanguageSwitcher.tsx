"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
            <button
                onClick={() => setLanguage("es")}
                className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${language === "es" ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
            >
                {language === "es" && (
                    <motion.div
                        layoutId="activeLang"
                        className="absolute inset-0 bg-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                )}
                <span className="relative z-10">ES</span>
            </button>

            <button
                onClick={() => setLanguage("en")}
                className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${language === "en" ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
            >
                {language === "en" && (
                    <motion.div
                        layoutId="activeLang"
                        className="absolute inset-0 bg-purple-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                )}
                <span className="relative z-10">EN</span>
            </button>
        </div>
    );
}
