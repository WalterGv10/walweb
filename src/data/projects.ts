
import { Globe, Droplets, PenTool, Music2, Shirt, Radio, Briefcase, ScanText } from "lucide-react";
import React from "react";

export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    link?: string;
    icon: React.ReactNode;
    color: string;
    image?: string;
}

export const projectsData: ProjectItem[] = [
    {
        id: "control-fac",
        title: "ControlFAC",
        category: "SaaS & Automatización",
        description: "Plataforma de gestión inteligente con OCR para digitalización de facturas. Stack robusto con React 18, PostgreSQL y Tesseract.js para automatizar la contabilidad.",
        tags: ["React 18", "PostgreSQL", "OCR / AI", "SaaS"],
        link: "/proyecto/control-fac",
        icon: React.createElement(ScanText, { size: 40 }),
        color: "from-orange-500 to-red-600",
        image: "/controlfac-preview.png"
    },
    {
        id: "ram-pump",
        title: "Bomba de Ariete",
        category: "Ingeniería & Diseño",
        description: "Visualización técnica interactiva del funcionamiento de una bomba de ariete. Simulación física del golpe de ariete y flujo de agua para fines educativos.",
        tags: ["Framer Motion", "Simulation", "Education"],
        link: "/proyecto/bomba-ariete",
        icon: React.createElement(Droplets, { size: 40 }),
        color: "from-blue-400 to-cyan-500",
        image: "/ram-pump-preview.png"
    },
    {
        id: "camisolas-catalog",
        title: "Catálogo de Camisolas",
        category: "E-commerce & Diseño",
        description: "Exhibición premium de camisolas deportivas personalizadas con visualización detallada y gestión de variantes de diseño.",
        tags: ["Customization", "UI/UX", "Sports Merch"],
        link: "/proyecto/catalogo-camisolas",
        icon: React.createElement(Shirt, { size: 40 }),
        color: "from-indigo-500 to-blue-600",
        image: "/camisolas-preview.png"
    },
    {
        id: "dj-magnuz",
        title: "DJ Magnuz",
        category: "Diseño Web & Branding",
        description: "Tarjeta de presentación digital con temática Stranger Things y estética cyberpunk. Efectos de neón, animaciones 3D y sistema de scroll cinematográfico.",
        tags: ["Three.js", "Framer Motion", "Stranger Things"],
        link: "/proyecto/dj-magnuz",
        icon: React.createElement(Radio, { size: 40 }),
        color: "from-purple-500 to-pink-500",
        image: "/dj-magnuz-preview.png"
    },
    {
        id: "music-visuals",
        title: "Music Visuals",
        category: "Arte Digital",
        description: "Experiencias visuales reactivas al audio para presentaciones de música en vivo. Sincronización precisa y estética glitch/cyberpunk.",
        tags: ["Creative Coding", "Audio Reactive", "WebGL"],
        icon: React.createElement(Music2, { size: 40 }),
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "arch-design",
        title: "WalWeb Arch",
        category: "Arquitectura",
        description: "Portafolio de diseño arquitectónico y planificación estratégica de espacios. Renders de alta fidelidad y recorridos virtuales.",
        tags: ["3D Rendering", "Planning", "Design"],
        link: "/arquitectura",
        icon: React.createElement(PenTool, { size: 40 }),
        color: "from-emerald-400 to-teal-500"
    },
    {
        id: "damaris-cv",
        title: "CV Elite - Damaris Pérez",
        category: "Diseño Web & Branding Personal",
        description: "Currículum vitae digital premium para profesional en administración y compras. CV web interactivo con diseño minimalista y gradientes vibrantes, optimizado para el sector financiero. Incluye timeline de carrera, educación, habilidades y formulario de contacto.",
        tags: ["Astro 5", "Tailwind CSS v4", "CV Digital", "Personal Branding"],
        link: "/proyecto/cv-damaris",
        icon: React.createElement(Briefcase, { size: 40 }),
        color: "from-blue-500 to-purple-600",
        image: "/damaris-cv-preview.png"
    }
];

