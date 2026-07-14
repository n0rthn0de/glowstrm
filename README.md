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


# GlowStrm.com — Deploy & Discoverability Checklist

*Everything to upload and every online step to make glowstrm.com findable in Google, Bing, and AI answer engines (ChatGPT, Claude, Perplexity). Work top to bottom.*

---

## Part 1 — Files to upload

All five go in the **site root** (the same folder as `index.html`) on Vercel.

| File | New/Replace | What it does |
|---|---|---|
| `index.html` | **Replaces** current homepage | Updated pricing ladder + Sprint rename + founding window **and** the full SEO head (meta description, Open Graph, Twitter card, JSON-LD schema) |
| `robots.txt` | New | Lets crawlers in; points them to the sitemap |
| `sitemap.xml` | New | Lists all 6 pages so search engines find them |
| `llms.txt` | New | AI/LLM-facing description + services with pricing |
| `glowstrm-share.png` | New | 1200×630 social preview image (used by the `og:image` tag) |

**Leave in place:** `glowstrm-mark.svg` must stay in the root — the hero logo and the schema both reference it.

**Still to do (not in this package):** `sprint.html`, `workshop.html`, and `messaging-audit.html` still show the *old* prices. Send them over and I'll (a) update their pricing and (b) paste the same JSON-LD block into each page's `<head>`, changing only the title/description/canonical/og:url per page.

---

## Part 2 — Online steps, in order

### A. Deploy & confirm
1. Upload the five files to the site root and redeploy on Vercel.
2. Confirm each loads: `glowstrm.com/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/glowstrm-share.png`.
3. On the homepage, View Source and confirm the new `<title>` ("Strategic Communications & Message Architecture™") and the `<script type="application/ld+json">` block are present.

### B. Google
4. **Google Search Console** (search.google.com/search-console): add glowstrm.com as a property and verify (DNS record via Porkbun, or the Vercel method).
5. **Submit the sitemap:** Sitemaps → enter `sitemap.xml` → Submit.
6. **Request indexing:** URL Inspection → paste the homepage URL → Request Indexing. Repeat for the pages that matter most.
7. **Rich Results / schema check:** search.google.com/test/rich-results → paste glowstrm.com → confirm the schema is detected with no errors.
8. **Google Business Profile:** create/claim it as a **service-area business** (hide the street address). Category: "Marketing consultant" (add "Business management consultant"). Service area: Richmond metro + note virtual/worldwide. Add the website link.

### C. Bing (also powers ChatGPT & Copilot search)
9. **Bing Webmaster Tools** (bing.com/webmasters): add the site → import from Google Search Console (fastest) → submit `sitemap.xml`.

### D. Social preview cache
10. **LinkedIn Post Inspector** (linkedin.com/post-inspector): paste glowstrm.com so LinkedIn scrapes and caches the new share image.
11. **Facebook Sharing Debugger**: paste the URL → "Scrape Again" to refresh the preview.

### E. AI / LLM visibility
12. `llms.txt` and the JSON-LD schema (both done above) are the two things AI answer engines read to describe you — keep them accurate.
13. **Consistency is what makes AI confident:** use the exact same business name, description, and contact everywhere you appear — LinkedIn company page, eVA/SWaM vendor profile, Google Business Profile, any directory. Mismatched info is what makes engines hedge.
14. *(Next lever)* Publish the **Message Architecture™ pillar essay** — the ownable, citeable cornerstone that gives AI something authoritative to quote.

### F. Verify a week later
15. Google `site:glowstrm.com` — confirm pages are indexed.
16. Search "GlowStrm" and "Message Architecture" — check the listing/preview looks right.
17. Ask ChatGPT / Claude / Perplexity "What is GlowStrm?" — see how they describe you, then tighten `llms.txt` if anything's off.

---

*What grows, glows.*
