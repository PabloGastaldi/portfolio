# Spec: Initial Portfolio Scaffold

**Change**: `initial-scaffold`
**Status**: draft
**Created**: 2026-05-28
**Source**: proposal.md

---

## Purpose of This Spec

Describes WHAT must be true after the scaffold is applied. It does not prescribe HOW to implement it. Every requirement here is testable by observation or by code inspection. Implementation decisions (exact libraries, file internals) belong to the design phase.

---

## Out of Scope (inherited from proposal)

The following are explicitly excluded and must NOT appear as acceptance criteria:

- Real CV content (experience entries, skill lists, project details)
- Blog / articles section or MDX pipeline
- Animations (Framer Motion or equivalent)
- CMS, analytics, i18n
- Automated test runner configuration
- SEO beyond basic `<head>` metadata and OG tags

---

## Requirements and Acceptance Scenarios

---

### REQ-01 — Page Structure and Section Ordering

The rendered page MUST contain exactly six landmark sections in this order, each uniquely identifiable:

1. Hero
2. About (Sobre mí)
3. Experience (Experiencia)
4. Projects (Proyectos)
5. Skills
6. Contact (Contacto)

No section may be missing. No additional top-level sections may appear between them.

**Scenario 01-A — Sections present and ordered**

```
Given the site is running locally (`pnpm dev` or `npm run dev`)
When a user loads the root URL ("/")
Then the document contains six `<section>` (or equivalent landmark) elements
 And they appear in DOM order: Hero, About, Experience, Projects, Skills, Contact
 And each section has a unique `id` attribute matching its name (e.g. id="hero", id="about", etc.)
```

**Scenario 01-B — Navigation anchors reach each section**

```
Given the site is loaded
When the top navigation renders
Then it contains anchor links pointing to each section's id
 And clicking any anchor link scrolls the page to that section
```

**Scenario 01-C — Section isolation**

```
Given any single section component is rendered in isolation (e.g. in Storybook or a test harness)
When it renders
Then it does not depend on sibling sections being present
 And it renders without runtime errors
```

---

### REQ-02 — Data-Driven Content Layer

All content for projects, experience, and skills MUST be sourced from typed TypeScript files under `src/data/`. Section components MUST NOT contain hardcoded content strings for these domains. Adding or removing an entry in a data file MUST be sufficient to change what appears on the page — no component edits required.

**Scenario 02-A — Adding a project requires no component change**

```
Given the scaffold is deployed locally
 And `src/data/projects.ts` contains N project entries
When a developer adds a new valid project object to `src/data/projects.ts`
 And the dev server refreshes (hot reload or manual)
Then the Projects section displays N+1 project cards
 And the developer did not modify any file under `src/components/`
```

**Scenario 02-B — TypeScript types enforce data shape**

```
Given `src/data/projects.ts` exports an array typed as `Project[]`
When a developer adds an object missing a required field (e.g. `title`)
Then the TypeScript compiler reports a type error
 And the build (`next build`) fails with a descriptive error
```

**Scenario 02-C — Skills grouped by pillar**

```
Given `src/data/skills.ts` defines skills with a `pillar` field
When the Skills section renders
Then skills appear grouped under their pillar label
 And the four pillar groups (Data, AI & Automation, Comex, Languages) are all present
 And each group only contains skills whose `pillar` value matches the group
```

**Scenario 02-D — Experience entries ordered correctly**

```
Given `src/data/experience.ts` defines entries with an ordering mechanism (e.g. `order` field or array position)
When the Experience section renders
Then entries appear in the specified order
 And trade.ai is the first entry
```

---

### REQ-03 — Light / Dark Theme Toggle

The site MUST support a light and dark visual theme. The user's theme preference MUST persist across page reloads. There MUST be no visible flash of the wrong theme on initial load (no FOUC).

**Scenario 03-A — Toggle switches theme**

