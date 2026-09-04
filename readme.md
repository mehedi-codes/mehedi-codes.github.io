# Project Plan: mehedi.engineer

**Type:** Personal website — portfolio, project showcase, blog
**Owner:** Mehedi
**Domain:** mehedi.engineer (owned, 1 year — renewal reminder required, see §12 M0)
**Status:** Planning (v2 — reviewed and finalized)

---

## 1. Purpose & Goals

A personal site that:
- Showcases who I am as a developer (portfolio)
- Displays my projects (project showcase)
- Hosts my writing (blog)
- Requires **near-zero maintenance** after launch — content updates only, no re-engineering
- Can be updated from **any device**, including mobile, without opening code

**Philosophy — "write once, improve if needed":** the low-maintenance goal is about *content operations*, not about never touching code again. A one-time build cost (e.g. learning multiple frameworks for isolated islands) is acceptable and doesn't conflict with the maintenance goal, since these components are built once and rarely revisited — the ongoing operational burden (publishing content) stays zero-code regardless.

**Explicit non-goals:**
- Not a multi-user platform (I'm the only content editor)
- Not a place I plan to redesign frequently
- Not dependent on paid infra long-term

**Note:** domain (mehedi.engineer) is currently owned for 1 year — set a renewal reminder before expiry to avoid losing it (see M0 in §12).

---

## 2. Success Criteria

- [ ] I can publish a new blog post from my phone in under 5 minutes
- [ ] Site loads fast, ranks decently in search (SEO matters — this is also a job-hunting asset). Concrete performance targets are set **post-deployment** (see §9a) rather than guessed in advance
- [ ] Zero recurring cost
- [ ] Zero servers/databases I personally operate
- [ ] Content is portable — not locked into any single CMS/vendor

---

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Static-first, fast, great SEO, content collections built in |
| Interactivity | **React, Vue, Svelte** (islands, per-component — see §7) | Two deliberate purposes: (1) a Wapplyzer-style "guess the stack" easter egg for visitors who inspect the site's tech, and (2) a personal one-time learning exercise — I've only ever used React professionally, so building the same feature (list filtering) in Vue and Svelte lets me learn their basics and figure out whether React stays my favorite or not. Astro stays static everywhere else (~80% of site, zero JS) |
| Content format | **MDX** via Astro content collections | Content = files in git, no database |
| CMS (editing UI) | **Pages CMS (hosted, pagescms.org)** | Free, zero setup, edits commit straight to GitHub, works on mobile. See §13 for fallback plan if this service becomes unavailable |
| Hosting/Deploy | **Cloudflare Workers** (static assets) | Cloudflare's current recommended path for new projects (2026) — free tier, static asset requests free, edge-served. Use the Astro Cloudflare adapter targeting Workers (not classic Pages, which is now in maintenance mode with new features going to Workers). Also use other Cloudflare free-tier services as needed post-launch (Web Analytics now; Cloudflare Images or Turnstile only if a concrete need arises later — no need to pre-adopt). **Stack alignment note:** Cloudflare acquired the Astro team (Jan 2026) and then VoidZero — the company behind Vite, Vitest, Rolldown, Oxc, and Vite+ (June 2026) — explicitly to deepen integration between Vite-based frameworks and the Workers platform. Since Astro itself runs on Vite, this stack (Astro + Workers) is well-aligned with Cloudflare's own stated roadmap, meaning smoother adapter support and fewer compatibility surprises going forward than a framework/host pairing without this overlap |
| Domain | mehedi.engineer | Already owned — renewal reminder set (§12 M0) |
| i18n | **Astro built-in i18n routing** — Bangla + English | **UI/nav labels only** are bilingual (translated once, low effort). Blog/project **content stays in whichever language it was written** — no per-post duplication requirement, keeps ongoing maintenance low. Language selection is via Accept-Language-based redirect (see §4a), not IP/location |
| RSS | **`@astrojs/rss`** | Auto-generates `feed.xml` from content collections — low effort, enables feed readers now and newsletter automation (RSS-to-email) later |
| OG images | **`astro-og-canvas`** | Auto-generates Open Graph images at build time from `title`/`description` frontmatter — no manual per-post image creation, zero runtime cost, no extra hosting dependency |
| Cover images | **`astro:assets` `<Image />`** | Automatic responsive sizing/format optimization for `coverImage` fields — avoids shipping unoptimized phone-upload JPEGs |
| Analytics | **Cloudflare Web Analytics** | Free, privacy-friendly (no cookies/tracking scripts), zero-config since already on Cloudflare — gives basic traffic/SEO visibility without adding a new vendor dependency |

**Deferred/rejected for this project:**
- Strapi / Appwrite — overkill; adds a backend dependency I don't need for solo content editing
- Self-hosted Pages CMS — adds Postgres + migrations + secret rotation; not worth it unless I specifically need `/admin` on my own domain later
- Keystatic — good alternative, **revisit later** if I want the CMS embedded at `mehedi.engineer/admin` instead of pagescms.org
- TinaCMS — visual editor doesn't suit mobile editing well
- **Newsletter (listmonk)** — **backlogged, not part of initial build.** Listmonk is free/self-hosted but requires running a Go app + its own Postgres database — same maintenance tradeoff as self-hosted Pages CMS. Revisit once RSS is live and the core site is stable; RSS feed built now will make listmonk integration easier later.
- **hreflang tags** — skipped for now. Since content isn't duplicated per language (a Bangla-mode visitor may see Bangla nav wrapped around an English-only post), adding hreflang could mislead search engines into treating pages as true translations when they aren't. Revisit only if full content translation is ever adopted.

---

## 4. Information Architecture (Pages/Sections)

**No separate About/Contact pages** — everything lives on the single landing page as sections, navigated via anchor links. Only Work and Writing have their own real routes (since they need individual detail pages).

### Landing page (`/`) — single page, sections via anchor:
- Hero / intro — includes a **"resume" button** linking to `/resume` (see below — resume lives here, not in the nav)
- `#about` — bio, background, skills
- `#work` — featured projects preview (with "see all" → `/work`)
- `#experience` — career timeline
- `#writing` — featured posts preview (with "see all" → `/writing`)
- `#contact` — email + social links only (GitHub, LinkedIn, and other dev-relevant platforms). **No contact form** — plain links are lower-friction for visitors and avoid needing a form-handling backend/service for a static site. Email link uses simple inline-script obfuscation (e.g. decode from base64 on render) instead of a raw `mailto:` in HTML, to reduce scraper harvesting

**Section order** (reordered for UX — leads with strongest proof-of-work before career narrative): about → work → experience → writing → contact

### i18n Routing Strategy

- **English** = default locale, **no URL prefix** (`/`, `/work`, `/writing/[slug]`, etc.) — this is final: English is the bare/default route, and only Bangla gets a prefix. No `/en` prefix exists
- **Bangla** = prefixed routes (`/bn`, `/bn/work`, `/bn/writing/[slug]`, etc.)
- Astro config: `defaultLocale: 'en'`, `locales: ['en', 'bn']`, `routing: { prefixDefaultLocale: false }`
- Since content (MDX body) is **not duplicated per language**, the same `work`/`writing` entry renders under both `/writing/[slug]` and `/bn/writing/[slug]` — **only the surrounding UI chrome swaps** (nav labels, section headers, buttons, "see all" text) via Astro's i18n dictionary/translation strings. The post body itself does not change language.
- **Known tradeoff**: a Bangla-mode visitor reading an English-only post sees Bangla nav wrapped around English content. This is accepted as intentional — worth a small in-page note (e.g. a language badge on each entry) if this ever feels confusing in practice.

### §4a — Automatic language redirect

On first visit, the site auto-redirects a visitor to `/en` or `/bn` based on **browser language preference (Accept-Language header)** — not IP/location. Location is a poor proxy for language preference (e.g. a Bangla-speaking diaspora visitor abroad, or a non-Bangla-speaking visitor physically in Bangladesh); Accept-Language is the conventional, more accurate signal for this purpose.

**Logic:**
1. On first visit to `/`, check the Accept-Language header for `bn` (or `bn-BD`, `bn-IN`, etc.)
   - If present → redirect to `/bn`
   - Else → stay on `/` (English default, no prefix) — Accept-Language is sent by virtually every browser, so there's effectively no true "undetectable" case to design around
2. Store the visitor's language choice in a cookie after first visit or manual toggle
3. On subsequent visits, the cookie always takes precedence over Accept-Language — a visitor who manually switches language isn't reset by their browser's default setting next time

**Implementation notes:**
- Redirect logic runs at the **Cloudflare Worker/edge level** (middleware), not client-side JS — avoids a flash-of-wrong-language render and keeps it fast
- Applies **only to the root `/` request on first visit** — deep links (e.g. shared `/writing/some-slug` URLs) resolve normally without redirect interference
- **Bots/crawlers bypass this redirect entirely** — search engines should be able to index both `/en` and `/bn` trees independently, so redirect logic should not apply to recognized crawler user-agents

### Nav bar
- **Left:** domain name as text logo → links to `/` (home)
- **Right:** about · work · experience · writing · contact · light/dark toggle
- All labels lowercase, singular, and match their href exactly (e.g. label "work" → `#work` / `/work`)
- **Resume is NOT in the nav** — it's a button in the hero section instead, for higher visibility on first landing rather than competing for space in the nav bar
- Nav labels use **JetBrains Mono**, lowercase (see Typography section)

Nav behavior: on the homepage, links smooth-scroll to the section (`#work`). On any other page (e.g. `/work/some-slug`), the same links point to `/#work` etc., navigating back to home then to that section.

### Standalone routes (real pages, not anchors)
- `/work` — work index (full list/grid)
- `/work/[slug]` — individual work detail page
- `/writing` — writing index (full list/grid)
- `/writing/[slug]` — individual post
- `/resume` — resume page
- `/404` — not-found page (static, on-brand, links back to `/`)

*(Labels, section anchors, and routes are all the same word now — `work` and `writing` — no mismatch between nav text and URL.)*

### Resume — `/resume` page
- **Accessed via a button in the hero section** (not the nav bar) — linking to the `/resume` route
- Real route rendering a **live embed of a Google Doc** (the "web" version of the resume — no personal phone number, email + LinkedIn only)
- **Doc must be set to public/anyone-with-link** sharing — Mehedi updates it anytime directly in Google Docs; no redeploy needed
- **Embed**: `iframe` pointing to `.../preview?rm=minimal` (minimal Google Docs viewer chrome), with `sandbox="allow-scripts allow-same-origin"` — resolves a Google-side viewer crash encountered during testing
- **Fallback**: if the iframe fails to load (network issue, Google-side error, or a browser blocking the sandbox combination — Safari is stricter here than Chrome), show a plain "Open/Download Resume (PDF)" link in place of the embed. Detect via the iframe's `onerror` event or a short load-timeout check; don't leave a blank/broken embed with no way to still get the resume.
- **Download button**: links to `.../export?format=pdf` — triggers a direct PDF download
- **Print button**: opens `.../preview?rm=minimal` (not the main `/resume` page, not `/export?format=pdf`) in a new window, then calls `.print()` on that new window once loaded — this ensures the print dialog shows *only* the clean Google Docs viewer content, with none of the site's own nav/buttons/page chrome included. Calling `window.print()` directly on the `/resume` page itself would incorrectly print the whole page (nav, buttons, header) along with the resume. **Note:** `window.open()` must fire synchronously inside the click handler (no `await`/async work beforehand), or popup blockers in Safari/Chrome may swallow it.
- Doc title in Google Docs should be a clean name (e.g. `Mehedi_Resume`), since that's what becomes the downloaded filename

### Theme toggle
- Light/dark only (no "system" option as a separate UI state)
- On first visit, auto-detects OS/browser preference (`prefers-color-scheme`) and sets initial theme accordingly
- After that, manual toggle overrides and persists (e.g. via a cookie or localStorage-equivalent) for return visits

---

## 5. Content Model (Collections)

### Tag taxonomy (applies to both `work.techStack` and `writing.tags`)

To avoid filter bugs from inconsistent casing/naming (e.g. "React" vs "react" vs "ReactJS" all meaning the same thing but not matching each other in the filter), maintain a **single shared, lowercase, controlled tag list** in `src/data/tags.json`. This is the **single source of truth**, consumed two ways:
1. **Pages CMS**: the `select`/multi-select field type in `.pages.yml` sources its options from this list, enforcing it at the editing UI level
2. **Astro content schema**: the Zod schema in `config.ts` imports `tags.json` directly and builds its enum from it (e.g. `z.enum(tagsFromJson)`), so a manually-edited `.mdx` frontmatter can't introduce an off-list tag either

### `writing` collection
| Field | Type | Notes |
|---|---|---|
| title | string | required |
| description | string | for SEO/meta + card preview |
| pubDate | date | required |
| updatedDate | date | optional |
| tags | list of strings | optional, sourced from `tags.json` |
| coverImage | image | optional, rendered via `astro:assets` `<Image />` |
| draft | boolean | default false — see §11 for draft/deploy semantics |
| body | MDX | main content |

### `work` collection
| Field | Type | Notes |
|---|---|---|
| title | string | required |
| description | string | short summary for card |
| techStack | list of strings | e.g. Astro, Go, Drizzle — sourced from `tags.json` |
| liveUrl | string | optional |
| repoUrl | string | optional |
| coverImage | image | optional, rendered via `astro:assets` `<Image />` |
| featured | boolean | to pin top items on homepage `#work` section |
| date | date | when built/last updated |
| body | MDX | detailed write-up |

### `experience` — single data file (not a collection)

Unlike `work`/`writing`, experience entries are a short, rarely-changing list — not standalone content pieces. Modeled as a **single `type: file`** in Pages CMS (e.g. `src/data/experience.json`), containing one list field of objects. Still fully CMS-editable (add/edit/reorder from any device), just structured as one file rather than a folder of many.

| Field (per list item) | Type | Notes |
|---|---|---|
| company | string | required |
| role | string | required |
| startDate | date | required |
| endDate | date | optional — blank means "current" |
| description | string | short summary of the role |
| companyUrl | string | optional |

No Astro content-collection schema needed for this one — it's plain JSON/data, imported directly into the `#experience` component rather than rendered via `getCollection()`.

---

## 6. Folder Structure (planned)

```
mehedi-engineer/
├── src/
│   ├── content/
│   │   ├── writing/
│   │   │   └── *.mdx
│   │   ├── work/
│   │   │   └── *.mdx
│   │   └── config.ts        # content collection schemas (zod, tag enum sourced from tags.json)
│   ├── data/
│   │   ├── experience.json  # single file, list of experience entries — Pages CMS "file" type
│   │   └── tags.json        # single source of truth for tag taxonomy
│   ├── components/
│   │   ├── astro/           # static components
│   │   ├── react/            # /work filter island
│   │   ├── vue/               # /writing filter island
│   │   └── svelte/           # nav bar + mobile menu island
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── resume.astro
│   │   ├── 404.astro
│   │   ├── writing/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── work/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
├── public/
├── .pages.yml                # Pages CMS config
├── astro.config.mjs
└── package.json
```

---

## 7. Framework Assignment (Astro + React + Vue + Svelte)

**Principles:**
1. Astro is the default. Only add a framework when there's real client-side interactivity (state, click handlers that update the DOM, filtering/search). Static content stays plain `.astro` — ships zero JS.
2. Global/shared components (appear on every page) use the lightest-footprint framework, since their JS loads site-wide.
3. One framework per isolated island — no mixing frameworks within the same component tree.
4. Assign frameworks to maximize comparison value — same feature (e.g. list filtering) built in different frameworks, so differences in reactivity/DX are directly comparable.
5. Tailwind utility classes work identically across `.astro`/`.jsx`/`.vue`/`.svelte` — styling is framework-agnostic, no consistency risk.
6. Every framework choice must have a stated reason — no "just because."
7. **Versions are pinned, not auto-upgraded.** Since these islands are "write once" by design, exclude React/Vue/Svelte from Dependabot/Renovate auto-bump rules. Only update manually in response to an actual security advisory — this keeps the one-time-build philosophy honest and avoids incidental multi-framework maintenance churn.

**Assignment table:**

| Component/Page | Framework | Why |
|---|---|---|
| Landing page (hero, about, experience, work preview, writing preview, contact) | Astro (static) | Pure content, no client state |
| Theme toggle | Astro + vanilla JS (no framework) | Checks `prefers-color-scheme` on load, applies `dark`/`light` class to `<html>`; manual toggle flips the class for that view only — **no persistence**, full reload always re-checks system preference from scratch |
| Nav bar structure + mobile menu | **Svelte** | Global — loads on every page. Mobile open/close is real state; Svelte compiles to the smallest runtime, best fit for something site-wide |
| Footer | Astro (static) | No interactivity — just links/text |
| `/work` index — filter/search | **React** | Known framework — reliability baseline |
| `/work/[slug]` detail | Astro (static) | MDX rendering + links only |
| `/writing` index — filter/search | **Vue** | Same feature as Work's filter, different framework — direct comparison vs React |
| `/writing/[slug]` detail | Astro (static) | MDX rendering + links only |
| `/resume` page (embed + download/print) | Astro + plain `<a>`/`onclick` | Just links/`window.open`, no state |

**Result:** ~80% of the site is static Astro (zero JS). Svelte powers one always-loaded global island (nav). React and Vue each power one page-specific island (work filter, writing filter respectively) — loaded only on their own page.

---

## 8. Component Inventory (per page)

- **Shared:** nav bar (Svelte), footer (Astro)
- **Landing (`/`):** hero (incl. resume button), about block, work-preview block, experience block, writing-preview block, contact block — all Astro
- **`/work`:** page header, filter bar (React), work card grid
- **`/work/[slug]`:** project header, MDX body, prev/next nav
- **`/writing`:** page header, filter bar (Vue), post list
- **`/writing/[slug]`:** post header, MDX body, prev/next nav
- **`/resume`:** page header, embedded doc viewer (iframe), action bar (download/print buttons)
- **`/404`:** simple not-found message, link back to `/`

Reusable pieces worth building once and sharing: **card component** (work + writing preview), **tag/pill component** (tech tags, blog tags), **section header** (title + description, repeats on every index page).

---

## 8a. Mock Design Phase

Visual direction (§14) is still an open question — this section defines **how** it gets closed, as a discrete step between finishing this design document and starting Phase 1 (scaffold) of the build plan.

**Why this step exists:** everything decided so far (§4–§8) describes *structure* — routes, sections, component boundaries — not *appearance*. Deciding color palette, spacing, and visual hierarchy live in code (mid-scaffold) is slower to iterate on than deciding it in a disposable mockup first. This step exists specifically to avoid that rework cost.

**Placement in the model:**
```
Requirements → Design/Architecture (this document, §1–§13)
        ↓
Mock Design (this section)  ← closes §14, unblocks Phase 1
        ↓
Increment 1: MVP Live → Increment 2 → Increment 3 → Increment 4 → Increment 5
```

**Process — two steps, not one:**

1. **Excalidraw wireframe (structural pass)** — fast, disposable sketches of the landing page (desktop + mobile) and the shared card layout. Purpose is purely arrangement/spacing rhythm — where sections sit, how cards line up — with zero code commitment. Not meant to validate color, real typography, or contrast; Excalidraw's palette/fonts are illustrative only and won't match what ships.
2. **HTML/Tailwind mockup (validation pass)** — once the wireframe's structure feels right, rebuild it using real Tailwind classes, real fonts (§9), and real color values. This is the step that actually closes the exit criteria below, since it's the only one that can honestly validate contrast ratios, font rendering, and card look — and because it's real Tailwind, a validated mockup translates directly into scaffolded markup rather than needing a second "translate the design into code" step.

Skipping straight from Excalidraw to scaffolding would mean deciding palette/typography/contrast live in the real codebase instead — slower to iterate and against the reason this step exists in the first place.

**Scope — kept deliberately minimal, not a full design-every-screen pass:**
1. Landing page — desktop and mobile — since it's the one page every visitor sees, and has the most sections stacked together (hero → about → work-preview → experience → writing-preview → contact), making it the place where spacing/rhythm decisions matter most
2. One index page (`/work` or `/writing`) — to settle the shared **card component** look once, since §8 already flags it as reused across both index pages
3. Dark mode variant of the landing page — light/dark is a hard requirement (§4 theme toggle), so both palettes should be confirmed before either gets written into real CSS variables

**Exit criteria — this step is done when:**
- [ ] Color palette (light + dark) is locked — validated in the Tailwind pass, not the Excalidraw pass
- [ ] Landing page layout/spacing direction is approved (desktop + mobile)
- [ ] Card component look is approved (used across `/work` and `/writing` indexes)
- [ ] Typography sizing/scale is sanity-checked against the font choices already locked in §9 — validated in the Tailwind pass, since Excalidraw can't render the real fonts

Once these four are checked off, §14's open question is closed and Phase 1 (scaffold) can start with a real visual reference instead of building blind.

---

## 9. Typography

```css
/* English Typography */
--font-en-heading: "JetBrains Mono", "Fira Code", "Courier New", Courier, monospace;
--font-en-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

/* Bangla Typography */
--font-bn-heading: "Anek Bangla", "Noto Serif Bengali", "Kalpurush", "SolaimanLipi", serif;
--font-bn-body: "Hind Siliguri", "Noto Sans Bengali", "SolaimanLipi", "Vrinda", sans-serif;
```

| Use | English | Bangla |
|---|---|---|
| Headings / titles | `--font-en-heading` (JetBrains Mono) | `--font-bn-heading` (Anek Bangla) |
| Body text (paragraphs, descriptions, content) | `--font-en-body` (Inter) | `--font-bn-body` (Hind Siliguri) |
| Nav bar link labels | `--font-en-heading`, lowercase | `--font-bn-heading` (or test `--font-bn-body` at nav size — worth comparing) |

Applied conditionally based on active language (`lang="bn"` vs `lang="en"`), so switching languages swaps the full heading/body font pairing, not just content.

---

## 9a. Performance Strategy

No fixed performance numbers are set pre-launch, since a real baseline doesn't exist yet. Instead:
1. Deploy the site (M6)
2. Run Lighthouse/PageSpeed Insights against the live site to establish a **baseline** score
3. Set concrete improvement targets from that baseline (folded into M8 — SEO pass — rather than guessed upfront)

This keeps the performance goal honest and measurable without inventing arbitrary numbers before there's anything to measure.

---

## 10. Accessibility (a11y)

Baseline checklist — not a full audit, but must be addressed before considering the build "done":

- **Color contrast**: verify both light and dark theme palettes meet WCAG AA contrast ratios (text vs background), for both English and Bangla font pairings
- **Keyboard navigation**: mobile hamburger menu (Svelte) must be operable via keyboard (Tab/Enter/Escape), not just touch/click
- **Theme toggle**: needs an accessible label (`aria-label="Toggle dark mode"` or similar) since it's icon/text-only, not descriptive on its own to screen readers
- **Resume iframe**: add a descriptive `title` attribute to the embed (e.g. `title="Resume preview"`) so screen readers announce what the embedded frame contains
- **Filter bars** (React/Vue): ensure filter chip buttons are keyboard-operable and announce selected/unselected state (`aria-pressed`)

---

## 11. Content Editing Workflow

1. Log into pagescms.org (GitHub auth) — any device
2. Select collection (Writing / Work) → New/Edit entry
3. Fill form fields, write body in markdown editor, upload images
4. Save → Pages CMS commits `.mdx` file to GitHub repo directly to `main` (no PR/review step, given solo editing)
5. Cloudflare Workers detects push (via Git integration) → auto builds → auto deploys
6. Live in ~1-2 minutes

**Draft semantics:** setting `draft: true` on an entry does **not** stop it from being committed or deployed — the file still exists in the build output. Instead, the `writing`/`work` index pages filter drafts out of their `getCollection()` queries, so a draft entry is deployed but unlisted/unlinked anywhere on the site (accessible only if someone has the direct URL). This avoids needing a separate review/staging workflow for a solo editor.

No local dev environment needed for routine content updates.

---

## 12. Build Milestones

- [ ] **M0 — Housekeeping**: Set a domain renewal reminder for mehedi.engineer (calendar alert + enable auto-renew at registrar if available)
- [ ] **M0.5 — Mock Design**: Build disposable Excalidraw wireframes, then real HTML/Tailwind mockups, per §8a (landing page desktop+mobile, one index card grid, dark mode variant). Lock color palette, layout/spacing direction, card component look, and typography scale before scaffolding begins
- [ ] **M1 — Scaffold**: Astro project init, base layout, styling direction (typography: JetBrains Mono/Inter for English, Anek Bangla/Hind Siliguri for Bangla — see §9), using the approved mockup from M0.5 as the visual reference
- [ ] **M2 — Content collections**: Define `work` and `writing` schemas in `config.ts`, with tag enums sourced from `src/data/tags.json`
- [ ] **M3 — Pages**: Build landing page (about/work/experience/writing/contact sections), `/work` index/detail, `/writing` index/detail, `/resume`, `/404`. Test `/resume` specifically in Safari and Firefox, not just Chrome — the iframe sandbox/print behavior is known to vary across browsers
- [ ] **M4 — Svelte islands**: Add any interactive bits (work filter, search, theme toggle logic)
- [ ] **M5 — CMS wiring**: Write `.pages.yml`, connect repo to pagescms.org, test edit from phone, confirm draft filtering behaves as intended (§11)
- [ ] **M6 — Deploy**: Connect repo to Cloudflare Workers (static assets), configure Astro's Cloudflare adapter, point mehedi.engineer domain, verify auto-deploy, confirm rollback via Workers deployment history dashboard works
- [ ] **M7 — Seed content**: Write 2-3 real blog posts + 3-5 real project entries
- [ ] **M8 — SEO & performance pass**: meta tags, sitemap, robots.txt, `astro-og-canvas` wired to `writing`/`work` frontmatter, establish Lighthouse/PageSpeed baseline and set improvement targets from it (§9a)
- [ ] **M9 — i18n**: Set up Astro i18n routing for Bangla/English (prefixDefaultLocale: false), translate UI/nav labels only, implement Accept-Language-based redirect at the Cloudflare Worker/edge level with cookie override (§4a)
- [ ] **M10 — RSS**: Add `@astrojs/rss`, generate `feed.xml` from `writing` collection

---

## 13. Future / Migration Notes

- If Pages CMS ever becomes unavailable or unsuitable long-term → two paths: (1) migrate to **Keystatic**, embedding the CMS at `mehedi.engineer/admin` — content stays as-is since it's still just MDX files, no data migration needed, only swap the editing tool; or (2) self-host an equivalent, potentially building a custom **React Native mobile app** for editing directly, as a longer-term personal project
- If I ever want multi-user content management → reconsider Strapi/headless CMS at that point, not before
- Revisit hosting cost only if traffic/storage exceeds free tier limits (unlikely for a personal site)
- **Newsletter (backlogged)**: add **listmonk** once the core site is stable — self-hosted, free, but requires running a Go app + Postgres, so treat it as its own small infra project, not a quick add-on. RSS feed (M10) should make wiring this up smoother when the time comes.
- **hreflang**: revisit only if full content translation (not just UI chrome) is ever adopted for `writing`/`work` entries
- **Cookie consent / privacy notice**: not needed at current scope (theme + language preference cookies, Cloudflare Web Analytics' privacy-friendly default require no consent banner). Revisit only if analytics is ever expanded beyond Cloudflare's default (e.g. adding a tracking-cookie-based tool) — at that point, add a consent mechanism before switching

---

## 14. Open Questions

- [ ] Final visual/design direction (color palette, layout style) — see §8a (Mock Design Phase) for how this gets resolved before Phase 1 of the build plan