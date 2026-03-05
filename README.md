# Portfolio - Ruben Delgado

Sitio web personal portfolio desarrollado con Astro, TypeScript y Vite.

## Descripción

Este repositorio contiene el código fuente de mi sitio web profesional como desarrollador de software. El objetivo del proyecto es presentar mi perfil, experiencia, proyectos y formas de contacto, ofreciendo una interfaz moderna, rápida y totalmente responsive.

## Tecnologías

- **Astro** - Framework web moderno
- **TypeScript** - Tipado estático
- **Vite** - Build tool (incluido en Astro)
- **CSS** - Estilos sin framework

## Estructura del Proyecto

```
/
├── src/
│   ├── components/     # Componentes UI
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   └── Contact.astro
│   ├── layouts/        # Plantillas base
│   │   └── BaseLayout.astro
│   ├── pages/          # Páginas
│   │   └── index.astro
│   ├── styles/         # Estilos globales
│   │   └── global.css
│   └── types/          # Tipos TypeScript
│       └── portfolio.ts
├── public/             # Assets estáticos
├── astro.config.mjs    # Configuración de Astro
├── tsconfig.json       # Configuración de TypeScript
└── package.json
```

## Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## Personalización

Edita `src/pages/index.astro` para modificar:
- Información personal (nombre, bio)
- Experiencia laboral
- Proyectos
- Habilidades
- Enlaces de contacto

## Licencia

MIT
