# H-Tech — Content Design

**Purpose:** the canonical copy inventory for every string that appears in H-Tech. If it's user-facing text, its final form lives here.

This document is meant to be **searched, not read cover-to-cover.** Use Ctrl-F for the specific button, error, or state you're implementing.

**Status:** v1.0 · 2026-08-28
**Voice reference:** [brand-identity.md § 5](./brand-identity.md)
**Related:** [information-architecture.md](./information-architecture.md) · [DESIGN.md](./DESIGN.md)

---

## 1 · Voice recap

- **Plain-spoken, specific, confident, respectful** (see brand-identity.md).
- **Sentence case** for buttons and headings. Not Title Case.
- **No emojis** in product UI copy. Ever.
- **No exclamation marks** in routine flows.
- **No "just," "simply," "easily."** These dismiss what follows.
- **Real numbers, real names.** Never placeholder-y ("~90k," "select an option").
- **Currency after amount:** `89,900 DA`.
- **Actionable errors, not apologetic errors.** Tell the user what happened and what to do.

---

## 2 · Global text conventions

### 2.1 Numbers

| Case | Format | Example |
|---|---|---|
| Money | Integer dinars, comma thousands separator, `DA` suffix with space | `89,900 DA` · `1,299,000 DA` |
| Zero money | Same format, "0 DA" not "Free" | `0 DA` |
| Product counts | Digits always | `142 products`, `3 left`, `1 review` |
| Star ratings | Digit + `/5` | `4.6 / 5` |
| Percent | Digit + `%` no space | `20% off` |
| Time duration (delivery) | Range with `–` en-dash | `24–48h`, `2–5 days` |
| File size | 1 decimal + `KB`/`MB`/`GB` with space | `4.2 MB` |
| Wattage | Digit + `W` no space | `200W`, `750W+` |
| Frequency | Digit + `Hz`/`MHz`/`GHz` with space | `144 Hz`, `5.4 GHz` |
| Storage capacity | Digit + `GB`/`TB` with space | `12 GB`, `2 TB` |

### 2.2 Currency

- Always **`DA`**, never `DZD` in customer-facing UI.
- Always **after** the number, with a single space: `89,900 DA`.
- Never fractional. Round at the source.
- Discount phrasing: `-20%` for the badge, `20% off select GPUs` for prose.
- Struck-through original: same format, `text-decoration: line-through`, `stone` color: `~~92,400 DA~~ 89,900 DA`.

### 2.3 Dates & times

| Case | Format | Example |
|---|---|---|
| Relative recent | Via `Intl.RelativeTimeFormat` | `2 min ago`, `3 days ago`, `last week` |
| Absolute short | `DD MMM YYYY` | `28 Aug 2026` |
| Absolute long | `DD MMMM YYYY` | `28 August 2026` |
| Time | 24-hour, colon separator | `14:41` |
| Date + time | Short date + time | `28 Aug 2026, 14:41` |
| Timezone | UTC assumed; suffix if ambiguous | `14:41 UTC` |

### 2.4 Phone

- Display: `+213 5X XXX XX XX` (grouped) OR `05X XXX XX XX` (local)
- Input placeholder: `+213 5X XXX XX XX` OR `0XXXXXXXXX`
- Storage (backend): E.164 always — `+213555123456`
- Validation: accepts either format; frontend normalizes to E.164 for submission

### 2.5 Addresses

Format for display (single-line summary):

```
{name}, {phone}
{street}
{commune}, {wilaya}
```

Format for pre-filled form: separate labeled fields.

Wilaya names: use official French romanization (Constantine, Sétif, Béjaïa), not Arabic transliteration.

### 2.6 Product names

- Rendered exactly as manufacturer spelling: `GeForce RTX 4070 12GB GDDR6X` — not `Geforce RTX 4070`, not `RTX-4070`.
- Model numbers as spelled: `Ryzen 7 7800X3D`, `Core i7-14700K`.
- No brand prefix in the product-name field if the brand is a separate column (avoid `NVIDIA GeForce RTX 4070` when brand column already says NVIDIA).

### 2.7 SKUs & order refs

| Case | Format | Example |
|---|---|---|
| Internal ID | ULID string | `01HW5Y8Z9NKJPQ4TMYK7X2A0EX` |
| SKU (product) | Admin-controlled string, no format enforcement | `GPU-NV-4070-12G` |
| Order display ref | `HT-` + 4–6 digits | `HT-4287` |
| Return display ref | `RT-` + 4–6 digits | `RT-1234` |
| Rendered in Geist Mono | Always — signals technical identifier | `HT-4287` |

---

## 3 · Buttons & CTAs

The complete inventory. If a button label isn't here, one doesn't exist for that action — write it here first, then implement.

