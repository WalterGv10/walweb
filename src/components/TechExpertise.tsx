"use client";
import { motion } from "framer-motion";
import { Server, ShieldCheck, CheckCircle2, Globe, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TechExpertise() {
    const { t } = useLanguage();

    const expertise = [
        {
            ...t.tech_expertise.items.systems,
            icon: <Server className="text-blue-400" />,
        },
        {
            ...t.tech_expertise.items.networks,
            icon: <Globe className="text-cyan-400" />,
        },
        {
            ...t.tech_expertise.items.web,
            icon: <Cpu className="text-indigo-400" />,
        }
    ];

    return (
        <section className="py-12 lg:py-20 px-4 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center space-y-2"
                >
                    <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                        {t.tech_expertise.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{t.tech_expertise.title_highlight}</span>
                    </h2>
                    <p className="text-gray-400 text-xs lg:text-base max-w-2xl mx-auto">
                        {t.tech_expertise.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* Habilidades */}
                    <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {expertise.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-xl bg-white/5 text-blue-400">
                                            {group.icon}
                                        </div>
                                        <h3 className="text-base font-bold text-white">{group.category}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {group.skills.map((skill: string, si: number) => (
                                            <li key={si} className="flex items-center gap-2 text-xs text-gray-400">
                                                <CheckCircle2 size={12} className="text-blue-500/50 shrink-0" />
                                                <span className="truncate">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certificación */}
                    <div className="lg:col-span-3 h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative h-full"
                        >
                            <div className="relative p-6 lg:p-8 h-full rounded-3xl bg-black/40 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[8px] font-bold uppercase tracking-widest border border-blue-500/30">
                                            {t.tech_expertise.certification.label}
                                        </span>
                                        <ShieldCheck className="text-blue-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-black text-white leading-tight">{t.tech_expertise.certification.title}</h3>
                                        <p className="text-gray-400 text-[10px] lg:text-xs">{t.tech_expertise.certification.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2 lg:p-3 rounded-xl bg-white/5 border border-white/10">
                                            <p className="text-[8px] text-gray-500 uppercase">{t.tech_expertise.certification.id_label}</p>
                                            <p className="text-[10px] lg:text-xs font-mono text-blue-400">2RP-NUXA</p>
                                        </div>
                                        <div className="p-2 lg:p-3 rounded-xl bg-white/5 border border-white/10">
                                            <p className="text-[8px] text-gray-500 uppercase">{t.tech_expertise.certification.date_label}</p>
                                            <p className="text-[10px] lg:text-xs font-mono text-blue-400">{t.tech_expertise.certification.date_value}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                                    <p className="text-[9px] text-blue-300 italic">{t.tech_expertise.certification.quote}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
