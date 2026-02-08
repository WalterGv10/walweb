---
name: creador_habilidades
description: Crea nuevas habilidades (skills) en español.
---
# Creador de Habilidades

Esta habilidad te permite ayudar al usuario a crear nuevas habilidades (skills) en este workspace, asegurando que todo el contenido generado esté en español.

## Instrucciones

Sigue estos pasos secuenciales para crear una nueva habilidad:

1.  **Recopilar Información**:
    *   Pregunta al usuario el **nombre** de la nueva habilidad. Sugiere usar `snake_case` para el nombre de la carpeta.
    *   Pregunta una **descripción breve** de lo que hace la habilidad.
    *   Pregunta las **instrucciones detalladas** paso a paso que debe seguir la habilidad.

2.  **Crear la Estructura de Archivos**:
    *   Crea un nuevo directorio en: `c:\Users\wgarc\Documents\walweb\habilidades\[nombre_habilidad_snake_case]`
    *   Crea el archivo principal de la habilidad: `c:\Users\wgarc\Documents\walweb\habilidades\[nombre_habilidad_snake_case]\SKILL.md`

3.  **Contenido de SKILL.md**:
    *   El archivo debe seguir estrictamente este formato (YAML Frontmatter + Markdown):

    ```markdown
    ---
    name: [nombre_habilidad_snake_case]
    description: [descripción breve en español]
    ---
    # [Nombre de la Habilidad]

    [Instrucciones detalladas proporcionadas por el usuario, redactadas de forma clara y directiva en español]
    ```

4.  **Verificación y Notificación**:
    *   Verifica que el archivo se haya creado correctamente usando `view_file`.
    *   Notifica al usuario que la habilidad ha sido creada exitosamente.
