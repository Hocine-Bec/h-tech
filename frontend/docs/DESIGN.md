---
version: 1.0
name: H-Tech Design System
description: H-Tech is a dual-mode commerce brand for an Algerian computer-parts store — theme-responsive on every surface, no element stays dark on both modes. The visual identity pairs Inter (UI prose) and Geist Mono (specs, prices, SKUs) with Instrument Serif italic as the signature accent — used sparingly on hero display, section titles, quote bodies, the wordmark, and the mega-footer. A single reserved accent (mint green {colors.brand-green} at #00d4a4) marks CTAs, active states, in-stock confirmations, and the brand's tonal italic highlights. The system spans two surface families: a calm, product-forward storefront with atmospheric hero bands and generous spacing; and a dense, utilitarian admin panel with tight tables, keyboard-first interactions, and no ornamentation. Every token, component, and layout is defined in both light and dark modes and ships from day one.

colors:
  # --- Brand green (shared — the hero accent) ---
  brand-green: "#00d4a4"
  brand-green-deep: "#00b48a"
  brand-green-soft-dark: "rgba(0, 212, 164, 0.14)"
  brand-green-soft-light: "rgba(0, 180, 138, 0.10)"

  # --- Supporting accents — per-theme tuned for consistent visual weight ---
  # Rule: dark-theme variants are slightly brighter / more saturated to hold
  # presence against near-black; light-theme variants are deeper for contrast
  # against warm off-white. The consuming CSS variable (`--brand-warn`, etc)
  # resolves at [data-theme] switch — components never reference the -dark/-light
  # suffixes directly.
  brand-warn-dark:  "#c88a3a"   # softer, more sophisticated amber; harmonizes with mint
  brand-warn-light: "#8a5c1a"   # deeper amber for off-white bg contrast
  brand-warn-soft-dark:  "rgba(200, 138, 58, 0.14)"
  brand-warn-soft-light: "rgba(138, 92, 26, 0.10)"

  brand-error-dark:  "#e26060"
  brand-error-light: "#b83e3e"
  brand-error-soft-dark:  "rgba(226, 96, 96, 0.14)"
  brand-error-soft-light: "rgba(184, 62, 62, 0.10)"

  brand-tag-dark:  "#5a9ff2"
  brand-tag-light: "#2a6db8"
  brand-tag-soft-dark:  "rgba(90, 159, 242, 0.14)"
  brand-tag-soft-light: "rgba(42, 109, 184, 0.10)"

  # --- Dark mode surfaces ---
  dark-canvas: "#000000"
  dark-canvas-elev: "#0a0a0a"
  dark-surface: "#111113"
  dark-surface-2: "#17171a"
  dark-surface-3: "#1c1c1e"
  dark-hairline: "#1f1f22"
  dark-hairline-soft: "#17171a"
  dark-hairline-strong: "#2a2a2e"

  # --- Dark mode text ---
  dark-ink: "#ffffff"
  dark-slate: "#d4d4d6"
  dark-steel: "#a8a8aa"
  dark-stone: "#7a7a7c"
  dark-muted: "#5a5a5c"

  # --- Light mode surfaces (warm off-white, not clinical white) ---
  light-canvas: "#faf9f6"
  light-canvas-elev: "#ffffff"
  light-surface: "#f3f2ec"
  light-surface-2: "#eceae2"
  light-surface-3: "#e2dfd4"
  light-hairline: "#dcdad0"
  light-hairline-soft: "#eeece5"
  light-hairline-strong: "#c6c3b6"

  # --- Light mode text (warm near-black, not pure #000) ---
  light-ink: "#0a0a08"
  light-slate: "#2a2926"
  light-steel: "#5a5852"
  light-stone: "#82807a"
  light-muted: "#a8a5a0"

typography:
  hero-display:
    fontFamily: Instrument Serif
    fontStyle: italic
    fontSize: 84px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.02em
  hero-display-plain:
    fontFamily: Instrument Serif
    fontStyle: normal
    fontSize: 84px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Instrument Serif
    fontStyle: normal
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  section-title:
    fontFamily: Instrument Serif
    fontStyle: normal
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.02em
  quote-serif:
    fontFamily: Instrument Serif
    fontStyle: normal
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.01em
  heading-1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  heading-2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
  heading-3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: -0.2px
  heading-4:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.35
  heading-5:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.40
  subtitle:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-md-medium:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.55
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  body-sm-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
  caption-medium:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.40
  micro:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.08em
    textTransform: uppercase
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  button-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30
  stat-number:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.03em
  price-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.02em
  price-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.01em
  price-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.30
  spec-mono:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
  code-md:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  code-inline:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30
  wordmark:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.3px
  wordmark-serif:
    fontFamily: Instrument Serif
    fontStyle: italic
    fontSize: 240px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.04em

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px
  section-lg: 96px
  hero: 120px

shadow:
  card-dark: "0 1px 2px rgba(0,0,0,0.4)"
  card-light: "0 1px 2px rgba(0,0,0,0.04)"
  hover-dark: "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -6px rgba(0,0,0,0.5)"
  hover-light: "0 1px 2px rgba(0,0,0,0.05), 0 8px 24px -6px rgba(0,0,0,0.08)"
  mockup-dark: "0 40px 80px -20px rgba(0, 212, 164, 0.10), 0 24px 48px -8px rgba(0, 0, 0, 0.6)"
  mockup-light: "0 40px 80px -20px rgba(0, 180, 138, 0.08), 0 24px 48px -8px rgba(0, 0, 0, 0.12)"
  brand-glow: "0 0 0 3px rgba(0, 212, 164, 0.18)"

motion:
  duration-instant: 100ms
  duration-fast: 150ms
  duration-base: 200ms
  duration-slow: 300ms
  ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-in-out: "cubic-bezier(0.4, 0, 0.2, 1)"

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    minHeight: 36px
  button-accent:
    backgroundColor: "{colors.brand-green}"
    textColor: "#000000"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    minHeight: 36px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    border: "1px solid {colors.hairline-strong}"
    minHeight: 36px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.slate}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  button-danger:
    backgroundColor: "{colors.brand-error}"
    textColor: "#ffffff"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-icon-circular:
    backgroundColor: transparent
    textColor: "{colors.slate}"
    rounded: "{rounded.full}"
    size: 36px
    border: "1px solid {colors.hairline-strong}"
  input-text:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    border: "1px solid {colors.hairline-strong}"
    height: 42px
  input-text-focused:
    border: "1px solid {colors.brand-green}"
    ring: "0 0 0 3px {colors.brand-green-soft}"
  input-text-error:
    border: "1px solid {colors.brand-error}"
    ring: "0 0 0 3px {colors.brand-error-soft}"
  select:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "8px 32px 8px 12px"
    border: "1px solid {colors.hairline-strong}"
    height: 36px
  search-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: 40px
    border: "1px solid {colors.hairline}"
  checkbox:
    size: 18px
    rounded: "{rounded.xs}"
    border: "1.5px solid {colors.hairline-strong}"
    backgroundColor-checked: "{colors.brand-green}"
    icon-color-checked: "#000000"
  radio:
    size: 18px
    rounded: "{rounded.full}"
    border: "1.5px solid {colors.hairline-strong}"
    dot-color-checked: "{colors.brand-green}"
  toggle-switch:
    width: 36px
    height: 20px
    rounded: "{rounded.full}"
    trackColor-off: "{colors.hairline-strong}"
    trackColor-on: "{colors.brand-green}"
    thumbColor: "{colors.canvas-elev}"
  card-product:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
    shadow: "{shadow.card}"
  card-product-featured:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "1px solid {colors.brand-green}"
    shadow: "{shadow.mockup}"
  card-bento:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  card-testimonial:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  card-post:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.xl}"
    padding: "0"
    border: "1px solid {colors.hairline}"
  card-admin:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  card-empty-state:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
    border: "1px dashed {colors.hairline-strong}"
  badge-in-stock:
    backgroundColor: "{colors.brand-green-soft}"
    textColor: "{colors.brand-green}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "2px 10px 2px 6px"
  badge-low-stock:
    backgroundColor: "{colors.brand-warn-soft}"
    textColor: "{colors.brand-warn}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "2px 10px 2px 6px"
  badge-out-of-stock:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.stone}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "2px 10px 2px 6px"
  badge-discount:
    backgroundColor: "{colors.brand-green}"
    textColor: "#000000"
    typography: "{typography.micro-uppercase}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  badge-new:
    backgroundColor: "{colors.brand-tag-soft}"
    textColor: "{colors.brand-tag}"
    typography: "{typography.micro-uppercase}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  chip-state-placed:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
    border: "1px solid {colors.hairline}"
  chip-state-confirmed:
    backgroundColor: "{colors.brand-tag-soft}"
    textColor: "{colors.brand-tag}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  chip-state-in-delivery:
    backgroundColor: "{colors.brand-warn-soft}"
    textColor: "{colors.brand-warn}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  chip-state-delivered:
    backgroundColor: "{colors.brand-green-soft}"
    textColor: "{colors.brand-green}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  chip-state-refused:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.stone}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  chip-state-returned:
    backgroundColor: "{colors.brand-error-soft}"
    textColor: "{colors.brand-error}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  chip-filter:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.slate}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    border: "1px solid {colors.hairline}"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  tab-underline:
    backgroundColor: transparent
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    padding: "12px 4px"
    border-bottom: "2px solid transparent"
  tab-underline-active:
    textColor: "{colors.ink}"
    border-bottom: "2px solid {colors.ink}"
  quantity-stepper:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 40px
  promo-banner:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.slate}"
    typography: "{typography.caption-medium}"
    padding: "10px 16px"
    border-bottom: "1px solid {colors.hairline}"
  nav-storefront:
    backgroundColor: "rgba({colors.canvas-rgb}, 0.7)"
    textColor: "{colors.ink}"
    height: 60px
    border-bottom: "1px solid {colors.hairline}"
    backdrop-filter: "saturate(180%) blur(12px)"
  nav-admin:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    height: 56px
    border-bottom: "1px solid {colors.hairline}"
  sidebar-admin:
    backgroundColor: "{colors.canvas-elev}"
    width: 240px
    padding: "{spacing.md}"
    border-right: "1px solid {colors.hairline}"
  sidebar-nav-item:
    backgroundColor: transparent
    textColor: "{colors.slate}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  sidebar-nav-item-active:
    backgroundColor: "{colors.brand-green-soft}"
    textColor: "{colors.brand-green}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  table-admin:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
  table-row:
    padding: "12px 16px"
    border-bottom: "1px solid {colors.hairline-soft}"
  table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.stone}"
    typography: "{typography.micro-uppercase}"
    padding: "10px 16px"
    border-bottom: "1px solid {colors.hairline}"
  wilaya-select:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    border: "1px solid {colors.hairline-strong}"
    height: 42px
  price-lock-notice:
    backgroundColor: "{colors.brand-green-soft}"
    textColor: "{colors.brand-green}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.brand-green}"
  price-change-warning:
    backgroundColor: "{colors.brand-warn-soft}"
    textColor: "{colors.brand-warn}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.brand-warn}"
  toast:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    border: "1px solid {colors.hairline-strong}"
    shadow: "{shadow.hover}"
  skeleton:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.sm}"
    animation: "shimmer 1.5s ease-in-out infinite"
  cart-drawer:
    backgroundColor: "{colors.canvas-elev}"
    width: 420px
    padding: "{spacing.xl}"
    border-left: "1px solid {colors.hairline}"
  order-status-timeline:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  hero-band-marketing:
    backgroundColor: "{colors.canvas}"
    padding: "{spacing.hero} 0 {spacing.section-sm}"
    overlay: "radial-gradient(1200px 500px at 80% 20%, {colors.brand-green-soft} 0%, transparent 60%)"
  hero-product-mockup:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.xl}"
    border: "1px solid {colors.hairline-strong}"
    shadow: "{shadow.mockup}"
  footer-region:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.slate}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} 0 {spacing.xl}"
    border-top: "1px solid {colors.hairline}"

  # ============================================================
  # UI kit v2 additions — foundations + primitives + patterns
  # See design-mockups/_ui-kit.html for visual reference of each.
  # ============================================================

  # ---- Foundation patterns ----
  focus-ring:
    style: "double-layered box-shadow"
    innerRing: "2px solid {colors.canvas}"
    outerRing: "2px solid {colors.brand-green}"
    errorVariant-outerRing: "2px solid {colors.brand-error}"
    trigger: ":focus-visible"
  live-pulse:
    dotColor: "{colors.brand-green}"
    dotSize: 8px
    ringAnimation: "expand + fade 2s ease-in-out infinite"
    reducedMotion: "static 35% opacity ring at scale(1.4)"

  # ---- Kbd ----
  kbd:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.slate}"
    typography: "{typography.code-inline}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
    minSize: 20px
    border: "1px solid {colors.hairline}"
    shadow: "0 1px 0 {colors.hairline}"

  # ---- Spinner (loading affordance) ----
  spinner:
    style: "border-ring with transparent right"
    borderWidth: 2px
    animation: "spin 800ms linear infinite"
    color: currentColor

  # ---- Rating stars ----
  rating-star:
    color: "{colors.brand-green}"
    emptyColor: "{colors.hairline-strong}"
    defaultSize: 14px
    largeSize: 18px
    supportsHalfStar: true

  # ---- Filter chip variants ----
  filter-chip-count:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.stone}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "1px 6px"
  filter-chip-removable:
    baseComponent: "{components.chip-filter}"
    additions: "close-x icon (18px round), positioned trailing"
  filter-chip-overflow:
    backgroundColor: transparent
    borderStyle: dashed
    textColor: "{colors.stone}"

  # ---- Tab variants ----
  tab-count:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.stone}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "1px 6px"
    activeBackground: "{colors.brand-green-soft}"
    activeColor: "{colors.brand-green}"
  segmented-control:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: 3px
    border: "1px solid {colors.hairline}"
  segmented-control-active:
    backgroundColor: "{colors.canvas-elev}"
    textColor: "{colors.ink}"
    shadow: "{shadow.card}"

  # ---- Category tile ----
  category-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
    minHeight: 116px
    iconCanvas: "32px rounded-md, {colors.canvas} bg, hairline border"

  # ---- Address card ----
  address-card:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  address-card-default:
    border: "1px solid {colors.brand-green}"
    shadow: "0 0 0 3px {colors.brand-green-soft}"
    badge: "Default label in brand-green-soft top-right"

  # ---- Cart line item ----
  cart-line:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
    layout: "72px thumb + body (brand + name + qty + remove) + right (line-price + unit)"

  # ---- Refined product card (extends card-product) ----
  card-product-refined:
    extends: "{components.card-product}"
    additions: "wishlist heart (top-right, 32px circle), sale/new badge (top-left), rating row below name, price-stack with struck original"

  # ---- Toast enhancements ----
  toast-with-action:
    extends: "{components.toast}"
    additions: "action button (brand-green), auto-dismiss progress bar (2px, brand-color, scaleX animation)"
  toast-stack:
    layout: "vertical, bottom-right, 8px gap, right-aligned"

  # ---- Modal backdrop context ----
  modal-backdrop:
    color: "rgb(0 0 0 / 0.55)"
    blur: "backdrop-filter: blur(2px)"
    dismissTriggers: ["Esc", "click outside"]

  # ---- Dropdown menu ----
  dropdown-menu:
    backgroundColor: "{colors.canvas-elev}"
    border: "1px solid {colors.hairline-strong}"
    rounded: "{rounded.md}"
    padding: 4px
    shadow: "{shadow.hover}"
    minWidth: 200px
  dropdown-menu-item:
    padding: "8px 10px"
    rounded: "{rounded.sm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    hoverBackground: "{colors.surface-2}"
  dropdown-menu-item-danger:
    textColor: "{colors.brand-error}"
    hoverBackground: "{colors.brand-error-soft}"
  dropdown-menu-label:
    typography: "{typography.micro-uppercase}"
    textColor: "{colors.stone}"
    padding: "8px 10px 4px"

  # ---- Tooltip ----
  tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.sm}"
    padding: "5px 9px"
    shadow: "{shadow.hover}"
    arrow: "4px triangle, matching bg"
    positions: [top, right, bottom, left]

  # ---- Breadcrumbs ----
  breadcrumbs:
    typography: "{typography.caption}"
    textColor: "{colors.stone}"
    activeColor: "{colors.ink}"
    activeWeight: 500
    separator: "/ in {colors.muted}"
    homeIcon: "14px lucide home"

  # ---- Pagination ----
  pagination-page:
    backgroundColor: "{colors.canvas-elev}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    minSize: 34px
    textColor: "{colors.slate}"
    typography: "{typography.body-sm-medium}"
  pagination-page-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    borderColor: "{colors.ink}"
  pagination-page-disabled:
    textColor: "{colors.muted}"
    opacity: 0.6
    cursor: not-allowed

  # ---- Divider ----
  divider-horizontal:
    color: "{colors.hairline}"
    thickness: 1px
  divider-labeled:
    layout: "hairline before + micro-uppercase label + hairline after"
    labelColor: "{colors.stone}"
    labelTypography: "{typography.micro-uppercase}"

  # ---- Avatar ----
  avatar:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    sizes: { xs: 20px, sm: 28px, md: 36px, lg: 48px, xl: 64px }
    tintVariants: [brand-green, brand-tag, brand-warn, brand-error]
  avatar-stack:
    overlap: -8px
    borderColor: "{colors.canvas-elev}"
    borderWidth: 2px

  # ---- Alert / inline callout ----
  alert:
    padding: "{spacing.md} {spacing.lg}"
    rounded: "{rounded.md}"
    border: "1px solid"
    layout: "icon + title (600) + description (slate)"
    persistent: true
    dismissable: false
  alert-info:
    backgroundColor: "{colors.brand-tag-soft}"
    borderColor: "{colors.brand-tag}"
    iconColor: "{colors.brand-tag}"
    titleColor: "{colors.brand-tag}"
  alert-warn:
    backgroundColor: "{colors.brand-warn-soft}"
    borderColor: "{colors.brand-warn}"
    iconColor: "{colors.brand-warn}"
    titleColor: "{colors.brand-warn}"
  alert-error:
    backgroundColor: "{colors.brand-error-soft}"
    borderColor: "{colors.brand-error}"
    iconColor: "{colors.brand-error}"
    titleColor: "{colors.brand-error}"
  alert-success:
    backgroundColor: "{colors.brand-green-soft}"
    borderColor: "{colors.brand-green}"
    iconColor: "{colors.brand-green}"
    titleColor: "{colors.brand-green}"

  # ---- Empty state variants (extend card-empty-state) ----
  empty-compact:
    extends: "{components.card-empty-state}"
    padding: "{spacing.xl} {spacing.lg}"
    layout: "24px glyph + small heading + one-line + sm CTA"
  empty-full-page:
    extends: "{components.card-empty-state}"
    padding: "{spacing.section-lg} {spacing.xxl}"
    maxWidth: 720px
    layout: "64px glyph + h2 + subtitle + lg CTA"

  # ---- Skeleton variants ----
  skeleton-table-row:
    layout: "40px avatar + 2 text bars + chip + text bar"
  skeleton-pdp:
    layout: "2-col grid, aspect 4/3 image left + text stack right"

  # ---- Timeline variants ----
  timeline-horizontal:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
    layout: "flex row, steps evenly spaced, connecting lines between dots"
    activeStep: "same hollow-mint-ring-pulse pattern as vertical"
  timeline-errored:
    dotBackground: "{colors.brand-error-soft}"
    dotBorder: "2px solid {colors.brand-error}"
    labelColor: "{colors.brand-error}"
    connectingLine: "{colors.brand-error}"

  # ---- Price patterns ----
  price-with-discount:
    layout: "current (28px 600) + struck original (14px stone) + Save badge (brand-green)"
  price-range:
    prefixLabel: "From (micro-uppercase stone)"
    value: "{typography.price-md}"
  price-summary:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
    maxWidth: 320px
    lineGap: 16px
    totalGap: 24px
    lineTypography: "{typography.body-sm}"
    totalTypography: "{typography.body-md-medium}"
    totalValueTypography: "{typography.price-md}"

  # ---- Stock-drop notice ----
  stock-drop-notice:
    backgroundColor: "{colors.brand-warn-soft}"
    border: "1px solid {colors.brand-warn}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    iconColor: "{colors.brand-warn}"
    trigger: "cart-item stock decreased between add-to-cart and checkout"

  # ---- Order-row (in-context chip pattern) ----
  order-row:
    backgroundColor: "{colors.canvas-elev}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.md}"
    border: "1px solid {colors.hairline}"
    layout: "ref-mono + customer-stack + state-chip + total-mono + when-relative"

  # ---- Input pattern additions (extend input-text) ----
  input-with-lead:
    extends: "{components.input-text}"
    paddingLeft: 40px
    leadIcon: "positioned absolute, 12px from left, stone color"
  input-with-trail:
    extends: "{components.input-text}"
    paddingRight: 40px
    trailIcon: "positioned absolute, 12px from right, stone color, interactive (e.g., password visibility toggle)"
  input-with-prefix:
    extends: "{components.input-text}"
    paddingLeft: 58px
    prefix: "static text (e.g., +213), mono font, stone color"
  input-with-suffix:
    extends: "{components.input-text}"
    paddingRight: 42px
    suffix: "static text (e.g., DA), mono font, stone color"
  checkbox-indeterminate:
    extends: "{components.checkbox}"
    fill: "{colors.brand-green}"
    marker: "horizontal 2px black bar (instead of check)"
  toggle-row:
    layout: "flex space-between, name (500 ink) + description (13 stone), toggle right"
    padding: "14px 0"
    divider: "1px solid {colors.hairline-soft} bottom"
  stepper-with-tooltip:
    extends: "{components.quantity-stepper}"
    additions: "ink tooltip above showing stock context (e.g., 'Only 4 in stock') when + button disabled"

  # ---- Button loading variant ----
  button-loading:
    extends: "{components.button-primary}"
    additions: "spinner (12px) + text (e.g., 'Placing order…'), pointer-events: none, cursor: wait, opacity: 0.85"

  # ---- Search autocomplete ----
  search-panel:
    backgroundColor: "{colors.canvas-elev}"
    border: "1px solid {colors.hairline-strong}"
    rounded: "{rounded.md}"
    padding: 8px
    shadow: "{shadow.hover}"
    triggerOnFocus: true
    layout: "grouped sections (Products, Categories, Recent searches) with 32px thumbs + name + sub + right-aligned price"

  # ============================================================
  # Shop page + mega-menu additions
  # See design-mockups/{shop.html, _mega-menu.html} for reference
  # ============================================================

  # ---- Mega-menu (Shop hover reveal) ----
  mega-menu:
    backgroundColor: "{colors.canvas-elev}"
    border: "1px solid {colors.hairline-strong}"
    borderTop: 0
    rounded: "0 0 {rounded.xl} {rounded.xl}"
    padding: "28px 32px 24px"
    shadow: "{shadow.hover}"
    zIndex: 50
    revealAnimation: "opacity + 4px translateY, 200ms ease-out-quart"
    grid: "3 columns × 3 rows for 9 categories"
    trigger: "mouseenter Shop nav link"
    close: "mouseleave (200ms grace), Esc, click outside"
    backdrop: "rgb(0 0 0 / 0.35) with 2px blur, non-blocking"
  mega-menu-item:
    padding: "{spacing.md} {spacing.md}"
    rounded: "{rounded.md}"
    hoverBackground: "{colors.surface}"
    iconCanvas: "36px rounded-md, {colors.surface} bg, hairline border"
    iconHoverBackground: "{colors.brand-green-soft}"
    iconHoverBorder: "{colors.brand-green}"
    iconHoverColor: "{colors.brand-green}"
    nameTypography: "{typography.body-sm-medium}"
    descTypography: "{typography.caption}"
    countTypography: "{typography.micro} mono, {colors.stone}"
  mega-menu-bundle:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    hoverBackground: "{colors.brand-green-soft}"
    hoverBorder: "{colors.brand-green}"

  # ---- Shop filter panel ----
  filter-panel:
    position: "sticky (top: 76px)"
    width: 260px
    maxHeight: "calc(100vh - 92px)"
    overflowY: auto
    layoutBelowTablet: "static, background canvas-elev, hairline border, {rounded.lg}, {spacing.lg} padding"
  filter-group:
    separator: "1px solid {colors.hairline} between groups + {spacing.xl} vertical rhythm"
  filter-heading:
    typography: "{typography.micro-uppercase}"
    textColor: "{colors.stone}"
    marginBottom: 12px
  filter-item:
    padding: "6px 8px"
    rounded: "{rounded.sm}"
    typography: "{typography.body-sm}"
    textColor: "{colors.slate}"
    hoverBackground: "{colors.surface}"
    hoverColor: "{colors.brand-green}"
    activeColor: "{colors.ink}"
    activeWeight: 500
    countTypography: "{typography.micro} mono, {colors.stone}"
  filter-check:
    size: 16px
    rounded: "{rounded.xs}"
    background: "{colors.canvas-elev}"
    border: "1.5px solid {colors.hairline-strong}"
    checkedBackground: "{colors.brand-green}"
  filter-radio:
    size: 16px
    rounded: "{rounded.full}"
    background: "{colors.canvas-elev}"
    border: "1.5px solid {colors.hairline-strong}"
    checkedDotColor: "{colors.brand-green}"
  price-range-slider:
    trackHeight: 4px
    trackBackground: "{colors.surface-2}"
    fillBackground: "{colors.brand-green}"
    handleSize: 14px
    handleBackground: "{colors.canvas-elev}"
    handleBorder: "2px solid {colors.brand-green}"
  applied-filter-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: "5px 6px 5px 12px"
    closeIcon: "18px round, hover background rgba(255,255,255,0.15)"

  # ---- Bundle card (used on shop, categories, mega-menu, /bundles) ----
  bundle-card:
    backgroundColor: "{colors.canvas-elev}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    hoverBorder: "{colors.brand-green}"
    hoverTransform: "translateY(-2px)"
    layout: "brand-green tag pill + h3 title + parts list (checkmark + name) + footer (price + save-percent)"
    tagBackground: "{colors.brand-green-soft}"
    tagTextColor: "{colors.brand-green}"
    savePillBackground: "{colors.brand-green}"
    savePillTextColor: "#000"
