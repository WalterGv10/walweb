"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Utensils, ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WorldCup2026() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-4 relative bg-slate-950 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Centrado */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                    >
                        <Trophy className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{t.world_cup_2026.badge}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                        {t.world_cup_2026.title_part1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            {t.world_cup_2026.title_highlight}
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                        {t.world_cup_2026.description}
                    </p>
                </div>

                {/* Grid de Soluciones */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                    {/* Card 1: Corporativo */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 border border-blue-500/30">
                                <Users className="w-7 h-7 text-blue-400" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">{t.world_cup_2026.cards.corporate.title}</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.world_cup_2026.cards.corporate.description }} />

                            {/* Mini Mockup */}
                            <div className="bg-slate-950/50 rounded-xl border border-white/10 p-4 backdrop-blur-md">
                                <div className="flex items-center justify-between mb-3 text-xs text-slate-500 uppercase font-bold tracking-widest">
                                    <span>{t.world_cup_2026.cards.corporate.mockup.ranking}</span>
                                    <span>{t.world_cup_2026.cards.corporate.mockup.points}</span>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: `Juan (${t.world_cup_2026.cards.corporate.mockup.departments.sales})`, pts: 152, color: "bg-blue-500" },
                                        { name: `Ana (${t.world_cup_2026.cards.corporate.mockup.departments.hr})`, pts: 148, color: "bg-indigo-500" },
                                        { name: `Carlos (${t.world_cup_2026.cards.corporate.mockup.departments.it})`, pts: 145, color: "bg-purple-500" },
                                    ].map((user, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-8 rounded-full ${user.color}`} />
                                                <span className="text-white font-medium">{user.name}</span>
                                            </div>
                                            <span className="font-mono text-blue-400">{user.pts}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: HORECA */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-orange-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-600/20 flex items-center justify-center mb-8 border border-orange-500/30">
                                <Utensils className="w-7 h-7 text-orange-400" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">{t.world_cup_2026.cards.horeca.title}</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.world_cup_2026.cards.horeca.description }} />

                            {/* Mini Mockup */}
                            <div className="bg-slate-950/50 rounded-xl border border-white/10 p-4 backdrop-blur-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-xl animate-pulse">
                                    {t.world_cup_2026.cards.horeca.mockup.event}
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs uppercase font-bold text-decoration-line-through">{t.world_cup_2026.cards.horeca.mockup.before}: Q35.00</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-white">Q15.00</span>
                                            <span className="text-xs text-green-400 font-bold">{t.world_cup_2026.cards.horeca.mockup.offer}</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: "100%" }}
                                                animate={{ width: "0%" }}
                                                transition={{ duration: 10, ease: "linear" }}
                                                className="h-full bg-orange-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* CTA Final */}
                <div className="flex justify-center">
                    <motion.a
                        href="/contacto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-5 bg-white text-slate-950 font-black text-lg rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all flex items-center gap-3"
                    >
                        {t.world_cup_2026.cta}
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>

            </div>
        </section>
    );
}
