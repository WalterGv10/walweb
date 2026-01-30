"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Cpu, Globe, ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function StrategicVision() {
    const [activeTab, setActiveTab] = useState<number | null>(0);
    const { t } = useLanguage();

    const contextItems = [
        {
            ...t.strategic_vision.items.economic,
            icon: <TrendingUp className="w-6 h-6" />,
            color: "text-blue-400",
            bg: "bg-blue-500/20",
            border: "border-blue-500/30",
        },
        {
            ...t.strategic_vision.items.geo,
            icon: <Cpu className="w-6 h-6" />,
            color: "text-cyan-400",
            bg: "bg-cyan-500/20",
            border: "border-cyan-500/30",
        },
        {
            ...t.strategic_vision.items.opportunity,
            icon: <Globe className="w-6 h-6" />,
            color: "text-indigo-400",
            bg: "bg-indigo-500/20",
            border: "border-indigo-500/30",
        }
    ];

    return (
        <section className="py-24 px-4 relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Strategic Narrative */}
                    <div className="space-y-8 relative">
                        <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden lg:block" />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">{t.strategic_vision.label}</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]"
                            >
                                {t.strategic_vision.title_part1} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">{t.strategic_vision.title_highlight}</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-400 leading-relaxed max-w-lg"
                            >
                                {t.strategic_vision.description}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            {t.strategic_vision.tags.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-400">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Context Accordion */}
                    <div className="space-y-4 lg:pl-8">
                        {contextItems.map((item, index) => {
                            const isActive = activeTab === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    onClick={() => setActiveTab(isActive ? null : index)}
                                    className={`group cursor-pointer relative rounded-2xl border transition-all duration-500 overflow-hidden
                                        ${isActive
                                            ? "bg-gradient-to-r from-slate-900/90 to-slate-900/50 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]"
                                            : "bg-slate-900/20 border-white/5 hover:bg-slate-900/40 hover:border-white/10"
                                        }`}
                                >
                                    {/* Active Glow Bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isActive ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" : "bg-transparent"}`} />

                                    <div className="p-5 md:p-6 flex items-start gap-5">
                                        <div className={`relative flex-shrink-0 p-3 rounded-xl transition-all duration-500 ${isActive ? `${item.bg} ${item.color} scale-110 shadow-lg` : "bg-white/5 text-slate-500"}`}>
                                            {item.icon}
                                        </div>

                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                                    {item.title}
                                                </h3>
                                                <ChevronDown className={`w-5 h-5 transition-all duration-500 ${isActive ? "rotate-180 text-blue-400" : "text-slate-600 group-hover:text-slate-400"}`} />
                                            </div>

                                            <p className={`text-sm transition-colors duration-300 ${isActive ? "text-blue-200/80 font-medium" : "text-slate-500"}`}>
                                                {item.summary}
                                            </p>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                                                            {item.details}
                                                        </p>
                                                        {index === 2 && (
                                                            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-indigo-400">
                                                                <CheckCircle2 size={14} />
                                                                <span>Estrategia Comprobada</span>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