```
Given the site is loaded in light mode
When the user activates the theme toggle control
Then the page switches to dark mode
 And the toggle switches back to light mode when activated again
```

**Scenario 03-B — Theme persists across reload**

```
Given the user has switched to dark mode
When the user reloads the page
Then the page renders in dark mode without a visible light-mode flash
```

**Scenario 03-C — System preference honoured on first visit**

```
Given a user visits the site for the first time (no stored preference)
 And their OS is set to dark mode
When the page loads
Then the site renders in dark mode by default
```

**Scenario 03-D — No flash of wrong theme**

```
Given any theme preference stored (light or dark)
When the page is loaded (cold load, no cache)
Then the theme class is applied to <html> before any visible paint
 And no light-mode content is briefly visible when dark mode is the stored preference
```

---

### REQ-04 — Mobile-First Responsive Behavior

All six sections MUST be fully usable on a 375 px wide viewport. Content must not overflow horizontally. Interactive elements (navigation links, theme toggle, contact CTA) must be reachable and tappable at mobile sizes. Layout refinements for wider viewports are additive.

**Scenario 04-A — No horizontal overflow on mobile**

```
Given the viewport is set to 375 px wide
When the page is fully loaded
Then `document.documentElement.scrollWidth` equals `document.documentElement.clientWidth`
 And no content is clipped or hidden behind a horizontal scrollbar
```

**Scenario 04-B — Touch targets meet minimum size**

```
Given the viewport is 375 px wide
When the navigation, theme toggle, and contact CTA are rendered
Then each interactive element has a minimum tap target of 44 × 44 px
```

**Scenario 04-C — Desktop layout is additive**

```
Given the viewport is widened to 1280 px
When the page renders
Then all sections adapt to the wider layout without breaking
 And no content disappears or overlaps that was visible at mobile size
```

---

### REQ-05 — Accessibility Baseline

The site MUST use semantic HTML landmarks. All interactive elements MUST be keyboard-accessible. Color contrast MUST meet WCAG AA for both light and dark themes. Images (if any) MUST have meaningful alt text. The Lighthouse mobile accessibility score on the scaffold build MUST be >= 95.

**Scenario 05-A — Landmark structure present**

```
Given the page is loaded
When a screen reader or accessibility tree is inspected
Then the document contains: one <header>, one <main>, one <footer>
 And each section is wrapped in a <section> element with an accessible name (aria-label or <h2>)
```

**Scenario 05-B — Keyboard navigation reaches all interactive elements**

```
Given the page is loaded
When the user presses Tab repeatedly from the start of the page
Then focus moves to every interactive element in document order
 And focus indicators are visually visible on every focused element
 And no interactive element is unreachable by keyboard
```

**Scenario 05-C — Theme toggle is accessible**

```
Given the theme toggle is rendered
When a screen reader inspects it
Then it has an accessible label describing its current state and action
 And pressing Enter or Space while it is focused activates the toggle
```

**Scenario 05-D — Lighthouse mobile a11y >= 95**

```
Given the scaffold build is served (placeholder content, no real images)
When Lighthouse is run in mobile mode on the root URL
Then the Accessibility score is >= 95
```

---

### REQ-06 — Contact Channel