---

## Overview

H-Tech is a two-surface product: a **storefront** that must feel calm, product-forward, and instant; and an **admin panel** that must feel dense, keyboard-driven, and impossible to lose an order in. Both share one token layer.

The brand personality lives at the intersection of three references:
- **Mintlify** contributes the mint accent green, the reserved application of that accent to CTAs and active states, and the Inter + Geist Mono pairing.
- **Resend / Linear** contribute the italic serif accent typeface. Instrument Serif italic is our signature — used on hero display, section titles, quote bodies, the wordmark, and the mega footer. Never on body prose, forms, or admin surfaces.
- **SpaceX / Vercel** contribute the dark-canvas discipline and the willingness to spend one animated element (the FlowRibbon) in the hero and nothing else.

**Two modes, day one.** Light mode uses a warm off-white canvas (`#faf9f6`) — not clinical `#ffffff` — with a warm near-black ink (`#0a0a08`). Dark mode uses pure `#000000` canvas with white ink. The mint accent, error red, warn amber, and tag blue are identical across both modes; only surface and text tokens flip.

**Two densities.** Storefront lives on a 1,200–1,280px content column with `{spacing.hero}` above-the-fold and `{spacing.section-lg}` between marketing bands. Admin lives edge-to-edge with a fixed 240px sidebar, a 56px top nav, and section rhythm at `{spacing.xxl}` — half the storefront's breathing room.

