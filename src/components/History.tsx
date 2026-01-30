"use client";
import { useLanguage } from "@/context/LanguageContext";

export function History() {
    const { t } = useLanguage();

    // Map content from dictionary, keeping icons logic if static or from dictionary
    // Dictionary has icon as string, so we can use it directly
    const timeline = t.history.timeline;

    return (
        <section id="history" className="py-16 md:py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
                <div className="text-center space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {t.history.title}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
                        {t.history.subtitle}
                    </p>
                </div>

                <div className="relative space-y-6 md:space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-xl shadow-xl shadow-blue-500/20 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[45%] p-5 md:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                                <div className="flex items-center justify-between mb-1 md:mb-2 text-xs md:text-sm">
                                    <span className="font-bold text-cyan-400">{item.year}</span>
                                </div>
                                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-[11px] md:text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
