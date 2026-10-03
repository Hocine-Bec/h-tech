# H-Tech - Non-Functional Requirements (v1, pre-measurement)

All figures are targets to be validated by load testing.
- `[BRIEF]` = derived from owner brief. 
- `[GUESS]` = my assumption, unvalidated.

## Scale
- Catalog: 1,500 products across 7–8 categories at launch [BRIEF]
- Catalog growth: 15,000–20,000 products within year one [BRIEF]
- Traffic: a few hundred visitors/day at launch [BRIEF]
- Peak: 10× normal traffic during promo windows, sustained for a few days [BRIEF]
- Conversion: small fraction of visitors order [BRIEF] — assume 2% [GUESS]

## Latency (server-side, measured at the API)
- GET /api/products (list, paginated): p95 < 200ms, p99 < 500ms [GUESS]
- GET /api/products/{id}: p95 < 150ms [GUESS]
- Order placement: p95 < 800ms [GUESS] — writes cost more, and the brief tolerates
  slower checkout more than slow browsing
- Rationale: owner says browsing must "feel instant" [BRIEF]; sub-500ms page loads
  are the usual threshold for that perception

## Availability (tiered — the brief explicitly permits this)
- Order placement + catalog browse: 99.5% monthly [GUESS from BRIEF: "ordering must work"]
- Reviews, non-critical reads: 99% monthly [BRIEF: "if reviews hiccup for an hour I'll survive"]
- Recovery: MTTR < 15 minutes for a crashed service [GUESS]

## Durability & correctness
- A placed order is never lost, under any failure [BRIEF — stated as non-negotiable]
- Price integrity: the price shown at order placement is the price charged, even if
  distributor prices change [BRIEF]
- Stock accuracy: displayed availability reflects real stock [BRIEF]

## Concurrency
- Two admins editing catalog/prices simultaneously must not corrupt data or lose
  updates [BRIEF]
- Concurrent orders on the same product must not oversell [GUESS — implied by stock accuracy]

## Constraints
- Modest hosting budget; prefer lean over elaborate [BRIEF]
- Cash on delivery only at launch; no payment integration [BRIEF]
- 7-day DOA return window; refused COD deliveries restock [BRIEF]