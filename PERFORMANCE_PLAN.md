# Plan de Optimización de Velocidad y Core Web Vitals (2026)

Fecha: 30 de Enero, 2026
Autor: Antigravity - Web Performance Studio Agent

Este plan detalla las acciones inmediatas para maximizar el rendimiento (INP, LCP, CLS) del sitio WalWeb, siguiendo los estándares "Speed Demon".

## 1. Largest Contentful Paint (LCP) - Prioridad Crítica
**Estado Actual:**
- La imagen `walter_pro.png` en `Hero.tsx` ya tiene `priority={true}`, lo cual es excelente.
- El texto del Hero aparece con animaciones de entrada, lo que podría retrasar artificialmente la percepción de carga.

**Acciones:**
- **Preload de Imagen Hero:** Confirmar que `next/image` esté generando el link rel="preload". (Next.js lo hace auto con `priority`).
- **Font Display:** Asegurar que las fuentes Geist tengan `display: swap` (comportamiento por defecto de `next/font`), aunque para LCP idealmente queremos `block` o `swap` rápido.

## 2. Interaction to Next Paint (INP) - Reactividad
**Estado Actual:**
- `Services.tsx` es un componente `'use client'` enorme que renderiza una lista estática.
- **Problema:** React tiene que hidratar toda esa lista antes de que sea interactiva, inflando el **Total Blocking Time (TBT)**.

**Acciones:**
- **Refactorización a Server Components:** Mover el array de datos `services` fuera del componente (a `src/data` o props).
- **Hidratación Parcial:** Convertir `Services.tsx` a un Server Component que itere el array y solo use `Client Components` pequeños para las tarjetas individuales (`ServiceCard.tsx`) si necesitan `framer-motion` para hover.
    - *Nota:* Si la animación es solo `whileHover`, podemos mantenerlo cliente pero reducir el JS inicial. Si es `whileInView`, necesitamos cliente.
    - **Estrategia Elegida:** Mantener `Services` como cliente por ahora por las animaciones complejas de entrada, pero optimizar la lista (`ServiceList` memoizado).

## 3. Cumulative Layout Shift (CLS) - Estabilidad Visual
**Estado Actual:**
- `Hero.tsx` tiene dimensiones fijas en el contenedor de imagen.
- `LightPillar.tsx` es un canvas/heavy component. Debe asegurarse de que no mueva el layout al cargar.

**Acciones:**
- **Contenedores Rígidos:** Asegurar que `LightPillar` tenga `position: fixed` o `absolute` con `z-index` negativo (ya lo tiene en `layout.tsx`), así no afecta el flujo.

## 4. Optimizaciones de CSS y Renderizado
**Acciones:**
- **Content Visibility:** Aplicar `content-visibility: auto` a secciones "below the fold" como el Footer o secciones inferiores (`Mundial`, `Trayectoria` en la home) para que el navegador no gaste recursos renderizándolas hasta que se acerquen al viewport.

---

## Plan de Ejecución Inmediato

1.  **CSS Global:** Agregar clases de utilidad para rendimiento (`.render-auto`).
2.  **Optimización de Fuentes:** Verificar configuración en `layout.tsx` (ya está bien con `variable`).
3.  **Refactor Client:** Revisar `Services.tsx` para asegurar que las animaciones no bloqueen el hilo principal innecesariamente.