The Contact section MUST provide at least one functional way for a recruiter to reach Pablo: a contact form OR a `mailto:` link. It MUST also show a direct email address (gastaldipablo1@gmail.com) and a LinkedIn link (https://www.linkedin.com/in/pablogastaldigut/). The exact form provider is deferred to design; the behavior contract is specified here.

**Scenario 06-A — Direct contact links always visible**

```
Given the Contact section is rendered
When a user views it
Then a clickable email address (gastaldipablo1@gmail.com) is present
 And a clickable LinkedIn link pointing to the correct URL is present
 And both links open in a new tab with rel="noopener noreferrer"
```

**Scenario 06-B — Contact form OR mailto: functional**

```
Given the Contact section is rendered
When a user fills in their name, email, and message (if a form is present)
 OR when a user clicks the email/mailto link
Then the action reaches Pablo without requiring him to operate any custom backend
```

**Scenario 06-C — Form fields are keyboard accessible**

```
Given a contact form is rendered (if chosen over mailto)
When the user tabs through the form
Then each field receives focus in logical order
 And each field has an associated visible label or accessible aria-label
 And the submit button is reachable and activatable by keyboard
```

---

### REQ-07 — SEO Basics

The page MUST include a `<title>`, `meta description`, and Open Graph tags (`og:title`, `og:description`, `og:type`). These MUST be set at the root layout level so they apply to all pages without repetition.

**Scenario 07-A — Required meta tags present**

```
Given the page is loaded
When the document <head> is inspected
Then <title> contains Pablo Gastaldi's name and a short positioning phrase
 And <meta name="description"> is present and non-empty
 And <meta property="og:title"> is present and non-empty
 And <meta property="og:description"> is present and non-empty
 And <meta property="og:type"> equals "website"
```

**Scenario 07-B — Meta tags are set at layout level**

```
Given the root layout (`src/app/layout.tsx`) is inspected
When the exported metadata object (or generateMetadata function) is read
Then all required meta fields are defined there
 And no section component overrides or duplicates them
```

---

### REQ-08 — Performance Budget

The scaffold (placeholder content, no real images) MUST pass a `next build` without errors. The JavaScript bundle shipped to the browser MUST not include any dependency that exists solely for decoration and that could trivially be replaced with CSS or a lighter alternative. No dependency with a minified size > 100 kB may be added during the scaffold phase unless it is a core framework dependency (Next.js, React, Tailwind).

**Scenario 08-A — Build succeeds without errors**

```
Given the scaffold code is complete
When `next build` is executed
Then the build exits with code 0
 And no TypeScript errors are emitted
 And no ESLint errors block the build
```

**Scenario 08-B — No heavyweight non-core dependencies**

```
Given `package.json` is inspected after scaffold
When each non-core dependency (anything that is not next, react, react-dom, typescript, tailwindcss, @types/*) is evaluated
Then no single dependency adds > 100 kB to the client bundle (gzipped)
 And no animation library (e.g. framer-motion) is present
```

**Scenario 08-C — Vercel-deployable**

```
Given the scaffold is pushed to a connected Vercel project
When Vercel builds and deploys it
Then the deployment succeeds
 And the root URL is publicly accessible and renders the six sections
```

---

## Invariants (must remain true at all times)

- The data layer (`src/data/*.ts`) is the single source of truth for projects, experience, and skills. No copy of this content exists inside component files.
- Theme preference is never stored server-side. Storage is client-side only (localStorage or equivalent).
- The scaffold contains no real personal data beyond what is listed in the proposal scope (name, email, LinkedIn URL are allowed; no fabricated experience or projects).
- Every interactive element is reachable without a mouse.

---

## Assumptions Made (spec-level)

| # | Assumption | Risk if wrong |
|---|-----------|---------------|
| A1 | "No flash of wrong theme" means class is applied via inline script in `<head>` before React hydration | If implemented differently (e.g. CSS custom properties only), Scenario 03-D still applies but implementation must still achieve zero visible flash |
| A2 | Lighthouse >= 95 is measurable on placeholder content (no real images or long text blocks) | Placeholder copy must still carry aria attributes; score may require placeholder `alt=""` on decorative elements |
| A3 | `next build` is the canonical build command; `pnpm build` is an alias to it | If the project uses a non-standard build script, the acceptance command must be updated in design/tasks |
| A4 | "No component edits" in REQ-02 means files under `src/components/` are untouched; editing `src/data/*.ts` is allowed and expected | If data wiring uses a CMS query instead of a direct import, the invariant still holds: component reads from an abstracted source, not from hardcoded strings |
