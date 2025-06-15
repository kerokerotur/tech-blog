# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Router v7 tech blog application built with TypeScript, TailwindCSS v4, and Vite. The app uses file-based routing and is currently configured in SPA mode with prerendering enabled.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run start` - Start production server 
- `npm run typecheck` - Run TypeScript type checking with React Router type generation
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are properly formatted

Always run `npm run typecheck` after making changes to verify compilation. Code formatting is applied automatically on save in VSCode.

## Architecture

### Routing System
- Routes defined in `app/routes.ts` using React Router v7's configuration
- Currently implements SPA mode (`ssr: false`) with prerendering
- Route types auto-generated in `.react-router/types/` - import from `./+types/[route-name]`

### Import Path Conventions
- Use `~/*` alias for app imports (configured in tsconfig.json)
- UI components use relative imports (`./ui/component-name`) 
- Utils accessed via `../../lib/utils` from UI components
- Never use `@/` imports - they're not configured in this React Router setup

### Component Structure
- Feature components in `app/components/`
- Reusable UI primitives in `app/components/ui/`
- Built on Radix UI with custom styling using class-variance-authority
- All components use the `cn()` utility from `app/lib/utils.ts` for conditional classes

### Styling System
- TailwindCSS v4 with custom theme in `app/app.css`
- Inter font loaded from Google Fonts
- Use `cn()` function for conditional class merging
- Dark mode support via `prefers-color-scheme`

## Common Issues to Avoid

1. **Import Paths**: Don't use `@/` imports - use `~/*` for app imports or relative paths
2. **Route Types**: Import route types from `./+types/[route-name]`, not from incorrect paths
3. **Image Components**: Use standard `<img>` tags, not Next.js `Image` components
4. **Component Imports**: Import UI components with relative paths when used within the components directory

## Build Configuration

- Vite build with React Router integration
- TypeScript with strict mode and bundler resolution
- TailwindCSS with Vite plugin for optimal performance
- Docker multi-stage build available for production deployment

## Current Application State

The app currently shows a single article page about data structures with:
- Header with navigation and search
- Article hero section with metadata
- Content sections with rich text
- Author card and related articles sidebar
- Advertisement placeholders

The routing is minimal - consider expanding for multiple articles and dynamic routes as needed.