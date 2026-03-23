# Copilot Instructions

## Language & Typing

- Always use TypeScript. Never use plain JavaScript.
- Enable strict mode. Never use `any` — use proper types or generics.

## UI Components

- Always use **shadcn/ui** components first. Only build a custom component if no suitable shadcn component exists.
- When creating custom components, match shadcn's style conventions (Tailwind, variants, etc.).

## Prototype Behavior (Most Important)

- This is a **prototype** — everything must be fully interactive using mock data.
- **No dead UI.** Every button, link, tab, form, and action must do something visible.
- **Mock all data.** Use realistic, hardcoded mock data for all lists, tables, user info, stats, etc.
- **Mock all actions.** Mutations (create, update, delete) should update local state — no real API calls needed.
- **Mock all async flows.** Simulate loading states, success/error toasts, and progress indicators where relevant (e.g. fake a 1–2s delay on form submissions).
- **Mock all navigation.** No dead links — route changes should show a relevant page or a clear placeholder.
