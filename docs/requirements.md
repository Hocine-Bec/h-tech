# H-Tech — Requirements

**v1.0 · 2026-10-01**

The single agreed description of what H-Tech does. The frontend and backend both follow this file.
When another document disagrees with it, this file wins.

## How the project documents fit together

| Document | Answers |
|---|---|
| `docs/owner-brief.md` | What the owner wants, in the owner's words. Never edited. |
| `frontend/design-mockups/` | What the finished website looks like. Approved; this is the end goal. |
| **`docs/requirements.md`** (this file) | What each page does, and the business rules behind it. |
| `docs/nfr.md` | How fast, how available, and how correct it must be, in numbers. |

The API itself (endpoints, field names, formats) is decided by the backend as each endpoint is built,
and the frontend adapts to it. This file describes behaviour, not endpoints.

---

## 1. The final website

The mockups show the complete store. Pages are built one at a time; the backend only builds what the current page needs.

### Storefront (public)

| Page | What it does |
|---|---|
| **Home** | Hero, categories, featured products, the store's promises (live stock, locked prices, COD, 7-day DOA), how ordering works, delivery coverage. |
| **Shop** (all products) | Product grid with filters (category, brand, price range, in stock only, low stock only, on sale), applied-filter chips, sort (most popular, price up/down, newest, name), pagination, bundles rail. |
| **Category** | Same as Shop, limited to one category, plus filters specific to that category (e.g. GPU chipset, memory size, recommended PSU, card length) and a "highest rated" sort. |
| **Product detail** | Gallery, name, brand, SKU, price (with original price and % saved when discounted), stock status, quick specs, quantity, add to cart, tabs (Overview, Specs, Compatibility, Reviews), related products. |
| **Cart** | Line items with quantity and remove, stock-drop warning, subtotal, delivery estimate, proceed to checkout. Works without an account. |
| **Checkout** | Contact (name, phone), delivery address (wilaya, commune, street), delivery method, optional notes, order summary with price-change warnings, place order. Guest checkout always available. |
| **Order placed** | Order reference, "save this number", what happens next, order summary. |
| **Track order** | Look up an order with its reference + phone. Status timeline, items, delivery details, "report an issue" for returns. |
| **Bundles, Deals, New arrivals, Search** | Product lists filtered for a purpose. |
| **Support, FAQ, Guides, Legal, About** | Content pages. |
| **404 / 500** | Error pages. |

### Customer accounts (optional)

Sign up, sign in, email verification, forgot/reset password, account overview, order history, order
detail, saved addresses, wishlist, settings (profile, password, notification preferences, delete
account). An account is never required to buy.

### Admin

Separate sign-in. Dashboard (orders today, pending confirmations, low-stock alerts, open returns,
recent activity), products (list, filter, bulk select, create, edit, duplicate, archive, delete),
categories (edit, reorder, hide), orders (list by state, detail, state actions, internal notes),
returns (list, review, approve, reject).

---

## 2. Business rules

These apply from the first page that uses them.

### Money

- All prices are in Algerian dinar (DA) and include VAT. No fees are added at the door.
- Stored as whole numbers in the smallest unit (centimes). Never floating point.
- Shown to customers in whole dinars. Admins enter prices in whole dinars.
- A product can have a discount. The store shows the discounted price, the original price struck
  through, and the percentage saved.

### Catalog

- Admins manage categories (name, description, display order, visible or hidden) and products.
- A product has a status: **live** (visible to customers), **draft** (admins only), or **archived**
  (hidden from customers, kept for order history). Deleting a product never changes past orders.
- An internal cost can be stored per product. It is never shown to customers.
- Distributor prices and stock reach the catalog through **imports of the distributors' spreadsheets**.
  The store shows when the catalog was last updated.

### Stock

- **In stock:** more than 3 units. **Low stock:** 3 or fewer ("Only 3 left"). **Out of stock:** 0.
- Out-of-stock products stay visible, clearly marked, and can't be added to the cart.
- Stock is reserved when an order is **placed**. It is released if the order is cancelled or refused.
- An order can never take more units than are in stock. Two customers can't both buy the last unit.

### Prices and the cart

- The cart lives in the browser (for signed-in customers it may later be saved on the server).
- The cart is not a promise: prices and stock are re-checked at checkout.
- If a price changed since the item was added, checkout shows the old and new price, and the customer
  must confirm the new price or remove the item before placing the order.
- **The price is locked when the order is placed.** The amount the courier collects is exactly the
  order total, even if the distributor price changes afterwards.
- Each order keeps a copy of the product name and price at the moment it was placed.

### Delivery

- Delivery to every wilaya, to the customer's address (wilaya, commune, street).
- Standard delivery: free on orders of 50,000 DA or more; otherwise a flat fee per wilaya, set by admins.
- Express and other delivery methods are optional extras for later.
- Customers give a name and an Algerian phone number (`+213…`). No email is needed to order.