### 3.1 Storefront primary CTAs

| Label | Where | Variant |
|---|---|---|
| Browse the catalog | Landing hero, empty cart, empty wishlist, 404 | `primary` |
| See today's deals | Landing hero (secondary) | `secondary` |
| Shop now | Nav, when scrolled past hero | `primary` (sm) |
| Add to cart | PDP, product card hover (optional) | `accent` |
| Notify me | PDP when out of stock | `secondary` |
| Add to wishlist | PDP icon | icon (heart) |
| Proceed to checkout | Cart drawer, cart page | `accent` |
| Place order | Checkout final button | `accent` (lg) |
| Continue shopping | Order confirmation, cart | `secondary` |
| Copy order number | Order confirmation | `primary` |
| View cart | Nav (when cart drawer disabled) | `ghost` |
| See all categories | Mega-menu bottom, shop page | `link` |
| Read the guide | Guide card hover, guide index | `link` |
| Talk to us | Landing final CTA, support hub | `secondary` |
| Open the catalog | Landing final CTA | `primary` |

### 3.2 Cart & item actions

| Label | Where | Variant |
|---|---|---|
| Remove | Cart line item | `link` (danger color) |
| Save for later | Cart line item (if signed in) | `link` |
| Move to cart | Wishlist item | `link` |
| Clear cart | Cart drawer/page (secondary action) | `ghost` |
| Update quantity | Implicit via qty stepper | (stepper) |

### 3.3 Order lookup + tracking

| Label | Where | Variant |
|---|---|---|
| Track order | Support hub, footer support column | `primary` |
| Look up order | Track-order form submit | `primary` |
| Report an issue | Order lookup result, order detail | `secondary` |
| Report DOA return | Order detail (customer, within window) | `secondary` |
| Submit return | Return form | `accent` |
| Cancel | Any form back-out | `ghost` |

### 3.4 Auth

| Label | Where | Variant |
|---|---|---|
| Sign in | Sign-in submit, nav account (signed out) | `primary` |
| Sign up | Sign-up submit; also link from sign-in | `primary` (submit) / `link` (nav) |
| Continue with Google | Sign-in / sign-up (Phase 2) | `secondary` |
| Continue with Facebook | Sign-in / sign-up (Phase 2) | `secondary` |
| Forgot password? | Sign-in bottom | `link` |
| Send reset link | Forgot-password submit | `primary` |
| Set new password | Reset-password submit | `primary` |
| Resend verification email | Verify-email waiting screen | `link` |
| Sign out | Account sidebar, admin sidebar | `ghost` |

### 3.5 Account

| Label | Where | Variant |
|---|---|---|
| Save changes | Settings, address edit | `primary` |
| Add address | Addresses page | `primary` |
| Set as default | Address card action | `link` |
| Edit | Address card, product row (admin) | `ghost` |
| Delete | Address card, admin row | `link` (danger) |
| Change password | Settings section | `secondary` |

### 3.6 Admin

| Label | Where | Variant |
|---|---|---|
| Add product | Admin products list | `primary` |
| Save | Product edit drawer footer | `primary` |
| Save and add another | Product create page | `secondary` |
| Duplicate | Product row menu | `ghost` |
| Delete product | Product row menu, product detail | `link` (danger) → confirm modal |
| Bulk edit | Admin products list (when rows selected) | `secondary` |
| Export CSV | Admin products/orders list | `ghost` |
| Confirm | Order detail, state = Placed | `primary` |
| Hand to courier | Order detail, state = Confirmed | `primary` |
| Mark delivered | Order detail, state = In delivery | `primary` |
| Mark refused | Order detail, state = In delivery | `danger` |
| Cancel order | Order detail, state = Placed | `danger` |
| Approve return | Return detail | `primary` |
| Reject return | Return detail | `danger` |
| Refresh | Stale-data conflict modal | `primary` |
| Overwrite | Stale-data conflict modal | `danger` |

### 3.7 System-wide

| Label | Where | Variant |
|---|---|---|
| Try again | Error state, offline banner | `primary` |
| Back to home | 404, unauthorized | `secondary` |
| Clear filters | Category page empty state | `link` |
| Dismiss | Toasts, banners | icon (X) |
| Close | Modals, drawers | icon (X) |
| Copy | Any click-to-copy field (order ref, SKU) | icon (copy) |

**Rules:**
- Never `Click here`, `Learn more` (without context), `Submit` (be specific), `OK`, `Yes/No` (frame as action).
- Destructive verbs (Delete, Cancel, Reject, Overwrite) use `danger` variant.
- Primary + accent are never used side-by-side; one primary action per surface.

---

## 4 · Form microcopy

### 4.1 Universal patterns

