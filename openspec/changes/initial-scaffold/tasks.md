# Tasks: Initial Portfolio Scaffold

**Change**: `initial-scaffold`
**Status**: ready
**Created**: 2026-05-28
**Delivery strategy**: single-pr
**Source**: spec.md, design.md

---

## Execution Notes

All tasks are sequential unless marked `[PARALLEL]`. Each task maps to one or more spec requirements and produces output that can be verified independently before the next task starts. The apply phase must check off each task as it completes.

---

## Group 1 — Bootstrap (Project Init)

### TASK-01 — Initialize Next.js project
**Satisfies**: REQ-08-A, REQ-08-C
**Sequential**: must complete before all other tasks

Actions:
- Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm` (or equivalent flags for Next 15 + App Router) in the project root.
- Verify the generated `tsconfig.json` has `"strict": true` and `paths: { "@/*": ["./src/*"] }`.
- Verify `tailwind.config.ts` exists (typed form).
- Verify `src/app/` directory exists with `layout.tsx` and `page.tsx`.

Acceptance: `pnpm dev` starts without errors and the default Next.js page loads at `localhost:3000`.

---

### TASK-02 — Pin dependency versions and add tooling
**Satisfies**: REQ-08-B
**Sequential**: after TASK-01

Actions:
- Pin `next` to a specific `15.x.x`, `react`/`react-dom` to `19.x.x` in `package.json`.
- Pin `tailwindcss` to `^3.4.0` (explicitly not v4).
- Add `prettier` and `prettier-plugin-tailwindcss` as dev dependencies.
- Create `.prettierrc.json`:
  ```json
  { "semi": true, "singleQuote": true, "plugins": ["prettier-plugin-tailwindcss"] }
  ```
- Create `.nvmrc` with content `20`.
- Verify `package.json` contains no dependencies outside the approved list from design section 2.

Acceptance: `pnpm install` completes cleanly. No unapproved packages in `node_modules/.package-lock.json` or `package.json`.

---

### TASK-03 — Clean up generated boilerplate
**Satisfies**: REQ-08-A (clean build)
**Sequential**: after TASK-02

Actions:
- Remove all default page content from `src/app/page.tsx` (replace with empty fragment or a temporary `<main>` placeholder).
- Remove all default styles from `src/app/globals.css` (keep only Tailwind directives: `@tailwind base`, `@tailwind components`, `@tailwind utilities`).
- Delete any auto-generated `public/` assets from CNA (e.g. `vercel.svg`, `next.svg`) that are not part of the design's authoritative tree.
- Ensure `src/app/layout.tsx` exists (CNA generates it); defer real content to TASK-07.

Acceptance: `pnpm dev` still starts. Page loads without errors (blank or near-blank is fine).

---

## Group 2 — Configuration

### TASK-04 — Configure Tailwind with CSS variable tokens and dark mode
**Satisfies**: REQ-03-A, REQ-03-B, REQ-05-D (contrast)
**Sequential**: after TASK-03

Actions:
- Set `darkMode: 'class'` in `tailwind.config.ts`.
- Add `content` globs: `['./src/**/*.{ts,tsx}']`.
- Extend `theme.colors` to map semantic names (`background`, `foreground`, `muted`, `accent`, `border`) to HSL CSS variable references (e.g. `hsl(var(--background))`).
- Write the CSS custom properties block in `src/app/globals.css` for `:root` (light) and `.dark` (dark) exactly as specified in design section 6.
- Add font variables for `Geist` and `Geist Mono` to `:root` (will be consumed in TASK-07).

Acceptance: in a minimal test component, `className="bg-background text-foreground"` renders white-on-dark in dark mode and dark-on-white in light mode when `dark` class is present on `<html>`.

---

### TASK-05 — Add site metadata constants
**Satisfies**: REQ-07-A, REQ-07-B
**Sequential**: after TASK-03; `[PARALLEL]` with TASK-04

Actions:
- Create `src/lib/site.ts` with the `siteMetadata` object exactly as defined in design section 7.
- Create `src/lib/theme.ts` with:
  - `THEME_STORAGE_KEY = 'pg-portfolio-theme'`
  - `getInitialTheme()` helper (reads `localStorage`, falls back to `matchMedia` result, returns `'light' | 'dark'`).

Acceptance: TypeScript compiler accepts these files with `strict: true`. Functions are exported and importable.

---

## Group 3 — Type Definitions and Data Layer

### TASK-06 — Define TypeScript types
**Satisfies**: REQ-02-B
**Sequential**: after TASK-01; `[PARALLEL]` with TASK-04 and TASK-05

Actions:
- Create `src/types/content.ts` with the exact interfaces and type from design section 5: `Pillar`, `Profile`, `Project`, `Experience`, `Skill`.
- All fields marked optional in the design must be `?`. Required fields must be non-optional.

Acceptance: `tsc --noEmit` passes with `strict: true`. A test object missing a required field (e.g. `title` on `Project`) causes a TypeScript error.

---

### TASK-07-A — Create profile data file
**Satisfies**: REQ-02 (data layer invariant)
**Sequential**: after TASK-06

Actions:
- Create `src/data/profile.ts` exporting a single `profile: Profile` object with:
  - `name: 'Pablo Gastaldi'`
  - `email: 'gastaldipablo1@gmail.com'`
  - `linkedin: 'https://www.linkedin.com/in/pablogastaldigut/'`
  - `tagline`: a placeholder positioning phrase (finalized with real copy later, but non-empty)
  - `location: 'Santa Fe, Argentina'`
  - `languages`: at least one placeholder entry

Acceptance: file imports without error; `profile.email` is the correct address.

---

### TASK-07-B — Create projects data file
**Satisfies**: REQ-02-A, REQ-02-B, REQ-02-D (trade.ai first)
**Sequential**: after TASK-06; `[PARALLEL]` with TASK-07-A

Actions:
- Create `src/data/projects.ts` exporting `projects: Project[]`.
- Include at minimum: one placeholder entry for `trade.ai` with `order: 0`, `featured: true`, `url: 'https://tradeai.ar'`, and all required fields populated (placeholder text acceptable for `description`, `highlights`).
- Include one additional placeholder project with `order: 1`.

Acceptance: `projects[0].slug === 'trade-ai'` (or equivalent). Adding a third entry to the array requires zero changes to component files.

---

### TASK-07-C — Create experience data file
**Satisfies**: REQ-02-D (trade.ai first), REQ-02-B
**Sequential**: after TASK-06; `[PARALLEL]` with TASK-07-A and TASK-07-B

Actions:
- Create `src/data/experience.ts` exporting `experiences: Experience[]`.
- Include three placeholder entries: trade.ai (`order: 0`), ACICE (`order: 1`), Banco de Santa Fe (`order: 2`).
- All required fields populated with placeholder text; dates in `yyyy-mm` format.

Acceptance: `experiences` sorted by `order` ascending places trade.ai first.

---

### TASK-07-D — Create skills data file
**Satisfies**: REQ-02-C
**Sequential**: after TASK-06; `[PARALLEL]` with TASK-07-A, TASK-07-B, TASK-07-C

Actions:
- Create `src/data/skills.ts` exporting `skills: Skill[]`.
- Include at least two skills per pillar: `'data'`, `'ai'`, `'comex'`, `'languages'`.
- Each skill has a valid `Pillar` value.

Acceptance: filtering `skills` by each `Pillar` value yields a non-empty array for all four pillars.

---

## Group 4 — Layout and Shell

### TASK-08 — Implement root layout and theme shell
**Satisfies**: REQ-03-A, REQ-03-B, REQ-03-C, REQ-03-D, REQ-05-A, REQ-07-A, REQ-07-B, REQ-08-A
**Sequential**: after TASK-04, TASK-05

Actions:
- Update `src/app/layout.tsx`:
  - Load `Geist` and `Geist Mono` via `next/font/google`; apply as CSS variables on `<html>`.
  - Export `metadata` object consuming `siteMetadata` from `src/lib/site.ts`; include `title`, `description`, `openGraph` (`title`, `description`, `type: 'website'`, `images`, `url`), and `twitter.card`.
  - Render `<html lang="es">` (Spanish site).
  - Include `<body>` wrapping `<Header />`, `<main>`, and `<Footer />` (imported from components; stubs acceptable until TASK-09).
- Create `src/app/theme-script.tsx` as a server component that emits the inline pre-paint script (reads `localStorage['pg-portfolio-theme']`, falls back to `matchMedia`, sets `document.documentElement.classList`).
- Render `<ThemeScript />` inside `<head>` in `layout.tsx` BEFORE any styled content (use `dangerouslySetInnerHTML` pattern with the script as a string literal).
- Create `src/app/not-found.tsx` with a minimal 404 message.

Acceptance:
- `<head>` contains `<title>` with Pablo Gastaldi's name, `<meta name="description">`, and OG tags.
- Loading the page in dark OS mode with no localStorage entry applies `dark` class to `<html>` on first paint (inspect via DevTools → no flash).
- `pnpm build` exits 0.

---

### TASK-09 — Implement Header and Footer layout components
**Satisfies**: REQ-01-B, REQ-04-A, REQ-04-B, REQ-05-A, REQ-05-B
**Sequential**: after TASK-08

Actions:
- Create `src/components/layout/Header.tsx`:
  - `<header>` landmark with a `<nav>` containing anchor links for all six section ids: `#hero`, `#about`, `#experience`, `#projects`, `#skills`, `#contact`.
  - Import and render `<ThemeToggle />` (stub acceptable until TASK-10).
  - Mobile-friendly: links must be accessible on 375 px (hamburger or wrapping nav — designer's choice, but NOT hidden behind a broken layout).
  - All interactive elements: `min-h-11 min-w-11` tap target.
- Create `src/components/layout/Footer.tsx`:
  - `<footer>` landmark with copyright text and secondary links (email, LinkedIn).
  - Links: `target="_blank" rel="noopener noreferrer"`.

Acceptance:
- DOM contains `<header>` and `<footer>` landmarks.
- Nav contains six anchor links in the correct order.
- No horizontal scroll at 375 px viewport.

---

### TASK-10 — Implement ThemeToggle client component
**Satisfies**: REQ-03-A, REQ-03-B, REQ-05-C
**Sequential**: after TASK-08

Actions:
- Create `src/components/ui/ThemeToggle.tsx` with `'use client'` directive.
- On mount, read current theme from `document.documentElement.classList` (or localStorage).
- Toggle button: clicking adds/removes `dark` class on `<html>` and writes to `localStorage['pg-portfolio-theme']`.
- Accessible label: `aria-label` describing current state (e.g. "Activar tema oscuro" / "Activar tema claro").
- Activatable by Enter or Space (use `<button>` — not `<div>`).
- Minimum 44 × 44 px tap target.

Acceptance: toggle switches theme visually. After reload, correct theme is applied (no flash). Screen reader reads meaningful label.

---

### TASK-11 — Implement UI primitives
**Satisfies**: REQ-01-A, REQ-04-A, REQ-04-C, REQ-05-A, REQ-05-B
**Sequential**: after TASK-08; `[PARALLEL]` with TASK-10

Actions:
- Create `src/components/ui/Container.tsx`: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8` wrapper.
- Create `src/components/ui/Section.tsx`:
  - Renders `<section id={id} aria-label={label}>` with a `<h2>` heading.
  - Props: `id: string`, `label: string`, `heading: string`, `children: React.ReactNode`.
- Create `src/components/ui/ProjectCard.tsx`: card accepting a `Project` type object; renders `title`, `summary`, `stack` chips, and an optional external link. Mobile-first layout.
- Create `src/components/ui/ExperienceItem.tsx`: renders a single `Experience` entry with role, organization, date range, and highlights list.
- Create `src/components/ui/SkillGroup.tsx`: renders a pillar heading and a list of `Skill` names as chips.

Acceptance: each component renders without errors with valid props. TypeScript accepts correct props and rejects incorrect ones.

---

## Group 5 — Section Components

All TASK-12-x tasks are `[PARALLEL]` with each other. All require TASK-11 complete.

### TASK-12-A — Hero section
**Satisfies**: REQ-01-A, REQ-04-A, REQ-04-B
**Sequential**: after TASK-11; `[PARALLEL]` with TASK-12-B through TASK-12-F

Actions:
- Create `src/components/sections/Hero.tsx`.
- Render a `<section id="hero">` (via `Section` primitive or directly).
- Display `profile.name` and `profile.tagline` from `src/data/profile.ts`.
- Include a CTA button/link pointing to `#contact`: minimum 44 × 44 px tap target, `focus-visible` ring.
- No hardcoded name or tagline strings inside the component.

Acceptance: Hero renders name and tagline. Changing `profile.tagline` in `profile.ts` updates the rendered output without touching the component.

---

### TASK-12-B — About section
**Satisfies**: REQ-01-A, REQ-04-A
**Sequential**: after TASK-11; `[PARALLEL]` with TASK-12-A, TASK-12-C through TASK-12-F

Actions:
- Create `src/components/sections/About.tsx`.
- Render `<section id="about">`.
- Content sourced from `profile.ts` (tagline or a `bio` field — if `bio` is needed, add it to `Profile` type and `profile.ts`).
- Placeholder prose describing the four-pillar positioning is acceptable at scaffold stage.

Acceptance: section renders with `id="about"` and no hardcoded copy other than structural labels.

---

### TASK-12-C — Experience section
**Satisfies**: REQ-01-A, REQ-02-A, REQ-02-D, REQ-04-A
**Sequential**: after TASK-11; `[PARALLEL]` with TASK-12-A, TASK-12-B, TASK-12-D through TASK-12-F

Actions:
- Create `src/components/sections/Experience.tsx`.
- Import `experiences` from `src/data/experience.ts`.
- Sort by `order` ascending before rendering.
- Render one `<ExperienceItem />` per entry.
- Section id: `"experience"`.

Acceptance: trade.ai entry renders first. Adding a fourth entry to `experience.ts` renders it without component changes.

---

### TASK-12-D — Projects section
**Satisfies**: REQ-01-A, REQ-02-A, REQ-02-B, REQ-04-A
**Sequential**: after TASK-11; `[PARALLEL]` with TASK-12-A, TASK-12-B, TASK-12-C, TASK-12-E, TASK-12-F

Actions:
- Create `src/components/sections/Projects.tsx`.
- Import `projects` from `src/data/projects.ts`.
- Sort by `order` ascending; `featured: true` entries render first (secondary sort or filter-to-top logic).
- Render one `<ProjectCard />` per entry.
- Section id: `"projects"`.

Acceptance: trade.ai card renders first. N+1 cards after adding one entry to `projects.ts` with no component changes.

---

### TASK-12-E — Skills section
**Satisfies**: REQ-01-A, REQ-02-C, REQ-04-A
**Sequential**: after TASK-11; `[PARALLEL]` with TASK-12-A through TASK-12-D, TASK-12-F

Actions:
- Create `src/components/sections/Skills.tsx`.
- Import `skills` from `src/data/skills.ts`.
- Group by `pillar`; render one `<SkillGroup />` per pillar in order: `data`, `ai`, `comex`, `languages`.
- Section id: `"skills"`.

Acceptance: all four pillar groups render. Skills appear only under their correct pillar.

---

### TASK-12-F — Contact section
**Satisfies**: REQ-01-A, REQ-06-A, REQ-06-B, REQ-06-C, REQ-04-A, REQ-04-B, REQ-05-B
**Sequential**: after TASK-11; `[PARALLEL]` with TASK-12-A through TASK-12-E

Actions:
- Create `src/components/sections/Contact.tsx` as a `'use client'` component (form needs `onSubmit`).
- Render a form with fields: name, email, message. Each field has an associated `<label>`.
- `onSubmit` builds a `mailto:gastaldipablo1@gmail.com?subject=...&body=...` URL and calls `window.location.href`.
- Always-visible direct links:
  - `<a href="mailto:gastaldipablo1@gmail.com">gastaldipablo1@gmail.com</a>` with `target="_blank" rel="noopener noreferrer"`.
  - `<a href="https://www.linkedin.com/in/pablogastaldigut/">LinkedIn</a>` with `target="_blank" rel="noopener noreferrer"`.
- Section id: `"contact"`.
- All form fields reachable by Tab in logical order; submit button keyboard-activatable.

Acceptance: form submits via mailto. Email and LinkedIn links are present and open in new tab. Tab order is logical through all form controls.

---

## Group 6 — Page Composition and Integration

### TASK-13 — Compose page.tsx with all six sections
**Satisfies**: REQ-01-A, REQ-01-B, REQ-01-C
**Sequential**: after all TASK-12-x complete

Actions:
- Update `src/app/page.tsx` to import and render all six section components in order: `<Hero />`, `<About />`, `<Experience />`, `<Projects />`, `<Skills />`, `<Contact />` inside a `<main>` element.
- Verify DOM order matches spec order.
- Run `pnpm dev`; manually verify all six sections are visible, in order, at `localhost:3000`.

Acceptance:
- Six `<section>` elements present in DOM with ids: `hero`, `about`, `experience`, `projects`, `skills`, `contact`.
- Nav anchor links in Header scroll to the correct section.
- No runtime errors in console.

---

## Group 7 — Public Assets and SEO

### TASK-14 — Add public assets
**Satisfies**: REQ-07-A (og:image reference), REQ-08-C
**Sequential**: after TASK-03; `[PARALLEL]` with most other tasks

Actions:
- Add `public/favicon.ico` (placeholder — can be a minimal 32×32 ICO).
- Add `public/og-image.png` (1200×630 placeholder — solid color with name text or a solid fill is acceptable).
- Add `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  ```

Acceptance: `pnpm build` finds the files. OG meta tag references `/og-image.png` without 404 in browser DevTools.

---

## Group 8 — Polish and Verification

### TASK-15 — Accessibility and focus ring audit
**Satisfies**: REQ-05-A, REQ-05-B, REQ-05-C, REQ-05-D, REQ-04-B
**Sequential**: after TASK-13

Actions:
- Add `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2` to all interactive elements (nav links, ThemeToggle, CTA button, form fields, submit button, external links).
- Verify `<html>` has `lang="es"`.
- Verify every `<section>` has an accessible name via `aria-label` or an associated `<h2>`.
- Verify `<header>`, `<main>`, `<footer>` landmarks are present.
- Check color contrast for `--foreground` on `--background` in both themes: must be >= 4.5:1 (WCAG AA). Adjust HSL values if needed.
- Run Lighthouse in mobile mode on `localhost:3000` (via Chrome DevTools or CLI); accessibility score must be >= 95.

Acceptance: Lighthouse mobile a11y >= 95. Tab navigation reaches all interactive elements in order. No landmark is missing.

---

### TASK-16 — Build verification and bundle check
**Satisfies**: REQ-08-A, REQ-08-B, REQ-08-C
**Sequential**: after TASK-15

Actions:
- Run `pnpm build` (i.e. `next build`).
- Confirm exit code 0, zero TypeScript errors, zero ESLint errors blocking build.
- Inspect build output (`.next/analyze` or build stdout) to confirm no non-core dependency adds > 100 kB to client bundle.
- Confirm `package.json` contains no animation libraries or rejected dependencies from design section 2.

Acceptance: `next build` exits 0. Build output shows only Next.js, React, and Tailwind as significant bundle contributors.

---

### TASK-17 — Mobile layout smoke test
**Satisfies**: REQ-04-A, REQ-04-B, REQ-04-C
**Sequential**: after TASK-16

Actions:
- Open site at 375 px viewport in Chrome DevTools.
- Verify `document.documentElement.scrollWidth === document.documentElement.clientWidth` (no horizontal overflow).
- Verify all nav links, theme toggle, and contact CTA are visible and tappable (>= 44 px target).
- Resize to 1280 px; verify no content disappears or overlaps.
- Fix any overflow or layout break found.

Acceptance: zero horizontal overflow at 375 px. All interactive elements have >= 44 px targets. Desktop layout is additive.

---

## Task Dependency Summary

```
TASK-01
  └─ TASK-02
       └─ TASK-03
            ├─ TASK-04 ──────────────────────────────────────┐
            ├─ TASK-05 [parallel with 04]                   │
            ├─ TASK-06 [parallel with 04, 05]               │
            │    ├─ TASK-07-A [parallel]                    │
            │    ├─ TASK-07-B [parallel]                    │
            │    ├─ TASK-07-C [parallel]                    │
            │    └─ TASK-07-D [parallel]                    │
            └─ TASK-14 [parallel with 04–07]                │
                                                             │
         TASK-04 + TASK-05 ──► TASK-08                      │
                                  └─ TASK-09                │
                                  └─ TASK-10 [parallel 09] │
                                  └─ TASK-11 [parallel 09, 10]
                                                └─ TASK-12-A ─┐
                                                └─ TASK-12-B ─┤
                                                └─ TASK-12-C ─┤ [all parallel]
                                                └─ TASK-12-D ─┤
                                                └─ TASK-12-E ─┤
                                                └─ TASK-12-F ─┘
                                                       └─ TASK-13
                                                              └─ TASK-15
                                                                    └─ TASK-16
                                                                          └─ TASK-17
```

---

## Review Workload Forecast

| Metric | Estimate |
|---|---|
| Total tasks | 18 (TASK-01 through TASK-17, with TASK-07 split into 4 sub-tasks) |
| Sequential tasks | 10 (critical path: 01→02→03→08→09/10/11→13→15→16→17) |
| Parallelizable tasks | 8 (TASK-04/05/06/07-x/14; TASK-09/10/11; TASK-12-A through TASK-12-F) |
| Files to create | ~30 new files |
| Files to modify | ~3 (page.tsx, layout.tsx, globals.css from CNA generation) |

### Line count estimates

| Group | Files | Estimated lines |
|---|---|---|
| Config files (tailwind, prettier, nvmrc) | 4 | ~60 |
| `src/types/content.ts` | 1 | ~40 |
| `src/lib/*.ts` (site.ts, theme.ts) | 2 | ~40 |
| `src/data/*.ts` (4 files) | 4 | ~120 |
| `src/app/layout.tsx` | 1 | ~60 |
| `src/app/theme-script.tsx`, `not-found.tsx`, `page.tsx` | 3 | ~60 |
| `src/app/globals.css` | 1 | ~40 |
| `src/components/layout/Header.tsx` + `Footer.tsx` | 2 | ~100 |
| `src/components/ui/*.tsx` (5 primitives) | 5 | ~150 |
| `src/components/sections/*.tsx` (6 sections) | 6 | ~200 |
| Public assets (robots.txt, placeholders) | 2 | ~5 |
| **Total** | **31** | **~875 lines** |

### 400-line budget assessment

**Estimated changed lines: ~875**
**400-line budget risk: High**
**Chained PRs recommended: No** — delivery strategy is `single-pr` (explicit user choice).
**Size exception**: this change is flagged `size:exception` because the scaffold is a greenfield initialization with no pre-existing code. All lines are net-new. There is no meaningful way to ship a partial scaffold (e.g. half the sections) that would be independently deployable or reviewable in isolation — the page would fail the six-section invariant (REQ-01-A). The PR reviewer should be aware of the size and focus on structure/architecture rather than line-by-line review.

**Decision needed before apply**: No — `single-pr` with `size:exception` acknowledged.
