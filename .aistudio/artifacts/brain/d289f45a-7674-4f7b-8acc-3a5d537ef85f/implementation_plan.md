# Aceternity UI Spotlight New Integration for ORQAVYN Hero

Integrate Aceternity UI's `Spotlight` (Spotlight New) into ORQAVYN's hero section as an ambient, high-end spotlight illumination that preserves the noir monochrome aesthetic, Q logo rotation/parallax, typography, and interactive button controls.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following key decisions have been aligned based on user preferences and technical analysis:

- **Color Palette & Illumination Tone**: Subtle warm white (`#F2F0EB`) and silver monochrome (`#8C8C88` / `hsla(45, 15%, 90%, ...)`), avoiding harsh saturated blues and perfectly complementing ORQAVYN's noir palette (`--bg: #0A0A0A`, `--warm: #F2F0EB`).
- **Layering & Depth**: The spotlight container is placed with `pointer-events-none` strictly behind the animated Q emblem (`#hq3`), creating deep atmospheric stage lighting behind the brand mark and headline without obscuring cursor interactions or text clarity.
- **Motion Dynamics**: Gentle breathing drift with a 7–8 second duration and smooth ease, with strict `prefers-reduced-motion` compliance to honor user accessibility.
- **Minimalist Tooling & Zero-Bloat Execution**: Configure `components.json` and minimal Tailwind / class utility setup (`clsx`, `tailwind-merge`) required by Aceternity/shadcn so that `@aceternity/spotlight-new` integrates cleanly into Vite + React without degrading page load or build times.

---

## 1. Overview & Core Concept

- **What It Does**: Enhances the initial hero viewport by casting soft, animated dual-beam spotlight gradients from the top edges toward the center, framing the rotating Q logo and headline.
- **Target Audience / Persona**: High-value business owners, founders, and executives seeking website modernization, custom software, and workflow automation.
- **Key Value**: Delivers an immediate sense of craftsmanship, depth, and premium quality in the first viewport impression without distracting from the core value proposition or call-to-action buttons.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Hero Entrance*: The page loads or transitions from the initial reveal; dual spotlight beams fade in gently, illuminating the upper canvas.
  2. *Q Emblem Staging*: The rotating Q logo rests atop the soft ambient glow, amplifying depth and tactile separation from the `#0A0A0A` background.
  3. *Reading & Interacting*: Magnetic pill buttons (`.pill.solid.mag`) and navigation remain at standard z-index and receive full pointer events without interference.
- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Editorial noir luxury with technical precision.
  - *Lighting Values*: Dual radial gradient cones tuned to warm silver (`hsla(40, 20%, 92%, 0.07)` down to transparent) and soft champagne (`hsla(45, 25%, 85%, 0.04)`).
  - *Typography & Balance*: Headline serif (`EB Garamond`) and sans lead (`Hanken Grotesk`) remain high-contrast against the soft beam.
- **Interactive Feedback & Motion**:
  - Continuous subtle oscillation across 7.5s cycle using GPU-accelerated transforms (`translate3d`).
  - Automatically pauses or falls back to static ambient illumination when `prefers-reduced-motion` is detected.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Component Integration vs. Generic Overlay**
  - *Chosen Approach*: Configure standard shadcn/Aceternity component structure (`src/components/ui/spotlight-new.tsx`) with utility helpers (`cn` in `src/lib/utils.ts`), using the official `@aceternity/spotlight-new` specification.
  - *Why*: Ensures 100% fidelity to the requested Aceternity UI component while allowing customized gradient props for ORQAVYN's brand colors.
  - *Alternatives Considered*: CSS pseudo-element radial gradients (too static and lacks dual-cone SVG geometry) or full canvas animation (unnecessary CPU/GPU overhead).
- **Decision 2: Layer Stacking Order in Hero DOM**
  - *Chosen Approach*: Insert `<Spotlight />` directly at index 0 of `.hero`, positioned `absolute inset-0 z-0 pointer-events-none`, with `#hq3` at `z-[1]` and `.hin` (content) at `z-[2]`.
  - *Why*: Guarantees that all links, magnetic hover listeners, and cursor tracking hooks work seamlessly without click capture or hit-test interception.

---

## 4. Technical Architecture & Data Strategy

### Component Hierarchy & Layering

```
┌──────────────────────────────────────────────────────────┐
│ <Hero /> (section.hero, relative, min-h-screen)          │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ <Spotlight /> (z-0, absolute, pointer-events-none)  │  │
│  │ Dual SVG light cones + warm monochrome gradients   │  │
│  │ Animated drift via motion/react                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ <div className="hq3"> (z-1, pointer-events-none)   │  │
│  │ Animated Ring & Slash Q emblem                     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ <div className="hin"> (z-2, relative)              │  │
│  │ Chip, H1 split lines, Lead text, CTAs, Trust       │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### Execution Steps
1. **Tooling & Registry Setup**:
   - Install minimal required helper packages (`clsx`, `tailwind-merge`).
   - Configure `components.json` with `@aceternity` registry compatibility and `@/` alias resolution in `tsconfig.json` / `vite.config.ts`.
2. **Component Installation & Customization**:
   - Add `@aceternity/spotlight-new` via shadcn CLI / direct compatible component export.
   - Configure warm monochrome gradient props (`gradientFirst`, `gradientSecond`, `gradientThird`) to match ORQAVYN's palette.
3. **Hero Integration**:
   - Embed `<Spotlight />` inside `src/components/Hero.tsx` behind `#hq3`.
   - Verify layout, responsive breakpoints (mobile, tablet, desktop), and absence of horizontal overflow.
4. **Verification**:
   - Run `compile_applet` and `lint_applet` to ensure zero compilation or console errors.
