# H-Tech frontend

React + TypeScript storefront and admin panel for H-Tech, an online store for computer parts in Algeria.
The frontend is AI-generated. It is built page by page, and the screenshots below show the approved design
the pages are built toward.

- **App:** [`app/`](app) — Vite, React 19, TanStack Router and Query. Decisions: [ADR 0001](../docs/adr/0001-frontend-stack.md).
- **Design docs:** [`docs/DESIGN.md`](docs/DESIGN.md) (tokens and components), [`docs/brand-identity.md`](docs/brand-identity.md),
  [`docs/content-design.md`](docs/content-design.md) (copy), [`docs/information-architecture.md`](docs/information-architecture.md) (routes).
- **Mockups:** [`design-mockups/`](design-mockups) — standalone HTML, one file per page. Clone the repo and open them in a browser.
  [`_ui-kit.html`](design-mockups/_ui-kit.html) is the component library.
- **Business rules:** [`../docs/requirements.md`](../docs/requirements.md).

## Preview

| | |
|---|---|
| **Shop** · dark<br>![Shop page, dark theme](design-mockups/images/storefront/shop-dark.png) | **Shop** · light<br>![Shop page, light theme](design-mockups/images/storefront/shop-light.png) |
| **Product detail** · dark<br>![Product detail page, dark theme](design-mockups/images/storefront/product-dark.png) | **Checkout** · dark<br>![Checkout page, dark theme](design-mockups/images/storefront/checkout-dark.png) |
| **Admin orders** · dark<br>![Admin orders table, dark theme](design-mockups/images/admin/admin-orders-dark.png) | **Admin order detail** · dark<br>![Admin order detail, dark theme](design-mockups/images/admin/admin-order-detail-dark.png) |

## All screens

The design supports dark and light themes. Dark is shown for every page; light is shown for a few key pages. Click an image to see it full size.

<details>
<summary><b>Storefront</b></summary>

| Page | Dark | Light |
|---|---|---|
| **Home** | ![Home, dark theme](design-mockups/images/storefront/home-dark.png) | ![Home, light theme](design-mockups/images/storefront/home-light.png) |
| **Shop** | ![Shop, dark theme](design-mockups/images/storefront/shop-dark.png) | ![Shop, light theme](design-mockups/images/storefront/shop-light.png) |
| **Category** | ![Category, dark theme](design-mockups/images/storefront/category-dark.png) |  |
| **Product detail** | ![Product detail, dark theme](design-mockups/images/storefront/product-dark.png) | ![Product detail, light theme](design-mockups/images/storefront/product-light.png) |
| **Cart** | ![Cart, dark theme](design-mockups/images/storefront/cart-dark.png) |  |
| **Checkout** | ![Checkout, dark theme](design-mockups/images/storefront/checkout-dark.png) | ![Checkout, light theme](design-mockups/images/storefront/checkout-light.png) |
| **Order placed** | ![Order placed, dark theme](design-mockups/images/storefront/order-placed-dark.png) |  |
| **Track order** | ![Track order, dark theme](design-mockups/images/storefront/track-order-dark.png) |  |
| **Support** | ![Support, dark theme](design-mockups/images/storefront/support-dark.png) |  |
| **FAQ** | ![FAQ, dark theme](design-mockups/images/storefront/faq-dark.png) |  |
| **Legal terms** | ![Legal terms, dark theme](design-mockups/images/storefront/legal-terms-dark.png) |  |

</details>

<details>
<summary><b>Customer account</b></summary>

| Page | Dark | Light |
|---|---|---|
| **Auth screens** | ![Auth screens, dark theme](design-mockups/images/account/auth-dark.png) |  |
| **Customer account** | ![Customer account, dark theme](design-mockups/images/account/account-dark.png) |  |

</details>

<details>
<summary><b>Admin</b></summary>

| Page | Dark | Light |
|---|---|---|
| **Admin sign-in** | ![Admin sign-in, dark theme](design-mockups/images/admin/admin-sign-in-dark.png) |  |
| **Dashboard** | ![Dashboard, dark theme](design-mockups/images/admin/admin-dashboard-dark.png) | ![Dashboard, light theme](design-mockups/images/admin/admin-dashboard-light.png) |
| **Products** | ![Products, dark theme](design-mockups/images/admin/admin-products-dark.png) |  |
| **Edit product** | ![Edit product, dark theme](design-mockups/images/admin/admin-product-edit-dark.png) |  |
| **Categories** | ![Categories, dark theme](design-mockups/images/admin/admin-categories-dark.png) |  |
| **Orders** | ![Orders, dark theme](design-mockups/images/admin/admin-orders-dark.png) | ![Orders, light theme](design-mockups/images/admin/admin-orders-light.png) |
| **Order detail** | ![Order detail, dark theme](design-mockups/images/admin/admin-order-detail-dark.png) |  |
| **Returns** | ![Returns, dark theme](design-mockups/images/admin/admin-returns-dark.png) |  |

</details>

<details>
<summary><b>Errors and navigation</b></summary>

| Page | Dark | Light |
|---|---|---|
| **404 page** | ![404 page, dark theme](design-mockups/images/system/error-404-dark.png) |  |
| **500 page** | ![500 page, dark theme](design-mockups/images/system/error-500-dark.png) |  |
| **Mega-menu** | ![Mega-menu, dark theme](design-mockups/images/system/mega-menu-dark.png) |  |

</details>

<details>
<summary><b>Mobile (390 px)</b></summary>

| **Home** | **Shop** | **Cart** | **Checkout** |
|---|---|---|---|
| ![Home, mobile](design-mockups/images/mobile/home-dark.png) | ![Shop, mobile](design-mockups/images/mobile/shop-dark.png) | ![Cart, mobile](design-mockups/images/mobile/cart-dark.png) | ![Checkout, mobile](design-mockups/images/mobile/checkout-dark.png) |

</details>

<details>
<summary><b>UI kit</b> — each component shown in dark and light side by side</summary>

**Colors**

![Colors component](design-mockups/images/ui-kit/colors.png)

**Typography**

![Typography component](design-mockups/images/ui-kit/typography.png)

**Wordmark**

![Wordmark component](design-mockups/images/ui-kit/wordmark.png)

**Buttons**

![Buttons component](design-mockups/images/ui-kit/buttons.png)

**Text inputs**

![Text inputs component](design-mockups/images/ui-kit/inputs.png)

**Order state chips**

![Order state chips component](design-mockups/images/ui-kit/chips.png)

**Badges**

![Badges component](design-mockups/images/ui-kit/badges.png)

**Prices**

![Prices component](design-mockups/images/ui-kit/prices.png)

**Cards**

![Cards component](design-mockups/images/ui-kit/cards.png)

**Modal**

![Modal component](design-mockups/images/ui-kit/modal.png)

**Order status timeline**

![Order status timeline component](design-mockups/images/ui-kit/timeline.png)

**Price notices**

![Price notices component](design-mockups/images/ui-kit/notices.png)

**Toasts**

![Toasts component](design-mockups/images/ui-kit/toasts.png)

**Skeletons**

![Skeletons component](design-mockups/images/ui-kit/skeletons.png)

</details>

Screenshots are taken from the HTML files in `design-mockups/` with headless Chrome at 1440 px wide (390 px for mobile).
