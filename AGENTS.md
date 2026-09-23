# Project Agents Guide

This file is the concise working guide for contributors and coding agents in this repository.

## Repository Rules

- Use `pnpm`, never npm or yarn.
- Keep changes focused and preserve existing behavior unless the task explicitly asks for a behavior change.
- Do not commit, push, deploy, or create a pull request unless explicitly requested.
- Never read, modify, or commit secret-bearing files such as `.env`, `.env.*`, private keys, or credentials.
- Never commit `node_modules/`, `dist/`, coverage output, or local tool artifacts.
- Use `apply_patch` for manual file edits.

## Before Editing

1. Read the relevant component and its test file.
2. Check `src/data/portfolio.ts` before adding duplicate content elsewhere.
3. Preserve public section IDs such as `about`, `experience`, `education`, `projects`, and `contact`.
4. Follow the existing React, TypeScript, Tailwind, and shadcn/ui patterns.

## Content Ownership

- Portfolio facts belong in `src/data/portfolio.ts`.
- English and Finnish interface strings belong in `src/contexts/LanguageContext.tsx`.
- Chatbot keyword logic belongs in `src/lib/chatbot-engine.ts`.
- Shared design tokens, fonts, animations, and visual utility classes belong in `src/index.css`.
- Do not hard-code personal details inside section components when the data file already provides them.

## UI Guidelines

- Keep the Nordic signal-lab visual language consistent: ink navy, warm paper, chartreuse accents, editorial display type, and mono utility labels.
- Prefer existing CSS variables and utility classes over new ad hoc colors.
- Preserve responsive behavior for mobile, tablet, and desktop.
- Preserve keyboard focus states, semantic labels, reduced-motion support, and accessible button/link names.
- Keep animations purposeful and avoid adding decorative motion to every element.
- For project images, use local assets when available and add them under `src/assets/images/`.

## Testing

Run the closest tests while developing, then run the full checks before handoff:

```bash
pnpm lint
pnpm test:run
pnpm build
git diff --check
```

The lint command currently reports four existing `react-refresh/only-export-components` warnings in provider/UI files. Do not claim lint is clean unless those warnings are also resolved.

When changing behavior, update or add tests. Important flows include:

- Header navigation and mobile menu
- Hero CTAs and resume download
- Project search, sorting, filtering, and case-study modal
- Theme and language controls
- Contact form states
- Chatbot responses

## Handoff Checklist

- Confirm only intended files changed with `git status` and `git diff`.
- Run `pnpm test:run` and `pnpm build`.
- Run `pnpm lint` and report warnings separately from errors.
- Run `git diff --check`.
- Mention any verification command that could not run and why.
