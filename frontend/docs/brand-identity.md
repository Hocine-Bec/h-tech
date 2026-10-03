# H-Tech — Brand Identity

**Purpose:** This document is for anyone making a decision about how H-Tech looks, sounds, or behaves. It is not a token spec (that's [DESIGN.md](./DESIGN.md)); it's the "why" and the "when" behind the visual and verbal choices.

**Status:** v1.0 · 2026-08-28

---

## 1 · Positioning

**H-Tech is the online computer-parts store for Algerian builders who compare five products before buying one and expect the site to keep up.**

Not for casual shoppers looking for their first laptop. Not a marketplace or a comparison site — we own the catalog. Not a distributor — we sell to end customers. Not a service business — we don't build the PC for you.

**We are:**
- A store, not a startup
- A product catalog, not a content site
- A commerce tool, not a hobby project

**We are not:**
- A brand that needs to shout to be heard
- A brand that hides its stock status to inflate perceived availability
- A brand that promises 24h delivery in Wilaya 40 when we can only make Algiers/Oran in 24h
- A brand that runs a "SPRING SALE!!!" splash on the homepage

The line we walk: **serious about the craft, quiet about it.** The catalog is honest, the prices are locked, the returns are real. We don't need to say it three times.

---

## 2 · Brand values

Five values. Each has: what it means · how the product expresses it · how the copy expresses it.

### 2.1 Honest

**What it means:** Stock is real. Prices are real. Delivery windows are real. Return policies are real. We say what is true and we don't hedge.

**Product expression:**
- Out-of-stock products stay visible in the catalog with a clear badge — never hidden.
- Low-stock counts show the actual number ("Only 3 left") when the real number is low, and stop at "In stock" otherwise.
- Prices at checkout match prices at add-to-cart. When they don't (because distributor changed price mid-session), we show the price-change warning and require re-confirmation.
- Delivery estimates are wilaya-specific ("Algiers: 24–48h", not "Fast delivery country-wide").

**Copy expression:**
- No superlatives without proof. Never "the best," "the fastest," "unbeatable."
- No exclamation marks in confirmations. "Added to cart." not "Added to cart!"
- No manufactured urgency. "Only 3 left" is fine (it's true). "Hurry, ends soon!" is banned.
- Empty states describe the actual reason: "No products match these filters" beats "Oops! Nothing here."

### 2.2 Fast

**What it means:** Browsing feels instant. Ten pages open in tabs still feel responsive. Add-to-cart is inline. Filter changes update the grid without a full navigation.

**Product expression:**
- Skeleton loaders render the shape of content while data fetches.
- Category grids scroll infinitely without page-reload jank.
- Cart is browser-local until checkout — no server round-trip per add.
- Prices are cached locally when they're locked (no re-fetch on cart re-open).

**Copy expression:**
- Short. "See specs" beats "View detailed specifications."
- Verbs over gerunds. "Add to cart" not "Adding to cart" (except in loading states).
- Sentence-case CTAs. "Browse the catalog," not "Browse The Catalog."

### 2.3 Knowledgeable

**What it means:** We assume the reader knows a socket from a form factor. We surface the specs that matter (socket, TDP, PSU requirement) without dumbing them down. But we're not gatekeepers — first-time PC builders shouldn't feel excluded.

**Product expression:**
- Specs are shown as key/value tables, not as marketing paragraphs.
- Compatibility hints ("Fits AM5 sockets", "Requires 750W+ PSU") are derived from spec data, not written per SKU.
- Bundles are pre-vetted — CPU + motherboard + RAM combos that we know work together.
- Guides section explains parts choices at eye level (e.g., "Ryzen 7 vs Core i7 in 2026 for a 300k DA build").

**Copy expression:**
- We name things precisely: "GeForce RTX 4070 12GB GDDR6X" — not "high-end graphics card."
- Currency after amount: "89,900 DA" — Algerian convention.
- Use industry terms where they're standard (DDR5, PSU, TDP, DIMM) without inline glossary.
- Guides use conversational technical language: "Skip the marketing. Here's the config that gets you real gains."

### 2.4 Local

**What it means:** We are an Algerian store, serving Algerian customers, in Algerian dinars, with Algerian couriers, delivering to Algerian wilayas. Nothing about the brand pretends to be global.

**Product expression:**
- Prices in DA with comma thousands separator (`89,900 DA`).
- Addresses use wilaya + commune + street (not "State" and "ZIP").
- Phone entry accepts +213 or 0-prefixed local format.
- Cash on delivery is the primary payment mechanism (not a fallback).
- Wilaya-aware delivery estimates.
- Currency never shortens to `DZD` in customer UI — always `DA`.

**Copy expression:**
- Voice is set in English at launch, but written to translate cleanly to French and Arabic later (short sentences, low idiom, no wordplay).
- No US-centric idioms ("out of the park," "home run") — they don't translate.
- Wilaya names use official French romanization ("Constantine," not "Qusantina").
- The domain is `h-tech.dz`. Not `.com`.

### 2.5 Quiet

**What it means:** No hype, no marketing tricks, no dark patterns. If the product is good, the site doesn't need to shout.

**Product expression:**
- One ambient motion element per page (the FlowRibbon on the landing hero). Everywhere else is interaction feedback only.
- One reserved accent color (mint green). No secondary "attention" color competing with it.
- No pre-checked email opt-in checkboxes. No "abandoned cart" dark patterns. No confirmshaming ("No thanks, I don't want to save money").
- No auto-playing anything.
- No modal on page load asking for email.

**Copy expression:**
- Marketing headlines carry one italicized emphasis word ("The parts your rig *actually* needs") and stop. No follow-up "!!" or "→→→".
- Buttons never say "CLICK HERE" or "SIGN UP NOW ⚡".
- Empty states don't apologize theatrically ("Oh no! We're so sorry!"); they say what happened.

---

## 3 · Personality

The brand personality is defined in contrast pairs. Each pair names an attribute we want, and calls out the adjacent trait we don't want.

- **Confident, not boastful** — "1,500+ parts live today" (fact), not "The biggest catalog in Algeria" (unprovable claim).
- **Technical, not exclusionary** — "12 GB GDDR6X, 200W TDP, requires 650W+ PSU" (real spec, respectfully rendered), not "Only real gamers will understand this" (gatekeeping).
- **Direct, not blunt** — "Out of stock" (direct), not "You can't buy this" (blunt).
- **Warm, not casual** — "We'll ship your order today" (warm), not "You're all set 🎉" (casual).
- **Serious about the craft, playful about the delivery** — the copy can wink at the reader ("*actually* needs") without pretending the store is a stand-up act.
- **Precise, not pedantic** — "24–72h delivery" (precise range), not "1.2 to 3.4 business days (mean 2.1)" (pedantic).

---

## 4 · Audience

Two named personas. Not a full persona doc — just enough that decisions have someone to refer to.

### The Builder (primary)

Yacine, 28, Algiers. Assembles his own PCs. Upgrades yearly. Compares 5 GPUs across 3 sites before buying. Reads r/pcmasterrace. Knows what a chipset does. Trusts a store that shows real stock counters.

**What Yacine needs:**
- Live stock, not "in stock" fiction
- Real specs (socket, TDP, memory speed, output ports)
- Prices that don't move between add-to-cart and checkout
- Fast filtering by brand and price
- Confidence that the box that arrives contains the actual SKU listed

**What Yacine will forgive:**
- English-only launch (he reads English tech content anyway)
- No customer accounts in Phase 1 (guest checkout is faster)
- No live chat support (a phone number is fine)

**What Yacine won't forgive:**
- "Available" products that turn out to be out of stock after checkout
- Prices that change silently
- A site that drags when he opens multiple product pages

### The Pro (secondary)

Amine, 41, Constantine. Runs a small repair shop. Re-orders weekly. Buys in small batches (5–10 SKUs per order). Values consistency — same site, same catalog, same prices, week to week.

**What Amine needs:**
- Fast repeat-order workflow (should be able to find a SKU by name or exact-match code)
- Bulk discounts eventually (Phase 2)
- Clear invoicing (Phase 2)
- Predictable delivery windows

**What Amine will forgive:**
- No B2B pricing tier at launch
- No account manager (a WhatsApp contact for the owner is fine)

**What Amine won't forgive:**
- Long, marketing-heavy pages that make him scroll to find the product
- No search-by-SKU
- Cart that clears when he closes the tab

---

## 5 · Voice & tone

**Voice = who H-Tech is all the time.** Never varies.
**Tone = how the voice modulates by context.** Varies by surface.

### 5.1 Voice attributes

Every piece of H-Tech copy exhibits all four, always:

1. **Plain-spoken** — never marketing-speak, never dumbed-down. Say what happened, say what to do.
2. **Specific** — we use real numbers, real product names, real timeframes. Never "just a moment" or "coming soon."
3. **Confident** — no hedging. "You'll pay the courier in cash" not "You might need to pay the courier in cash."
4. **Respectful** — we assume the reader is intelligent. No condescending explanations of what a URL is.

### 5.2 Tone by context

| Context | Tone | Example |
|---|---|---|
| Marketing headline | Confident, memorable, one italicized emphasis | "The parts your rig *actually* needs." |
| Marketing subhead | Concrete, listy, ends without period if bulleted | "Live stock. Locked prices. Cash on delivery." |
| Product description | Informative, spec-forward, no marketing spin | "12 GB GDDR6X memory. DLSS 3 support. 200W TDP. Requires 650W+ PSU." |
| CTA button | Verb + object | "Browse the catalog" · "Add to cart" · "Place order" |
| Empty state | Honest, specific, actionable | "No products match these filters. Try removing brand or price constraints." |
| Error message | Apologetic without groveling, actionable | "Couldn't reach the catalog. Try again in a moment." |
| Success toast | Terse, past tense | "Added to cart." · "Order placed." |
| Confirmation prompt | Unambiguous, no double negatives | "Delete this product? This action can't be undone." |
| Admin surface | Dry, functional, no marketing language | "3 products with low stock" (not "⚠️ Alert! Some products need attention!") |
| Legal / policy | Clear, structured, plain language | "You can return a dead-on-arrival product within 7 days of delivery for a full refund or replacement." |

### 5.3 Writing rules

**Do:**
- Real numbers: "89,900 DA" — not "~90k" or "just under 100,000."
- Currency after amount: "89,900 DA" — Algerian convention.
- Use "we" for the store's voice.
- Use "you" for the reader. Never "customer" or "user."
- Active voice: "We deliver in 24h" — not "Delivery is completed in 24h."
- Second-person imperative for CTAs: "Browse the catalog" — not "Let's browse" or "Click to browse."
- Sentence case for buttons and headings: "Add to cart" — not "Add To Cart."
- Oxford commas: "monitors, keyboards, and mice."
- Numeric digits for quantities: "3 left" — not "three left."
- Spell out under-10 counts in prose only: "eight categories."

**Don't:**
- No emojis in product UI copy. Anywhere.
- No exclamation marks in routine flows. Toasts, headers, CTAs — all end with period or nothing.
- No "Oops!", "Uh oh!", "Yay!", or similar clichés.
- No "just," "simply," "easily" — these words dismiss whatever comes next.
- No "our team" or "our family" — we're a store, not a startup pitch.
- No superlatives without proof: "the best" and "the fastest" are banned unless a source is cited.
- No CAPS SHOUTING — the only capitalized text in the system is the 11px eyebrow labels (typographic, not shouting).
- No manufactured urgency: "Hurry, only 2 left!" — the badge already says "Only 2 left."
- No "click here" links.
- No first-person plural for the customer ("Let's find your perfect GPU" is banned).
- No trailing ellipses in copy (except during loading states where they signal indeterminate wait).

### 5.4 Example rewrites

| Bad | Good | Why |
|---|---|---|
| "🎉 Welcome back!" | "Welcome back, Yacine." | Emoji + exclamation both banned; specificity better than generic. |
| "Oh no! Something went wrong!" | "Couldn't reach the catalog. Try again in a moment." | Honest, actionable, no theater. |
| "Your item has been successfully added to your cart!" | "Added to cart." | Terse toasts. |
| "We're sorry, but there are no items matching your search." | "No products match these filters." | No apology needed; user changed filters. |
| "Please enter a valid phone number." | "Enter your phone number (+213 or 0-prefix)." | Tells the user what's actually needed. |
| "Whoops! This product is unavailable :(" | "Out of stock. We'll notify you when it's back." | Terse + gives next action. |
| "Save 20% NOW!!! Limited time!!!" | "20% off select GPUs — through August 31." | Real information beats manufactured urgency. |
| "Loading amazing products..." | "Loading products…" | No adjective. Ellipsis (…) not three periods. |
| "Thanks for shopping with us! ❤️" | "Thanks, Yacine. Your order number is HT-4287. Save it for tracking." | Specific, actionable, no emoji. |
| "Click here to view your cart" | "View cart" | Verbs, not "click." |
| "Our team is on it!" | "We're on it." (or omit entirely) | We're a store, not a team meme. |

---

## 6 · Logo system

H-Tech is a **wordmark-only brand**. There is no accompanying icon in primary usage. The only place a glyph appears is the favicon (a stylized "H" in a green rounded square), used only in the browser tab and OS-level contexts.

### 6.1 The two treatments

**Nav treatment (working size)** — the wordmark in Inter Semibold, used everywhere except the mega footer band.

```
H-Tech
```

| Attribute | Value |
|---|---|
| Font | Inter, weight 600 (Semibold) |
| Size | 17px (nav standard) — scales linearly to 14px min, 24px max |
| Color | `ink` (theme-responsive: ink white on dark, warm black on light) |
| Letter-spacing | −0.3px |
| Line-height | 1 |
| Hyphen | Same as letters (no color, no italic) |

**Mega treatment (footer watermark)** — the wordmark in Instrument Serif with italic hyphen, rendered as an **outlined watermark** (no fill) sitting behind the footer content at low opacity. The mega wordmark is decorative — a brand signature bleeding off the bottom of the page. It is never rendered as a solid filled block competing with the footer information.

```
  ┌── outlined H-Tech at ~26vw sits behind the footer info ──┐
  │       (letter strokes only, ~10% opacity, bleeds down)   │
  └──────────────────────────────────────────────────────────┘
   Footer link columns + bottom row sit on top with z-index 1
```

| Attribute | Value |
|---|---|
| Font | Instrument Serif, weight 400 (Regular), italic |
| Hyphen style | Italic, outlined in `brand-green` (the one and only place italic hyphen appears) |
| Size | `clamp(160px, 26vw, 380px)` |
| Fill | `transparent` |
| Stroke | `2px` in `ink` for "H" and "Tech"; `2px` in `brand-green` for the hyphen |
| Opacity | `0.10` (adjust ±0.02 per theme if legibility of overlaid content suffers) |
| Position | Absolute, bottom-aligned, bleeds off the footer's bottom edge |
| Letter-spacing | −0.04em |
| Line-height | 0.85 |
| Pointer events | Disabled — never interactive |
| Contexts | Footer only. Not used on splash/loading screens (those become Phase 2 with a separate treatment). |

### 6.2 The favicon glyph

A single stylized letter "H" in a rounded green square. Only used in browser tab, app icon, and OS-level "install as PWA" contexts. Never used as a standalone brand mark inside the product.

| Attribute | Value |
|---|---|
| Background | `brand-green` (#00d4a4) |
| Shape | Rounded square, radius 7px (at 32px canvas) |
| Glyph | "H" in solid black, custom-drawn to match Inter Semibold visual weight |
| Sizes | 16, 32, 48, 180 (Apple touch icon), 512 (maskable) |

### 6.3 Sizing & spacing rules

- **Clear space:** minimum padding around wordmark equals the cap-height of the "H". Nothing intrudes into that space.
- **Minimum working size:** 12px (below that, use favicon).
- **Never scale below 60%** of the base size in any given context (nav mark stays ≥ 10.2px, mega mark stays ≥ 43px effective).

### 6.4 Contexts & pairings

| Context | Treatment | Notes |
|---|---|---|
| Storefront top nav | Nav treatment, `ink` | Left of the nav bar |
| Admin top nav | Nav treatment, `ink` | Followed by environment pill (`prod` / `staging`) |
| Footer link row (top of footer) | Nav treatment, `ink` | Above the mega band |
| Footer watermark | Mega treatment (outlined, opacity 0.10) | Once per page, behind footer info |
| Order confirmation page | Nav treatment | Above the "Order placed" heading |
| Auth screens (sign in / sign up) | Nav treatment, centered | Above the auth card |
| Loading splash (Phase 2 PWA) | To be designed separately; do NOT reuse the watermark treatment | Splash needs a solid-fill or motion treatment, not an outline |
| Invoice / receipt (printable) | Nav treatment, top-left | Black on white in print |
| Email header (Phase 2) | Nav treatment | 24px, left-aligned |
| Favicon | Glyph | Only rasterized use |
| Social share preview | Wordmark rendered as SVG in OG image | Generated on server |

### 6.5 Don'ts

- **Don't italicize the entire wordmark.** Only the hyphen italicizes, and only in the mega treatment.
- **Don't use only "H"** as a standalone mark anywhere except the favicon.
- **Don't add ".dz"** to the wordmark. The domain is a separate thing.
- **Don't colorize** the "H" or "Tech" text. Only the hyphen carries color (mega treatment only).
- **Don't use a serif** for the nav treatment. That's Inter's job.
- **Don't lockup** the wordmark with the founder's name, a tagline, an award badge, or "Est. 2026."
- **Don't animate** the wordmark. It doesn't fade in, it doesn't spin on hover, it doesn't wobble on load.
- **Don't outline** the wordmark in nav / working sizes. The nav treatment is always solid-fill Inter Semibold. The outlined form is reserved for the mega footer watermark only.
- **Don't render the mega wordmark as a solid-fill block.** The footer mega treatment is outlined at low opacity as a watermark behind the footer content; a solid-fill mega wordmark competes with the footer info and is never used.
- **Don't underline** the wordmark. It's not a link even when it's clickable.
- **Don't rotate.** Wordmark is horizontal, always.
- **Don't stack** ("H" over "Tech" on two lines).
- **Don't use** the wordmark on top of photography or busy patterns without a solid canvas underlay.

---

## 7 · Iconography

**One library: [lucide-react](https://lucide.dev/).** No mixing with Heroicons, Feather, Tabler, or hand-drawn icons except as noted.

### 7.1 Style rules

| Rule | Value |
|---|---|
| Stroke weight | **1.5** for UI icons in nav/buttons/tables · **1.75** for larger contexts (empty states, marketing) · **1.4** for large decorative glyphs (bento visuals, cover art) |
| Corner style | Rounded (lucide default) |
| Fill | None (all stroke, no fills) |
| Color | `currentColor` — inherits from parent text color |
| Rendering size | 14–16px in body copy, 20px in buttons, 32–48px in empty states, 64px+ in decorative |

### 7.2 Custom icons policy

**Prohibited by default.** If lucide-react has an approximate match, use it.

**Allowed exceptions** (kept in `frontend/src/components/icons/hardware/`):

Lucide is thin on hardware iconography. These may be custom-drawn, but must match lucide's visual weight (1.5 stroke, rounded caps, 24×24 viewBox, no fills):

- `GraphicsCard` — GPU with two fan discs
- `Motherboard` — rectangular board with corner mounts
- `PcCase` — vertical tower with front panel
- `Cooler` — heatsink stack with fan
- `PowerSupply` — rectangular unit with fan grille
- Category-page hero glyphs (may reuse the above)

**Never allowed:**
- Filled illustrative icons (breaks visual consistency with lucide)
- Multi-color icons (all icons monochrome, use `currentColor`)
- Isometric icons ("3D" hardware renders)
- Skeuomorphic details (drop shadows, gradients, reflections)

### 7.3 Icon usage rules

- **Every icon-only button has an `aria-label`.** No exceptions.
- Icons in text align to **baseline** (via `inline-flex align-middle` trick), not to line-height center.
- Nav buttons: **16px** icons.
- Inline body icons: **14px**.
- Empty-state glyphs: **48px**, `stone` color, no background.
- Category icons in tiles: **20px**, inside a 32px rounded canvas.
- Star ratings: `brand-green`, 14px.

---

## 8 · Motion

Motion is quiet by default. Every animation earns its place.

### 8.1 When motion is used

- **Interactive feedback** — button press (transform 100ms), hover color shift (150ms), focus ring appear (instant).
- **Layout transitions** — cart drawer slide-in (300ms), modal fade-in (200ms), toast enter/exit (200ms), theme switch (200ms cross-fade on affected properties).
- **Loading affordance** — skeleton shimmer (1.5s ease-in-out infinite).
- **Ambient signature** — one animated element per marketing page (the FlowRibbon canvas in the landing hero). No secondary ambient motion.

### 8.2 When motion is prohibited

- Scroll-triggered animations (parallax, fade-in-on-view, reveal-on-scroll). **None.**
- Auto-playing carousels or sliders. **None.**
- Bouncing "back to top" arrows, wiggling elements to draw attention. **None.**
- Animated illustrations. **None.**
- Full-screen loading spinners. Use skeleton shimmer instead.
- Confetti, particle effects, celebratory bursts. **None** (not even on order confirmation).
- Marquee scrolling text. **None.**

### 8.3 Duration rules

| Token | Duration | Use |
|---|---|---|
| `duration-instant` | 100ms | Button press transform |
| `duration-fast` | 150ms | Color / background hover transitions |
| `duration-base` | 200ms | Fade, toast in/out, modal, theme cross-fade |
| `duration-slow` | 300ms | Drawer slide, complex layout shifts |
| — | > 400ms | **Never** for interaction feedback. Only for the FlowRibbon ambient loop (which is measured in seconds, not ms). |

### 8.4 Easing rules

- `ease-out-quart` (`cubic-bezier(0.16, 1, 0.3, 1)`) — enter transitions (default).
- `ease-in-out` (`cubic-bezier(0.4, 0, 0.2, 1)`) — interruptible transitions like drawer, modal.
- `linear` — indeterminate animations only (skeleton shimmer, loading ring if used).
- No custom bezier without a written reason.

### 8.5 Reduced motion

Every `prefers-reduced-motion: reduce` user gets:

- FlowRibbon canvas → **frozen** on a single composed frame (no clock advance)
- Skeleton shimmer → static muted surface (no gradient sweep)
- All `transform` transitions (translateY, translateX, scale) → **instant**
- All `opacity` transitions → **kept** (they're accessible; screen-reader users benefit from smooth appearance)
- Duration overrides on `*, *::before, *::after` to `0.01ms` for the properties that shouldn't animate

---

## 9 · Photography & imagery

**H-Tech does not commission photography or illustration.** The visual system runs on typography, iconography, and gradient placeholders.

### 9.1 Product images

- **Preferred:** distributor-provided product photographs (with permission), rendered on neutral (white or transparent) backgrounds.
- **Fallback:** gradient placeholder (see 9.4) with a monochrome hardware category icon centered.
- Aspect ratio: **1:1** for catalog grid thumbnails, **4:3** for PDP main image.
- Never lifestyle photography ("hand holding GPU" is banned).
- Never overlays, watermarks, or brand stickers on product images.

### 9.2 Illustrations

- **None.** No character illustrations, no hero illustrations, no "empty state" mascots.
- The FlowRibbon canvas is the only decorative visual element in the entire product.

### 9.3 User avatars

- Customer avatars: initials on `surface-3` background, `ink` text, Inter 600, in a `full`-rounded 40×40px circle.
- No uploaded avatar photos in Phase 1 (privacy + moderation cost).
- Admin avatars: same treatment. Two admins total; consistent.

### 9.4 Gradient placeholders

Used for post-cover cards, product-image fallbacks, and empty-state decorative panels.

- Direction: `135deg` (top-left to bottom-right).
- Palette: warm-neutral gradients derived from `surface-2` → `surface`, or subtle brand tints (`brand-green-soft` → `surface`).
- No neon gradients, no rainbow gradients, no photographic gradients.

### 9.5 Future: real photography

If we decide to commission product photography in Phase 2:

- All shot at 1:1 aspect against pure white (`#ffffff`) or transparent background.
- Front, back, and 45° angles per SKU.
- No lifestyle context (no wooden desks, no plants, no keyboards in the frame).
- Post-processed to identical color temperature and exposure.
- Delivered as WebP at 2x DPI (1600×1600 max).

---

## 10 · Brand-level do's and don'ts

### Do

- Reserve `brand-green` for interactive moments and stock signals. Every mint moment carries weight.
- Use Instrument Serif italic only for the five earned roles (hero display, section titles, quote bodies, wordmark mega treatment, final CTA headline).
- Show real numbers, real product names, real category names in demos and mockups. No lorem, no placeholder SKUs.
- Show out-of-stock products with clear badges — never hide them.
- Write copy as if the reader is a friend who already knows about parts.
- Design every component for both themes from day one.
- Test focus rings, screen-reader labels, and keyboard nav on every interactive component.

### Don't

- Don't use emojis in product UI copy.
- Don't add exclamation marks to routine confirmations.
- Don't use "just," "simply," "easily" — they dismiss what follows.
- Don't add taglines to the wordmark ("H-Tech — parts for builders" is banned).
- Don't animate anything beyond the FlowRibbon and standard interaction feedback.
- Don't use stock photography, character illustrations, or lifestyle imagery.
- Don't use CAPS for anything except the 11px eyebrow labels.
- Don't invent new colors — everything comes from the token layer.
- Don't hardcode hex values in components. Every color is a token or a compound of tokens.
- Don't build a component that doesn't exist in DESIGN.md — add it there first.

---

## 11 · Change log

- **v1.0 · 2026-08-28** — Initial identity doc. Locks in wordmark-only mark, five-value framework, single-icon-library rule, motion discipline, no-photography policy.
