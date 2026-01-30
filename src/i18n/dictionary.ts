export type SiteContent = {
    header: {
        nav: {
            services: string;
            trajectory: string;
            worldcup: string;
            contact: string;
        };
        cta: string;
    };
    hero: {
        greeting: string;
        role: string;
        title: string;
        description: string;
        cta_primary: string;
        cta_secondary: string;
        badges: {
            web: string;
            ui: string;
            arch: string;
        };
    };
    services: {
        items: {
            music: { title: string; desc: string; tags: string[] };
            local: { title: string; desc: string; tags: string[] };
            rentals: { title: string; desc: string; tags: string[] };
            influencers: { title: string; desc: string; tags: string[] };
            worldcup: { title: string; desc: string; tags: string[] };
            ai: { title: string; desc: string; tags: string[] };
        };
    };
    strategic_vision: {
        label: string;
        title_part1: string;
        title_highlight: string;
        description: string;
        tags: string[];
        items: {
            economic: { title: string; summary: string; details: string };
            geo: { title: string; summary: string; details: string };
            opportunity: { title: string; summary: string; details: string };
        };
    };
    contact: {
        title: string;
        title_highlight: string;
        subtitle: string;
        cta_label: string;
    };
    tech_expertise: {
        title: string;
        title_highlight: string;
        subtitle: string;
        items: {
            systems: { category: string; skills: string[] };
            networks: { category: string; skills: string[] };
            web: { category: string; skills: string[] };
        };
        certification: {
            label: string;
            title: string;
            description: string;
            id_label: string;
            date_label: string;
            date_value: string;
            quote: string;
        };
    };
    commercial_banner: {
        badge_title: string;
        badge_text: string;
        title_part1: string;
        title_part2: string;
        title_highlight: string;
        description: string;
        tags: { speed: string; security: string; scalability: string };
        cards: {
            web_arch: { title: string; desc: string; label: string };
            pro_arch: { title: string; desc: string };
            networks: { title: string; desc: string };
            digital_mkt: string;
            consultancy: string;
        };
    };
    digital_cv: {
        badge: string;
        title_part1: string;
        title_highlight: string;
        description_part1: string;
        description_highlight: string;
        description_part2: string;
        cta: string;
        experience_tag: string;
    };
    history: {
        title: string;
        subtitle: string;
        timeline: { year: string; title: string; desc: string; icon: string }[];
    };
    arch_workflow: {
        title_part1: string;
        title_highlight: string;
        description: string;
        steps: { title: string; tool: string; desc: string }[];
        quote: string;
    };
    personal_stats: {
        card1: {
            title_number: string;
            title_text: string;
            subtitle: string;
            desc: string;
        };
        card2: {
            title_number: string;
            title_text: string;
            subtitle: string;
            desc: string;
        };
    };
    world_cup_2026: {
        badge: string;
        title_part1: string;
        title_highlight: string;
        description: string;
        cards: {
            corporate: {
                title: string;
                description: string;
                mockup: {
                    ranking: string;
                    points: string;
                    departments: { sales: string; hr: string; it: string };
                };
            };
            horeca: {
                title: string;
                description: string;
                mockup: {
                    event: string;
                    before: string;
                    offer: string;
                };
            };
        };
        cta: string;
    };
};

