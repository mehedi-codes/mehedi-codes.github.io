---
name: Technical Rigor
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#ffffff'
  on-tertiary: '#303033'
  tertiary-container: '#e4e1e5'
  on-tertiary-container: '#656467'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#e4e1e5'
  tertiary-fixed-dim: '#c8c6c9'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: JetBrains Mono
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  container-max: 1200px
  content-width: 800px
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  section-gap: 8rem
  section-gap-mobile: 4rem
---

## Brand & Style
The brand personality is rooted in high-performance engineering and technical transparency. It targets a developer and financial analyst audience that values precision over decoration. The aesthetic is a hybrid of **Minimalism** and **Technical Brutalism**, utilizing monospaced typography to evoke a "code-first" philosophy. The emotional response is one of focused reliability, intellectual authority, and high-frequency efficiency.

The design avoids unnecessary ornamentation, using structural elements like borders and monospaced labels to organize information. It feels like a premium terminal or a high-end IDE, where the beauty is derived from the clarity of the logic and the quality of the data presentation.

## Colors
The palette is a strictly controlled monochromatic scale, optimized for deep-dark environments. 

- **Core Neutrals:** The background uses a deep near-black (#131315), while surfaces are layered using subtle shifts in value to create hierarchy without relying on shadows.
- **Accents:** Pure white (#ffffff) is reserved for primary actions, headings, and critical focus states.
- **Muted States:** Tertiary and secondary tones (zinc/stone scales) are used for metadata, borders, and secondary text to maintain a low-distraction environment.
- **Technical Indicators:** Success and error states (implied) should follow the same high-saturation, low-glow logic, using pure tints against the dark base.

## Typography
The typography system uses a dual-font approach to balance readability with technical character.

- **Headlines & UI Metadata:** **JetBrains Mono** is the primary identity font. It is used for all headings and "Labels" (metadata, tags, timestamps). Headings should use tight letter-spacing, while small labels should be uppercase with wide tracking for a "header-data" feel.
- **Body Content:** **Inter** provides high legibility for long-form reading. It is used for descriptions, overviews, and article content.
- **System Style:** Content is predominantly lowercase in navigation and UI controls to emphasize a relaxed, modern developer aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy with a focus on vertical rhythm and wide margins to create "technical whitespace."

- **Desktop:** Main content is centered and constrained to 800px for optimal readability. Global containers extend to 1200px for headers/footers.
- **Rhythm:** Spacing follows a 4px base unit. Stack sizes (0.5rem, 1rem, 2rem) define the relationship between related elements. Large section gaps (8rem) are used to separate major narrative blocks.
- **Structure:** Horizontal rules and borders are used instead of shadows to define areas like the navigation bar, code blocks, and project navigation.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Low-contrast Outlines**. 

- **Level 0 (Background):** Base surface (#131315).
- **Level 1 (Containers):** Slightly lighter surfaces (#1c1b1d) used for code blocks or imagery cards.
- **Borders:** A consistent 1px border (#444748) is used to define structural boundaries.
- **Translucency:** The Top Navigation uses a background blur (80% opacity) to provide a sense of place during scroll without adding visual weight.
- **Shadows:** No ambient shadows are permitted. Depth is entirely flat and architectural.

## Shapes
The shape language is conservative and geometric. 

- **Base Radius:** 2px (0.125rem) for primary UI elements like buttons and chips, maintaining a sharp, professional edge.
- **Large Radius:** 8px (0.5rem) for larger containers or images to provide a subtle softening of the technical grid.
- **Special Elements:** Tags and technology chips use the base 2px radius with a transparent background and white border.

## Components
- **Buttons:** Small, lowercase text with a 1px border and 2px radius. Hover states should transition the border color to primary white.
- **Chips/Tags:** All-caps JetBrains Mono, border-only (#ffffff), no fill. Used for technology stacks.
- **Lists:** Bullet points are replaced with a custom "// " prefix in primary white, aligning with the "Code Comment" visual metaphor.
- **Code Blocks:** Encased in Level 1 surfaces with a 1px border. Uses syntax highlighting based on a muted version of the primary palette.
- **Navigation Links:** Lowercase labels. Active states use a simple 1px underline rather than a background change.
- **Dividers:** Simple 1px lines using the `outline-variant` color, used to terminate sections and separate layout blocks.