### Orders

Order references look like `HT-4287` and are what customers and admins see.

| State | Meaning | Next possible states |
|---|---|---|
| **Placed** | Customer submitted it. Waiting for the confirmation call. | Confirmed, Cancelled |
| **Confirmed** | Confirmed by phone or WhatsApp. Waiting for the courier. | In delivery, Cancelled |
| **In delivery** | With the courier. | Delivered, Refused |
| **Delivered** | Customer paid the courier. The 7-day return window starts. | Returned |
| **Cancelled** | Stopped before dispatch. Needs a reason: customer unreachable after 3 attempts, customer cancelled, payment concerns, or out of stock. Stock is released. | — |
| **Refused** | The customer refused the parcel at the door. Stock is restored. Nothing is charged. | — |
| **Returned** | A return on this order was approved. | — |

- Only these transitions are allowed. The backend enforces them; the UI shows only valid actions.
- Every state change is recorded with who did it and when (the timeline and history).
- A placed order is never lost, under any failure (see `docs/nfr.md`).
- Customers can change the order until the confirmation call. Small fixes (address, phone) are possible
  until it's handed to the courier.

### Returns

Return references look like `RT-1234`.

- A customer can open a return within **7 days of delivery**, per item, with a reason (dead on
  arrival, defective, wrong item shipped), a description, and photos.
- Return states: **Pending review → Approved or Rejected**. An approved return ends as **Refunded** or
  **Swapped**.
- The customer chooses a refund or a swap. Refunds are in cash, handled offline, and include the
  delivery fee. A swap ships a new unit, which takes one unit from stock.
- Approving a return does these together, or none of them: record the refund or swap, mark the order
  **Returned**, and handle the returned unit.
- **A dead or defective unit does not go back into sellable stock.** Only a working unit (for example,
  a wrong item shipped, unopened) is restocked.

### Customer accounts

- Optional. Guest checkout is always available, and guests track orders with reference + phone.
- Sign-up needs a first name, email and password (at least 8 characters). The email must be verified.
- Reset and verification links expire after 24 hours.
- Wishlist: kept in the browser for guests, saved on the server for signed-in customers, and merged
  on sign-in.
- Deleting an account removes the profile, addresses and wishlist. Order history is kept, anonymized.
- Emails go only to customers with an account, and only the kinds they opted into. Order updates are
  always sent while an order is active.

### Reviews

- Only signed-in customers can write a review: 1 to 5 stars and optional text, one review per product.
- Products show the average rating and the number of reviews.

### Bundles

- A bundle is a fixed set of products sold together at a set price. It shows the saving compared with
  buying the items separately.

### Admins

- Two admins (the owner and one assistant), signed in with email and password.
- **Two admins editing the same record must not overwrite each other.** If the record changed since the
  form was opened, saving is refused and the admin sees what changed.
- Admins can add internal notes to orders. Customers never see them.

---

## 3. Mockup text that conflicts with these rules

The mockups are the approved design. These lines of text disagree with the rules above, or with each
other, and should be changed when each page is built:

| Mockup | Text | Change to |
|---|---|---|
| `product.html` | "Price locks at 89,900 DA when you add it to your cart" | The price locks when you place the order. |
| `faq.html` | Price re-locked for 15 minutes at checkout; a lower price after ordering applies automatically | The price is locked when the order is placed. |
| `home.html`, `category.html`, `faq.html`, `support.html`, admin pages | "Live sync", "real-time", "sync'd 3× daily", "auto-sync every 5 minutes" | "Updated from our distributors" with the last update time. |
| `faq.html` | Approved DOA returns: "Stock is restored to the catalog" | Dead or defective units are not restocked. |
| `admin-returns.html` | Approval shows "Stock restored 54 → 55" for a DOA return | No restock for dead or defective units. |
| `admin-order-detail.html` | "Refuse" button and modal on a placed order (unreachable customer, cancelled, out of stock) | "Cancel", with the same reasons. Refused is only for the doorstep. |
| `faq.html` | "Why did my order get refused?" (reasons before dispatch) | "Why was my order cancelled?" |
| `content-design.md` § 11–12 | No Cancelled state; Returned means "return case open"; no Swapped return state | Use the order and return states above. |
| `home.html` vs `faq.html`, `support.html` | 58 wilayas vs 48 wilayas | "Every wilaya", without a number. |
| `faq.html` | Free delivery above 15,000 DA | 50,000 DA, as on the other pages. |
| `home.html` | "99.9% uptime target on ordering" | 99.5%, as in `docs/nfr.md`, or remove it. |
| `faq.html` | SMS at every state change; bulk orders by bank transfer | Later features, not at launch. |
