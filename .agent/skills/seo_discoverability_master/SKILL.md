name: SEO Discoverability Master
description: Garantiza que cada proyecto web sea fácilmente encontrado, optimizado para buscadores (SEO) y legible para agentes de IA. Invocación rápida: /seo.
---

# SEO & Discoverability Master

Esta habilidad asegura que el producto digital sea visible, indexable y comprensible tanto para motores de búsqueda tradicionales como para la nueva generación de agentes de inteligencia artificial (IA-friendly).

## ⚡ Invocación Rápida
Escribe `/seo` o simplemente `seo` para activar esta habilidad y validar el proyecto actual.

## 🚀 Checklist Automático de Validación (Pre-Launch)

Ejecuta esta verificación antes del despliegue final.

### 1. Control de Rastreo e Indexación (`robots.txt`)
- [ ] **Existencia**: El archivo `robots.txt` debe existir en la raíz del dominio.
- [ ] **Configuración**:
  - Permitir acceso a bots de búsqueda principales (`User-agent: *`).
  - Bloquear rutas administrativas o privadas (`Disallow: /admin/`).
  - (Opcional) Controlar acceso de bots de IA si es necesario, o permitirlos explícitamente para mejorar la presencia en respuestas de LLMs.
- [ ] **Sitemap**: Debe incluir la línea `Sitemap: https://dominio.com/sitemap.xml`.

### 2. Mapa del Sitio Dinámico (`sitemap.xml`)
- [ ] **Generación**: El sitemap debe generarse automáticamente basado en el contenido real.
- [ ] **Actualización**: Debe reflejar las últimas páginas agregadas o modificadas.
- [ ] **Limpieza**: No debe incluir páginas 404, redirecciones (301/302) ni páginas no canónicas.

### 3. Metaetiquetas y SEO On-Page
- [ ] **Title Tag**: Único por página, < 60 caracteres, incluye palabra clave principal.
- [ ] **Meta Description**: Única, persuasiva, < 160 caracteres.
- [ ] **Canonical**: Etiqueta `<link rel="canonical" href="..." />` presente para evitar contenido duplicado.
- [ ] **Viewport**: Configurado correctamente para móviles.

### 3b. Social Sharing (OpenGraph & WhatsApp) - CRÍTICO
- [ ] **Imágenes OG**: Usar SIEMPRE formato **JPG/JPEG** (PNG suele fallar en WhatsApp por peso/transparencia).
- [ ] **Peso Máximo**: La imagen debe pesar **< 300KB**. WhatsApp ignora imágenes más pesadas.
- [ ] **URL Absoluta**: Usar `https://dominio.com/imagen.jpg`, nunca rutas relativas `/imagen.jpg`.
- [ ] **Dimensiones**: Estándar **1200x630px**. Centrar el contenido importante para evitar recortes.
- [ ] **Depuración**: Si no carga, usar el [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) para limpiar caché.

### 4. Optimización Core Web Vitals (Rendimiento)
- [ ] **LCP (Carga)**: El contenido principal se pinta en < 2.5s.
- [ ] **INP (Interactividad)**: Respuesta a interacciones < 200ms.
- [ ] **CLS (Estabilidad Visual)**: Movimiento inesperado < 0.1.
- [ ] **Recursos**: CSS y JS minificados, imágenes en formatos modernos (WebP/AVIF) y con dimensiones explícitas.

### 5. Estructura y Semántica (IA-Readability)
- [ ] **Jerarquía**: Un solo `<h1>` por página. Uso lógico de `<h2>`, `<h3>`.
- [ ] **Semántica**: Uso correcto de `<article>`, `<section>`, `<nav>`, `<aside>` en lugar de solo `<div>`.
- [ ] **Accesibilidad**: Atributos `alt` en imágenes y etiquetas ARIA donde sea necesario.

### 6. Datos Estructurados (Schema.org / JSON-LD)
- [ ] Estandarizar la información para que las máquinas la entiendan claramente.
- [ ] Incluir esquemas relevantes: `Organization`, `WebSite`, `Product`, `Article`, `FAQPage`.
- [ ] Validar sintaxis con herramientas de prueba de Google.

### 7. Seguridad y Configuración Técnica
- [ ] **HTTPS**: Certificado SSL activo y forzado.
- [ ] **Redirecciones**: WWW vs non-WWW resuelto (uno redirige al otro).
- [ ] **Enlaces Rotos**: Verificación de que no existen enlaces internos rotos (404).

## Instrucción para el Equipo
> "Un sitio invisible es un sitio inútil. Antes de lanzar, validen este checklist. Nuestro estándar es ser **SEO-friendly** para captar tráfico hoy y **IA-friendly** para ser la respuesta de los asistentes del mañana."

## Herramientas Sugeridas de Implementación
- **Generación Sitemap**: Plugins de Vite/Next.js/Astro o scripts post-build.
- **Validación**: Lighthouse, PageSpeed Insights, Schema Markup Validator.
- **Meta Tags**: `react-helmet`, `next/head`, o configuraciones de layout en Astro.
