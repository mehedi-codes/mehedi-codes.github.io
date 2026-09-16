# mehedi.engineer

Personal portfolio, project showcase, and blog — a static-first Astro site, bilingual (English + Bangla), built for near-zero maintenance.

## Stack

- **Astro** — static-first framework, zero-JS by default
- **Tailwind CSS v4** — design tokens and utilities in `src/styles/global.css`
- **Bun** — package manager and runner
- **Fonts** — Inter / JetBrains Mono (EN), Hind Siliguri (BN)

## Commands

| Command            | Action                                     |
| :----------------- | :----------------------------------------- |
| `bun install`      | Install dependencies                       |
| `bun dev`          | Start local dev server at `localhost:4321` |
| `bun build`        | Build the production site to `./dist/`     |
| `bun preview`      | Preview the build locally                  |
| `bun run check`    | Run `astro check` (types + diagnostics)    |
| `bun run lint`     | Lint with oxlint                           |
| `bun run lint:fix` | Auto-fix lint issues                       |
| `bun run fmt`      | Format with oxfmt                          |
| `bun run fmt:check`| Verify formatting                          |

## Project structure

```text
/
├── public/            # static assets (favicons)
├── src/
│   ├── components/    # Header, Navbar, Hero, Language/Theme toggles
│   ├── i18n/          # en/bn locale dictionary
│   ├── layouts/       # Layout.astro (shell, pre-paint, meta)
│   ├── pages/         # index.astro
│   ├── scripts/       # pre-paint, theme/lang toggles (vanilla JS)
│   └── styles/        # global.css (tokens, fonts, utilities)
└── package.json
```

For the full product plan (routes, content model, milestones), see `GUIDE.md`.