# Bikash Ghimire Portfolio

Personal portfolio and project archive for Bikash Ghimire, a software developer based in Helsinki. The site is a single-page React application with a design-system-focused visual identity, bilingual UI, theme switching, project filtering, a local portfolio chatbot, and a Formspree contact form.

## Stack

- React 18 and TypeScript
- Vite 5
- Tailwind CSS 3
- shadcn/ui and Radix UI primitives
- Vitest and React Testing Library
- Vercel deployment
- Plausible analytics, loaded at runtime

The package manager is **pnpm**. The repository pins `pnpm@10.15.0` in `package.json`.

## Quick Start

Requirements:

- Node.js 20 or newer
- pnpm 10

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Commands

```bash
pnpm dev          # Start the development server
pnpm build        # Type-check and create the production build
pnpm preview      # Preview the production build locally
pnpm lint         # Run ESLint
pnpm test         # Run Vitest in watch mode
pnpm test:run     # Run the full test suite once
pnpm test:coverage # Run tests with coverage output
```

Run one test file directly when iterating:

```bash
pnpm exec vitest run src/components/__tests__/Projects.test.tsx
```

## Project Structure

```text
src/
├── App.tsx                    # Provider tree and page section order
├── index.css                  # Global tokens, fonts, animations, and visual utilities
├── data/portfolio.ts          # Main portfolio content source of truth
├── contexts/LanguageContext.tsx # English/Finnish UI translations
├── components/
│   ├── Hero.tsx               # First-screen introduction and resume CTA
│   ├── Header.tsx             # Fixed navigation, theme/language controls
│   ├── About.tsx              # Story, values, and grouped expertise
│   ├── Skills.tsx             # Interactive skill category tabs
│   ├── Experience.tsx         # Professional timeline
│   ├── Education.tsx          # Education history
│   ├── Certifications.tsx     # Certificates and credentials
│   ├── Projects.tsx           # Searchable, filterable project archive
│   ├── Contact.tsx             # Formspree contact form and social links
│   ├── Chatbot.tsx             # Floating portfolio assistant UI
│   └── ui/                    # shadcn/ui primitives
├── lib/chatbot-engine.ts      # Pure keyword-based chatbot logic
└── __tests__/                 # App and component tests
```

## How To Update Content

Most content changes should only touch `src/data/portfolio.ts`.

### Personal details

Update the `personalInfo` object for the name, title, tagline, bio, location, email, website, and social links.

### Work history

Update the `experience` array. Each entry contains:

- `company`, `position`, `duration`, and `location`
- `description`
- `technologies`
- `achievements`

### Projects

Update the `projects` array. Each project should include a stable numeric `id`, title, description, technologies, image, GitHub URL, optional demo URL, and `featured` flag.

For local project images:

1. Add the image under `src/assets/images/`.
2. Import it at the top of `src/data/portfolio.ts`.
3. Use the imported asset as the project's `image` value.

### Education, certifications, and skills

Edit the corresponding arrays in `src/data/portfolio.ts`. Keep the existing field names because the section components consume those shapes directly.

### UI copy and translations

UI labels such as navigation, buttons, section headings, and chatbot responses are not portfolio data. Update their English and Finnish values in `src/contexts/LanguageContext.tsx`.

## Architecture Notes

The page has no router. `App.tsx` renders one long scrollable page in this order:

```text
LanguageProvider
└── ThemeProvider
    ├── SEO
    ├── Header
    ├── Hero
    ├── Skills
    ├── About
    ├── Experience
    ├── Education
    ├── Certifications
    ├── Projects
    ├── Contact
    ├── Footer
    └── Chatbot
```

Theme preference is stored under `portfolio-theme`. Language state is provided by `LanguageContext`. The chatbot is local and does not call an external AI service; its response logic reads from `src/data/portfolio.ts`.

## Visual System

The current design direction is a Nordic signal-lab aesthetic:

- Ink navy: `#14202f`
- Warm paper: `#f5f1e8` / theme background tokens
- Acid chartreuse: `#d8f52b`
- Display type: Space Grotesk
- Body type: Manrope
- Utility type: DM Mono

Global color tokens and reusable visual utility classes live in `src/index.css`. Prefer those tokens and existing classes over introducing one-off color systems in individual components.

## Testing Guidance

- Use `customRender` from `src/test/utils/test-utils.tsx` when a component needs the language or theme providers.
- Put App-level tests in `src/__tests__/`.
- Put component tests beside the component in `src/components/__tests__/`.
- Preserve accessible labels and existing section IDs when changing layout; tests and navigation depend on them.
- Verify filters, modals, keyboard interactions, downloads, and external links when changing `Projects`, `Header`, or `Contact`.

## Deployment

The project is configured for Vercel through `vercel.json`. The production build is generated with `pnpm build`. Plausible is injected in `App.tsx` using the current hostname as the analytics domain.

Do not commit `.env` files, credentials, generated `dist/` output, coverage reports, or `node_modules/`.

## Contributor Guide

See [`AGENTS.md`](./AGENTS.md) for the short set of repository-specific implementation rules.