export const es: SiteContent = {
    header: {
        nav: {
            services: "Servicios",
            trajectory: "Trayectoria",
            worldcup: "Mundial 2026",
            contact: "Contacto",
        },
        cta: "Iniciar Proyecto",
    },
    hero: {
        greeting: "Hola, soy Walter Fernando GV.",
        role: "Experiencia",
        title: "Ingeniería Digital que Vende",
        description: "Transformamos tu visión en una herramienta digital potente. Web, automatización y presencia estratégica para destacar en el mercado.",
        cta_primary: "Iniciar Proyecto",
        cta_secondary: "Trayectoria",
        badges: {
            web: "Web Dev",
            ui: "Sistemas UI",
            arch: "Arquitectura",
        },
    },
    services: {
        items: {
            music: {
                title: "MUSIC INDUSTRY",
                desc: "Me apasiona la música. Si eres DJ, Productor o Músico, quiero crear tu identidad digital con visuales reactivos y experiencias web inmersivas.",
                tags: ["Visuales Reactivos", "Press Kits", "Identidad Sonora"],
            },
            local: {
                title: "Negocios Locales",
                desc: "Tu tienda o ferretería en el mapa y en WhatsApp. Ideal para que tus vecinos te encuentren rápido.",
                tags: ["Google Maps", "Catálogo WhatsApp", "Ventas Locales"],
            },
            rentals: {
                title: "Alquileres & Convites",
                desc: "Sistemas para gestionar alquiler de mobiliario, sillas y mesas para fiestas y convites en los municipios.",
                tags: ["Inventario", "Reservas", "Logística"],
            },
            influencers: {
                title: "Influencers & TikTok",
                desc: "Edición de video viral y estrategia de contenido. Deja de editar y empieza a crear. Nosotros nos encargamos.",
                tags: ["Reels/TikTok", "Edición Dinámica", "Viralidad"],
            },
            worldcup: {
                title: "Mundial 2026",
                desc: "Aprovecha la fiebre del fútbol. Quinielas para empresas y promociones automáticas para restaurantes.",
                tags: ["Quinielas App", "Menús Dinámicos", "Marketing"],
            },
            ai: {
                title: "Tu Negocio en la IA",
                desc: "Hacemos que cuando alguien pregunte a la Inteligencia Artificial por un servicio, te recomiende a ti.",
                tags: ["Posicionamiento GEO", "Búsqueda por Voz", "Futuro"],
            },
        },
    },
    strategic_vision: {
        label: "Visión Estratégica",
        title_part1: "No es solo una web. Es tu",
        title_highlight: "ventaja injusta.",
        description: 'En 2026, la "presencia digital" no sirve si no factura. Transformamos tu tecnología en un activo que ahorra costos, atrae tráfico IA y vende mientras duermes.',
        tags: ["Automatización", "SEO para IA", "Ventas B2B"],
        items: {
            economic: {
                title: "Entorno Económico 2026",
                summary: "Costos suben, la tecnología ahorra.",
                details: "El salario mínimo sube y contratar personal es más caro. La tecnología ya no es un lujo, es la única forma de que tu negocio funcione mejor con menos gastos. Creamos sistemas que hacen el trabajo repetitivo por ti."
            },
            geo: {
                title: "Revolución GEO (IA)",
                summary: "Aparece cuando le preguntan a la IA.",
                details: "La gente ya no busca en Google, le pregunta a la Inteligencia Artificial. Si tu negocio no está optimizado para esto, eres invisible. Hacemos que la IA recomiende tu marca cuando alguien busque tus servicios."
            },
            opportunity: {
                title: "Oportunidad Mundial",
                summary: "El Mundial 2026 venderá por ti.",
                details: "El Mundial será en nuestro horario. Aprovechamos la fiebre del fútbol para crear promociones, quinielas y menús digitales que atraigan clientes a tu negocio durante los partidos."
            }
        }
    },
    contact: {
        title: "CONECTA",
        title_highlight: "AHORA",
        subtitle: "Un clic para empezar",
        cta_label: "Contratar Ahora",
    },
    tech_expertise: {
        title: "Experticia",
        title_highlight: "Verificada",
        subtitle: "Infraestructura real respaldada por Microsoft.",
        items: {
            systems: {
                category: "Sistemas",
                skills: ["Clonación & Despliegue S.O.", "Virtualización de Entornos", "Active Directory & Dominios", "Optimización Registro Win", "Gestión DNS & DHCP"]
            },
            networks: {
                category: "Redes",
                skills: ["Protocolos TCP/IP & LAN", "Configuración Firewalls", "Cableado Estructurado", "Infraestructura Cisco/Ubiquiti", "Seguridad & Antivirus"]
            },
            web: {
                category: "Web Arch",
                skills: ["Next.js & React Core", "Tailwind CSS Expert", "TypeScript & JS ES6+", "Astro & Angular Dev", "Performance Optimization"]
            }
        },
        certification: {
            label: "Microsoft Official",
            title: "MTA: Networking",
            description: "Examen 98-366. Seguridad y Redes.",
            id_label: "ID Verif.",
            date_label: "Fecha",
            date_value: "Nov 2014",
            quote: "\"Infraestructura sólida para soluciones escalables.\"",
        }
    },
    commercial_banner: {
        badge_title: "WalWeb Premium",
        badge_text: "Servicios Exclusivos 2026",
        title_part1: "IMPULSA TU",
        title_part2: "NEGOCIO AL",
        title_highlight: "NIVEL ÉLITE",
        description: "Fusionando ingeniería estructural, conectividad de vanguardia y arquitectura digital para crear ecosistemas de alto rendimiento.",
        tags: { speed: "VELOCIDAD", security: "SEGURIDAD", scalability: "ESCALABILIDAD" },
        cards: {
            web_arch: { title: "Arquitectura Web", desc: "Arquitecturas vanguardistas con alto rendimiento y escalabilidad global.", label: "Tecnología en el corazón de:" },
            pro_arch: { title: "Arquitectura Profesional", desc: "Diseño Estructural" },
            networks: { title: "Redes Empresariales", desc: "Infraestructura Core Cisco & Ubiquiti" },
            digital_mkt: "Mkt Digital",
            consultancy: "Consultoría"
        }
    },
    digital_cv: {
        badge: "Propuesta Digital 2026",
        title_part1: "¿TE GUSTA LO QUE",
        title_highlight: "ESTÁS VIENDO?",
        description_part1: "Esto es más que un sitio web: es un",
        description_highlight: "Currículum Vitae Digital de élite",
        description_part2: ". Mi propuesta para revolucionar cómo el mundo percibe tu marca personal.",
        cta: "Quiero el mío",
        experience_tag: "Experiencia 100% Interactiva"
    },
    history: {
        title: "Trayectoria",
        subtitle: "Evolución técnica constante: de la conectividad local al soporte bancario nacional.",
        timeline: [
            { year: "2007", title: "El Origen", desc: "Mi primera PC, mueble y Encarta gracias a mi madre. La inversión que lo cambió todo. ¡Infinitas gracias por creer antes que nadie! ❤️", icon: "🏠" },
            { year: "2010", title: "Primeros Pasos", desc: "Gestión de conectividad y servicio al cliente en Café Internet.", icon: "🖥️" },
            { year: "2012", title: "LEC COMPUTACIÓN", desc: "Donde me certifiqué en Office, Fundamentos de Redes y Servidores. Experto en todos los S.O. de la época, CCTV y enlaces Ubiquiti. Infinitas gracias a mi mentor Selvin Argüello por impulsarme a ser un profesional, enseñándome con su ejemplo a estar siempre a la vanguardia y nunca dejar de aprender. Especialista en gestión de Windows Server 2008 R2/2012.", icon: "🖥️" },
            { year: "2019", title: "Corporación Tecnológica Bancaria", desc: "Soporte nacional de alto nivel a usuarios bancarios. Gestión de infraestructura crítica: WAN/LAN, telefonía IP, impresoras, CRMs y emulaciones. Administración de sistemas de cobro y plataformas sobre Windows Server 2012 y bases de datos.", icon: "🏦" },
            { year: "2022", title: "Especialista ATM", desc: "Reparación y mantenimiento de cajeros automáticos a nivel nacional bajo altos estándares.", icon: "💳" },
            { year: "Presente", title: "WalWeb & Arch", desc: "Fusionando tecnología y arquitectura. Soluciones digitales y planos profesionales.", icon: "🏗️" }
        ]
    },
    arch_workflow: {
        title_part1: "Workflow",
        title_highlight: "Arquitectónico",
        description: "Transformo conceptos en realidades construibles mediante un proceso técnico riguroso.",
        steps: [
            { title: "Modelación 3D", tool: "Software Web 3D", desc: "Visualización espacial completa mediante modelado avanzado." },
            { title: "Informe Detallado", tool: "Microsoft Office Pro", desc: "Documentación técnica exhaustiva para una gestión clara." },
            { title: "Planos de Ejecución", tool: "AutoCAD Expert", desc: "Planos precisos listos para que el albañil ejecute sin errores." }
        ],
        quote: "\"Del modelo 3D al plano en mano: precisión garantizada para el personal de obra.\"",
    },
    personal_stats: {
        card1: {
            title_number: "31",
            title_text: "Años",
            subtitle: "Sistemas Operativos & Experiencia",
            desc: "En el punto óptimo donde la energía converge con la madurez técnica. Tres décadas de evolución profesional en el mundo digital."
        },
        card2: {
            title_number: "2",
            title_text: "Gemelos (4 años)",
            subtitle: "Arquitectura Dual & Multitasking",
            desc: "Padre orgulloso de un \"Dual Core\" de energía inagotable. Gestionar gemelos me ha dado el doctorado en resolución de problemas bajo presión."
        }
    },
    world_cup_2026: {
        badge: "Kickoff 2026",
        title_part1: "NO VEAS EL MUNDIAL.",
        title_highlight: "VENDE CON ÉL.",
        description: "Miles de guatemaltecos buscando dónde ver el partido. Tu negocio puede ser su estadio o solo otra opción más.",
        cards: {
            corporate: {
                title: "Quiniela Corporativa",
                description: "Olvida el Excel. Crea una liga privada para tu empresa con <strong>branding personalizado</strong>. Aumenta la moral, reduce la rotación y fideliza clientes B2B.",
                mockup: {
                    ranking: "Ranking",
                    points: "Puntos",
                    departments: { sales: "Ventas", hr: "RRHH", it: "IT" }
                }
            },
            horeca: {
                title: "Menús Dinámicos",
                description: "Si hay gol de Brasil, la cerveza baja 50% por 5 minutos. <strong>Gamificación en tiempo real</strong> para restaurantes y bares. Convierte la emoción en consumo.",
                mockup: {
                    event: "GOL DE BRASIL",
                    before: "Antes",
                    offer: "Oferta Flash"
                }
            }
        },
        cta: "Quiero mi Estrategia Mundialista"
    }
};

