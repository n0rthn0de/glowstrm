# GlowStrm Homepage

Marketing homepage for GlowStrm, LLC — message architecture consultancy, Richmond VA.

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | Single-file homepage (renamed from `glowstrm-homepage-v3.html`) |

Single-file build — no dependencies, no build step, no npm. Everything is self-contained.

## Tech

- **Fonts** — Cormorant Garamond (display), Source Sans 3 (body) via Google Fonts
- **Colors** — Charcoal `#271F41` bg, Signal Gold `#E6B65C`, 5-stop brand gradient
- **No frameworks** — vanilla HTML/CSS/JS only

## Sections

Hero · Scrolling marquee · What I Do · Message Architecture Sprint offer · Fit/not-fit · Process · Positioning · CTA · Footer

## Hosting

GitHub Pages → `glowstrm.com`
DNS managed via Porkbun (4 A records + CNAME `www` → `glowstrm.github.io`).

## To update

Edit `index.html` directly and push to `main`. Pages deploys automatically, usually under 60 seconds.

## Pending

- [ ] Mobile nav: links collapse without hamburger (intentional for now — revisit for production)
- [ ] Copyright year: currently `2025–2026`

## Contact

CTA buttons link to `northnode@glowstrm.com`
