# Project Context — Portfolio

**Initialized**: 2026-05-28
**Artifact store**: openspec

## Identity

- **Name**: Pablo Gastaldi
- **Degree**: Licenciado en Relaciones Internacionales (Universidad Católica de Santa Fe)
- **Location**: Santa Fe, Argentina
- **Email**: gastaldipablo1@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/pablogastaldigut/
- **Featured project**: trade.ai — https://tradeai.ar
- **Languages**: Spanish (native), English B2, Italian B1

## Site Purpose

Personal portfolio. Single goal: get contacted by companies and recruiters.
Not a product or service site. A professional presentation.

Central message: someone who understands the geopolitical/commercial context
AND builds real solutions with AI and data. That uncommon intersection is the value.
Show with projects and results — never assert with adjectives.

## Four Pillars

1. **RRII / Tech geopolitics** — base formation; lens for context (tech competition
   between powers, critical minerals, semiconductors, quantum computing).
2. **Comex** — concrete business domain: NCM codes, tariffs, export data, regulation.
3. **Data analysis** — SQL, Python (pandas), Tableau, Power BI.
4. **AI development** — the strongest differentiator. Real software: RAG, embeddings,
   model APIs, agents (Claude Code). trade.ai is proof — functional platform, not a demo.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styles | Tailwind CSS |
| Deploy | Vercel |
| Database | None (SSG/static) |
| Content | src/data/*.ts files |
| Contact form | Formspree or mailto |

**State**: Greenfield — package.json does not exist yet. Pre-scaffold as of init.

## Section Order

1. Hero — name, positioning tagline (geopolitics + comex + data + AI), CTA to contact
2. About — four pillars in first person, brief
3. Experience — timeline: trade.ai, ACICE (comex internship), Banco de Santa Fe
4. Projects — cards: trade.ai first and featured (show HOW it's built: RAG, embeddings, model APIs)
5. Skills — grouped by pillar: Data / AI & Automation / Comex domain / Languages
6. Contact — form + direct links (email, LinkedIn)

## Code Conventions

- Functional React components + TypeScript. One component per section.
- Mobile-first. Responsive breakpoints after base mobile styles.
- Accessible: semantic HTML, correct contrast, keyboard navigation.
- Light/dark theme toggle.
- No heavy dependencies. Fast and lightweight.
- Site copy: Rioplatense Spanish, professional but human, not AI-sounding.
- Code, identifiers, comments: English.
- Content lives in `src/data/*.ts` — adding a project or article must not require touching components.

## Testing Status

Not yet configured. No package.json exists. Testing capabilities will be resolved
during the scaffold apply phase. `strict_tdd` remains `false` until a test runner
is installed and confirmed.

## Skill Registry

Path: `/Users/pablogastaldi/Desktop/Portfolio/.atl/skill-registry.md`
10 user-level skills indexed. No project-level skills found yet.