- **Label** sits above the field. Sentence case. `Full name` not `Full Name`.
- **Required marker:** red asterisk `*` immediately after label, no space.
- **Optional marker:** grey text after label: `Order notes (optional)`.
- **Placeholder** shows format when non-obvious; never repeats the label.
- **Help text** sits below the field, `caption` size, `stone` color. Explains constraint or gives an example.
- **Error message** replaces help text on validation fail. `brand-error` color, `caption` size, `aria-live="polite"`.
- **Success validation** (rare): checkmark icon at right edge of the field, no text.

### 4.2 Field library

**Full name** — checkout, sign-up, address
- Label: `Full name`
- Placeholder: `Yacine Belkacem`
- Required
- Errors: required → `Enter your full name.` · too short (< 2 chars) → `Name must be at least 2 characters.`

**Email** — sign-in, sign-up, forgot-password, account settings
- Label: `Email`
- Placeholder: `you@example.com`
- Required
- Errors: required → `Enter your email.` · format → `Enter a valid email address.` · not found (sign-in) → `We couldn't find an account with that email.` · already exists (sign-up) → `An account with this email already exists. Sign in instead.`

**Password** — sign-in, sign-up, reset-password, change-password
- Label: `Password` (sign-in) · `Create a password` (sign-up) · `New password` (reset)
- No placeholder
- Required
- Sign-up help: `At least 8 characters. Include a number for extra strength.`
- Errors: required → `Enter your password.` · too short (< 8) → `Password must be at least 8 characters.` · wrong (sign-in) → `Wrong password. Try again or reset it.`
- Visibility toggle: eye icon on the right, aria-label `Show password` / `Hide password`

**Confirm password** — sign-up, reset
- Label: `Confirm password`
- Errors: mismatch → `Passwords don't match.`

**Phone** — checkout, account settings
- Label: `Phone`
- Placeholder: `+213 5X XXX XX XX`
- Help: `Starts with +213 or 0.`
- Required
- Errors: required → `Enter your phone number.` · format → `Enter a valid Algerian phone number.` · already registered (sign-up) → `A different account uses this phone. Sign in or use a different phone.`

**Wilaya** — checkout, address
- Label: `Wilaya`
- Placeholder in select: `Choose a wilaya`
- Required
- Errors: required → `Choose a wilaya.`

**Commune** — checkout, address
- Label: `Commune`
- Placeholder in select: `Choose a wilaya first` (disabled) / `Choose a commune` (enabled)
- Required
- Errors: required → `Choose a commune.`

**Street address** — checkout, address
- Label: `Street address`
- Placeholder: `Number, street, building, notes for the courier`
- Multi-line, 3 rows
- Required
- Errors: required → `Enter your street address.` · too long (> 200) → `Address is too long. Keep it under 200 characters.`

**Order notes** — checkout
- Label: `Order notes` + `(optional)` in stone
- Placeholder: `Anything the courier should know?`
- Multi-line, 2 rows
- Optional

**Order number (lookup)** — track-order
- Label: `Order number`
- Placeholder: `HT-4287`
- Help: `Starts with HT-. Check your confirmation.`
- Required
- Errors: required → `Enter your order number.` · format → `Order number starts with HT- (like HT-4287).`

**Search query** — search bar
- Placeholder in nav: `Search parts, brands, SKUs`
- Placeholder in admin: `Search products, orders, customers` (⌘K to open)

**Product name** — admin product edit
- Label: `Product name`
- Placeholder: `As shown on the box`
- Help: `Manufacturer-exact spelling. Case matters.`
- Errors: required → `Enter the product name.`

**Brand** — admin product edit
- Label: `Brand`
- Type: combobox (autocomplete from existing brands + free text)
- Errors: required → `Choose or add a brand.`

**SKU** — admin product edit
- Label: `SKU`
- Help: `Distributor-provided or internal code. Must be unique.`
- Errors: required → `Enter an SKU.` · duplicate → `This SKU is already in use by "{other product name}".`

**Price (in DA)** — admin product edit
- Label: `Price (DA)`
- Type: number input, right-aligned
- Help: `Whole dinars, no decimals.`
- Errors: required → `Enter a price.` · not positive → `Price must be greater than 0.`

**Stock count** — admin product edit
- Label: `Stock`
- Type: number input
- Help: `Backend flags items with 3 or fewer as low stock.`
- Errors: required → `Enter a stock count.` · negative → `Stock can't be negative.`

**Category** — admin product edit
- Label: `Category`
- Type: select
- Errors: required → `Choose a category.`

**Description** — admin product edit
- Label: `Description`
- Type: rich text editor (Phase 2) / plain textarea for now
- Help: `Long-form description shown on the PDP. Markdown supported.`

**Short description** — admin product edit
- Label: `Short description` + `(optional)`
- Type: textarea, 2 rows
- Help: `One-line summary shown in search results and share cards. Max 140 characters.`

