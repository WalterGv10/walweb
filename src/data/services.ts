import { Store, Smartphone, Trophy, MapPin, Truck, Music2, Sparkles, Database, Zap } from "lucide-react";
import React from "react";

export interface ServiceItem {
    title: string;
    icon: React.ReactNode;
    desc: string;
    tags: string[];
    highlight?: boolean;
}

export const servicesData: ServiceItem[] = [
    {
        title: "Invitaciones Web Interactivas",
        icon: React.createElement(Sparkles, { className: "text-white", size: 32 }),
        desc: "Crea experiencias inmersivas para tus eventos. Micro-sitios personalizados con video HD, animaciones fluidas y fondos dinámicos. Optimizados para móvil con navegación táctil y carga rápida.",
        tags: ["Micro-sitio", "Video HD", "Animaciones", "Responsive", "Carga Rápida"],
        highlight: true
    },
    {
        title: "MUSIC INDUSTRY",
        icon: React.createElement(Music2, { className: "text-white", size: 32 }),
        desc: "Me apasiona la música. Si eres DJ, Productor o Músico, quiero crear tu identidad digital con visuales reactivos y experiencias web inmersivas.",
        tags: ["Visuales Reactivos", "Press Kits", "Identidad Sonora"],
        highlight: true
    },
    {
        title: "Aplicaciones Web & Backend",
        icon: React.createElement(Database, { className: "text-cyan-400", size: 32 }),
        desc: "Desarrollo de sistemas web completos con backend robusto. Gestión de usuarios, bases de datos y paneles de administración para el control total de tu negocio.",
        tags: ["Full Stack", "Base de Datos", "Dashboards", "Autenticación"],
        highlight: true
    },
    {
        title: "Manuales Interactivos Next-Gen",
        icon: React.createElement(Zap, { className: "text-white", size: 32 }),
        desc: "Olvida los aburridos PDFs. Entrego experiencias de aprendizaje gamificadas con estética Cyberpunk, animaciones fluidas y guías paso a paso que hacen que aprender cualquier sistema sea intuitivo y divertido.",
        tags: ["Gamificación", "Cyberpunk", "Tutoriales UI/UX", "Interactive"],
        highlight: true
    },
    {
        title: "Negocios Locales",
        icon: React.createElement(Store, { className: "text-blue-400", size: 32 }),
        desc: "Tu tienda o ferretería en el mapa y en WhatsApp. Ideal para que tus vecinos te encuentren rápido.",
        tags: ["Google Maps", "Catálogo WhatsApp", "Ventas Locales"]
    },
    {
        title: "Alquileres & Convites",
        icon: React.createElement(Truck, { className: "text-orange-400", size: 32 }),
        desc: "Sistemas para gestionar alquiler de mobiliario, sillas y mesas para fiestas y convites en los municipios.",
        tags: ["Inventario", "Reservas", "Logística"]
    },
    {
        title: "Influencers & TikTok",
        icon: React.createElement(Smartphone, { className: "text-pink-500", size: 32 }),
        desc: "Edición de video viral y estrategia de contenido. Deja de editar y empieza a crear. Nosotros nos encargamos.",
        tags: ["Reels/TikTok", "Edición Dinámica", "Viralidad"]
    },
    {
        title: "Mundial 2026",
        icon: React.createElement(Trophy, { className: "text-yellow-400", size: 32 }),
        desc: "Aprovecha la fiebre del fútbol. Quinielas para empresas y promociones automáticas para restaurantes.",
        tags: ["Quinielas App", "Menús Dinámicos", "Marketing"]
    },
    {
        title: "Tu Negocio en la IA",
        icon: React.createElement(MapPin, { className: "text-green-400", size: 32 }),
        desc: "Hacemos que cuando alguien pregunte a la Inteligencia Artificial por un servicio, te recomiende a ti.",
        tags: ["Posicionamiento GEO", "Búsqueda por Voz", "Futuro"]
    }
];
