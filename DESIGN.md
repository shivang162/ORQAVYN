---
name: Noir Monochrome
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c7bf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#91918a'
  outline-variant: '#464742'
  surface-tint: '#c8c6c2'
  primary: '#ffffff'
  on-primary: '#30312e'
  primary-container: '#e4e2dd'
  on-primary-container: '#656461'
  inverse-primary: '#5f5e5b'
  secondary: '#c7c6c2'
  on-secondary: '#30312e'
  secondary-container: '#494946'
  on-secondary-container: '#b9b8b4'
  tertiary: '#ffffff'
  on-tertiary: '#342f31'
  tertiary-container: '#e9e0e2'
  on-tertiary-container: '#696365'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4e2dd'
  primary-fixed-dim: '#c8c6c2'
  on-primary-fixed: '#1b1c19'
  on-primary-fixed-variant: '#474744'
  secondary-fixed: '#e4e2de'
  secondary-fixed-dim: '#c7c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#e9e0e2'
  tertiary-fixed-dim: '#cdc4c6'
  on-tertiary-fixed: '#1e1b1c'
  on-tertiary-fixed-variant: '#4a4547'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 5.5rem
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 3.75rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: '1.25'
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-uppercase:
    fontFamily: Hanken Grotesk
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.14em
  label-regular:
    fontFamily: Hanken Grotesk
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system establishes an uncompromising visual language built on cinematic restraint, structural authority, and architectural rigor. Designed for a high-end architectural consultancy, the aesthetic rejects superficial ornamentation, trend-driven gradients, and decorative noise in favor of stark contrast, monumental typography, and disciplined spatial composition.

The experience evokes the feeling of examining an ultra-luxury monograph printed on heavyweight uncoated matte paper. Every element is deliberate: generous negative space conveys confidence, razor-sharp 1px structural hairlines frame imagery like architectural blueprints, and high-contrast typography commands silent respect. The design movement marries pure architectural minimalism with Swiss precision, demanding absolute focus on rhythm, proportion, and texture rather than color.

## Colors

The palette operates under absolute chromatic restraint. There are strictly zero accent colors—no blues, yellows, or violets under any circumstance. All hierarchy is communicated via value, luminance, and spatial density.

### Palette Architecture
- **Pitch Black (`#0A0A0A`):** The primary canvas and root background. Deep, light-absorbing, and grounding.
- **Surface Level 1 (`#111111`):** Structural panels, secondary sections, and backdrop layers.
- **Surface Level 2 / Raised (`#171717`):** Card surfaces, elevated sheets, and popovers.
- **Hairline Border (`#262626`):** Precision 1px rules used for structural bounding boxes, row dividers, and technical grids.
- **Dim Gray (`#5C5C59`):** Purely decorative or inactive elements: disabled states, indexing numbers, and technical metadata.
- **Mid Gray (`#8C8C88`):** Secondary editorial text, subtitles, descriptions, and supporting data labels.
- **Warm White (`#F2F0EB`):** Primary reading color for body copy, headlines, active borders, and inversions. Softened just enough to prevent harsh retinal glare on deep black surfaces.
- **Pure White (`#FFFFFF`):** Reserved strictly for hero titles, focal emphasis, and high-impact moments.

## Typography

The typographic hierarchy relies on the dual tension between classical, literary serifs and sharp, unyielding grotesk typography.

- **Headline Family:** EB Garamond delivers architectural grandeur and literary gravity. Headlines scale aggressively from 32px up to 88px. Italicized cuts are strictly deployed for conceptual emphasis, project status, or curated quotes, instilling an editorial cadence.
- **Body & Functional Family:** Hanken Grotesk serves as the technical counterweight. It delivers pristine clarity across multi-column architectural narratives, technical indices, and interactive controls.
- **Uppercase Labels:** Small labels, section markers, metadata, and category tags are rendered in Hanken Grotesk at 12px, styled in pure uppercase with an intentional `0.14em` letter-spacing tracking.

## Layout & Spacing

Layouts follow a structural fluid 12-column grid anchored by generous outer canvases. The grid evokes a physical drafting table: sections are framed with clean 1px lines (`#262626`) rather than arbitrary whitespace or soft shadows.