**Images** — admin product edit
- Label: `Product images`
- Type: multi-file uploader with drag-reorder
- Help: `First image is the primary. WebP or JPG, up to 5 MB each, up to 8 images.`

### 4.3 Error message templates

Use these patterns; keep language consistent across the app.

| Type | Template | Example |
|---|---|---|
| Required | `Enter your {noun}.` / `Choose a {noun}.` | `Enter your email.` · `Choose a wilaya.` |
| Format | `Enter a valid {noun}.` | `Enter a valid email address.` |
| Length min | `{Noun} must be at least {n} characters.` | `Password must be at least 8 characters.` |
| Length max | `{Noun} is too long. Keep it under {n} characters.` | `Address is too long. Keep it under 200 characters.` |
| Range min | `{Noun} must be at least {n}.` | `Price must be at least 1.` |
| Range max | `{Noun} can't exceed {n}.` | `Quantity can't exceed the stock count.` |
| Uniqueness | `This {noun} is already in use.` | `This SKU is already in use by "GeForce RTX 4070 12GB".` |
| Not found | `We couldn't find that {noun}. {actionable suggestion}.` | `We couldn't find that order. Double-check the number and phone.` |
| Match | `{Nouns} don't match.` | `Passwords don't match.` |
| Business rule | Plain-language sentence describing the rule + fix. | `You can only report a DOA return within 7 days of delivery.` |

**Never use:** `Invalid input`, `Please try again`, `An error occurred`, `Field is required` (say which field).

---

## 5 · Nav labels

### 5.1 Storefront primary nav

`Shop` · `Deals` · `Bundles` · `Guides` · `Support`

### 5.2 Storefront nav utility (icons)

Icon-only, `aria-label` values: `Search` · `Account` (or `Your account` if signed in) · `Cart, {n} items` / `Cart, empty` · `Switch to dark mode` / `Switch to light mode` · `Open menu` (mobile)

### 5.3 Support dropdown

`Track order` · `Returns` · `Compatibility help` · `FAQ` · `Contact`

### 5.4 Footer columns

**Shop:** All categories · Graphics cards · Processors · Memory · Storage · Bundles · Deals · New arrivals
**Support:** Track order · Returns (7-day DOA) · Compatibility help · Contact · FAQ
**Company:** About · Distributors · Careers · Press
**Legal:** Terms · Privacy · Warranty · Cookies

### 5.5 Admin sidebar

Section labels (uppercase 11px eyebrow):

**OVERVIEW** — Dashboard
**CATALOG** — Products · Categories · Brands
**ORDERS** — All orders · Placed ({n}) · Confirmed ({n}) · In delivery ({n}) · Returns ({n})
**ANALYTICS** — (Phase 2)
**SETTINGS** — (Phase 2)

Sign out button at the bottom.

### 5.6 Customer account sidebar

Overview · Orders ({n}) · Addresses · Wishlist ({n}) · Settings · Sign out

---

## 6 · Section headings inventory

### 6.1 Landing (marketing)

| Section | Eyebrow | Heading |
|---|---|---|
| Hero | (NEW badge + subline) | The parts your rig *actually* needs. |
| Logo wall | — | The brands builders trust — stocked from two verified distributors |
| Bento | The H-Tech promise | One store built *around* the way you actually buy parts. |
| Stats | By the numbers | Built to *not fall over* when a promo hits. |
| Categories split | Catalog | Everything you need to build *or upgrade* a machine. |
| Testimonials | Word of mouth | Trusted by builders, tinkerers *and* IT shops. |
| Guides | Guides & updates | Fresh from the H-Tech *workshop*. |
| Final CTA | — | The parts store built *for builders*. |

### 6.2 Storefront pages

| Page | H1 |
|---|---|
| `/shop` | All categories |
| `/c/graphics-cards` | Graphics cards |
| `/product/…` | (product name — no separate h1, product name IS the h1) |
| `/cart` | Your cart |
| `/checkout` | Checkout |
| `/order-placed/…` | Order placed |
| `/search?q=…` | Results for "{q}" |
| `/deals` | Deals |
| `/new` | New arrivals |
| `/bundles` | Build bundles |
| `/guides` | Guides & updates |
| `/support` | Support |
| `/support/track-order` | Track your order |
| `/about` | About H-Tech |

### 6.3 PDP tabs

`Overview` · `Specs` · `Compatibility` · `Reviews`

### 6.4 Admin pages

| Page | H1 |
|---|---|
| `/admin` | Dashboard |
| `/admin/products` | Products |
| `/admin/products/new` | New product |
| `/admin/products/:id` | Edit product |
| `/admin/categories` | Categories |
| `/admin/orders` | Orders |
| `/admin/orders/:id` | Order {ref} |
| `/admin/returns` | Returns |

