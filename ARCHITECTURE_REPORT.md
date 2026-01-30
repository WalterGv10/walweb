# Reporte del Consejo de Arquitectura Web (WalWeb 2026)

Fecha: 30 de Enero, 2026
Autor: Antigravity - Web Architecture Council

## 1. Evaluación del Estado Actual

El proyecto opera bajo **Next.js 15 (App Router)** con una estructura inicial funcional pero monolitica. Actualmente, la carpeta `src/components` mezcla componentes de presentación pura (UI) con secciones completas de negocio (Features).

### Hallazgos Críticos:
- **Acoplamiento de Datos:** El contenido (textos, listas de servicios, skills) está "hardcoded" dentro de los componentes `.tsx`. Esto viola el principio de *Separation of Concerns*.
- **Estructura Plana:** Todos los componentes viven al mismo nivel. A medida que "Mundial 2026" o "Trayectoria" crezcan, será difícil mantener el código.
- **Ausencia de Capa de Utilidades:** No existe `src/lib` o `src/utils` para lógica compartida.

---

## 2. Decisiones Arquitectónicas (ADRs)

### ADR-001: Adopción de "Feature-First Architecture"
**Contexto:** La aplicación está transitando de una Landing Page a una Plataforma de Servicios Multi-dominio (Mundial, Arquitectura, Web).
**Decisión:** Reorganizar el código basándonos en **Dominios de Negocio** y no solo en tipos de archivo.
**Detalles:**
- **UI Kit:** Componentes atómicos (botones, tarjetas, inputs) van a `src/components/ui`.
- **Features:** Componentes complejos de negocio van a carpetas temáticas.
- **Content Layer:** Los datos estáticos se mueven a archivos constantes en `src/data`.

### ADR-002: Separación de Contenido y Presentación
**Contexto:** Editar un texto requiere tocar lógica React.
**Decisión:** Extraer todos los arrays de datos (Servicios, Skills, Historial) a archivos TypeScript tipados (`.ts`) independientes.

---

## 3. Propuesta de Nueva Estructura (Árbol)

```mermaid
graph TD
    src --> app
    src --> components
    src --> data
    src --> lib

    subgraph components
        components --> ui["/ui (Átomos Reusables)"]
        components --> layout["/layout (Header, Footer)"]
        components --> sections["/sections (Bloques de Página)"]
        components --> features["/features (Lógica Compleja)"]
    end

    subgraph features
        features --> worlcup["/world-cup-2026"]
        features --> profile["/professional-profile"]
    end

    subgraph data
        data --> constants["site-config.ts"]
        data --> content["services-data.ts"]
    end
```

### Rutas Propuestas de Archivos

| Tipo | Ruta Actual | Nueva Ruta Recomendada |
|------|-------------|------------------------|
| **Data** | (Hardcoded en Services.tsx) | `src/data/services.ts` |
| **Feature** | `components/WorldCup2026.tsx` | `src/components/features/worldcup/WorldCupView.tsx` |
| **Section** | `components/Hero.tsx` | `src/components/sections/Hero.tsx` |
| **Layout** | `components/Header.tsx` | `src/components/layout/Header.tsx` |

---

## 4. Plan de Acción Inmediato (The Strategist Plan)

Recomendamos ejecutar la **Fase 1: Desacoplamiento de Datos** inmediatamente para mejorar la mantenibilidad sin romper la estructura visual.

1.  Crear directorio `src/data`.
2.  Extraer datos de `Services.tsx`, `TechExpertise.tsx` y `Contact.tsx`.
3.  Definir tipos TypeScript para estos datos (Interfaces).
