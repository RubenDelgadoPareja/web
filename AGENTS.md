# AGENTS.md - Developer Notes for Agentic Coding

This document provides guidelines for agentic coding agents operating in this repository.

## Project Overview

This is a personal portfolio website for a software developer built with **Astro**. The goal is to create a modern, fast, and fully responsive website to present profile, experience, projects, and contact information.

The website supports multiple languages (English and Spanish) with automatic TypeScript type generation for translation keys.

## Technology Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS v4
- **i18n**: i18next-resources-for-ts for type-safe translations

---

## Build / Lint / Test Commands

### Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### i18n - Translation Types

```bash
# Generate TypeScript types from translation JSON files (auto-runs with dev/build)
npm run build:toc
```

**Note**: `npm run dev` and `npm run build` automatically run `build:toc` first.

### Type Checking

```bash
# Run TypeScript type check
npx tsc --noEmit
```

---

## Code Style Guidelines

### General Principles

- Write clean, readable, and maintainable code
- Keep functions small and focused (single responsibility)
- Use meaningful variable and function names
- Avoid unnecessary complexity

### TypeScript/JavaScript

- **Always use TypeScript** for new code; prefer strict mode
- Enable `strict: true` in tsconfig.json
- Prefer interfaces over types for object shapes
- Use proper TypeScript types - avoid `any`
- Enable `noImplicitAny` and `noImplicitReturns`

### Naming Conventions

- **Variables/Functions**: camelCase (`getUserData`, `isActive`)
- **Classes/Interfaces/Types**: PascalCase (`UserProfile`, `ApiResponse`)
- **Constants**: SCREAMING_SNAKE_CASE for compile-time constants, camelCase for object constants
- **Files**: kebab-case for components (`user-profile.astro`), camelCase for utilities (`apiClient.ts`)
- **Boolean variables**: Prefix with `is`, `has`, `can`, `should` (`isLoading`, `hasError`)

### Imports

- Use absolute imports when possible (configure `paths` in tsconfig.json)
- Group imports in this order:
  1. External libraries (Astro, React, etc.)
  2. Internal modules (components, hooks, utils)
  3. Type imports
  4. Relative imports
- Use named imports: `import { useState, useEffect } from 'react'`
- Avoid default exports when possible

### Formatting

- Use Prettier for code formatting
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas

---

## Internationalization (i18n)

### Translation Files Location

All translation files are in `src/i18n/`:

```
src/i18n/
├── en.json          # English translations
├── es.json          # Spanish translations
├── resources.ts     # Auto-generated types (via i18next-resources-for-ts)
└── utils.ts         # i18n utilities
```

### Adding New Translations

1. Add the key to both `en.json` and `es.json` with the same structure
2. Run `npm run build:toc` to regenerate TypeScript types
3. Import translations using the type-safe approach:

```typescript
import en from '../i18n/en.json';
import es from '../i18n/es.json';

// Use type-safe translations
const t = lang === 'es' ? es : en;
t.nav.about; // Type-safe access
```

### Translation Type Safety

The project uses `i18next-resources-for-ts` to generate type-safe translations. The `resources.ts` file in `src/i18n/` defines the shape of all translation keys.

- Must exist in both language files
- Run `npm run build:toc` to update types
- TypeScript will infer the correct types automatically

---

## Astro Components

- Use `.astro` files for static pages and layouts
- Use frontmatter `---` for TypeScript code
- Access props with `Astro.props`
- Use `<slot />` for content projection
- Keep client-side logic in separate `.ts` files or use `<script>`

### Component Structure

```astro
---
// Frontmatter - TypeScript runs at build time
import type { Props } from '../types';
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<header class="header">
  <h1>{title}</h1>
  <slot /> <!-- Content projection -->
</header>

<style>
  .header {
    /* Scoped styles */
  }
</style>
```

---

## Error Handling

- Always handle async errors with try/catch
- Provide user-friendly error messages
- Use Error Boundaries for component errors
- Log errors appropriately (console.error in development)

---

## CSS/Styling

- Use Tailwind CSS for styling
- Avoid inline styles except for dynamic values
- Use meaningful class names
- Follow Tailwind conventions

---

## Git Conventions

- Use meaningful commit messages
- Keep commits atomic and focused
- Format: `<type>(<scope>): <description>`
- Types: feat, fix, docs, style, refactor, test, chore

---

## Project Structure

```
/
├── src/
│   ├── components/       # Astro components
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── i18n/             # Internationalization
│   │   ├── en.json
│   │   ├── es.json
│   │   ├── resources.ts  # Auto-generated
│   │   └── utils.ts
│   ├── layouts/          # Astro layouts
│   ├── pages/            # Astro pages
│   ├── styles/           # Global styles
│   └── types/            # TypeScript types
├── public/               # Static assets
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

---

## Important Notes

1. This is a personal portfolio website - prioritize performance, accessibility, and SEO
2. Ensure responsive design works on mobile, tablet, and desktop
3. Keep dependencies minimal - avoid bloat
4. Follow web accessibility guidelines (WCAG)
5. Always run `npm run build:toc` after modifying translation JSON files
6. Keep translation keys synchronized between all language files