### 6.5 Auth pages

| Page | H1 | Subhead |
|---|---|---|
| `/sign-in` | Sign in | Welcome back. |
| `/sign-up` | Create your account | Order faster and track your purchases. |
| `/forgot-password` | Reset your password | We'll email you a link to set a new one. |
| `/reset-password/…` | Set a new password | Pick something you can remember. |
| `/verify-email/…` | Verify your email | Almost done. Click the link in the email we just sent. |
| `/admin/sign-in` | Admin sign in | (no subhead — keep it dry) |

---

## 7 · Empty states

Every list has one. Format: **heading + one-line explainer + optional CTA.**

| Surface | Heading | Explainer | CTA |
|---|---|---|---|
| Category, no products match filters | No products match these filters | Try removing brand or price constraints. | Clear filters |
| Search results, no matches | No results for "{q}" | Try a different spelling or a broader term. | Browse the catalog |
| Empty cart | Your cart is empty | Browse the catalog to add parts. | Browse the catalog |
| Empty wishlist | Your wishlist is empty | Save products from any product page for later. | Browse the catalog |
| Order history empty (customer) | You haven't placed an order yet | When you do, it'll show here. | Browse the catalog |
| Guest order lookup — not found | We couldn't find that order | Double-check the number and phone. | *(no CTA — retry inline)* |
| Address book empty | No saved addresses | Add an address to check out faster. | Add address |
| Admin products empty (no products) | No products yet | Add your first product to get started. | Add product |
| Admin products empty (search) | No products match your search | Try a different term or clear filters. | Clear filters |
| Admin orders at state filter, empty | No orders in {state} right now | *(no explainer)* | *(no CTA)* |
| Admin returns empty | No open returns | Check back after tomorrow's dispatches. | *(no CTA)* |
| Admin categories empty | No categories yet | Add a category before adding products. | Add category |
| PDP reviews empty | No reviews yet | Be the first to review this product. | *(auth-gated: shows "Sign in to review")* |
| Related products, none available | *(hide section entirely)* | — | — |
| Guides empty | No guides yet | New guides ship regularly — check back soon. | Browse the catalog |
| Admin activity feed empty (new install) | Nothing has happened yet | Activity will appear here once products, orders, and price changes start rolling in. | *(no CTA)* |

**Never use as an empty-state heading:** `Oops!` · `Nothing to see here` · `Whoops!` · `Oh no!` · `Sorry!` · anything with emoji.

---

## 8 · Loading states

Skeleton screens are the default. Copy appears only when we can say something specific.

| Surface | Text |
|---|---|
| Global route change | *(none — skeleton only)* |
| Product grid loading | *(skeleton cards)* |
| PDP loading | *(skeleton layout)* |
| Cart drawer opening | *(instant, no loading text)* |
| Checkout submitting | Button label: `Placing order…` (with spinner) |
| Order lookup submitting | Button label: `Looking up…` |
| Admin table loading | *(skeleton rows)* |
| Admin product saving | Button label: `Saving…` |
| Admin order state changing | Button label: `Confirming…` / `Handing off…` / etc. |
| Backend genuinely slow (> 3s) | Toast: `This is taking longer than usual. Give it another moment.` |
| Long-running admin export | Toast: `Preparing your export. We'll notify you when it's ready.` |

Rule: use `…` (ellipsis character), not three periods `...`.

---

## 9 · Toast messages

Toasts stack bottom-right. Auto-dismiss after 4s (success/info) or 6s (warn/error). Manual dismiss X visible on hover.

### 9.1 Success

| Trigger | Toast |
|---|---|
| Item added to cart | Added to cart. |
| Item removed from cart | Removed. |
| Cart cleared | Cart cleared. |
| Added to wishlist | Saved to wishlist. |
| Removed from wishlist | Removed from wishlist. |
| Order placed | Order placed. Your order number is {ref}. |
| Address saved | Address saved. |
| Address deleted | Address deleted. |
| Address set as default | Default address updated. |
| Password changed | Password updated. |
| Profile updated | Profile updated. |
| Copied (order ref, SKU, address) | Copied to clipboard. |
| Signed out | Signed out. |
| Product created (admin) | Product added. |
| Product updated (admin) | Changes saved. |
| Product deleted (admin) | Product deleted. |
| Category added (admin) | Category added. |
| Order confirmed (admin) | Order {ref} confirmed. |
| Order handed to courier (admin) | Order {ref} handed to courier. |
| Order delivered (admin) | Order {ref} marked delivered. |
| Return approved (admin) | Return {ref} approved. Refund initiated, stock restored. |
| Return rejected (admin) | Return {ref} rejected. |

