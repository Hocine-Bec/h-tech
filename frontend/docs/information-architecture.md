# H-Tech — Information Architecture

**Purpose:** the sitemap, route table, nav structure, and user flows for the H-Tech product. Answers "what pages exist, what lives on each, how do users move between them."

**Status:** v1.0 · 2026-08-28

**Related docs:** [brand-identity.md](./brand-identity.md) · [DESIGN.md](./DESIGN.md) · [requirements.md](../../docs/requirements.md)

---

## 1 · Overview

The H-Tech product has three route families:

- **Storefront** — public, no auth required. The commerce surface.
- **Customer account** — auth-required (customer role). Order history, saved addresses, wishlist. Frontend ships in v1; backend endpoints land in v1.1.
- **Admin** — auth-required (admin role). Catalog, orders, returns. Two admins total (owner + assistant).

Cart and checkout are **guest-friendly** — accessible to signed-in and signed-out users alike. Guests supply name/phone/address at checkout; signed-in users get their saved defaults pre-filled but can override.

Orders can be looked up two ways: by signed-in customers on `/account/orders`, or by anyone via `/support/track-order` (order number + phone).

---

## 2 · Sitemap

```
/                                            (landing / home)
├── shop                                     (ALL PRODUCTS — left filter panel, browse everything)
├── c/:categorySlug                          (single category browse w/ filters)
│   └── product/:productSlug                 (PDP)
├── deals                                    (active promotions)
├── new                                      (recently added products)
├── bundles                                  (pre-vetted build combos)
├── search?q=…                               (search results — basic v1)
├── guides/
│   ├── (index)                              (guides list)
│   └── :slug                                (single guide)
├── support/
│   ├── (hub)                                (support landing)
│   ├── track-order                          (guest order lookup)
│   ├── returns                              (policy explainer)
│   ├── compatibility                        (compat help)
│   ├── faq
│   └── contact
├── about
├── distributors                             (who we source from)
├── legal/
│   ├── terms
│   ├── privacy
│   ├── warranty
│   └── cookies
│
├── cart                                     (also opens as drawer from any page)
├── checkout                                 (single-page form)
├── order-placed/:orderRef                   (post-checkout confirmation, one-shot)
│
├── sign-in                                  (customer)
├── sign-up
├── forgot-password
├── reset-password/:token
├── verify-email/:token
│
├── account/                                 (auth: customer)
│   ├── (overview)
│   ├── orders
│   │   └── :orderRef                        (customer's order detail)
│   ├── addresses
│   ├── wishlist
│   └── settings                             (profile / password / notifications)
│
└── admin/                                   (auth: admin)
    ├── sign-in                              (separate from customer sign-in)
    ├── (dashboard)
    ├── products
    │   ├── new
    │   └── :id                              (edit)
    ├── categories
    │   └── :id                              (edit)
    ├── orders
    │   └── :id                              (detail w/ state actions)
    ├── returns
    │   └── :id                              (detail w/ approve/reject)
    ├── analytics                            (Phase 2)
    └── settings                             (Phase 2)

System:
├── 404
├── 500
└── unauthorized                             (401/403)
```

---

## 3 · Route table

Every route H-Tech ships in the frontend, and what backends it needs.

### Storefront (public)

