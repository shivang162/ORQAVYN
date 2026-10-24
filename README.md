# ORQAVYN — Website

Production-ready website for ORQAVYN Strategic Technologies, built with Vite + React + TypeScript.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
npm run preview   # optional: preview the build locally
```

## Project structure

```
src/
├── content.ts           # All page copy in one typed object
├── App.tsx              # Root component
├── main.tsx             # Entry point
├── lib/
│   ├── motion.ts        # Easing functions, clamp, seg helpers
│   └── submitLead.ts    # Contact form submission
├── hooks/
│   ├── useScrollFx.ts   # Scroll-driven effects (parallax, stack, focus)
│   ├── useReveal.ts     # One-way reveals, scramble decode, line splits
│   ├── useLenis.ts      # Smooth scrolling (lenis)
│   └── useCursor.ts     # Crosshair cursor, hero parallax
├── components/          # All section components
│   ├── Intro.tsx         # Blueprint grid → letters → Q → split reveal
│   ├── TopBar.tsx        # Fixed top bar (mix-blend-mode: difference)
│   ├── Dock.tsx          # Bottom pill navigation
│   ├── Hero.tsx          # Hero with animated heading
│   ├── Bottleneck.tsx    # Problem list with focus rows
│   ├── SolutionsScene.tsx # Pinned 600vh scroll scene
│   ├── Tailored.tsx      # Light band with diagonal wipe
│   ├── Proof.tsx         # Case studies with odometer stats
│   ├── AiConversation.tsx # Typing animation chat card
│   ├── Odometer.tsx      # Shared odometer digit component
│   ├── Partnership.tsx   # Scroll-fill heading + quote
│   ├── Process.tsx       # Zigzag timeline
│   ├── Testimonials.tsx  # Auto-advancing slider
│   ├── Faq.tsx           # One-at-a-time accordion
│   ├── Cta.tsx           # CTA + contact form
│   └── Footer.tsx        # Footer with letter-slice wordmark
└── styles/              # CSS split into logical files
    ├── tokens.css        # Design tokens, reset, shared utilities
    ├── nav.css           # Top bar, dock, cursor
    ├── hero.css          # Hero, bottleneck, focus list
    ├── scene.css         # Pinned solutions scene
    ├── sections.css      # Light band, cases, odometer, bars
    ├── chat.css          # AI conversation card
    ├── components.css    # Partnership, process, slider, FAQ, CTA, form, footer
    ├── intro.css         # Intro overlay
    └── responsive.css    # Mobile breakpoint overrides
```

## How to change copy

Edit **`src/content.ts`**. All page text lives in a single typed object. The components import from it — there is no hardcoded copy in JSX.

## How to change animation speed

Edit the **`T` config object** at the top of `src/components/Intro.tsx`. Each key controls a timestamp in seconds:

| Key | Controls |
|---|---|
| `grid` | When the blueprint grid starts drawing |
| `letters` | When the ORQAVYN letters start rising |
| `stagger` | Delay between each letter |
| `letterDur` | Duration of each letter rise |
| `ringA / ringB` | Q ring circle-open animation window |
| `slashA / slashB` | Q slash slide-in window |
| `scanA / scanB` | Light scan line sweep |
| `tagA / tagB` | Tagline fade-in |
| `hold` | When the split starts |
| `splitB` | When the split finishes |
| `heroGo` | When `.go` class is added (hero animates in) |
| `unlock` | When scroll unlocks and intro is removed |

## Contact form

The form validates required fields client-side. On submit it calls `src/lib/submitLead.ts`, which POSTs JSON to the URL in the **`VITE_LEAD_ENDPOINT`** environment variable.

- **No backend?** Leave the variable empty in `.env` — the form will still show the confirmation message.
- **With a backend:** Set `VITE_LEAD_ENDPOINT=https://your-api.com/leads` in `.env`.

## Deploy

### Vercel

1. Push to a Git repository
2. Import in [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Set `VITE_LEAD_ENDPOINT` in Environment Variables if needed
5. Deploy

### Netlify

1. Push to a Git repository
2. Import in [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set `VITE_LEAD_ENDPOINT` in Environment Variables if needed
6. Deploy

## Brand assets

The three brand images in `public/brand/` (ring.png, slash.png, wordmark.png) are pre-made and should not be edited or redrawn.

## Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Single `<h1>` on the page
- `aria-expanded` on FAQ buttons
- `role="log"` on the AI conversation
- `alt` text on logos
- `focus-visible` outlines on interactive elements
- `prefers-reduced-motion` respected everywhere (intro skipped, transitions near-instant)