### 9.2 Info

| Trigger | Toast |
|---|---|
| Backend slow warning | This is taking longer than usual. Give it another moment. |
| Cart merged on sign-in | Merged your saved cart with the items you just added. |
| Wishlist merged on sign-in | Merged your saved wishlist. |
| Verification email resent | New verification email sent. Check your inbox. |
| Reset link sent | If an account exists for that email, we've sent a reset link. |

### 9.3 Warning

| Trigger | Toast |
|---|---|
| Item price changed since add-to-cart | The price of {product} changed. Review before checkout. |
| Item went out of stock in cart | {product} is out of stock. It'll stay in your cart in case it's back. |
| Session expiring soon (admin, 5 min) | You'll be signed out in 5 minutes. Save your work. |
| Adding beyond stock | Only {n} left in stock. |

### 9.4 Error

| Trigger | Toast |
|---|---|
| Network fail on non-critical | Something went wrong. Try again in a moment. |
| Add-to-cart failed | Couldn't add to cart. Try again. |
| Checkout submission failed | We couldn't place your order. Try again, and check your card if payments are enabled. |
| Sign-in failed (generic) | Sign-in failed. Check your credentials. |
| Admin save failed (5xx) | Couldn't save. Try again. |
| Admin save failed (stale) | *(replaced by conflict modal, not a toast)* |
| Copy to clipboard failed | Couldn't copy. Select the text manually. |
| File upload failed | Upload failed. Check the file size and try again. |

---

## 10 · Confirmation prompts

Rendered as modals for destructive or irreversible actions. Format: **heading + explanation + primary CTA + secondary "Cancel".**

| Action | Heading | Explanation | Primary CTA |
|---|---|---|---|
| Delete product (admin) | Delete this product? | This can't be undone. Orders that already reference it will still show its name. | Delete product |
| Delete address (customer) | Delete this address? | Any orders that use it will keep the address on record. | Delete |
| Clear cart | Clear your cart? | You'll lose the {n} items in it. | Clear cart |
| Cancel order (admin) | Cancel this order? | This will notify the customer if notifications are enabled. Stock is restored. | Cancel order |
| Mark refused (admin) | Mark {ref} as refused at door? | Stock is automatically restored. The order closes. | Mark refused |
| Approve return | Approve this return? | Stock will be restored and the order marked refunded. | Approve return |
| Reject return | Reject this return? | The customer will be notified. They can appeal by contacting support. | Reject return |
| Stale-data conflict (admin) | This product was edited by {name}, {relative time} ago | Refresh to see the latest, or overwrite their changes. | Refresh (primary) · Overwrite (danger, right) |
| Sign out (admin, during unsaved work) | Sign out with unsaved changes? | Your draft will be lost. | Sign out (danger) |

---

## 11 · Order lifecycle names & descriptions

The state machine (from [requirements.md](../../docs/requirements.md) — it wins where this section disagrees) plus canonical labels + customer- and admin-facing descriptions.

| State | Chip label | Customer-facing description | Admin-facing description |
|---|---|---|---|
| `placed` | Placed | Received. We'll call to confirm within the next few hours. | Awaiting phone/message confirmation. |
| `confirmed` | Confirmed | Confirmed. Preparing for handoff to the courier. | Ready for handoff. |
| `in_delivery` | In delivery | On its way. The courier will call before arriving. | With courier. |
| `delivered` | Delivered | Delivered. Enjoy the build. You have 7 days to report a DOA. | Delivered. Return window open until {date}. |
| `refused` | Refused at door | Refused at delivery. Stock has been restored; no charge. | Refused. Stock auto-restored. |
| `returned` | Returned (DOA) | Return case open. We're reviewing. | Return case pending review. |

**Rules:**
- Chip label is what appears on the badge — Sentence case, no punctuation.
- Description is one sentence, no exclamation.
- Never abbreviate state names in copy (`In delivery`, not `In deliv.`).

---

## 12 · Return lifecycle names & descriptions

| State | Label | Customer-facing | Admin-facing |
|---|---|---|---|
| `pending_review` | Pending review | We're reviewing your return case. | Awaiting admin decision. |
| `approved` | Approved | Approved. Your refund is being processed. | Approved. Stock restored. Refund initiated. |
| `rejected` | Rejected | Rejected. Contact support if you'd like to appeal. | Rejected by admin. Customer notified. |
| `refunded` | Refunded | Refunded. The amount was returned via {method}. | Refund complete. |

---

## 13 · Support content

### 13.1 FAQ (customer-facing full text)

**Q: When do I pay?**
You pay the courier in cash when they deliver. Nothing is charged before that — no card details, no upfront payment, no deposits.

**Q: Can I inspect the package before paying?**
Yes. Open the package and confirm the product matches what you ordered. If anything is wrong, refuse the delivery — you won't be charged and the courier will return the item.

