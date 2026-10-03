# ADR 0001 — Frontend stack

**Status:** Accepted · 2026-08-28
**Deciders:** Hocine (owner), Claude (frontend / design)

## Context

H-Tech's frontend serves two audiences: a public storefront and a private admin panel. The
storefront is browse-heavy and filter-heavy (brand, price range, availability, sort), and browsing
has to feel instant. The admin panel is dense and form-heavy: the product edit form alone has 20+
fields, including dynamic image and spec lists.

The backend is a separate Go/Postgres API. It owns the API, and the frontend adapts to it. The
frontend is often built ahead of the backend, so every page must run on local mock data until its
endpoints exist, then switch to the real API without UI changes.

Every screen ships in both light and dark mode from day one (see `frontend/docs/DESIGN.md`).

## Decisions

| Concern | Choice | Alternatives considered |
|---|---|---|
| Framework | React 19 + TypeScript | Preact (too niche), Solid (too small ecosystem) |
| Build tool | Vite 6 | Next.js (too much for a mostly-client SPA + separate Go backend) |
| Styling | Tailwind CSS 3 + CSS variables | CSS-in-JS (runtime cost), vanilla CSS modules (too much boilerplate for dual-mode tokens) |
| Router | TanStack Router (code-based) | React Router v7, TanStack Router file-based |
| Server data | TanStack Query 5 | SWR (weaker mutation story) |
| Validation | Zod | Hand-written type guards |
| Forms | react-hook-form + Zod resolver | TanStack Form (newer, smaller community), native (painful for admin) |
| Primitives | shadcn/ui base + Radix (heavy restyle) | Radix headless from scratch, hand-built |
| Component org | Feature-based (`src/features/*`) | Type-based, route-collocated |
| Icons | lucide-react | Heroicons, tabler |
| Package manager | npm | pnpm (not installed on host), yarn |

## Rationale

**TanStack Query for server data.** Loading, error, refetch and cache invalidation are the hard part
of a data-driven storefront. TanStack Query handles them in one place, and its query functions are
the single seam where mock data is swapped for the real API.

**Zod at the boundary.** API responses are validated when they arrive, so a change in the backend's
response shape fails loudly in one place instead of breaking components silently. The same schemas
drive form validation.

**TanStack Router over React Router v7.** TanStack Router's search-param typing is a real win for
the filter-heavy shop and category pages (brand list, price range, in-stock toggle, sort — all typed
and validated). Sharing an ecosystem with TanStack Query pays off in loader integration and query
invalidation. React Router is more familiar to reviewers, which is the counter-argument, but the
type-safety story is decisive here.

**react-hook-form + Zod over TanStack Form.** RHF is battle-tested, uncontrolled by default (fewer
re-renders in large admin forms), and pairs cleanly with `@hookform/resolvers/zod`. TanStack Form
has a stronger types story but a smaller community; the risk isn't worth it at this scale.

**shadcn/ui as base.** We copy Radix-based accessible primitives into the repo, own the code, and
restyle them to our tokens. Reinventing focus traps, keyboard navigation in dropdowns, and
screen-reader announcements for dialogs is not where the effort should go. None of the recognizable
"shadcn look" survives once our tokens are applied.

**Feature-based folder structure.** Every feature (catalog, cart, checkout, orders, admin, auth,
account) owns its components, hooks, API calls and types. Shared UI primitives live in
`src/components/ui`. It's faster to find where things belong, and deleting a feature is clean.

**Tailwind 3 with CSS variables.** Tokens live as CSS variables under `[data-theme='dark']` and
`[data-theme='light']`; Tailwind's `extend` reads them via `var(--…)`, so every utility updates on
mode switch. Tailwind 4 was considered and deferred until shadcn/ui's Tailwind 4 support stabilizes
across the plugins we depend on.

**npm not pnpm.** pnpm is faster and disk-efficient but wasn't installed on the host. Not worth a
global install for a solo project.

## Consequences

**Positive**
- Type safety end to end: routes, search params, forms, API responses (via Zod)
- Mock-to-real API switches happen in one place per query, without UI changes
- Feature slices make it obvious where a new component belongs
- The dual-mode token layer gives every component light and dark mode for free
- Fast dev inner loop (Vite) — sub-second HMR

**Negative / accepted trade-offs**
- TanStack Router is younger than React Router; some edge cases (deeply nested layouts, complex
  parallel routes) may need workarounds
- react-hook-form's controlled-input escape hatches (needed for shadcn `<Select>`, date pickers)
  require the `Controller` wrapper, which can feel awkward
- shadcn/ui is vendored code — updates to the underlying Radix primitives don't come free; we must
  re-copy on major changes
- No server rendering; every page is client-side. Fine for the admin panel and acceptable for the
  storefront. If search-engine visibility of product pages becomes a need, it gets its own decision
  (e.g. a static prerender step).

## Not yet decided

- **Component previews** (Storybook or Ladle): added only once the primitive set stabilizes, so
  stories aren't rewritten.
- **Unit and component tests** (Vitest + Testing Library is the obvious choice): deferred until
  there's stateful logic worth covering.
- **End-to-end tests** (Playwright preferred over Cypress): deferred until the checkout flow is
  complete.
- **Error monitoring** (Sentry likely) and analytics: deferred until the site is deployed for real use.
- **i18n** (`react-intl` or `i18next`) for Arabic and French: deferred until the copy inventory is
  stable.