**Key characteristics:**
- Dual-mode from launch (dark and light both defined for every component)
- Reserved mint accent `{colors.brand-green}` (#00d4a4) for CTAs, active states, in-stock chips, italic display highlights
- Inter for UI prose; Geist Mono for specs, prices, SKUs, code; Instrument Serif italic for accents only
- Signature ambient motion: FlowRibbon canvas mesh in the hero, respects `prefers-reduced-motion`
- Six-color order lifecycle chip system (Placed / Confirmed / In delivery / Delivered / Refused / Returned)
- Wilaya + commune two-step address selector as a first-class Algerian-market pattern
- Every rounded corner comes from a 7-step scale; nothing between the steps

## Brand identity

### The wordmark
`H-Tech` is set in Inter 600 at nav sizes and Instrument Serif italic at the mega-footer size (240px). The hyphen in the serif treatment is italicized independently and rendered in `{colors.brand-green}` — this is the single tonal signature of the brand mark. Do not italicize the hyphen anywhere else in copy; it belongs to the mark.

Nav-size mark: `H-Tech` in Inter 600, 17px, `{colors.ink}`, paired with a 22px rounded-square icon in `{colors.brand-green}` containing a stylized motherboard/circuit-page glyph in `#000`.

Mega-footer mark: `H` + italic serif hyphen (green) + `Tech`, at `clamp(72px, 18vw, 240px)`, `{typography.wordmark-serif}`, letter-spacing `-0.04em`.

### The italic serif rule
Instrument Serif italic is the loudest signal we have. It earns its role only in these five places:
1. **Hero display** — one word or short phrase italicized for emphasis (e.g. "The parts your rig *actually* needs")
2. **Section titles** — one word italicized (e.g. "One store built *around* the way you actually buy parts")
3. **Quote bodies** on testimonial cards (whole quote in serif, not italic; author still in Inter)
4. **The wordmark** in the mega-footer
5. **Final CTA headline** on marketing pages

Do not use Instrument Serif for: body copy, form labels, button labels, admin UI, stat numbers, badges, table content, or navigation.

### The reserved accent
`{colors.brand-green}` earns its weight by being rare. It appears in exactly these roles:
- Primary accent CTA (mint pill button — used once per marketing viewport, typically the hero)
- In-stock chips and stock-count indicators
- Active state on sidebar nav items in admin
- The italicized word in hero and section titles
- The italicized hyphen in the wordmark
- The `sidebar-nav-item-active` background
- The `chip-state-delivered` and price-lock notice surfaces
- Focus rings on inputs (2px border + 3px soft ring)

Do not use `{colors.brand-green}` on: stat numbers, headings, body copy, footer link hover, decorative dividers, or as a section background.

## Colors

### Brand
| Token | Value | Use |
|---|---|---|
| `{colors.brand-green}` | `#00d4a4` | CTAs, active states, in-stock, italicized display accents, focus rings |
| `{colors.brand-green-deep}` | `#00b48a` | Pressed/active variant of accent buttons |
| `{colors.brand-green-soft-dark}` | `rgba(0,212,164,0.14)` | In-stock chip background, active sidebar background (dark mode) |
| `{colors.brand-green-soft-light}` | `rgba(0,180,138,0.10)` | Same, tuned for light-canvas contrast |
| `{colors.brand-error}` | `#e26060` dark / `#b83e3e` light | Destructive buttons, error borders, validation, returned-DOA chip |
| `{colors.brand-warn}` | `#c88a3a` dark / `#8a5c1a` light | Low stock, in-delivery chip, price-change warnings, order-state motion cues (NOT timeline "active" step — that's brand-green ring) |
| `{colors.brand-tag}` | `#5a9ff2` dark / `#2a6db8` light | Confirmed state, "NEW" badges, informational tags |

### Dark mode surfaces
| Token | Value | Use |
|---|---|---|
| `{colors.dark-canvas}` | `#000000` | Page background |
| `{colors.dark-canvas-elev}` | `#0a0a0a` | Card, mockup, elevated surfaces |
| `{colors.dark-surface}` | `#111113` | Muted section background, search bar rest |
| `{colors.dark-surface-2}` | `#17171a` | Secondary surface (hover, filter chips) |
| `{colors.dark-surface-3}` | `#1c1c1e` | Tertiary surface (avatar background, disabled buttons) |
| `{colors.dark-hairline}` | `#1f1f22` | Default 1px borders and dividers |
| `{colors.dark-hairline-soft}` | `#17171a` | Quieter table-row dividers |
| `{colors.dark-hairline-strong}` | `#2a2a2e` | Stronger borders on inputs, secondary buttons |

### Dark mode text
| Token | Value | Use |
|---|---|---|
| `{colors.dark-ink}` | `#ffffff` | Primary headlines, CTA text |
| `{colors.dark-slate}` | `#d4d4d6` | Body prose, subtitles |
| `{colors.dark-steel}` | `#a8a8aa` | Nav links, table cells, secondary text |
| `{colors.dark-stone}` | `#7a7a7c` | Captions, metadata, muted labels |
| `{colors.dark-muted}` | `#5a5a5c` | Disabled text, deep de-emphasis |

### Light mode surfaces
| Token | Value | Use |
|---|---|---|
| `{colors.light-canvas}` | `#faf9f6` | Page background (warm off-white — deliberately not `#fff`) |
| `{colors.light-canvas-elev}` | `#ffffff` | Card, mockup, elevated surfaces |
| `{colors.light-surface}` | `#f3f2ec` | Muted section background, search bar rest |
| `{colors.light-surface-2}` | `#eceae2` | Secondary surface |
| `{colors.light-surface-3}` | `#e2dfd4` | Tertiary surface |
| `{colors.light-hairline}` | `#dcdad0` | Default 1px borders and dividers |
| `{colors.light-hairline-soft}` | `#eeece5` | Quieter table-row dividers |
| `{colors.light-hairline-strong}` | `#c6c3b6` | Stronger borders on inputs, secondary buttons |

### Light mode text
| Token | Value | Use |
|---|---|---|
| `{colors.light-ink}` | `#0a0a08` | Primary headlines (near-black with warm tint, not `#000`) |
| `{colors.light-slate}` | `#2a2926` | Body prose, subtitles |
| `{colors.light-steel}` | `#5a5852` | Nav links, table cells, secondary text |
| `{colors.light-stone}` | `#82807a` | Captions, metadata, muted labels |
| `{colors.light-muted}` | `#a8a5a0` | Disabled text, deep de-emphasis |

### Why warm off-white for light mode
Pure `#ffffff` on a screen next to warm-black type feels clinical and cheap — it's the DPI of an office printer, not the tone of a brand people trust with their money. `#faf9f6` reads as paper, pairs better with the mint accent (mint on true white is harsh; mint on off-white is calm), and creates a distinct H-Tech light identity that's not just "dark mode inverted."

## Typography

### Font families
- **Inter** (primary UI): body, headings, navigation, buttons, forms, tables. Weights: 400, 500, 600, 700. Variable font served from Google Fonts. Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.
- **Geist Mono** (technical): prices, SKUs, product specs, code blocks, URL pills in mockups, DA amounts in tables (where visual alignment matters). Weights: 400, 500. Fallback: `'SF Mono', Menlo, Consolas, monospace`.
- **Instrument Serif** (accent): italic display, wordmark, quote bodies. Weight: 400 only. Italic and regular styles. Fallback: `'ABC Arizona', 'Times New Roman', serif`.

### Type roles

| Token | Family / Style | Size | Weight | Use |
|---|---|---|---|---|
| `{typography.hero-display}` | Instrument Serif italic | 84px (clamp 44–84) | 400 | Hero H1 (with one italicized green word) |
| `{typography.display-lg}` | Instrument Serif | 56px | 400 | Major page-opening headlines |
| `{typography.section-title}` | Instrument Serif | 44px (clamp 32–52) | 400 | Marketing section headlines |
| `{typography.quote-serif}` | Instrument Serif | 24px | 400 | Testimonial quote bodies |
| `{typography.heading-1}` | Inter | 32px | 600 | Admin page titles, product detail name |
| `{typography.heading-2}` | Inter | 24px | 600 | Admin subsection titles, cart totals |
| `{typography.heading-3}` | Inter | 20px | 600 | Card titles, panel headers |
| `{typography.heading-4}` | Inter | 17px | 600 | Sidebar section headers, form section headers |
| `{typography.heading-5}` | Inter | 15px | 600 | Feature card titles, faq questions |
| `{typography.subtitle}` | Inter | 18px | 400 | Hero subtitle, lead paragraphs |
| `{typography.body-md}` | Inter | 16px | 400 | Marketing body, PDP description |
| `{typography.body-sm}` | Inter | 14px | 400 | Admin body, table cells, form help text |
| `{typography.stat-number}` | Inter | 56px | 600 | Dashboard numbers, stats band |
| `{typography.price-lg}` | Inter | 28px | 600 | PDP price |
| `{typography.price-md}` | Inter | 18px | 600 | Cart line-item price |
| `{typography.price-sm}` | Inter | 14px | 600 | Product-card price |
| `{typography.spec-mono}` | Geist Mono | 13px | 400 | Product specifications, SKU codes |
| `{typography.code-inline}` | Geist Mono | 13px | 500 | Order IDs, tracking numbers, admin field references |
| `{typography.micro-uppercase}` | Inter | 11px | 600 uppercase | Sidebar section headers, "REQUIRED" labels, brand section eyebrows |

### Typographic principles
- **Instrument Serif is a signal, not a workhorse.** Every use costs weight. Five earned roles, no others.
- **Prices are always in Inter 600 or Geist Mono 500** — never in the serif. Money must read as data, not as literature.
- **Stat numbers are Inter 600.** Deliberate departure from the current landing preview: green italic stats weaken the accent. Stats read as data (Inter 600) so the accent stays reserved for interactive moments.
- **Body copy is `{typography.body-md}` on marketing surfaces and `{typography.body-sm}` on admin surfaces.** Never squeeze marketing below 16px.
- **Line-height is 1.55 for body prose** on both surfaces. This is the readability minimum; nothing tighter.
- **Uppercase micro labels** with `+0.08em` letter-spacing carry section eyebrows ("THE H-TECH PROMISE", "BY THE NUMBERS") and admin labels ("STATUS", "TOTAL").
- **Negative letter-spacing** scales inversely with size: hero display `-0.02em`, section title `-0.02em`, heading-1 `-0.5px`, heading-2 `-0.3px`, body `0`. No spacing on captions.

## Layout

### Grid & container
- **Storefront marketing pages:** 1,200–1,280px max content, 24px gutters, hero can bleed to viewport edge for atmospheric backgrounds. Section rhythm `{spacing.section-lg}` (96px).
- **Storefront catalog/PDP:** 1,200px content, filter sidebar 240px + product grid remainder. Section rhythm `{spacing.section}` (64px).
- **Storefront checkout / order lookup:** narrower — 720px centered form column. Rhythm `{spacing.xxl}` (32px).
- **Admin panel:** full viewport width. Fixed 240px sidebar (left), top nav 56px, main content region has 32px internal padding on the outermost card only. Section rhythm `{spacing.xxl}` (32px).
- **Product grid:** 4-up at desktop (≥1024px), 3-up at 768–1023px, 2-up at 480–767px, 1-up below 480px. Grid gap `{spacing.md}` (16px).
- **Bento grid:** 6-column at desktop, tiles span 2, 3, or 6 columns. Gap `{spacing.sm}` (12px).

### Spacing tokens
Base unit 4px. Increment ladder: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 96 · 120`.

**Storefront density (marketing):**
- Hero pad-top: `{spacing.hero}` (120px)
- Between marketing bands: `{spacing.section-lg}` (96px)
- Inside cards: `{spacing.xxl}` (32px)
- Between paragraphs: `{spacing.md}` (16px)

**Storefront density (commerce):**
- Between sections: `{spacing.section}` (64px)
- Inside product cards: `{spacing.md}` (16px)
- Form field vertical rhythm: `{spacing.md}` (16px)
- Cart line-item padding: `{spacing.md}` (16px)

**Admin density:**
- Between sections: `{spacing.xxl}` (32px)
- Card padding: `{spacing.lg}` (20px)
- Table row height: 44px (padding `12px 16px`)
- Sidebar nav vertical rhythm: 4px between items
- Form field vertical rhythm: `{spacing.sm}` (12px)

### Whitespace philosophy
Marketing bands breathe — the atmospheric hero, the mint radial glow, the italic serif all need silence around them to land. Admin bands compress — every screen has work to do. The rule: if a user is *deciding*, give them space; if they're *executing* (updating a price, confirming an order, editing a product), give them speed.

## Elevation & depth

The system is predominantly flat. Elevation is one of five levels, applied purposefully.

| Level | Treatment | Use |
|---|---|---|
| 0 flat | `{colors.hairline}` border only | Default cards, tables, form inputs |
| 1 subtle | `{shadow.card}` | Hovered product cards (transform: translateY(-2px) + border-color shift) |
| 2 elevated | `{shadow.hover}` | Toasts, cart drawer, admin modals |
| 3 mockup | `{shadow.mockup}` | Hero product mockup — includes soft brand-green glow (dark) or brand shadow (light) |
| 4 brand-glow | `{shadow.brand-glow}` | Input focus rings, in-stock dot outer glow |

### Ambient depth
The hero band uses no shadow — depth comes from the FlowRibbon canvas mesh (a slow-moving mint-green ribbon rendered on a dark gradient with radial glow overlay). The mesh respects `prefers-reduced-motion` and freezes to a static composed frame if requested. Everywhere else, the system stays flat.

## Shape & radius

Seven-step radius scale. Never mix values between components in the same family.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Inline code, micro tags, checkbox |
| `{rounded.sm}` | 6px | Sidebar nav items, type badges, discount badges, skeletons |
| `{rounded.md}` | 8px | Inputs, search bar, admin tables, price-lock notice, secondary cards, toasts |
| `{rounded.lg}` | 12px | Product cards, order status timeline, filter panels, empty states |
| `{rounded.xl}` | 16px | Bento tiles, testimonial cards, hero mockup, category tile group |
| `{rounded.xxl}` | 24px | Featured product showcase (rare) |
| `{rounded.full}` | 9999px | Buttons, chips, badges, avatars, in-stock dots, toggles |

Rule: pill buttons (`{rounded.full}`) are used universally for CTAs, chips, and badges. Rectangular admin surfaces use `{rounded.md}`. Marketing cards use `{rounded.lg}` or `{rounded.xl}` depending on prominence. Never soften a pill.

## Motion

The system is quiet. Motion earns its role in these moments only:

| Interaction | Duration | Ease |
|---|---|---|
| Button press | `{motion.duration-instant}` (100ms) | linear (transform: translateY(1px)) |
| Hover color/background shift | `{motion.duration-fast}` (150ms) | `{motion.ease-out}` |
| Card lift on hover | `{motion.duration-fast}` (150ms) | `{motion.ease-out}` (transform + border-color) |
| Toast enter/exit | `{motion.duration-base}` (200ms) | `{motion.ease-out}` |
| Cart drawer slide-in | `{motion.duration-slow}` (300ms) | `{motion.ease-in-out}` |
| Modal fade-in | `{motion.duration-base}` (200ms) | `{motion.ease-out}` |
| Skeleton shimmer | 1.5s | ease-in-out infinite |
| FlowRibbon canvas | continuous | tuned config (see landing preview) |

Everything else is instant. Respect `prefers-reduced-motion` — freeze the FlowRibbon to a static composed frame, kill hover transforms, keep only opacity/color transitions.

## Components

> **Theme-responsive rule.** Every component below is defined once in tokens; both themes render from the same spec. No component "stays dark on both modes" or "stays light on both modes." If you find yourself reaching for a hardcoded hex value, stop and add a token instead. The only hex values allowed in component specs are the brand green hero color (`#00d4a4`) and its pressed variant (`#00b48a`) — these are constant across themes. The supporting accents (`brand-warn`, `brand-error`, `brand-tag`) each have a `-dark` and `-light` variant tuned for consistent visual weight per theme; components always reference the semantic token (`{colors.brand-warn}`) and the CSS variable resolves at `[data-theme]` switch. Never hardcode a supporting-accent hex in a component spec.

### Buttons

**`button-primary`** — Ink pill, the dominant marketing CTA.
- Background `{colors.ink}`, text `{colors.canvas}` — always inverse of surrounding surface. In dark mode: white pill with black text. In light mode: near-black pill with warm-white text.
- Inter 500 14px, padding `10px 20px`, rounded `{rounded.full}`.
- **Hover: background flips to `{colors.brand-green}`, text to `#000`** — the button visually becomes the accent variant on hover, reinforcing the brand as the "you're about to activate" signal. Same behavior in both themes.
- Pressed: `transform: translateY(1px)`.
- Disabled: `{colors.hairline}` background, `{colors.muted}` text.

**`button-accent`** — Mint pill, the brand-emphasis CTA. Used once per marketing viewport.
- Background `{colors.brand-green}`, text `#000`, Inter 500 14px.
- Hover: `{colors.brand-green-deep}`.

**`button-secondary`** — Outlined pill for secondary actions.
- Transparent background, `{colors.ink}` text, `1px solid {colors.hairline-strong}` border.
- **Hover: background `{colors.brand-green-soft}`, border `{colors.brand-green}`, text `{colors.brand-green}`** — full brand-green treatment, matches the system-wide hover-green rule.

**`button-ghost`** — Quieter rectangular button for tertiary actions (sidebar links, nav "Sign in" on marketing).
- Transparent, `{colors.slate}` text, padding `8px 12px`, rounded `{rounded.md}`.

**`button-danger`** — Destructive action (delete product, cancel order, remove item from cart).
- `{colors.brand-error}` background, white text, pill.

**`button-icon-circular`** — 36px circular utility button (close, wishlist heart, share, admin edit).
- Transparent background, `{colors.slate}` icon, `1px solid {colors.hairline-strong}` border.

**Button sizing:** primary at 36–40px effective height; small variant at 32px (padding `6px 12px`, font-size 13px); large variant at 48px (padding `14px 28px`, font-size 15px) for the hero CTA.

### Cards & containers

**`card-product`** — Storefront product tile.
- `{colors.canvas-elev}` background, `1px solid {colors.hairline}`, `{rounded.lg}`, padding `{spacing.md}`.
- Layout: image (aspect-ratio 4:3, `{rounded.md}` corners, dark gradient placeholder) → brand micro-uppercase → product name (heading-5, 2-line clamp) → price row (Inter 600 `{typography.price-sm}` + stock chip).
- Hover: `transform: translateY(-2px)`, `border-color: {colors.hairline-strong}`.

**`card-product-featured`** — Highlighted PDP-related product or homepage feature card.
- Same as `card-product` but border `{colors.brand-green}` and `{shadow.mockup}` shadow.

**`card-bento`** — Marketing bento tile.
- `{colors.canvas-elev}` background, `{rounded.xl}` corners, `1px solid {colors.hairline}`, padding `{spacing.xxl}`.
- Structure: heading (`{typography.heading-3}` Inter 600) + description (`{typography.body-sm}` `{colors.slate}`) + visual region (flex-grow, min-height 120px).
- Hover: `border-color: {colors.hairline-strong}`.

**`card-testimonial`** — Quote card.
- `{colors.canvas-elev}` background, `{rounded.xl}` corners, `1px solid {colors.hairline}`, padding `{spacing.xxl}`.
- Structure: star row in `{colors.brand-green}` → quote body in `{typography.quote-serif}` (Instrument Serif 24px `{colors.ink}`) → author block (40px avatar + name + role in `{typography.caption}` `{colors.stone}`).

**`card-post`** — Blog/guide preview card.
- `{colors.canvas-elev}`, `{rounded.xl}`, cover image band (160px height, gradient wash), body padding `20px 22px 24px`.
- Cover band uses a light gradient wash on light mode / dark gradient on dark; do not use full-color decorative photography — brand doesn't own images.

**`card-admin`** — Admin panel container.
- `{colors.canvas-elev}`, `{rounded.md}`, `1px solid {colors.hairline}`, padding `{spacing.lg}`. Denser than storefront cards, no hover elevation.

**`card-empty-state`** — Empty result set (no products match filter, no orders in this state, no wishlist items).
- `{colors.canvas-elev}`, `{rounded.lg}`, `1px dashed {colors.hairline-strong}`, padding `{spacing.section}`.
- Layout: 40px monochrome glyph (`{colors.stone}`) → heading (`{typography.heading-4}`) → one-line description (`{typography.body-sm}` `{colors.stone}`) → optional secondary CTA.
- Copy is honest. Not "Oops!" or "Nothing here yet 😔". Examples: "No products match these filters. Try removing brand or price constraints." "No open returns. Check back after tomorrow's dispatches."

### Inputs & forms

**`input-text`** — Standard text field.
- `{colors.canvas-elev}` background, `{colors.ink}` text, `1px solid {colors.hairline-strong}` border, `{rounded.md}`, height 42px, padding `10px 14px`, Inter 400 16px.
- Focused: `1px solid {colors.brand-green}` + `3px` outer ring `{colors.brand-green-soft}`. **The focus ring is the single most important accessibility signal in the system.**
- Error: `1px solid {colors.brand-error}` + `3px` outer ring `{colors.brand-error-soft}`. Error message below in `{colors.brand-error}` `{typography.caption-medium}`.
- Disabled: `{colors.surface}` background, `{colors.muted}` text.
- Label above the field in `{typography.caption-medium}` `{colors.steel}`. Required marker: red asterisk `*` in `{colors.brand-error}`.

**`select`** — Styled native select with custom chevron.
- Same visual as `input-text` at 36px height. Chevron 16px `{colors.stone}` on the right.

**`search-bar`** — Storefront and admin search.
- `{colors.surface}` background, `1px solid {colors.hairline}`, `{rounded.md}`, height 40px, magnifying-glass icon left (`{colors.stone}` 14px), placeholder in `{colors.stone}`.
- Storefront: docked in nav, expands to fullscreen overlay on click (autocomplete panel).
- Admin: docked in top nav or as a filter above tables.

**`checkbox` / `radio`** — 18px hit target visually (increased to 24px via padding for real touch target).
- Unchecked: `{colors.canvas-elev}` background, `1.5px solid {colors.hairline-strong}` border.
- Checked: `{colors.brand-green}` background, white 12px checkmark / dot.
- Focused: `3px` outer ring `{colors.brand-green-soft}`.

**`toggle-switch`** — 36×20px pill toggle for boolean settings.
- Off: `{colors.hairline-strong}` track, white 16px thumb pushed left.
- On: `{colors.brand-green}` track, thumb pushed right.

**`quantity-stepper`** — Cart line item quantity control.
- `{colors.canvas-elev}` background, `1px solid {colors.hairline-strong}`, `{rounded.md}`, 40px height, three cells: `−` button (36px) + qty input (48px, center-aligned Inter 600 14px) + `+` button (36px).
- Disabled `−` at qty=1; disabled `+` when hitting stock cap (shows tooltip: "Only 3 left").

**`wilaya-select`** — Two-step Algerian address selector, a first-class component.
- Field 1: Wilaya (province) — 58 options, alphabetized with popular ones (Algiers, Oran, Constantine, Annaba) surfaced at the top.
- Field 2: Commune (municipality) — populated dependent on the selected wilaya, disabled until wilaya is chosen.
- Both use the `select` styling. Field 2 shows placeholder "Select a wilaya first" when disabled.

### Chips, badges & states

**`badge-in-stock`** — Green pill with dot.
- `{colors.brand-green-soft}` background, `{colors.brand-green}` text, `{typography.micro}` (12px), rounded full, padding `2px 10px 2px 6px`.
- Includes a 6px `{colors.brand-green}` dot with `{shadow.brand-glow}` (soft outer glow) on the left.
- Copy: "In stock" (no count) OR "4 left" (when count ≤ 10 — becomes low-stock warning below 3).

**`badge-low-stock`** — Amber pill.
- `{colors.brand-warn-soft}` background, `{colors.brand-warn}` text, same structure as in-stock but no glow.
- Copy: "Only 3 left" / "Only 2 left" / "Last one".

**`badge-out-of-stock`** — Neutral pill.
- `{colors.surface}` background, `{colors.stone}` text, no dot.
- Copy: "Out of stock" — always shown, never hidden. When customer tries to add an out-of-stock product to cart, the button becomes "Notify me" instead.

**`chip-state-*`** — Order lifecycle chips (see order lifecycle section below for full color mapping).

**`chip-filter`** — Category and filter pills (brand, price bucket, etc.).
- `{colors.canvas-elev}` background, `1px solid {colors.hairline}`, `{colors.slate}` text, `{rounded.full}`, padding `6px 12px`.
- Active: `{colors.ink}` background, `{colors.canvas}` text.

**`badge-discount`** — Green square-ish pill for "SAVE 20%".
- `{colors.brand-green}` background, `#000` text, `{typography.micro-uppercase}`, `{rounded.sm}`.

**`badge-new`** — Blue tag for newly-added products (<30 days old).
- `{colors.brand-tag-soft}` background, `{colors.brand-tag}` text, `{typography.micro-uppercase}`.

### Tabs

**`tab-underline`** — Underline-style tab used on PDP (Overview / Specs / Compatibility / Reviews).
- Inactive: transparent, `{colors.steel}` text, `{typography.body-sm-medium}`, padding `12px 4px`.
- Active: `{colors.ink}` text, `2px solid {colors.ink}` bottom border.

**`chip-filter`** doubles as pill-tab in category pages.

### Order lifecycle chips (the state system)

Six states. Colored so each is recognizable at a glance in a dense admin table.

| State | Chip token | Background | Text | Meaning |
|---|---|---|---|---|
| **Placed** | `chip-state-placed` | `{colors.surface}` + hairline border | `{colors.steel}` | Just submitted, awaiting admin confirmation |
| **Confirmed** | `chip-state-confirmed` | `{colors.brand-tag-soft}` | `{colors.brand-tag}` | Admin spoke to customer, ready for courier |
| **In delivery** | `chip-state-in-delivery` | `{colors.brand-warn-soft}` | `{colors.brand-warn}` | Handed to courier, in motion |
| **Delivered** | `chip-state-delivered` | `{colors.brand-green-soft}` | `{colors.brand-green}` | Complete |
| **Refused** | `chip-state-refused` | `{colors.surface-2}` | `{colors.stone}` | Refused at door, closed |
| **Returned (DOA)** | `chip-state-returned` | `{colors.brand-error-soft}` | `{colors.brand-error}` | Open return case |

All chips use `{typography.micro}` (Inter 500 12px), `{rounded.full}`, padding `4px 10px`. All include a leading 6px dot in the same text color.

### Code / technical elements

**Product spec table** — Two-column key/value rows.
- Key: `{typography.body-sm}` `{colors.stone}` — "Socket", "TDP", "RAM slots".
- Value: `{typography.spec-mono}` (Geist Mono 13px) `{colors.ink}` — "LGA 1700", "125W", "4 × DIMM DDR5".
- Row divider: `1px solid {colors.hairline-soft}`, padding `{spacing.md} 0`.

**SKU / Order ID** — Always in `{typography.code-inline}` (Geist Mono 13px 500), `{colors.canvas}` background pill in dark mode / `{colors.surface}` in light, `{rounded.xs}` border `1px solid {colors.hairline}`, padding `2px 6px`. Click to copy.

**Price rendering rules:**
- Always render currency as suffix: `89,900 DA` (never `DA 89,900`).
- Never show fractional dinars (no decimals).
- Thousands separator is comma: `1,299,000 DA`.
- Prices in tables and admin: Geist Mono 500 — for column alignment.
- Prices in cards, PDPs, cart: Inter 600 — for prominence.
- Struck-through original price on discounted items: `{colors.stone}` with `text-decoration: line-through`.

### Navigation

**`nav-storefront`** — Sticky marketing nav.
- 60px tall, `{colors.canvas}` background at 70% opacity + `saturate(180%) blur(12px)` backdrop filter.
- Bottom border `1px solid {colors.hairline}`.
- Left: wordmark (icon + "H-Tech"). Center: horizontal link list (Shop / Categories / Bundles / Deals / Support / Guides). Right: search icon + wishlist icon + cart icon (with count badge) + account icon.
- Below 1024px: center links collapse to hamburger; icons stay.

**`nav-admin`** — Admin top bar.
- 56px tall, `{colors.canvas-elev}` background, no blur.
- Left: wordmark + environment indicator (`prod` / `staging` in `{typography.code-inline}` pill).
- Center: global search (⌘K).
- Right: notification bell + admin profile menu.

**`sidebar-admin`** — Fixed left nav.
- 240px wide, `{colors.canvas-elev}` background, `1px solid {colors.hairline}` right border.
- Sections: Overview (Dashboard), Catalog (Products, Categories, Brands), Orders (All orders, Placed, Confirmed, In delivery, Returns), Analytics, Settings.
- Section headers: `{typography.micro-uppercase}` `{colors.stone}`, padding `{spacing.md} {spacing.md} {spacing.xs}`.
- Items: `{typography.body-sm}` `{colors.slate}` inactive; active becomes `{colors.brand-green-soft}` background + `{colors.brand-green}` text + `{typography.body-sm-medium}`.

### Tables (admin)

**`table-admin`** — Standard admin data table.
- `{colors.canvas-elev}`, `1px solid {colors.hairline}`, `{rounded.md}`.
- Header row: `{colors.surface}` background, `{typography.micro-uppercase}` `{colors.stone}`, padding `10px 16px`, bottom border `1px solid {colors.hairline}`.
- Body row: 44px height, padding `12px 16px`, `1px solid {colors.hairline-soft}` bottom border, `{typography.body-sm}` `{colors.ink}`.
- Hover row: `{colors.surface}` background.
- Selected row (checkbox): `{colors.brand-green-soft}` background.
- Sort indicator on sortable column headers: 12px chevron `{colors.stone}`, becomes `{colors.ink}` when active.
- Pagination footer: below table, "Showing 1–20 of 143" left, page number + prev/next buttons right.

### Storefront-specific surfaces

**`hero-band-marketing`** — Landing hero.
- Background `{colors.canvas}`, padding `{spacing.hero}` top / `{spacing.section-sm}` bottom.
- Radial glow overlay: `radial-gradient(1200px 500px at 80% 20%, {colors.brand-green-soft}, transparent 60%)` + a second smaller glow bottom-left.
- FlowRibbon canvas layered above overlay (see [landing-preview.html](../landing-preview.html) for the tuned config — copy verbatim into the React component).
- Content stacked centered: eyebrow pill, hero display headline (Instrument Serif italic, one word italicized in `{colors.brand-green}`), subtitle (`{typography.subtitle}` `{colors.slate}`), CTA row (button-primary + button-secondary), fine-print trust row (three green dots + labels), product mockup card.

**`hero-product-mockup`** — Framed catalog preview inside the hero.
- `{colors.canvas-elev}` background, `1px solid {colors.hairline-strong}`, `{rounded.xl}`, `{shadow.mockup}` (soft mint glow).
- Contains a static rendering of a category page (sidebar + filter chips + 3-up product grid). Non-interactive.

**`cart-drawer`** — Right-side sliding drawer.
- 420px wide, `{colors.canvas-elev}` background, `{spacing.xl}` padding, `1px solid {colors.hairline}` left border.
- Structure: header ("Your cart" + close X) → line items (image thumbnail 60×60px, name, qty stepper, price, remove X) → subtotal + shipping estimate + "Proceed to checkout" primary button.
- Slides in from right (`{motion.duration-slow}` `{motion.ease-in-out}`).

**`order-status-timeline`** — Order lookup / customer post-checkout view.
- `{colors.canvas-elev}` container, `{rounded.lg}`, `1px solid {colors.hairline}`, padding `{spacing.xl}`.
- Vertical timeline with three dot states:
  - **Done step** — filled `{colors.brand-green}` circle with `#000` checkmark inside. Connecting line above (to previous step) is `{colors.brand-green}`.
  - **Active step (current)** — **hollow ring**: `transparent` background, `2px solid {colors.brand-green}` border, step number in `{colors.ink}` inside. Optional slow pulse animation (2s ease-in-out infinite, expanding ring at 60% opacity → 0%) to signal "in progress." Uses mint, not amber — timeline "active" is a current-activity state, not a warning.
  - **Future step** — `{colors.surface}` background, `1px solid {colors.hairline}` border, step number in `{colors.stone}`. Connecting line (to future) is `{colors.hairline}`.
- Each row: dot (20px) + label (`{typography.body-sm-medium}` `{colors.ink}` when done/active, `{colors.stone}` when future) + timestamp below (`{typography.caption}` `{colors.stone}`, or "—" if not yet reached).
- **Do not use `{colors.brand-warn}` (amber) for the active step.** Amber is reserved for warnings (low stock, price change) and the `chip-state-in-delivery` order-state chip. Timeline dot semantics = present activity → mint ring.

**`price-lock-notice`** — On PDPs and cart, shown when the customer has an item in cart.
- `{colors.brand-green-soft}` background, `1px solid {colors.brand-green}`, `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, `{colors.brand-green}` text.
- Copy: "Price locked at 89,900 DA — this is what you'll pay if you check out now."

**`price-change-warning`** — At checkout, shown when a cart item's price has changed since it was added.
- `{colors.brand-warn-soft}` background, `1px solid {colors.brand-warn}`, `{rounded.md}`, padding `{spacing.md}`, `{colors.brand-warn}` text.
- Copy: "The price of RTX 4070 changed from 89,900 DA to 92,400 DA. Confirm the new price to place your order."
- Below: `Cancel` (ghost) and `Confirm at 92,400 DA` (accent-green) buttons.

### Feedback & status

**`toast`** — Bottom-right stacking toast notifications.
- `{colors.canvas-elev}` background, `1px solid {colors.hairline-strong}`, `{rounded.md}`, padding `{spacing.md} {spacing.lg}`, `{shadow.hover}`.
- Icon left (`{colors.brand-green}` for success, `{colors.brand-error}` for error, `{colors.brand-tag}` for info), title in `{typography.body-sm-medium}`, description in `{typography.caption}` `{colors.slate}`.
- Auto-dismiss after 4s (success) or 6s (error/info). Manual dismiss X on hover.

**`skeleton`** — Loading placeholder.
- `{colors.surface-2}` base, `{rounded.sm}`, subtle shimmer animation (linear gradient sliding across, 1.5s ease-in-out infinite).
- Match the shape of the eventual content: `44px × full-width` for a table row, `4:3 aspect + text stack` for a product card.

**Empty state** (see `card-empty-state` above) — Always specific, never generic.

**Error state** — Full-page error with recovery action, or inline error banner.
- Full-page: 64px error glyph, `{typography.heading-2}` title ("Couldn't reach the catalog"), `{typography.body-md}` description, `Try again` button-primary.
- Inline: red banner with error icon, `{typography.body-sm}` copy, dismiss X.

### The footer

**`footer-region`** — Multi-column site footer. **Theme-responsive** — `{colors.canvas-elev}` background in both modes, so the footer reads as slightly elevated from the main content but never as a hardcoded dark inversion. The mega-serif wordmark sits **behind** the footer content as an outlined watermark (see [brand-identity.md § 6.1](./brand-identity.md) — Mega treatment): stroke-only, `~10%` opacity, positioned absolute and bleeding off the bottom edge. The footer link columns and bottom row render on top with `z-index: 1`. This treatment turns the wordmark into brand atmosphere rather than a competing visual block.
- `{colors.canvas-elev}` background, `1px solid {colors.hairline}` top border, padding `{spacing.section} 0 {spacing.xl}`, `position: relative`, `overflow: hidden`.
- Watermark element sits inside the footer as a sibling of the container, before it, `aria-hidden="true"`, no pointer events, `user-select: none`.
- 5-column grid: brand column (1.6fr) + 4 link columns (1fr each) — Shop / Support / Company / Legal.
- Brand column: wordmark + 3-line tagline + social icon row (3 circular 32px icons).
- Link column headers: `{typography.caption-medium}` `{colors.stone}`, links `{typography.body-sm}` `{colors.slate}` (hover to `{colors.ink}`).
- **Mega-wordmark watermark** (behind the grid, `z-index: 0`) — `H<em>-</em>Tech` at `clamp(160px, 26vw, 380px)`, Instrument Serif italic, letter-spacing `-0.04em`, `line-height: 0.85`. Fill is `transparent`; stroke is `2px` in `{colors.ink}` for "H" and "Tech" and `2px` in `{colors.brand-green}` for the italic hyphen. Element opacity `0.10`. Positioned absolute, `bottom: -6vw`, bleeds off the footer's bottom edge. `pointer-events: none`, `user-select: none`, `aria-hidden="true"`.
- Bottom row (renders on top of the watermark via `z-index: 1`): copyright left, status/changelog/version links right, `1px solid {colors.hairline}` top border, `{typography.caption}` `{colors.stone}`.

### UI kit v2 additions

Grouped for scannability. All components below are documented visually in [design-mockups/_ui-kit.html](../design-mockups/_ui-kit.html) and specified in the frontmatter YAML at the top of this file.

**Foundation patterns**

- **`focus-ring`** — double-layered box-shadow (2px `{colors.canvas}` inner offset + 2px `{colors.brand-green}` outer). Applied on `:focus-visible` only; error variant swaps outer ring to `{colors.brand-error}`. Every focusable primitive uses this.
- **`live-pulse`** — mint dot + expanding ring (2s ease-in-out infinite, scale 1 → 2.2, opacity 0.6 → 0). The system's vocabulary for "current activity" — used on timeline active step, live-sync chips, admins-online indicators. Frozen at static 35% opacity ring under `prefers-reduced-motion`.
- **`spinner`** — 14px border-ring with transparent right, 800ms linear infinite. Used inside `button-loading` and standalone inline loaders.

**Small primitives**

- **`kbd`** — keyboard shortcut chip. `{colors.surface}` bg, `{colors.hairline}` border, `{typography.code-inline}`, min-size 20px, subtle bottom shadow. Used in search bars (`⌘K`), dropdown menu items, inline prose.
- **`rating-star`** — filled brand-green star + empty hairline-strong star. Supports half-star via CSS mask (`::before` half-fill). Rating summary format: `stars + strong{rating} · N reviews`.
- **`tooltip`** — small `{colors.ink}` chip with `{colors.canvas}` text at `{typography.caption-medium}`, 5×9px padding, arrow indicator. Positions: top (default), right, bottom, left. Used on every icon-only button.

**Chip / tab variants**

- **`filter-chip-count`** — inline count pill inside a filter chip (e.g., `NVIDIA (42)`). Active state adjusts the pill background to a subtle white-alpha.
- **`filter-chip-removable`** — filter chip with trailing `×` close button, used for applied-filter display.
- **`filter-chip-overflow`** — dashed-border transparent chip for `+3 more` overflow patterns.
- **`tab-count`** — count pill inside a tab (e.g., `Reviews 142`). Active state uses `{colors.brand-green-soft}` bg.
- **`segmented-control`** — pill container with segmented buttons. Active button is `{colors.canvas-elev}` with `{shadow.card}`, inactive buttons transparent with `{colors.steel}` text. Alternative to filter chips for sort/toggle UIs.

**Content patterns**

- **`category-tile`** — 116px min-height, `{colors.surface}` bg, `{rounded.md}`, hairline border. 32px icon canvas at top, name + count at bottom.
- **`address-card`** — `{colors.canvas-elev}` bg, `{rounded.md}`, hairline border. Default variant gets `2px solid {colors.brand-green}` + soft `brand-green-soft` outer glow + "Default" label chip top-right.
- **`cart-line`** — 72px thumb + body (brand + name + qty stepper + remove button) + right column (line-price mono 600 + unit-price sub-line). Used inside cart drawer and `/cart` page.
- **`card-product-refined`** — extended product card with wishlist heart top-right, sale/new badge top-left, rating row below name, price-stack with struck original + current.
- **`order-row`** — admin order-list row primitive: ref (mono chip) + customer (name + phone) + state chip + total (mono) + relative-time.

**Navigation & utility**

- **`breadcrumbs`** — home icon + link chain with `/` separators. Current page in `{colors.ink}` weight-500.
- **`pagination-page`** — 34px square button, hairline border, `{colors.canvas-elev}` bg. Active swaps to `{colors.ink}` bg + `{colors.canvas}` text. Disabled state renders at 0.6 opacity. Ellipsis rendered as static `…` in `{colors.stone}`.
- **`divider-horizontal`** — plain 1px hairline. **`divider-labeled`** — hairline flanks + micro-uppercase label center.
- **`avatar`** — initials on `{colors.surface-3}` at 5 sizes (xs 20 · sm 28 · md 36 · lg 48 · xl 64). Semantic tint variants (brand/tag/warn/error) for special roles. Stack pattern overlaps -8px with 2px canvas-elev border.

**Feedback & alerts**

- **`alert`** — persistent inline callout (unlike toast, doesn't auto-dismiss). Icon + title (weight 600) + description (`{colors.slate}`). Four semantic variants (info/warn/error/success) share the same structure with token-swapped bg + border + icon + title color.
- **`toast-with-action`** — extends `toast` with a trailing action button (e.g., `Undo`, colored `{colors.brand-green}`) and a 2px auto-dismiss progress bar at the bottom edge.
- **`toast-stack`** — vertical bottom-right stack with 8px gap, right-aligned. Newer toasts push older ones down.
- **`stock-drop-notice`** — brand-warn tinted card for when a cart-item stock falls between add-to-cart and checkout. Sits above cart-line list at cart / checkout.

**Overlays**

- **`modal-backdrop`** — `rgb(0 0 0 / 0.55)` with `backdrop-filter: blur(2px)`. Dismissible via `Esc` and click-outside.
- **`dropdown-menu`** — `{colors.canvas-elev}` container, `{colors.hairline-strong}` border, 4px padding, `{shadow.hover}`. Items 8×10px padding, `{rounded.sm}`, hover `{colors.surface-2}`. Supports icons, kbd shortcuts, `menu-label` (uppercase eyebrow), `menu-divider`, and `menu-item-danger` (`{colors.brand-error}` text, error-soft hover).

**Timeline variants**

- **`timeline-horizontal`** — compact horizontal orientation for admin order-detail top. Same three dot states as the vertical (done ✓ mint / active hollow ring + pulse / future stone), connecting lines between dots.
- **`timeline-errored`** — refused-at-door and rejected-return terminal state. Dot: `{colors.brand-error-soft}` bg with `2px solid {colors.brand-error}` border and inline `×` icon. Connecting line to it is `{colors.brand-error}`. Label in `{colors.brand-error}`.

**Price patterns**

- **`price-with-discount`** — 28px current (weight 600) + struck 14px original (stone) + Save% badge (brand-green with #000 text). PDP hero usage.
- **`price-range`** — `From` micro-uppercase prefix + price value at `{typography.price-md}`. Used on bundles / variants.
- **`price-summary`** — cart/checkout total stack. 320px max-width, hairline card, `{colors.canvas-elev}` bg. Rows use `gap: 16px` (label ↔ value), total row uses `gap: 24px` + 16px top padding for extra breathing room. Values `white-space: nowrap` to prevent breaking.

**Input pattern additions**

- **`input-with-lead` / `input-with-trail`** — extend `input-text` with absolute-positioned leading or trailing icons. Trail icon is interactive (e.g., password visibility toggle, clear button).
- **`input-with-prefix` / `input-with-suffix`** — static mono-font prefix (`+213`) or suffix (`DA`), positioned absolute, stone color.
- **`checkbox-indeterminate`** — brand-green fill with a horizontal 2px black bar (instead of check). Represents "some selected" in bulk-select tables.
- **`toggle-row`** — admin settings pattern: name (`{typography.body-sm-medium}` ink) + description (13px stone) + toggle right. Divider between rows.
- **`stepper-with-tooltip`** — extends `quantity-stepper` with an ink tooltip above the disabled + button showing the stock context (`Only 4 in stock`).

**Button variant**

- **`button-loading`** — extends `button-primary`. Prepends `spinner` (12px), text becomes progressive (`Placing order…`). `pointer-events: none`, `cursor: wait`, 0.85 opacity.

**Search**

- **`search-panel`** — autocomplete panel below the search bar. `{colors.canvas-elev}` bg, `{colors.hairline-strong}` border, `{rounded.md}`, 8px padding, `{shadow.hover}`. Grouped sections (Products / Categories / Recent) each with a `menu-label` eyebrow. Items show 32px thumb + name + sub + right-aligned mono price.

### Shop-page additions

Reference implementations: [design-mockups/shop.html](../design-mockups/shop.html) and [design-mockups/_mega-menu.html](../design-mockups/_mega-menu.html).

**Mega-menu (nav-hover reveal)**

- **`mega-menu`** — full-width panel positioned below the sticky nav on hover of the "Shop" link. `{colors.canvas-elev}` background, `1px solid {colors.hairline-strong}` (no top border), `border-radius: 0 0 {rounded.xl} {rounded.xl}`, padding `28px 32px 24px`, `{shadow.hover}`, `z-index: 50`.
- Structure: header row (eyebrow "Browse by category" + "See all categories →" link to `/categories`) · **3×3 category grid** · bottom bundles ribbon (label + 2 mini bundle cards).
- **Reveal animation:** 200ms opacity fade + 4px `translateY`, `{motion.ease-out}`. Frozen instant under `prefers-reduced-motion`.
- **Behavior:** opens on `mouseenter` of Shop link, closes on `mouseleave` (200ms grace period for cursor to cross the gap), `Esc`, or click outside.
- **Backdrop:** `rgb(0 0 0 / 0.35)` with `backdrop-filter: blur(2px)`, non-blocking (click passes through to close via outside-click handler).
- **`mega-menu-item`** — flex row inside the grid: 36px icon canvas + name (h5 weight 600) + description (13 stone) + count (11 mono stone). Hover: `{colors.surface}` background, icon canvas fills to `{colors.brand-green-soft}` with `{colors.brand-green}` icon, name shifts to `{colors.brand-green}`.
- **`mega-menu-bundle`** — compact bundle preview card in the bottom ribbon. `{colors.surface}` background, hairline border, title + price (`X DA · save Y%`) + arrow. Hover: `{colors.brand-green-soft}` background, `{colors.brand-green}` border.

**Filter panel (`/shop` left sidebar)**

- **`filter-panel`** — 260px wide, `position: sticky` below the nav (top: 76px), `max-height: calc(100vh - 92px)`, `overflow-y: auto`. Below tablet breakpoint, collapses to a static card with hairline border and `{colors.canvas-elev}` background at the top of the results.
- **`filter-group`** — collection of related filters. Groups separated by `1px solid {colors.hairline}` + `{spacing.xl}` vertical rhythm. Each group has a `filter-heading` (uppercase 11px stone).
- **`filter-item`** — clickable row with a `filter-check` (checkbox) or `filter-radio` (radio) on the left, label in the middle, count in `{typography.micro}` mono on the right. Hover: `{colors.surface}` background + `{colors.brand-green}` text. Active: `{colors.ink}` text at weight 500.
- **`price-range-slider`** — 4px `{colors.surface-2}` track with `{colors.brand-green}` fill between two 14px canvas-elev + brand-green-bordered handles. Paired with min/max number inputs above.
- **`applied-filter-chip`** — `{colors.ink}` pill with `{colors.canvas}` text, close-X icon on the right. Displayed above the result grid in an "Applied:" row with a "Clear all" ghost link.

**Bundle card**

- **`bundle-card`** — `{colors.canvas-elev}` container, `{rounded.xl}`, hairline border, `{spacing.xl}` padding. Structure: brand-green tag pill + heading (h4/h3) + parts list (each with brand-green checkmark) + footer row (price stack with struck-through original + Save-%% badge in brand-green pill).
- Hover: `translateY(-2px)` + `{colors.brand-green}` border + heading text shifts to `{colors.brand-green}`.

## Storefront pages

### Home
1. Promo strip (dynamic, admin-configurable) — omit if no active promo
2. Nav
3. Hero band with mockup
4. Logo wall (customer/brand trust row — 6-up desktop, wordmark logos, `{colors.steel}` at 70% opacity)
5. Bento feature grid (6 tiles, the six H-Tech promises)
6. Stats band (elevated surface using `{colors.canvas-elev}`, 4 columns) — stat numbers in **Inter 600**, not italic serif. Theme-responsive.
7. Categories split (copy left, category tile grid right)
8. Testimonials (3-up)
9. Guides preview (3-up cards)
10. Final CTA band with atmospheric mint glow
11. Footer

### Category page
- Top: category name (Instrument Serif or heading-1 depending on marketing weight desired), breadcrumb, count of products
- Left: filter sidebar (240px) — price range slider, brand checkbox list, in-stock only toggle, additional category-specific filters (socket for CPUs, capacity for RAM)
- Main: sort dropdown right-aligned, product grid (4-up desktop → 3-up → 2-up → 1-up)
- Pagination or infinite scroll (both should work — infinite scroll preferred, pagination as fallback for accessibility)
- Empty state when no products match filters

### Product detail (PDP)
- Two columns above the fold, single column below 1024px
- Left: image gallery (main image + 4-up thumbnail row, click to swap, arrow-key nav for keyboard users)
- Right: brand micro-uppercase → product name (`{typography.heading-1}`) → SKU + rating stars → price row (Inter 600 `{typography.price-lg}` + optional struck-through original) → stock badge → **price-lock-notice** (when in cart) → quantity stepper → primary CTA "Add to cart" (button-accent, mint) → secondary CTA "Add to wishlist" (icon-button)
- Below: tabs (Overview / Specs / Compatibility / Reviews)
  - Overview: rich description with `{typography.body-md}` prose
  - Specs: key/value spec table (Geist Mono values)
  - Compatibility: automatically-inferred hints ("Fits: AM5 sockets", "Requires 750W+ PSU") — pulled from spec data
  - Reviews: star rating breakdown + individual review cards
- Related products: 4-up grid below the tabs

### Cart
- Line items in a stacked card list — image + name + qty stepper + line total + remove
- Right sidebar (or below on mobile): subtotal, estimated delivery, "Proceed to checkout" primary button
- Empty cart: friendly empty-state card + "Browse the catalog" primary button

### Checkout
- 720px centered form column
- Progress indicator at top: `Cart → Delivery → Confirm`
- Section 1: **Contact** — full name, phone (with country code +213 prefix)
- Section 2: **Delivery** — wilaya-select, commune-select (dependent), street address (textarea), optional order notes
- Section 3: **Order summary** — collapsible on mobile, sticky on desktop
- **Price-change warning** rendered inline if any item price has changed since add-to-cart
- Bottom: cash-on-delivery explainer card ("You'll pay the courier in cash. They'll bring a printed receipt.") + big "Place order" button
- On success → order confirmation page

### Order confirmation
- Full-viewport centered
- Green check circle 48px → `{typography.section-title}` "Order placed"
- Order number in `{typography.code-inline}` Geist Mono, click-to-copy
- Copy: "Save your order number and phone. You can look up your order status any time on our order tracking page."
- Two buttons: "Copy order number" (accent) + "Continue shopping" (secondary)

### Order lookup
- Simple centered form: order number + phone → submit
- On match: renders the `order-status-timeline` component + line items summary
- On no match: honest error ("We couldn't find that order. Double-check the number and phone.")

### Customer auth (frontend-first — the backend may not have it yet)
- Sign in / Sign up / Forgot password / Reset password / Verify email — full auth flow
- All auth pages: 420px centered card on `{colors.canvas}`, `{colors.canvas-elev}` card with `1px solid {colors.hairline}`, `{rounded.xl}`, padding `{spacing.section}`
- Social auth buttons (Google, Facebook) — full-width outlined pills
- Divider "or continue with email"
- Email + password fields (with visibility toggle)
- Primary CTA (accent-green)
- Footer link ("Don't have an account? Sign up" / etc.)

### Customer account
- 3-column layout: side nav (Profile / Orders / Addresses / Wishlist / Notifications), main content
- Order history: table of past orders with state chips, click-through to order detail
- Saved addresses: wilaya + commune + street cards, edit/delete/set-default
- Wishlist: same card-product grid as catalog

## Admin pages

### Login
- Same 420px centered card treatment as customer auth
- Only email + password (no social auth for admin)
- No sign-up link (admins are provisioned by owner)

### Dashboard
- 4-up KPI row: Today's orders, Pending confirmations, Low-stock alerts (≤3 units), Open returns
- Each KPI: `{typography.stat-number}` in Inter 600 (not serif — this is data), label in `{typography.caption}` `{colors.stone}` below
- Below: recent activity feed (14-day timeline of state transitions, price changes, new products)

### Products
- Toolbar: search bar left, filter chips (category, in-stock, low-stock, out-of-stock) center, "Add product" primary CTA + "Bulk edit" secondary right
- Table: image thumb (40px), name + SKU stack, category, price (Geist Mono), stock (color-coded number + chip), updated-at, actions (⋯ menu with Edit / Duplicate / Delete)
- Row hover reveals action buttons
- Bulk-select checkbox column, sticky "N products selected" action bar on selection
- Product edit drawer: opens from right (600px wide), form with image gallery uploader, name, category, price, stock, description (rich text), compatibility fields, SEO fields
- **Stale-data conflict handling:** if the backend rejects an update because `updated_at` has changed, show a modal: "This product was edited by [name] 2 minutes ago. Refresh to see the latest, or overwrite their changes." with `Refresh` (primary) and `Overwrite` (danger) buttons.

### Categories
- Simple list with drag handles for reorder, name + product count + edit icon per row

### Orders
- Toolbar: filter chips by state (All / Placed / Confirmed / In delivery / Delivered / Refused / Returned) + date-range picker + search by order number/customer phone
- Table: order number (Geist Mono, click to open detail), customer name, phone, total (Geist Mono), state chip, placed-at, ⋯ actions
- Order detail: full-screen or drawer
  - Header: order number + state chip + timeline collapsed inline
  - State transitions: prominent action buttons per state (only valid transitions shown, per state machine)
  - Line items table
  - Customer contact card (with click-to-copy phone + address)
  - State-change history log (timestamped, with admin who made each transition)
  - Notes/comment field (internal, not visible to customer)

### Returns
- Similar table to Orders but filtered to returned/returning cases
- Return detail: reason from customer, admin approve/reject buttons, refund status

## Do's and Don'ts

### Do
- Reserve `{colors.brand-green}` for accent CTAs, active states, and stock/state signals. Every mint element carries weight.
- Pair Inter (UI) with Geist Mono (specs/prices/code) — never introduce a third face outside Instrument Serif's five earned roles.
- Show stock status honestly. Out-of-stock products stay visible with a clear badge. "Nothing kills trust like ordering RAM that doesn't exist" (owner).
- Render prices as `89,900 DA` (currency suffix) with comma thousands separator, never fractional.
- Apply `{rounded.full}` universally on buttons, chips, and badges. Never soften a pill.
- Design every component in both light and dark modes before shipping.
- Use `{typography.subtitle}` (18px 400) for lead paragraphs and hero subtitles.
- Use empty states with specific, honest copy — never "Oops!" or generic messages.
- Show a focus ring on every interactive element — use the double-layered pattern (2px `{colors.canvas}` offset + 2px `{colors.brand-green}` outer, applied via box-shadow on `:focus-visible`). Error variant swaps the outer ring to `{colors.brand-error}`.
- **Hover color across the system is `{colors.brand-green}`.** Applies to: text links, nav links, footer links, promo-strip links, icon buttons, category-tile names + border, bento tile borders + headings, ordering-step borders + headings, card borders, product-card borders, `button-primary` (bg flips to green, text to `#000`), `button-secondary` (border + text + soft-green bg), `button-ghost` (text). Only `button-accent` keeps a self-hover (deepen to `{colors.brand-green-deep}`) since it's already the accent color. The rule: **any hover state that used ink, slate, stone, or hairline-strong before now uses `{colors.brand-green}` in the corresponding property (color, border-color, or background).**
- Apply `.live-pulse` to any "current activity" indicator (live-sync chips, timeline active step, online-status dots) — same 2s expanding mint ring vocabulary everywhere.
- Respect `prefers-reduced-motion` — freeze the FlowRibbon, freeze all pulse rings to static, kill hover transforms.

### Don't
- Don't render statistics or prices in Instrument Serif — money and numbers read as data, not literature.
- Don't use `{colors.brand-green}` on stat numbers, body prose, headings, or as a large filled background wash. (Hover states on text/link/icon interactions ARE an approved use — see Do list.)
- Don't hide out-of-stock products. Show them with the out-of-stock badge.
- Don't use lorem ipsum, placeholder avatars, or meaningless decorative icons.
- Don't use full-color decorative photography — the brand doesn't own images. Use gradient washes on post covers.
- Don't animate anything more than the FlowRibbon in the hero. One ambient motion, no more.
- Don't reduce body line-height below 1.55 — long-form readability suffers.
- Don't combine multiple competing accent colors in the same section. Let the mint breathe.
- Don't italicize the wordmark hyphen anywhere in copy — it belongs to the mark only.
- Don't use Instrument Serif on admin surfaces. Admin is Inter + Geist Mono only.

## Responsive behavior

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile (S) | < 480px | Single column. Hero display clamps to 44px. Nav collapses to hamburger. Product grid 1-up. Footer accordion. |
| Mobile (L) | 480–767px | Hero display 52px. Product grid 2-up. Bento tiles 1-up. Footer 2-column. |
| Tablet | 768–1023px | Hero display 64px. Product grid 3-up. Bento tiles 2-up. Admin sidebar collapses to drawer. Cart drawer becomes fullscreen sheet. |
| Desktop | 1024–1279px | Full layout. Hero display 72px. Product grid 4-up. Fixed 240px admin sidebar. |
| Wide Desktop | ≥ 1280px | Hero display 84px. Bento 3-up top row. Wider gutters. |

### Touch targets
Every interactive element must have a 44×44px effective touch target on touch devices, even if the visual is smaller. Applies to: icon buttons (32px visual → 44px hit area via padding), pill buttons (36px height → 44px on mobile via padding override), chips (28px → 44px), sidebar nav items (32px → 44px in mobile drawer).

### Text scaling
Hero and section titles use `clamp(min, viewport-scaled, max)` for fluid scaling. Body copy never below 14px on mobile.

### Admin on mobile
Admin is desktop-first. Below 1024px, sidebar becomes a drawer triggered by hamburger, tables become horizontally-scrollable inside a card frame. Below 768px, tables switch to a card-list layout (each row becomes a compact card). Editing product details on mobile opens the drawer as a fullscreen sheet.

## Accessibility

- **Contrast:** every text color pair meets WCAG AA (4.5:1 for body, 3:1 for large text). Mint on dark and warm-black on off-white both exceed these; verified in Figma / Sketch before ship.
- **Focus indicators:** every interactive element uses the standardized 2px mint border + 3px soft ring (`{shadow.brand-glow}`). Never rely on color alone.
- **Screen readers:** every icon-only button has an `aria-label`. Stock chips include text (e.g. "In stock, 4 left") not just color and number.
- **Keyboard nav:** admin is fully keyboard-navigable. `⌘K` opens global search. Arrow keys navigate tables. `Tab` order matches visual order. Sidebar drawer traps focus.
- **Reduced motion:** the FlowRibbon canvas listens for `prefers-reduced-motion` and freezes to a static composed frame. All hover translates and slide-in animations become instant opacity fades under the same query.
- **Form errors:** every error is announced via `aria-live="polite"` and the invalid field gets `aria-invalid="true"` + `aria-describedby` pointing at the error message. Errors are never conveyed by color alone — always include an error icon and text.
- **Reduced data:** empty states and loading skeletons are announced ("Loading products, please wait" / "No products found") for assistive tech.

## RTL and localization

Phase 2 will introduce French and Arabic. This is called out here so the system is ready:
- All layout is written with logical properties (`margin-inline-start`, not `margin-left`) so RTL flips automatically.
- Instrument Serif italic has no Arabic glyphs — the wordmark and italicized display accents fall back to a chosen Arabic display face (TBD) or drop the italic treatment entirely in Arabic. Prices flip: `89,900 دج` in Arabic.
- Component tokens are direction-agnostic. Only marketing copy needs translation.

## Known gaps and things to decide as we build

- **Product photography strategy.** The design assumes we don't own real product images, so the current mockups use gradient placeholders with SVG glyphs. Decision to make later: do we source distributor images with permission, or commission neutral gradient renders per SKU?
- **Wishlist requires accounts.** Frontend ships wishlist components using localStorage first, then migrates to server-backed once auth is live.
- **Review/rating** components ship visually but are read-only until backend has a reviews table.
- **Motion audit.** The current FlowRibbon config was tuned by hand; when we integrate into React, retune within the same file rather than baking new values into the system.
- **Icon set.** The design uses inline SVG icons currently. Standardize on a single icon library (Lucide preferred — matches the visual weight of the wireframe) before scaling out components.
- **Search autocomplete.** Component exists in the system but backend endpoint doesn't. Stub with local filtering over the product catalog until the real endpoint ships.

## Iteration guide

1. Focus on one component at a time. The system has high internal consistency.
2. Reference tokens directly (`{colors.brand-green}`, `{typography.hero-display}`, `{rounded.full}`) — do not paraphrase or hex-code inline.
3. Both light and dark previews for every component. If a component only exists in one mode, it's not shipped.
4. New variants go as separate `components:` entries (`-pressed`, `-disabled`, `-focused`, `-active`, `-danger`).
5. Default body typography is `{typography.body-md}` on marketing, `{typography.body-sm}` on admin. Headlines step: `hero-display → display-lg → section-title → heading-1 → heading-2 → heading-3 → heading-4 → heading-5`.
6. Keep `{colors.brand-green}` confined to interactive moments and stock signals. If it appears on a generic decorative element, ask whether it earned that role.
7. Pill buttons (`{rounded.full}`) always for CTAs. Squared buttons signal "third-party widget" in this language.
8. If a page needs a component that doesn't exist here, add it here first, then implement it.