**Q: What if I refuse the delivery?**
Refusing at the door closes the order at no cost. Your stock is automatically restored to our catalog.

**Q: Where do you deliver?**
All 58 wilayas in Algeria. Delivery time depends on your location — Algiers and Oran are typically 24–48 hours, smaller wilayas 2–5 days.

**Q: Is the price at checkout the final price?**
Yes. The price on the "Place order" button is the price the courier will collect. If our distributor changes the price after you order, that's on us — we absorb the difference.

**Q: What happens if a product is dead on arrival (DOA)?**
You have 7 days from delivery to report a DOA. We'll either swap the product for an identical unit or refund you in full. No restocking fees, no shipping costs on your side.

**Q: How do I report a DOA?**
If you have an account: go to Your Orders → click the order → "Report DOA return."
As a guest: use the Track Order page (order number + phone), open your order, click "Report an issue."

**Q: Do I need an account to order?**
No. Guest checkout works with just your name, phone, and address. Accounts are optional and give you order history, saved addresses, and a wishlist.

**Q: How do I track my order?**
Use the order number we gave you at checkout (starts with `HT-`). Visit the Track Order page and enter the number + your phone. You'll see the current state.

**Q: Are the products genuine?**
Yes. We source only from verified distributors — the same distributors that supply Algerian retail stores. Every SKU is checked against distributor data before it goes live.

**Q: Do you offer manufacturer warranty?**
Yes — every product carries the manufacturer's warranty as sold in Algeria. Warranty duration varies by product; typically 12–36 months. Warranty claims go through the distributor; we help facilitate.

**Q: Can I cancel an order?**
Before confirmation: yes, contact us via WhatsApp or phone. After confirmation and before dispatch: still yes, but faster is better. Once with the courier: refuse at the door.

**Q: How do I contact H-Tech?**
Phone or WhatsApp: {phone}. Email: {email}. We aim to respond within a few hours during business days.

**Q: Do you have a physical store?**
Not currently. H-Tech is online-only, which is how we keep prices tight.

**Q: Do you accept card payments?**
Not yet. Cash on delivery only at launch. Online card payments are planned for a later phase.

**Q: What if a product's price changes between when I add it to my cart and when I check out?**
You'll see a warning at checkout showing the price difference and asking you to confirm before placing the order. You can also just remove the item.

### 13.2 Returns policy (short-form, footer + product page)

> **7-day dead-on-arrival return.** If your product arrives dead or defective, report it within 7 days of delivery. We'll swap or refund — your choice. Shipping is on us. This covers defects only, not change of mind.

### 13.3 Returns policy (long-form, /support/returns)

> **Our 7-day DOA return policy**
>
> Electronics arrive dead sometimes. If yours does, we'll make it right — no fees, no hassle.
>
> **What qualifies**
> A product is DOA if it doesn't power on, doesn't function to spec, has a visible manufacturing defect, or fails within 7 days of delivery through no fault of use.
>
> **What doesn't qualify**
> Change of mind. Physical damage from installation. Compatibility issues (see [Compatibility help](/support/compatibility) before ordering). Software or driver problems that aren't hardware-related.
>
> **How to report**
> Signed-in customers: Your Orders → the order → "Report DOA return."
> Guests: Track Order → look up your order → "Report an issue."
>
> **What we need**
> A short description of the defect. Photos of the product and its packaging help but aren't required.
>
> **Timeline**
> We review within 1 business day. On approval: swap dispatched within 24 hours, or refund initiated same-day if you choose refund. Refunds are returned via the same channel as the original payment (for COD, we coordinate with you directly).
>
> **Your stock is restored** automatically when a return is approved. No action needed on your side.

### 13.4 Compatibility help intro (`/support/compatibility`)

> **Compatibility help**
>
> Building a PC is easy when the parts fit together — and expensive when they don't. Here's what to check before you order.
>
> - **CPU + motherboard:** the CPU and motherboard must share a socket. AM5 CPUs need AM5 boards. LGA 1700 CPUs need LGA 1700 boards.
> - **Motherboard + case:** the motherboard form factor must fit the case. ATX motherboards need ATX cases (or larger).
> - **RAM + motherboard:** DDR5 boards take DDR5 memory only. Same for DDR4.
> - **GPU + case:** check GPU length against your case's max GPU length spec.
> - **GPU + PSU:** every product page lists a recommended PSU wattage. Match or exceed it.
>
> Our product pages surface these constraints under the "Compatibility" tab. If you're unsure, [contact us](/support/contact) with your parts list before ordering.

### 13.5 Contact intro (`/support/contact`)

