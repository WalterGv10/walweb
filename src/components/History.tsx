"use client";

export function History() {
    const timeline = [
        {
            year: "2010",
            title: "El Inicio",
            desc: "Comencé gestionando un Café Internet. Aprendí la importancia de la conectividad y el servicio al cliente.",
            icon: "🖥️",
        },
        {
            year: "2013",
            title: "LEC COMPUTACIÓN",
            desc: "Lideré servicios de outsourcing para colegios e instituciones gubernamentales. Me encargaba del despliegue de sistemas operativos, gestión de redes y la configuración crítica de servidores, asegurando la continuidad tecnológica de grandes entidades educativas.",
            icon: "🖥️",
        },
        {
            year: "2019",
            title: "Soporte Bancario Nacional",
            desc: "Ingresé a una entidad bancaria líder, brindando soporte técnico remoto y presencial a agencias en todo el territorio nacional. Experto en gestión híbrida (Home Office / On-site) de infraestructuras críticas.",
            icon: "🏦",
        },
        {
            year: "2022",
            title: "Especialista en Cajeros (ATM)",
            desc: "Evolución dentro de la entidad bancaria hacia la reparación y mantenimiento de cajeros automáticos en todo el país. Garantizando la operatividad de sistemas de autoservicio financiero bajo altos estándares de seguridad.",
            icon: "💳",
        },
        {
            year: "Presente",
            title: "WalWeb & Arquitectura",
            desc: "Fusionando tecnología y diseño arquitectónico. Soluciones digitales y planos profesionales.",
            icon: "🏗️",
        },
    ];

    return (
        <section id="history" className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Mi Historia
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto drop-shadow-md">
                        De un pequeño local de internet a crear soluciones digitales para negocios.
                        Esta es mi trayectoria.
                    </p>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-xl shadow-xl shadow-blue-500/20 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-cyan-400">{item.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed drop-shadow-sm">
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
