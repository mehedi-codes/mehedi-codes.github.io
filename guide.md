# mehedi.engineer — Progress Checklist

> Tracking the build of the personal site. Locked decisions: client-side language toggle (no `/bn` routes), GitHub Pages hosting, Pages CMS + MDX + React/Svelte islands planned for later.

## ✅ Done

- [x] Astro site scaffolded (landing page: hero, experience, work, writing, contact)
- [x] Nav bar + floating mobile bar + scroll-spy active states
- [x] Theme toggle (light/dark, persists)
- [x] Language toggle (client-side, en/bn — **kept as-is, no `/bn` routing**)
- [x] `/work` + `/writing` index pages (rendered from static TS data)
- [x] `/resume` — live Google Doc embed + PDF download
- [x] `/404` page
- [x] GitHub Pages deploy via Actions (typecheck + lint + fmt gates)

## 🔜 Phase 1 — Close current-site gaps

- [ ] **Detail pages:** `/work/[slug]` and `/writing/[slug]` (cards currently link to routes that 404)
- [ ] Prev/next navigation on detail pages
- [ ] Replace placeholder content (example.com links, "coming soon" text, placeholder images) with real posts/projects
- [ ] SEO: per-page meta, `sitemap.xml`, `robots.txt`
- [ ] OG images (`astro-og-canvas` from frontmatter)
- [ ] RSS feed (`@astrojs/rss` → `feed.xml`)
- [x] Custom domain: `mehedi.engineer` → `mehedi-codes.github.io` (DNS configured)
- [ ] `/resume` fallback link if the Google Doc iframe fails + print button
- [x] Performance baseline: Lighthouse on live site → **98/100, LCP 1.8s, FCP 1.6s, CLS 0, TBT 0**
- [x] Perf cleanup: inline stylesheets + preload latin fonts + drop unused Anek Bangla import — **live-verified: render-blocking audit gone, FCP 1.6s → 1.4s, LCP 1.8s, 97–99/100**

## 📝 Phase 2 — Content system (MDX + Pages CMS)

- [ ] Create `src/content/work/` and `src/content/writing/` collections
- [ ] Content schema in `config.ts` (Zod), tags sourced from `tags.json`
- [ ] Create `src/data/tags.json` (single source of truth for tags)
- [ ] Migrate content from `src/utils/content.ts` → MDX files
      (frontmatter `{en, bn}` for title/description/tags, **single-language body**)
- [ ] Update pages to render via `getCollection()` instead of TS arrays
- [ ] Write `.pages.yml` (Pages CMS config, tag options from `tags.json`)
- [ ] Connect repo to pagescms.org + test an edit from phone
- [ ] Verify draft semantics (drafts deployed but unlisted on index pages)

## 🧩 Phase 3 — Framework islands (React + Svelte)

- [ ] Pin island roles (React `/work` filter confirmed; `/writing` filter owner open — Svelte/Vue/none)
- [ ] React `/work` filter island
- [ ] Svelte island (nav replacement or `/writing` filter — TBD)
- [ ] Pin versions + exclude islands from auto-update rules
- [ ] Verify bundle stays lean (~80% static, zero JS on most pages)

## 🧹 Maintenance

- [ ] Commit current uncommitted changes (`experience.astro`, `hero.astro`, `content.ts`)
- [ ] Set domain renewal reminder for `mehedi.engineer` (auto-renew if available)