> **Contact H-Tech**
>
> Fastest answer: WhatsApp or phone.
>
> - Phone: {phone}
> - WhatsApp: {whatsapp}
> - Email: {email}
>
> We answer within a few hours on business days.

---

## 14 · Product spec keys (standardized per category)

Product specs are freeform key–value pairs. To keep the PDP spec tables consistent across the catalog, admins pick keys from these canonical lists per category. New keys can be added but should be reviewed to avoid drift ("Wattage" vs "TDP" vs "Power draw").

### 14.1 Graphics cards

Chipset · Memory · Memory type · Memory bus · Base clock · Boost clock · CUDA cores / Stream processors · Ray tracing cores · Tensor cores · TDP · Recommended PSU · Power connectors · Outputs · DirectX support · Length · Slot width · Cooling

### 14.2 Processors

Socket · Cores · Threads · Base clock · Boost clock · Cache (L2) · Cache (L3) · TDP · Process node · Integrated graphics · Memory support · PCIe support · Included cooler

### 14.3 Motherboards

Socket · Chipset · Form factor · RAM slots · RAM capacity max · RAM speed max · PCIe slots · M.2 slots · SATA ports · USB ports · Ethernet · Wi-Fi · Audio · Rear I/O · Power delivery (VRM)

### 14.4 Memory (RAM)

Capacity · Modules · Speed · Latency (CL) · Voltage · Type · Form factor · RGB · Heat spreader · Height (mm)

### 14.5 Storage

Capacity · Type · Interface · Form factor · Sequential read · Sequential write · Random read (IOPS) · Random write (IOPS) · Endurance (TBW) · Warranty · Controller

### 14.6 Monitors

Panel type · Resolution · Refresh rate · Response time · Size · Aspect ratio · HDR · Sync tech · Ports · Speakers · Stand adjustments · VESA mount

### 14.7 Cases

Form factor · Motherboard support · Max GPU length · Max CPU cooler height · PSU support · Drive bays · Included fans · Front I/O · Side panel · Weight · Dimensions

### 14.8 Power supplies

Wattage · Efficiency rating · Modularity · Form factor · Fan · Cables included · Warranty · Protections

### 14.9 Keyboards

Layout · Switch type · Backlight · Key rollover · Connection · Media keys · Wrist rest · Cable · Compatibility

### 14.10 Mice

DPI · Buttons · Sensor · Weight · Connection · Battery (wireless) · Grip type · Cable · Compatibility

---

## 15 · Legal snippet library

Short reusable strings that appear across the app.

**Footer copyright:** `© 2026 H-Tech · Algiers, DZ`

**Newsletter opt-in text (checkbox, unchecked by default):** `Send me the H-Tech monthly guide (new arrivals, occasional deals). Unsubscribe any time.`

**Cookie banner (compact, per EU-style standards even though not strictly required in DZ):** `We use cookies to keep you signed in and remember your cart. That's it — no ad tracking.` · CTAs: `Got it` (primary) · `Learn more` (link → `/legal/cookies`)

**Terms link on checkout:** `By placing this order, you agree to our [Terms](/legal/terms) and confirm the delivery address is correct.`

**Privacy line on sign-up:** `We use your email to send order confirmations and account activity. See our [Privacy policy](/legal/privacy).`

**Warranty short:** `Manufacturer warranty applies. Duration varies by product. See [Warranty](/legal/warranty).`

**Distributor mention (about page):** `We source parts from two verified Algerian distributors. Every SKU is checked against distributor data before it appears in our catalog.`

---

## 16 · Copy style rules — final checklist

Before shipping any user-facing string, run through this list.

- [ ] Sentence case for buttons and headings (not Title Case)
- [ ] Currency after amount with a space (`89,900 DA`)
- [ ] No emojis (anywhere in product UI)
- [ ] No exclamation marks in routine flows
- [ ] No "just," "simply," "easily"
- [ ] No "click here," "learn more" (without context), "submit"
- [ ] Ellipsis is the character `…`, not three periods
- [ ] Numbers as digits (`3 left`, not `three left`), except spelled out in prose (`eight categories`)
- [ ] Product names in manufacturer-exact form
- [ ] `DA` not `DZD` in customer UI
- [ ] Wilaya names in French romanization (Constantine, not Qusantina)
- [ ] Errors say what happened AND what to do
- [ ] Empty states are specific, not generic
- [ ] Toasts are terse, past tense
- [ ] Destructive confirmations name the action ("Delete product," not "Are you sure?")
- [ ] Nothing "our team is on it"
- [ ] Nothing "we couldn't process your request" (say what actually failed)

---

## 17 · Change log

- **v1.0 · 2026-08-28** — Initial copy inventory. Locks in button labels, error message templates, empty state copy, toast library, order/return lifecycle copy, FAQ text, spec key standardization per category.
