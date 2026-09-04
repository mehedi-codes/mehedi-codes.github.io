---
name: Technical Precision
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
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
  code:
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
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1280px
---

## Brand & Style
The design system embodies a monochromatic, technical aesthetic tailored for developer tools and high-density data environments. It prioritizes clarity, efficiency, and a "mechanical" sophistication. The style is a hybrid of **Minimalism** and **Geist-inspired modularity**, focusing on structural integrity rather than decorative flourish. 

The target audience consists of engineers, data scientists, and power users who value information density and functional transparency. The emotional response should be one of calm control, reliability, and precision. Visuals are restricted to a grayscale palette with deliberate use of stroke and alignment to create hierarchy.

## Colors
The palette is strictly monochromatic to maintain a focused, low-distraction environment. 
- **Primary:** Pure white (#FFFFFF) is reserved for high-contrast text and critical interactive states.
- **Secondary:** Muted zinc (#A1A1AA) handles secondary content and inactive icons.
- **Tertiary:** Deep charcoal (#27272A) defines structural borders and component backgrounds.
- **Neutral:** The base background is a deep "Total Black" (#09090B) to maximize contrast and reduce eye strain in low-light environments.

## Typography
The typographic system utilizes a functional pairing: **JetBrains Mono** for structural elements and **Inter** for narrative content. 

- **Headlines & Labels:** JetBrains Mono provides a technical, monospaced rhythm that suggests data integrity. All labels and metadata should use uppercase styling to reinforce the "instrument cluster" feel.
- **Body Text:** Inter is utilized for long-form reading and interface descriptions. Its humanist qualities offer a necessary counter-balance to the rigid monospaced headers, ensuring legibility at smaller scales.
- **Hierarchy:** Use weight (Bold/Semi-bold) for JetBrains Mono to anchor sections, while Inter remains predominantly at Regular weight for maximum breathability.

## Layout & Spacing
The design system employs a **4px baseline grid** and a **12-column fluid-to-fixed grid**. 

- **Desktop:** 12 columns with 16px gutters and 32px side margins. Max container width is 1280px.
- **Tablet:** 8 columns with 16px gutters and 24px margins.
- **Mobile:** 4 columns with 12px gutters and 16px margins.

Spacing tokens are strictly multiples of 4 (4, 8, 12, 16, 24, 32, 48, 64). Components should prioritize vertical stacking with generous internal padding to maintain the "technical document" aesthetic.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Low-contrast outlines** rather than shadows. In a dark, technical UI, shadows are often muddy; instead, use background color steps to indicate elevation.

- **Level 0 (Base):** #09090B.
- **Level 1 (Cards/Panels):** #18181B background with a 1px solid border of #27272A.
- **Level 2 (Popovers/Modals):** #27272A background with a 1px solid border of #3F3F46.

Interaction states (hover/active) should be indicated by shifting border colors or adding a subtle white inner-glow rather than traditional drop shadows.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding prevents the UI from feeling aggressive or "brutalist" while maintaining a precise, engineered look. 

- **Small Components (Buttons, Inputs):** 4px (0.25rem).
- **Medium Components (Cards, Modals):** 8px (0.5rem).
- **Large Components (Sections):** 12px (0.75rem).

Avoid fully pill-shaped or circular elements, except for status indicators or avatars, to maintain the architectural theme.

## Components
- **Buttons:** Primary buttons are solid White with Black JetBrains Mono text. Secondary buttons are outlined with a 1px #27272A stroke. Use uppercase labels for all buttons.
- **Input Fields:** Background #09090B, 1px #27272A border. Focus state: Border changes to White. Placeholder text uses Inter.
- **Cards:** Use the Level 1 elevation (dark background, subtle border). Headlines inside cards must be JetBrains Mono.
- **Chips/Tags:** Small JetBrains Mono text, uppercase, with a #27272A background and no border.
- **Lists:** Items separated by 1px solid #18181B lines. Use Inter for list item content and JetBrains Mono for "keys" or "labels."
- **Data Tables:** High-density alignment. Headers are JetBrains Mono, 12px, Uppercase. Cell data uses Inter for numeric/text values to ensure character legibility.