| URL | Purpose | Auth | Layout | Backend deps |
|---|---|---|---|---|
| `/` | Landing / home. Hero, bento, stats, categories, testimonials, guides, final CTA. | none | Storefront | `GET /categories` (for nav mega-menu) + featured products (Phase 2) |
| `/shop` | **All products** — the primary browse page. Left filter panel (categories, brand, price, availability), applied-filter chips, sort dropdown, product grid, pagination, bundles rail at the bottom. | none | Storefront | `GET /products?…` (paginated + filterable) |
| `/c/:categorySlug` | Category browse with sidebar filters (brand, price, in-stock, category-specific) and product grid. Sort dropdown. | none | Storefront | `GET /products?category=…&…` (paginated) |
| `/product/:productSlug` | Product detail (PDP). Gallery, name, price, stock, quantity, add-to-cart, tabs (Overview/Specs/Compatibility/Reviews), related. | none | Storefront | `GET /products/:slug`, `GET /products/:slug/related`, `GET /reviews?product=…` (Phase 2) |
| `/deals` | Active promotions curated. | none | Storefront | `GET /products?is_featured=true` (v1) or dedicated `/deals` endpoint (later) |
| `/new` | Newly added products (last 30 days). | none | Storefront | `GET /products?is_new=true&sort=newest` |
| `/bundles` | Pre-vetted CPU + motherboard + RAM combos. | none | Storefront | Dedicated `/bundles` endpoint (Phase 2 backend; stub with local data in v1) |
| `/search?q=…` | Search results. Basic ILIKE over name/brand/SKU in v1. | none | Storefront | `GET /products?q=…&…` |
| `/guides` | Guides index. Post cards. | none | Storefront | `GET /guides` (Phase 2 backend; stub in v1 with MDX) |
| `/guides/:slug` | Single guide. Long-form MDX. | none | Storefront | `GET /guides/:slug` (or local MDX file in v1) |
| `/support` | Support hub. Cards linking to track-order / returns / compat / faq / contact. | none | Storefront | none |
| `/support/track-order` | Order lookup form: order number + phone. Renders order-status-timeline on success. | none | Storefront | `POST /orders/lookup` (order ref + phone) |
| `/support/returns` | 7-day DOA policy explainer. | none | Storefront | static |
| `/support/compatibility` | Compatibility help — sockets, PSU wattage, form factors. | none | Storefront | static |
| `/support/faq` | Common questions (COD, delivery, refunds, cash inspection at door). | none | Storefront | static |
| `/support/contact` | Contact form + phone/WhatsApp. Phase 1 might just link to WhatsApp. | none | Storefront | (form: Phase 2) |
| `/about` | About H-Tech. | none | Storefront | static |
| `/distributors` | Which distributors we source from + accreditation. | none | Storefront | static |
| `/legal/terms` `/legal/privacy` `/legal/warranty` `/legal/cookies` | Legal pages. | none | Storefront | static |

### Cart & checkout (guest-friendly)

| URL | Purpose | Auth | Layout | Backend deps |
|---|---|---|---|---|
| `/cart` | Full-page cart view (alternative to the drawer). | none (localStorage) | Storefront | none — cart is browser-local until checkout |
| `/checkout` | Checkout form. Sections: contact, delivery, order summary. Price-change warning inline. | none | Storefront (narrower column) | `POST /cart/validate` (pre-check price/stock), `POST /orders` (submit) |
| `/order-placed/:orderRef` | Post-checkout confirmation. Order number + save-this-number prompt + "Continue shopping" + "Copy order number". Only accessible immediately post-order (session token + backend gate). | none | Storefront | `GET /orders/:ref?token=…` |

### Customer auth

| URL | Purpose | Auth | Layout | Backend deps |
|---|---|---|---|---|
| `/sign-in` | Customer sign-in (email + password, optional Google/Facebook Phase 2). | none | Auth (centered 420px) | `POST /auth/sign-in` |
| `/sign-up` | Customer sign-up (email, password, first name). | none | Auth | `POST /auth/sign-up` |
| `/forgot-password` | Request reset link. | none | Auth | `POST /auth/forgot-password` |
| `/reset-password/:token` | Set new password from email link. | none | Auth | `POST /auth/reset-password` |
| `/verify-email/:token` | Confirm email address from signup link. | none | Auth | `POST /auth/verify-email` |

### Customer account (auth: customer)

| URL | Purpose | Auth | Layout | Backend deps |
|---|---|---|---|---|
| `/account` | Overview: greeting, recent order, saved addresses count, wishlist count, settings link. | customer | Account | `GET /me`, `GET /orders?limit=1`, `GET /addresses?limit=1`, `GET /wishlist/count` |
| `/account/orders` | Order history (paginated). Each row: order ref, date, total, state chip. | customer | Account | `GET /orders?page=…` |
| `/account/orders/:orderRef` | Customer view of order detail. Timeline, line items, delivery address, DOA return CTA if within 7-day window. | customer | Account | `GET /orders/:ref` |
| `/account/addresses` | Saved addresses list. Add / edit / delete / set default. | customer | Account | `GET /addresses`, `POST /addresses`, `PATCH /addresses/:id`, `DELETE /addresses/:id` |
| `/account/wishlist` | Saved products (grid). Move to cart, remove. Migrated from localStorage on first login. | customer | Account | `GET /wishlist`, `POST /wishlist/:productId`, `DELETE /wishlist/:productId` |
| `/account/settings` | Profile (name, email, phone). Password change. Notification preferences. | customer | Account | `PATCH /me`, `POST /auth/change-password` |

