---
name: plataforma_invitaciones_digitales
description: Genera una plataforma de invitaciones digitales interactivas optimizada para rendimiento y UX.
---
# Plataforma de Invitaciones Digitales Interactivas

Esta habilidad guía el desarrollo de una aplicación web para generar invitaciones personalizadas para eventos, priorizando rendimiento (CWV), automatización de medios y experiencia de usuario.

## 1. Arquitectura del Frontend y Rendimiento (Core Web Vitals)

Para cumplir con las mejores prácticas (LCP, FID/INP, CLS):

*   **Framework Principal**: **Next.js**.
    *   **Justificación**: Madurez en optimización de imágenes y renderizado híbrido.
*   **Estrategia de Renderizado**:
    *   **SSG (Static Site Generation)**: Para invitaciones públicas. HTML estático al construir para LCP bajo.
    *   **ISR (Incremental Static Regeneration)**: Para actualizar datos (ej. cambios de hora) sin reconstruir todo el sitio.
*   **Optimización de Imágenes**:
    *   Usar `next/image` para prevenir CLS (Layout Shift) y servir formatos modernos (AVIF/WebP).

## 2. Motor de Diseño y Automatización de Medios

Automatización para personalización masiva (ej. 500+ invitaciones):

*   **Cloudinary**:
    *   **Superposición de Texto (Text Overlay)**: Usar API para superponer nombres dinámicamente en una imagen base mediante URL.
    *   **Carga Masiva (CSV)**: Implementar función de carga de CSV para generar URLs únicas iterando sobre la lista de invitados.
    *   **Optimización de Video**: Transcodificación automática de videos de fondo según ancho de banda y dispositivo.
*   **Interactividad Visual**:
    *   **Framer Motion**: Animaciones escalonadas (staggered) para entrada de elementos (título, fecha, mapa).
    *   **Tailwind CSS**: Estilos utilitarios para bajo peso (Interaction to Next Paint - INP).
    *   **Accesibilidad**: Implementar `prefers-reduced-motion` para desactivar animaciones complejas si el usuario lo prefiere.

## 3. Funcionalidades Interactivas Específicas

Integrar módulos según el tipo de evento:

### A. Gestión de Acceso (Códigos QR)
*   **Generación**: Usar `react-qr-code` o `react-native-qrcode-svg` para generar un QR único por invitado (vinculado ID BD).
*   **Uso**: Check-in rápido en la entrada.

### B. Módulos Temáticos
*   **Eventos Musicales**: Integrar **Spotify Web Playback SDK** para playlist en la invitación o sugerencias.
*   **Eventos Religiosos**: Integrar **API.Bible** para mostrar versículos dinámicos.
*   **Bodas**: Botones de acción directa a registros de regalos (Zola, Amazon).

### C. Calendario y RSVP
*   **Add to Calendar**: Botones compatibles con Google Calendar, Apple, Outlook (manejo automático de zonas horarias).
*   **RSVP en Tiempo Real**: Usar **Supabase** para gestionar confirmaciones y dashboard en vivo.

## 4. Distribución y Viralidad

*   **Web Share API**: Usar el menú nativo del sistema (iOS/Android) para compartir vía WhatsApp, Telegram, SMS.
*   **Mensajería Masiva**: Integrar **WhatsApp Business API** para envío de plantillas pre-aprobadas.
*   **Deep Linking**: Configurar `apple-app-site-association` y `assetlinks.json` si existe app móvil dedicada.

## 5. Consideraciones de Accesibilidad

*   **Tipografía**: Tamaño mínimo 16px, alto contraste (ratio 4.5:1).
*   **Navegación**: Controles grandes y claros.
*   **Zoom**: Permitir hasta 200% sin romper el diseño.

## 6. Resumen del Stack Tecnológico

| Componente | Tecnología | Justificación CWV / Funcional |
| :--- | :--- | :--- |
| **Frontend** | Next.js + TypeScript | Optimización nativa, SSG (LCP). |
| **Estilos** | Tailwind CSS | Ligero, evita bloqueo de renderizado. |
| **Animación** | Framer Motion | Animaciones fluidas (GPU). |
| **Base de Datos** | Supabase | BaaS rápido, Realtime, Auth. |
| **Media** | Cloudinary | Banners dinámicos, video optimizado. |
| **Distribución** | Web Share API | Uso nativo del dispositivo. |
| **Hosting** | Vercel | Infraestructura Edge. |
