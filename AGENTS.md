# AGENTS.md - Developer Notes for Agentic Coding

This document provides guidelines for agentic coding agents operating in this repository.

## Project Overview

This is a personal portfolio website for a software developer. The goal is to create a modern, fast, and fully responsive website to present profile, experience, projects, and contact information.

## Technology Stack

To be determined based on project requirements. Recommended: Next.js or similar modern frontend framework.

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

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint

# Run lint with auto-fix
npm run lint -- --fix
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run a single test file
npm test -- filename.test.ts

# Run tests with coverage
npm run test:coverage
```

### Type Checking

```bash
# Run TypeScript type check
npm run typecheck

# Or use tsc directly
npx tsc --noEmit
```

### Formatting

```bash
# Run Prettier
npm run format

# Check formatting without writing
npm run format:check
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
- **Files**: kebab-case for components (`user-profile.tsx`), camelCase for utilities (`apiClient.ts`)
- **Boolean variables**: Prefix with `is`, `has`, `can`, `should` (`isLoading`, `hasError`)

### Imports

- Use absolute imports when possible (configure `paths` in tsconfig.json)
- Group imports in this order:
  1. External libraries (React, Next.js, etc.)
  2. Internal modules (components, hooks, utils)
  3. Type imports
  4. Relative imports
- Use named imports: `import { useState, useEffect } from 'react'`
- Avoid default exports when possible

### Formatting

- Use Prettier for code formatting
- Configure editor to format on save
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas

### React/Component Guidelines

- Use functional components with hooks
- Name components after their filename
- Colocate related files (component + styles + tests)
- Extract reusable logic into custom hooks
- Use TypeScript generics for reusable components
- Memoize expensive computations with `useMemo`/`useCallback`

### Error Handling

- Always handle async errors with try/catch
- Provide user-friendly error messages
- Use Error Boundaries for component errors
- Log errors appropriately (console.error in development, error tracking service in production)

### CSS/Styling

- Use CSS Modules or Tailwind CSS
- Avoid inline styles except for dynamic values
- Use meaningful class names
- Follow BEM naming if using plain CSS

### Git Conventions

- Use meaningful commit messages
- Keep commits atomic and focused
- Format: `<type>(<scope>): <description>`
- Types: feat, fix, docs, style, refactor, test, chore

---

## Testing Guidelines

### Test File Organization

- Test files should be named `*.test.ts` or `*.test.tsx`
- Place tests next to the code they test (colocation)
- Use `__tests__` directory for integration/e2e tests

### Testing Best Practices

- Write tests that are independent and isolated
- Use descriptive test names: `describe('UserProfile', () => { it('should display user name', ...) })`
- Follow AAA pattern: Arrange, Act, Assert
- Mock external dependencies (API calls, third-party libraries)
- Aim for meaningful test coverage, not just percentage

---

## Project Structure (Recommended)

```
/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
 └──│   │   [component]/
│   │       ├── index.ts
│   │       ├── [component].tsx
│   │       └── [component].module.css
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles
├── public/              # Static assets
├── tests/               # Integration/e2e tests
├── package.json
├── tsconfig.json
├── next.config.js
└── .eslintrc.json
```

---

## Important Notes

1. This is a personal portfolio website - prioritize performance, accessibility, and SEO
2. Ensure responsive design works on mobile, tablet, and desktop
3. Keep dependencies minimal - avoid bloat
4. Follow web accessibility guidelines (WCAG)
5. Consider SEO best practices for a personal site