### Breakpoints & Canvas Rhythms
- **Mobile (< 768px):** 4-column structure with `margin` of `1.25rem` and `gutter` of `1.5rem`. Hero headlines collapse to mobile variants to preserve strict left-aligned edge margins.
- **Tablet (768px - 1024px):** 8-column layout with `margin-tablet` at `2.5rem`.
- **Desktop (> 1024px):** 12-column architectural grid with `margin-desktop` of `4rem` and `gutter-desktop` of `2.5rem`. Max container constraint holds at `1600px` to maintain strict legibility and proportion.

Vertical spacing emphasizes dramatic voids. Elements and editorial chapters breathe with ample empty space, separating dense information clusters from expansive photographic showcases.

## Elevation & Depth

This design system deliberately rejects blurs, drop shadows, ambient glows, and skeuomorphic lighting models. Spatial depth is communicated solely through surface value shifts and razor-thin borders.

- **Base Layer:** `#0A0A0A` serves as ground level for main backgrounds and page canvases.
- **Tier 1 Surfaces:** `#111111` defines structural sidebars, drawer panels, and secondary grid sections.
- **Tier 2 Surfaces:** `#171717` defines elevated architectural cards, project flyouts, and modal dialogs.
- **Structural Separation:** Planes are delineated solely through 1px solid `#262626` hairline borders. Stacking context is expressed through sharp perimeter borders overlapping underlying blocks, never through diffusion or soft projection.

## Shapes

The architectural envelope is completely orthogonal:
- **Containers, Images, & Cards:** Strict `0px` radius. All corners are sharp, reinforcing structural masonry, steel, and stone construction paradigms.
- **Interactive Pill Counterweight:** To establish an unmistakable distinction between static architectural frames and interactive touch targets, primary action buttons, filter tags, and operational chips utilize fully rounded pill contours (`rounded-full` / `9999px`).
- **Dividers & Structural Rules:** Exactly 1px hairline thickness across all borders and separators.

## Components

### Buttons
- **Primary Pill:** Background Warm White (`#F2F0EB`), text Pitch Black (`#0A0A0A`), font Hanken Grotesk 14px uppercase (`letter-spacing: 0.12em`), border-radius `9999px`. Hover state inverts softly to Pure White (`#FFFFFF`) with a 1px border.
- **Secondary Outlined Pill:** Background transparent, border 1px solid `#262626`, text Warm White (`#F2F0EB`), border-radius `9999px`. Hover state shifts border to Warm White (`#F2F0EB`).
- **Text Action:** Unadorned Hanken Grotesk uppercase label with a delicate 1px underline positioned with `text-underline-offset: 6px`.

### Chips & Filter Tags
- Rendered as compact pills (`9999px` radius) with 1px `#262626` borders, text in Mid Gray (`#8C8C88`), and uppercase tracking.
- Selected state fills with Warm White (`#F2F0EB`) and black text (`#0A0A0A`).

### Architectural Cards
- Strict `0px` radius, background `#111111`, framed with a 1px solid `#262626` border.
- Hover interactions feature no vertical lift or drop shadows; instead, the 1px hairline transitions from `#262626` to `#8C8C88`, accompanied by subtle image desaturation/contrast adjustments.

### Form Inputs & Text Fields
- Flat minimalist construction. Background is `#111111` or transparent with a bottom-only 1px hairline in `#262626`.
- Placeholder text in Dim Gray (`#5C5C59`).
- Focus state transforms the border to 1px solid Warm White (`#F2F0EB`) without glow or outer rings.

### Checkboxes & Radio Controls
- **Checkboxes:** Exact square (`0px` radius) with 1px `#262626` border. Active state fills with Warm White (`#F2F0EB`) and reveals a sharp `#0A0A0A` checkmark.
- **Radio Buttons:** Classic circular ring with 1px `#262626` border. Checked state displays a solid Warm White (`#F2F0EB`) central dot.

### Lists & Index Rows
- Editorial index rows framed by top and bottom 1px hairlines (`#262626`).
- Include a leading numeric indicator in Dim Gray (`#5C5C59`) using the uppercase label style, followed by an EB Garamond project title and right-aligned Hanken Grotesk technical specifications.