export const en: SiteContent = {
    header: {
        nav: {
            services: "Services",
            trajectory: "Trajectory",
            worldcup: "World Cup 2026",
            contact: "Contact",
        },
        cta: "Start Project",
    },
    hero: {
        greeting: "Hi, I'm Walter Fernando GV.",
        role: "Experience",
        title: "Digital Engineering that Sells",
        description: "We transform your vision into a powerful digital tool. Web, automation, and strategic presence to stand out in the US & Latam market.",
        cta_primary: "Start Project",
        cta_secondary: "My Journey",
        badges: {
            web: "Web Dev",
            ui: "UI Systems",
            arch: "Architecture",
        },
    },
    services: {
        items: {
            music: {
                title: "MUSIC INDUSTRY",
                desc: "Passionate about music. If you're a DJ, Producer, or Musician, I want to create your digital identity with reactive visuals and immersive web experiences.",
                tags: ["Reactive Visuals", "Press Kits", "Sonic Identity"],
            },
            local: {
                title: "Local Businesses",
                desc: "Your store or hardware shop on the map and WhatsApp. Ideal for neighbors to find you fast.",
                tags: ["Google Maps", "WhatsApp Catalog", "Local Sales"],
            },
            rentals: {
                title: "Rentals & Events",
                desc: "Systems to manage furniture, chair, and table rentals for parties and town events.",
                tags: ["Inventory", "Bookings", "Logistics"],
            },
            influencers: {
                title: "Influencers & TikTok",
                desc: "Viral video editing and content strategy. Stop editing and start creating. We handle the rest.",
                tags: ["Reels/TikTok", "Dynamic Editing", "Virality"],
            },
            worldcup: {
                title: "World Cup 2026",
                desc: "Ride the soccer fever. Prediction pools (Quinielas) for companies and automatic promotions for restaurants.",
                tags: ["Pools App", "Dynamic Menus", "Marketing"],
            },
            ai: {
                title: "Your Business in AI",
                desc: "We make sure that when someone asks AI for a service, it recommends YOU.",
                tags: ["GEO Positioning", "Voice Search", "The Future"],
            },
        },
    },
    strategic_vision: {
        label: "Strategic Vision",
        title_part1: "It's not just a website. It's your",
        title_highlight: "unfair advantage.",
        description: 'In 2026, "digital presence" is useless if it doesn\'t bill. We transform your technology into an asset that cuts costs, attracts AI traffic, and sells while you sleep.',
        tags: ["Automation", "AI SEO", "B2B Sales"],
        items: {
            economic: {
                title: "Economic Environment 2026",
                summary: "Costs rise, technology saves.",
                details: "Minimum wage is rising and hiring staff is more expensive. Technology is no longer a luxury; it's the only way for your business to function better with fewer expenses. We create systems that do the repetitive work for you."
            },
            geo: {
                title: "GEO Revolution (AI)",
                summary: "Appear when they ask AI.",
                details: "People no longer search on Google; they ask Artificial Intelligence. If your business isn't optimized for this, you're invisible. We make AI recommend your brand when someone looks for your services."
            },
            opportunity: {
                title: "Global Opportunity",
                summary: "World Cup 2026 will sell for you.",
                details: "The World Cup will be in our time zone. We leverage soccer fever to create promotions, pools, and digital menus that attract customers to your business during matches."
            }
        }
    },
    contact: {
        title: "CONNECT",
        title_highlight: "NOW",
        subtitle: "One click to start",
        cta_label: "Hire Now",
    },
    tech_expertise: {
        title: "Verified",
        title_highlight: "Expertise",
        subtitle: "Real infrastructure backed by Microsoft.",
        items: {
            systems: {
                category: "Systems",
                skills: ["OS Cloning & Deployment", "Environment Virtualization", "Active Directory & Domains", "Win Registry Optimization", "DNS & DHCP Management"]
            },
            networks: {
                category: "Networks",
                skills: ["TCP/IP & LAN Protocols", "Firewall Configuration", "Structured Cabling", "Cisco/Ubiquiti Infrastructure", "Security & Antivirus"]
            },
            web: {
                category: "Web Arch",
                skills: ["Next.js & React Core", "Tailwind CSS Expert", "TypeScript & JS ES6+", "Astro & Angular Dev", "Performance Optimization"]
            }
        },
        certification: {
            label: "Microsoft Official",
            title: "MTA: Networking",
            description: "Exam 98-366. Security & Networks.",
            id_label: "Verif. ID",
            date_label: "Date",
            date_value: "Nov 2014",
            quote: "\"Solid infrastructure for scalable solutions.\"",
        }
    },
    commercial_banner: {
        badge_title: "WalWeb Premium",
        badge_text: "Exclusive Services 2026",
        title_part1: "BOOST YOUR",
        title_part2: "BUSINESS TO",
        title_highlight: "ELITE LEVEL",
        description: "Merging structural engineering, cutting-edge connectivity, and digital architecture to create high-performance ecosystems.",
        tags: { speed: "SPEED", security: "SECURITY", scalability: "SCALABILITY" },
        cards: {
            web_arch: { title: "Web Architecture", desc: "Avant-garde architectures with high performance and global scalability.", label: "Technology at the core of:" },
            pro_arch: { title: "Professional Architecture", desc: "Structural Design" },
            networks: { title: "Enterprise Networks", desc: "Cisco & Ubiquiti Core Infrastructure" },
            digital_mkt: "Digital Mkt",
            consultancy: "Consultancy"
        }
    },
    digital_cv: {
        badge: "Digital Proposal 2026",
        title_part1: "DO YOU LIKE WHAT",
        title_highlight: "YOU'RE SEEING?",
        description_part1: "This is more than a website: it's an",
        description_highlight: "Elite Digital Curriculum Vitae",
        description_part2: ". My proposal to revolutionize how the world perceives your personal brand.",
        cta: "I want mine",
        experience_tag: "100% Interactive Experience"
    },
    history: {
        title: "Journey",
        subtitle: "Constant technical evolution: from local connectivity to national banking support.",
        timeline: [
            { year: "2007", title: "The Origin", desc: "My first PC, furniture, and Encarta thanks to my mother. The investment that changed everything. Infinite thanks for believing before anyone else! ❤️", icon: "🏠" },
            { year: "2010", title: "First Steps", desc: "Connectivity management and customer service at Internet Cafe.", icon: "🖥️" },
            { year: "2012", title: "LEC COMPUTING", desc: "Where I got certified in Office, Network Fundamentals, and Servers. Expert in all OS of the time, CCTV, and Ubiquiti links. Infinite thanks to my mentor Selvin Argüello for pushing me to be a professional, teaching me by example to always be at the forefront and never stop learning. Specialist in Windows Server 2008 R2/2012 management.", icon: "🖥️" },
            { year: "2019", title: "Banking Tech Corporation", desc: "High-level national support for banking users. Critical infrastructure management: WAN/LAN, IP telephony, printers, CRMs, and emulations. Administration of billing systems and platforms on Windows Server 2012 and databases.", icon: "🏦" },
            { year: "2022", title: "ATM Specialist", desc: "Repair and maintenance of ATMs nationwide under high standards.", icon: "💳" },
            { year: "Present", title: "WalWeb & Arch", desc: "Merging technology and architecture. Digital solutions and professional blueprints.", icon: "🏗️" }
        ]
    },
    arch_workflow: {
        title_part1: "Architectural",
        title_highlight: "Workflow",
        description: "Transforming concepts into buildable realities through a rigorous technical process.",
        steps: [
            { title: "3D Modeling", tool: "Web 3D Software", desc: "Complete spatial visualization through advanced modeling." },
            { title: "Detailed Report", tool: "Microsoft Office Pro", desc: "Exhaustive technical documentation for clear management." },
            { title: "Execution Plans", tool: "AutoCAD Expert", desc: "Precise plans ready for the builder to execute without errors." }
        ],
        quote: "\"From 3D model to hand-held plan: precision guaranteed for site personnel.\"",
    },
    personal_stats: {
        card1: {
            title_number: "31",
            title_text: "Years",
            subtitle: "Operating Systems & Experience",
            desc: "At the sweet spot where energy converges with technical maturity. Three decades of professional evolution in the digital world."
        },
        card2: {
            title_number: "2",
            title_text: "Twins (4 years)",
            subtitle: "Dual Architecture & Multitasking",
            desc: "Proud father of a \"Dual Core\" of inexhaustible energy. Managing twins has given me a PhD in problem-solving under pressure."
        }
    },
    world_cup_2026: {
        badge: "Kickoff 2026",
        title_part1: "DON'T JUST WATCH THE WC.",
        title_highlight: "SELL WITH IT.",
        description: "Thousands of people looking for where to watch the match. Your business can be their stadium or just another option.",
        cards: {
            corporate: {
                title: "Corporate Pool",
                description: "Forget Excel. Create a private league for your company with <strong>custom branding</strong>. Boost morale, reduce turnover, and build B2B loyalty.",
                mockup: {
                    ranking: "Ranking",
                    points: "Points",
                    departments: { sales: "Sales", hr: "HR", it: "IT" }
                }
            },
            horeca: {
                title: "Dynamic Menus",
                description: "If Brazil scores, beer is 50% off for 5 minutes. <strong>Real-time gamification</strong> for restaurants and bars. Turn excitement into consumption.",
                mockup: {
                    event: "BRAZIL GOAL",
                    before: "Before",
                    offer: "Flash Offer"
                }
            }
        },
        cta: "I want my World Cup Strategy"
    }
};
