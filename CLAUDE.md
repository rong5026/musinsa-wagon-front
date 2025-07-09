# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4.1.10 with shadcn/ui components
- **State Management**: Zustand for global state
- **Data Fetching**: TanStack Query (React Query) with custom error handling
- **HTTP Client**: Axios
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Notifications**: Sonner for toast notifications
- **Package Manager**: pnpm
- **Testing**: Vitest with Storybook integration and Playwright
- **Code Quality**: ESLint, Prettier, Husky for git hooks

## Development Commands

### Environment-specific development

```bash
# Development environment
pnpm dev

# Production environment
pnpm prod

# Local environment
pnpm local
```

### Build commands

```bash
# Build for specific environments
pnpm build:dev
pnpm build:prod
pnpm build:local
```

### Code generation

```bash
# Generate API client from OpenAPI spec
pnpm codegen:dev    # Development API
pnpm codegen:prod   # Production API
pnpm codegen:local  # Local API
```

### Code quality

```bash
# Linting
pnpm lint           # Check for lint errors
pnpm fix:lint       # Fix lint errors

# Formatting
pnpm prettier       # Check formatting
pnpm fix:prettier   # Fix formatting

# Type checking
pnpm type-check     # Run TypeScript type checking
```

### Testing and Development Tools

```bash
# Storybook
pnpm storybook         # Start Storybook dev server
pnpm build-storybook   # Build Storybook

# Start production server
pnpm start
```

## Project Architecture

### Directory Structure

- `src/apis/main/` - Auto-generated API client from OpenAPI spec
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
  - `src/components/ui/` - shadcn/ui components
  - `src/components/provider/` - Context providers
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations
- `src/queries/` - TanStack Query hooks and configurations
- `src/types/` - TypeScript type definitions
- `src/utils/` - General utility functions
- `src/stories/` - Storybook stories

### Key Configuration Files

- `tsconfig.json` - Strict TypeScript configuration with path mapping (`@/*` → `src/*`)
- `components.json` - shadcn/ui configuration (New York style, CSS variables)
- `vitest.config.ts` - Test configuration with Storybook integration
- `postcss.config.js` - PostCSS with Tailwind CSS v4 and Autoprefixer

### API Integration

- Uses OpenAPI Generator to create TypeScript API client
- API client generated in `src/apis/main/`
- Custom QueryClient with global error handling for 401 responses
- Automatic session removal and redirect on authentication errors

### Global Error Handling

- Custom QueryClient provider handles API errors globally
- 401 errors trigger automatic session cleanup and redirect to sign-in
- Toast notifications for general errors using Sonner

### State Management

- Zustand for global state management
- TanStack Query for server state management
- Custom query cache with error handling

### UI Components

- shadcn/ui components with Tailwind CSS v4
- Radix UI primitives for accessibility
- Lucide React for icons
- Custom utility function `cn()` for conditional class names (clsx + tailwind-merge)

### Development Workflow

1. API changes trigger code generation via `codegen:*` commands
2. Pre-commit hooks run ESLint and Prettier on staged files
3. Strict TypeScript configuration ensures type safety
4. Storybook for component development and testing
