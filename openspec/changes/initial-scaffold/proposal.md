# Proposal: Initial Portfolio Scaffold

## Intent

Bootstrap Pablo Gastaldi's personal portfolio from an empty repo into a deployable Next.js site. Establish the structural skeleton — framework, styling, theming, data layer, section components, contact path — so future iterations only add content (CV data, projects, articles) without touching infrastructure. The site's purpose is recruiter contact; the scaffold must communicate the four-pillar positioning (RRII + Comex + Data + AI) the moment real content lands.

## Scope

### In Scope
- Next.js (App Router) + TypeScript + Tailwind CSS project setup
- Vercel-ready config (no custom server, SSG-friendly)
- Root layout with metadata, fonts, semantic HTML
- Light/dark theme toggle (system-aware, persisted)
- Typed data files under `src/data/` for projects, experience, skills (empty/placeholder shapes)
- Placeholder section components in order: Hero, About, Experience, Projects, Skills, Contact
- Contact section with Formspree integration OR `mailto:` fallback
- Mobile-first responsive base + accessible defaults (focus rings, semantic landmarks)
- `.gitignore`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.ts`

### Out of Scope
- Real CV content (Pablo fills `src/data/*.ts` after scaffold lands)
- Blog/articles section and MDX pipeline
- Animations beyond minimum (no Framer Motion yet)
- CMS, analytics, i18n
- Automated tests (no runner installed yet; deferred)
- SEO beyond basic metadata

## Capabilities

### New Capabilities
- `site-shell`: root layout, theming, navigation, global styles, metadata
- `content-data-layer`: typed `src/data/*.ts` modules for projects/experience/skills consumed by sections
- `section-components`: placeholder Hero/About/Experience/Projects/Skills components driven by the data layer
- `contact-channel`: contact section wiring (Formspree form or mailto) with direct social links

### Modified Capabilities
- None (greenfield)

## Approach

Use `create-next-app` conventions manually (App Router, TS, Tailwind). One section = one component under `src/components/sections/`. Each section reads from `src/data/*.ts`. Theme toggle implemented with a small client component + `class` strategy on `<html>` (no extra library). Contact form decision (Formspree vs mailto) deferred to design phase.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `package.json`, configs | New | Next + TS + Tailwind setup |
| `src/app/` | New | Root layout, page composing sections, global CSS |
| `src/components/sections/` | New | Six placeholder section components |
| `src/components/ui/` | New | ThemeToggle, shared primitives |
| `src/data/` | New | Typed content modules (projects, experience, skills) |
| `src/lib/` | New | Theme helper, types |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Contact form choice (Formspree vs mailto) blocks scaffold | Low | Default to `mailto:` if Formspree key not provided; both paths supported in design |
| Theme toggle flash on load | Med | Inline script in `<head>` to set class before paint |
| Over-engineering data layer before real content exists | Med | Keep types minimal; only fields the placeholders need |

## Rollback Plan

Greenfield change — rollback = `git reset --hard` to the pre-scaffold commit. No data or external services to revert. Vercel project (if created) can be deleted from dashboard.

## Dependencies

- Node 20+ available locally
- Vercel account (deploy time, not scaffold time)
- Optional: Formspree account for contact form

## Success Criteria

- [ ] `pnpm dev` (or `npm run dev`) serves the site locally without errors
- [ ] All six sections render in order with placeholder copy
- [ ] Theme toggle switches light/dark and persists across reload with no flash
- [ ] Lighthouse mobile a11y score >= 95 on placeholder build
- [ ] Adding a new project to `src/data/projects.ts` renders without editing components
- [ ] Site builds successfully (`next build`) and is Vercel-deployable