### Admin (auth: admin)

| URL | Purpose | Auth | Layout | Backend deps |
|---|---|---|---|---|
| `/admin/sign-in` | Admin sign-in. Separate from customer sign-in. | none | Auth | `POST /admin/auth/sign-in` |
| `/admin` | Dashboard. KPI row (today's orders, pending confirmations, low-stock alerts, open returns), recent activity feed. | admin | Admin | `GET /admin/dashboard`, `GET /admin/activity?limit=14` |
| `/admin/products` | Products table. Search, filter (category/stock-state), sort, bulk-select. Row actions: Edit (opens drawer), Duplicate, Delete. | admin | Admin | `GET /admin/products?…`, `DELETE /admin/products/:id` |
| `/admin/products/new` | Full-page new-product form. | admin | Admin | `POST /admin/products` |
| `/admin/products/:id` | Full-page edit-product form (also opens as drawer from list). | admin | Admin | `GET /admin/products/:id`, `PATCH /admin/products/:id` (with `updated_at` conflict handling) |
| `/admin/categories` | Categories list with drag-reorder. | admin | Admin | `GET /admin/categories`, `PATCH /admin/categories/reorder` |
| `/admin/categories/:id` | Edit category (name, slug, description, sort_order). | admin | Admin | `GET /admin/categories/:id`, `PATCH /admin/categories/:id` |
| `/admin/orders` | Orders table. Filter by state, date range, search by ref/phone. | admin | Admin | `GET /admin/orders?…` |
| `/admin/orders/:id` | Order detail. State chip + valid state-transition action buttons, line items, customer contact, state-change history, internal notes. | admin | Admin | `GET /admin/orders/:id`, `PATCH /admin/orders/:id/state` |
| `/admin/returns` | Returns list. | admin | Admin | `GET /admin/returns?…` |
| `/admin/returns/:id` | Return detail. Approve / reject buttons. On approve: refund + stock restore. | admin | Admin | `GET /admin/returns/:id`, `POST /admin/returns/:id/approve`, `POST /admin/returns/:id/reject` |
| `/admin/analytics` | Phase 2 — deferred. | admin | Admin | tbd |
| `/admin/settings` | Phase 2 — deferred. | admin | Admin | tbd |

### System

| URL | Purpose | Auth | Layout |
|---|---|---|---|
| `/404` | Not found. Illustration-free. Search bar + "back to home" CTA. | none | (bare) |
| `/500` | Backend unreachable. Retry CTA. Shows in place of any storefront route on error. | none | (bare) |
| `/unauthorized` | Signed-in but wrong role, or signed-out on an auth-required route. | none | (bare) |

---

## 4 · Auth boundaries

Three access tiers:

1. **Public** — no auth required. Cart and checkout live here (guest-friendly).
2. **Customer auth required** — `/account/*`. Redirect signed-out users to `/sign-in?next=/account/orders` (post-signin returns to `next`).
3. **Admin auth required** — `/admin/*` (except `/admin/sign-in`). Redirect signed-out to `/admin/sign-in?next=…`. Signed-in customers hitting `/admin` → `/unauthorized`.

**Session-optional enhancements** — the following routes work for signed-out users but are enhanced when signed-in:

- Cart: local storage for guests; server-persisted for signed-in customers (Phase 2 backend). If a guest signs in with a non-empty cart, cart merges.
- Wishlist: local storage for guests; server-persisted for signed-in customers. Merge on sign-in.
- Checkout: guests fill address form; signed-in customers see saved addresses as radio options + "Use new address" option.
- Order tracking: guests use `/support/track-order` (ref + phone); signed-in customers see all their orders under `/account/orders`.

---

## 5 · Nav structure

### 5.1 Storefront primary nav (desktop, ≥ 1024px)

Sticky 60px bar, backdrop-blurred canvas at 70% opacity.

**Left:** wordmark (nav treatment)

**Center (five links):**

| Link | Destination | Hover behavior |
|---|---|---|
| Shop | `/shop` (all products) | Opens mega-menu on hover — 3×3 grid of category tiles (icon + name + short description + count) with a "Browse all products →" link at top-right (routes to `/shop`) and a Featured bundles ribbon at the bottom |
| Deals | `/deals` | Simple link, no dropdown |
| Bundles | `/bundles` | Simple link |
| Guides | `/guides` | Simple link |
| Support | `/support` | Opens compact 4-item dropdown: Track order, Returns, Compatibility, FAQ |

**Right (utility cluster):**

- Search icon (32×32) — opens fullscreen search overlay with autocomplete
- Account icon — links to `/account` if signed-in, `/sign-in` if not
- Cart icon with count badge — opens cart drawer (or links to `/cart` if drawer disabled)
- Theme toggle (sun/moon icon)
- Primary CTA "Shop now" (only shown when scrolled past hero, hidden at top)

### 5.2 Storefront nav (mobile, < 1024px)

- Left: wordmark
- Right: search icon, cart icon, account icon, hamburger
- Center links hide; hamburger opens a full-height drawer with all links + support sub-items expanded

### 5.3 Mega-menu (Shop hover)

Reveal component that opens below the nav on hover of the "Shop" link. See [design-mockups/_mega-menu.html](../design-mockups/_mega-menu.html) for the visual reference.

**Layout:**
- Full-width panel positioned directly below the sticky nav (`top: calc(100% - 1px)`, `left: 24px`, `right: 24px`, border-radius 0 on top corners, 16px on bottom)
- Header row: "Browse by category" eyebrow (left) + "Browse all products →" link (right, routes to `/shop`)
- **3-column × 3-row tile grid** of the 9 categories. Each tile: 36px icon canvas + name (`h5`) + one-line description (13 stone) + count (10 mono stone). Hover: `{colors.surface}` background, icon canvas fills brand-green-soft with brand-green icon, name shifts to brand-green.
- Bottom ribbon (border-top separator): "Bundles / Pre-vetted build combos" label on the left + 2 mini bundle cards (title + price + save-percent + arrow). Bundle card hover: brand-green border + brand-green-soft background.
- Backdrop under the nav: `rgb(0 0 0 / 0.35)` with 2px blur, non-blocking (clicking outside also closes).

**Behavior:**
- Opens on `mouseenter` of the Shop nav link. Closes on `mouseleave` with a 200ms grace period so users can cross the gap to the menu.
- `Esc` closes. `Tab` traps focus inside the menu when open. Clicking outside closes.
- Reveal animation: 200ms opacity fade + 4px `translateY`, `cubic-bezier(0.16, 1, 0.3, 1)`. Frozen instant under `prefers-reduced-motion`.
- Backend: uses `GET /categories` (already loaded for the storefront layout, so no extra fetch on hover).

### 5.4 Storefront footer

5-column layout (see [DESIGN.md § Footer](./DESIGN.md)):

- **Brand column** (1.6fr): wordmark + tagline + social icons (Facebook, Instagram, TikTok)
- **Shop:** All categories · Graphics cards · Processors · Bundles · Deals · New arrivals
- **Support:** Track order · Returns (7-day DOA) · Compatibility help · Contact · FAQ
- **Company:** About · Distributors · Careers · Press
- **Legal:** Terms · Privacy · Warranty · Cookies

Below: mega-serif wordmark, then bottom row with copyright + Status/Changelog/version links.

### 5.5 Admin sidebar

Fixed 240px. Sections (with 11px uppercase eyebrow labels):

- **Overview**
  - Dashboard (`/admin`)
- **Catalog**
  - Products (`/admin/products`)
  - Categories (`/admin/categories`)
  - Brands (Phase 2)
- **Orders**
  - All orders (`/admin/orders`)
  - Placed (`/admin/orders?state=placed`) — with count badge
  - Confirmed (`/admin/orders?state=confirmed`)
  - In delivery (`/admin/orders?state=in_delivery`)
  - Returns (`/admin/returns`) — with open-count badge
- **Analytics** (Phase 2)
- **Settings** (Phase 2)

Bottom of sidebar: admin profile card with sign-out.

### 5.6 Admin top nav

56px bar, `canvas-elev` background, no blur (dense workspace, not marketing).

- Left: wordmark + environment pill (`prod` / `staging` in Geist Mono)
- Center: global search bar (⌘K activated) — searches across products, orders, customers
- Right: notification bell (unread count) · admin profile menu · theme toggle

### 5.7 Customer account sidebar

Rendered on `/account/*` routes as a 3-column layout (sidebar + main + optional right rail).

Sidebar sections:

- Overview (`/account`)
- Orders (`/account/orders`) — with count badge
- Addresses (`/account/addresses`)
- Wishlist (`/account/wishlist`) — with count badge
- Settings (`/account/settings`)

Bottom: sign-out button (button-ghost).

Below 1024px: sidebar collapses to a horizontal tab bar above the main content.

---

## 6 · Modal vs page vs drawer

Every UI surface has to decide between modal, page, or drawer. These are the H-Tech rules:

| Surface | Choice | Rationale |
|---|---|---|
| Sign in / sign up / forgot password | **Page** | Deep-linkable, better for keyboard/form flows, redirect targets |
| Cart | **Drawer + page** | Drawer for quick access from any page; `/cart` page for shareable/keyboard access |
| Product quick view (customer) | **Rejected** | Full PDP is fast enough; quick view adds a second visual language |
| Add to cart confirmation | **Cart drawer auto-opens on add** | Immediate feedback, cart contents visible without page nav |
| Delete confirmation (admin) | **Modal** | Destructive action needs interstitial |
| Product edit (admin, from list) | **Drawer** | Fast context — see product in list, edit, save, next |
| Product edit (admin, direct link) | **Page** (`/admin/products/:id`) | Shareable link, deeper context |
| Product create (admin) | **Page** (`/admin/products/new`) | Full-form context |
| Stale-data conflict (admin) | **Modal** | Interrupt is required — user must choose |
| Order state transition (admin) | **Inline action buttons + confirmation modal for irreversible transitions** | Reversible transitions (Placed → Confirmed) confirm inline; irreversible (Confirm-refund on a Return) confirm modal |
| Search results | **Fullscreen overlay from nav; also `/search` page** | Overlay for quick lookup; page for shareable link |
| Filter panel (mobile category) | **Bottom sheet** | Doesn't hide the page context |
| Image gallery zoom (PDP) | **Modal** (lightbox) | Standard pattern, dismisses on backdrop click |
| Sign out | **Direct action + toast** | No confirmation needed for reversible action (they can sign back in) |
| Wishlist add/remove | **Direct + toast** | Reversible, no interstitial |
| Address edit | **Modal on account page; drawer if we add it to checkout** | Small form, keeps context |
| Change password | **Page section under `/account/settings`** | Multiple related fields, sensitive |

---

## 7 · Deep linking & URL rules

**Product URLs use slugs:**
- Canonical: `/product/geforce-rtx-4070-12gb-gddr6x`
- Slug is server-generated from product name at create time, editable by admin
- Slug conflicts → append `-2`, `-3`, etc.

**Category URLs use slugs:**
- Canonical: `/c/graphics-cards`
- Note: `/c/` prefix intentional — shorter than `/category/` for typing/copy, and gives us `/product/` and `/c/` as parallel resources

**Guide URLs use slugs:**
- Canonical: `/guides/ryzen-7-vs-core-i7-in-2026`
- Full slug, human-readable

**Order URLs use display refs:**
- Customer-facing: `/order-placed/HT-4287`, `/account/orders/HT-4287`
- Admin: `/admin/orders/HT-4287`
- Backend maps `HT-XXXX` display refs to internal ULIDs (see API contract)
- Display ref format: `HT-` prefix + 4–6 digit sequence

**Filters live in query params, always type-parsed via TanStack Router search schemas:**

```
/c/graphics-cards?brand=NVIDIA&brand=AMD&in_stock=true&min_price_cents=5000000&sort=price_asc&page=1
```

- Multi-value: repeat the key (`?brand=NVIDIA&brand=AMD`)
- Booleans: `?in_stock=true` (present or absent; not `?in_stock=false`)
- Sort: enum from `popularity`, `price_asc`, `price_desc`, `newest`, `name_asc`
- Page: 1-indexed integer; `?page=1` is the same as omitting `page`

**Filter chips in the UI reflect URL state 1:1.** Removing a chip removes the query param. Sharing a URL shares the exact filter state.

**Search:**
- Storefront: `/search?q=rtx+4070`
- Autocomplete overlay renders a floating panel with matches; selecting a match navigates to `/product/:slug`

**Admin URLs use ULIDs where display refs don't exist:**
- Products: `/admin/products/01HW5Y8Z9NKJPQ4TMYK7X2A0EX`
- Categories: `/admin/categories/01HW5Y8Z9NKJPQ4TMYK7X2A0EY`
- Orders: `/admin/orders/HT-4287` (uses display ref for consistency with customer view)
- Returns: `/admin/returns/RT-1234` (returns get their own display-ref prefix `RT-`)

**Pagination:**
- URL: `?page=2` (page-based, 1-indexed)
- Deep links preserve page position for shareable filter state

---

## 8 · User flows

### 8.1 Customer — first-visit browse to purchase (COD, guest)

The primary "north star" flow. Target: land → order placed in under 5 minutes.

```
/                                              (land, see hero)
  ↓ click "Browse the catalog" or a category tile
/shop  OR  /c/graphics-cards                   (browse)
  ↓ apply filters (brand=NVIDIA, in_stock=true)  ← URL updates
/c/graphics-cards?brand=NVIDIA&in_stock=true
  ↓ click a product card
/product/geforce-rtx-4070-12gb-gddr6x          (PDP)
  ↓ read specs, scroll through images
  ↓ click "Add to cart"
                                               (cart drawer slides in)
  ↓ click "Proceed to checkout"
/checkout                                      (form)
  ↓ fill name, phone (+213…), wilaya, commune, street, notes
  ↓ price-change warning? → confirm new price
  ↓ click "Place order"
/order-placed/HT-4287                          (confirmation)
  ↓ copy order number
  ↓ close tab (or "Continue shopping")
```

### 8.2 Customer — returning to check order status (guest)

```
/                                              (land, or any page)
  ↓ click Support (nav dropdown) → "Track order"
/support/track-order                           (lookup form)
  ↓ enter order ref (HT-4287) + phone
  ↓ submit
/support/track-order                           (form now shows result)
                                               → order-status-timeline component renders
                                               → chip state, line items summary
```

### 8.3 Customer — sign up + first authenticated purchase

```
/                                              (land)
  ↓ click Account icon
/sign-in                                       (not signed in → redirect target)
  ↓ click "Sign up" link
/sign-up                                       (form)
  ↓ fill email, password, first name
  ↓ submit
                                               (email verification sent)
/verify-email/:token                           (from email click)
  ↓ verified
/sign-in                                       (redirect back with success toast)
  ↓ sign in
/account                                       (overview)
  ↓ browse to a PDP (via nav)
/product/…                                     (PDP)
  ↓ add to cart → drawer
  ↓ proceed to checkout
/checkout                                      (addresses pre-filled from account)
  ↓ place order
/order-placed/HT-4288
                                               (also appears in /account/orders)
```

### 8.4 Customer — password reset

```
/sign-in                                       (blank screen or wrong-password error)
  ↓ click "Forgot password?"
/forgot-password                               (form)
  ↓ enter email
  ↓ submit
                                               (email sent, screen shows "Check your email")
/reset-password/:token                         (from email)
  ↓ set new password
  ↓ submit
/sign-in                                       (redirect with success toast)
```

### 8.5 Customer — report DOA return (within 7-day window)

**Path A — signed-in customer:**

```
/account/orders                                (list)
  ↓ click a delivered order (within 7 days)
/account/orders/HT-4287                        (detail)
  ↓ click "Report DOA return" (visible only if in window)
                                               (form modal: reason, photos, description)
  ↓ submit
                                               (return created, admin notified)
/account/orders/HT-4287                        (detail refreshes, shows "Return pending" chip)
```

**Path B — guest customer:**

```
/support/track-order
  ↓ look up order (ref + phone)
                                               (order detail renders inline)
  ↓ click "Report an issue"
                                               (same form as above)
  ↓ submit
                                               (return created, tracking token emailed/SMS'd for follow-up)
```

### 8.6 Admin — daily order confirmation

```
/admin/sign-in
  ↓ sign in
/admin                                         (dashboard)
                                               → "3 pending confirmations" KPI
  ↓ click KPI
/admin/orders?state=placed                     (filtered list)
  ↓ click first order
/admin/orders/HT-4287                          (detail)
                                               (admin calls customer to confirm)
  ↓ click "Confirm" action button
                                               (state transition, backend validates)
                                               → toast: "Order confirmed"
  ↓ back to list (auto-refetched, order gone from placed filter)
/admin/orders?state=placed
  ↓ repeat with next order
```

### 8.7 Admin — update product price during a promo

```
/admin                                         (dashboard)
  ↓ click Products in sidebar
/admin/products                                (table)
  ↓ search "rtx 4070"
/admin/products?q=rtx+4070
  ↓ click Edit on the row
                                               (drawer opens with product form)
  ↓ change price_cents field
  ↓ click "Save"
  ↓                                            (backend: check updated_at, apply if match)
  ↓ (happy path)                               → toast: "Product updated"
  ↓ (stale-data conflict)                      → modal: "This product was edited by <admin> 2 min ago. Refresh or overwrite?"
```

### 8.8 Admin — approve a DOA return

```
/admin                                         (dashboard)
                                               → "2 open returns" KPI
  ↓ click
/admin/returns                                 (list)
  ↓ click a return
/admin/returns/RT-1234                         (detail)
                                               (review reason, photos, order context)
  ↓ click "Approve"
                                               (modal: confirm refund + stock restore)
  ↓ confirm
                                               (backend: mark refunded, restore stock)
                                               → toast: "Return approved. Refund initiated, stock restored."
/admin/returns                                 (list refreshes, return moved to "Resolved" tab)
```

---

## 9 · Error & edge routes

### 9.1 404 not found

- Renders when route doesn't match (product slug missing, category slug missing, admin ID missing, etc.)
- Layout: minimal — wordmark at top, `hero-display` "404" in Instrument Serif italic, one-line explainer, search bar, "Back to home" secondary CTA
- No storefront chrome (nav + footer). Bare so the recovery path is unambiguous.

### 9.2 500 / backend unavailable

- Renders as an inline banner on the affected surface (e.g., category page can't load products) or as a full-page interstitial if the whole app fails to boot
- Copy: "Couldn't reach the catalog. Try again in a moment." · CTA: "Try again"
- Preserves URL so refresh resumes the intended state

### 9.3 Unauthorized (401/403)

- Signed-out user hitting `/account/*` → redirect to `/sign-in?next=/account/…` (silent)
- Signed-in customer hitting `/admin/*` → `/unauthorized` page with explainer + "Back to home" CTA
- Signed-out user hitting `/admin/*` → redirect to `/admin/sign-in?next=/admin/…` (silent)

### 9.4 Offline

- Detected via `navigator.onLine` + fetch failure signals
- Cart drawer shows a persistent banner: "You're offline. Cart is saved locally; you'll be able to place an order when you're back online."
- Non-critical requests (analytics, activity refreshes) fail silently
- Ordering is disabled with a friendly message

### 9.5 Empty states

Every list has an empty state. Copy is specific — no generic "Nothing here":

| Surface | Copy |
|---|---|
| Category with no products matching filters | "No products match these filters. Try removing brand or price constraints." · CTA: "Clear filters" |
| Empty cart | "Your cart is empty. Browse the catalog to add parts." · CTA: "Browse the catalog" |
| Wishlist empty | "Your wishlist is empty. Save products from any product page for later." · CTA: "Browse the catalog" |
| Order history empty (customer) | "You haven't placed an order yet. When you do, it'll show here." · CTA: "Browse the catalog" |
| Admin orders empty at state filter | "No orders in [state] right now." · no CTA |
| Admin returns empty | "No open returns. Check back after tomorrow's dispatches." · no CTA |
| Admin products empty (no products at all) | "No products yet. Add your first product to get started." · CTA: "Add product" |
| Admin products empty (search/filter) | "No products match your search." · CTA: "Clear filters" |
| Guest order lookup — not found | "We couldn't find that order. Double-check the number and phone." · no CTA (user retries in the form) |

---

## 10 · Cross-links & jump-off points

Where each page sends people next. Prevents dead ends.

| From | To |
|---|---|
| `/` hero | `/shop`, `/deals` |
| `/` bento | `/shop`, `/support/returns` (for the DOA tile), `/support/track-order` (for the map tile) |
| `/` categories split | `/c/:slug` per tile |
| `/` testimonials | (no destination — text only) |
| `/` guides | `/guides/:slug`, `/guides` (see all) |
| `/` final CTA | `/shop`, `/support/contact` |
| `/shop` | `/product/:slug` per product card, `/bundles/:slug` per bundle, `/c/:slug` via applied-category chip |
| `/c/:slug` | `/product/:slug` per product card; back to `/shop` via breadcrumb |
| `/product/:slug` | `/product/:relatedSlug` (related section); `/c/:slug` (breadcrumb); `/cart` (drawer or full page) |
| `/cart` | `/checkout`; `/product/:slug` (edit item); `/shop` (empty cart) |
| `/checkout` | `/order-placed/:ref` (success); `/cart` (back edit) |
| `/order-placed/:ref` | `/shop` (continue shopping); `/account/orders/:ref` (if signed-in customer) |
| `/support` | all support sub-pages |
| `/support/track-order` (success) | `/product/:slug` (from line items); `/support/returns` (if reporting issue) |
| `/account` overview | `/account/orders`, `/account/addresses`, `/account/wishlist`, `/account/settings` |
| `/account/orders/:ref` | `/product/:slug` (from line items); "Report DOA return" (if in window) |
| `/admin` dashboard | KPI click-through to `/admin/orders?state=…`, `/admin/products?stock_state=low`, `/admin/returns` |
| `/admin/orders/:id` | `/product/:slug` (from line items, opens in new tab); `/admin/orders` back |
| `/admin/products` | `/admin/products/new`; `/admin/products/:id` (edit page); drawer editor stays on list |
| `/admin/returns/:id` | `/admin/orders/:id` (view underlying order) |
| Any 404 | `/`, `/support` |

---

## 11 · Layout families

Recap of which routes use which layout. Each layout is a shared component tree.

| Layout | Used by | Chrome |
|---|---|---|
| **Storefront** | All public routes (`/`, `/shop`, `/c/:slug`, `/product/:slug`, `/cart`, `/checkout`, `/order-placed/:ref`, `/support/*`, `/guides/*`, `/deals`, `/new`, `/bundles`, `/about`, `/distributors`, `/legal/*`, `/search`) | Promo strip (if active) · Sticky top nav · `<main>` · Site footer |
| **Auth** | `/sign-in`, `/sign-up`, `/forgot-password`, `/reset-password/:token`, `/verify-email/:token`, `/admin/sign-in` | Minimal: wordmark centered at top · centered 420px card · minimal footer strip |
| **Account** | `/account`, `/account/*` | Storefront nav + footer · account sidebar (3-col layout under nav) |
| **Admin** | `/admin`, `/admin/*` (except `/admin/sign-in`) | Admin top nav (56px) · admin sidebar (240px fixed) · main content region |
| **Bare** | `/404`, `/500`, `/unauthorized` | No chrome. Wordmark top-left, centered content, minimal footer |

---

## 12 · Phase gating

Everything above ships in the frontend from day one. Backend readiness varies:

| Phase | What backend supports |
|---|---|
| **v1** (launch) | Public storefront, cart (localStorage), checkout, order lookup by ref+phone, admin (dashboard, products, orders, returns) |
| **v1.1** | Customer accounts (auth, /me, orders, addresses) |
| **v1.2** | Wishlist server-side; cart server-side (for signed-in) |
| **v1.3** | Reviews on PDPs (read + write) |
| **v2** | Full-text search; bundles CRUD; guides CMS; analytics; multi-language |

**Frontend behavior when backend endpoint doesn't exist yet:**

- `/account/*` routes stub with local data (mock adapter). Sign-in form shows "Sign-in is coming soon — please use guest checkout for now" banner.
- Wishlist uses localStorage only.
- Reviews component renders "Reviews coming soon" placeholder in the tab.
- Guides render from local MDX files bundled into the app.
- Bundles render from a static JSON file.

When an endpoint lands, frontend swaps its adapter with one line — no UI changes.

---

## 13 · Change log

- **v1.0 · 2026-08-28** — Initial IA. Locks in sitemap, 5-nav primary structure, guest-friendly cart+checkout, wordmark-only mark, phase gating rules.
