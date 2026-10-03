import { useState, useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Nav } from '@/components/storefront/Nav'
import { Footer } from '@/components/storefront/Footer'
import { FilterPanel } from '@/components/storefront/FilterPanel'
import { ProductCard } from '@/components/storefront/ProductCard'
import { BundlesRail } from '@/components/storefront/BundlesRail'
import { Pagination } from '@/components/ui/Pagination'
import { useProducts, useCategories, useBrands, useBundles } from '@/hooks/useShop'
import { mockProducts } from '@/mock/products'
import type { ShopFilters } from '@/types/api'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

const SORT_OPTIONS = [
  { value: 'popularity', label: 'Most popular' },
  { value: 'price_asc',  label: 'Price: low to high' },
  { value: 'price_desc', label: 'Price: high to low' },
  { value: 'newest',     label: 'Newest first' },
  { value: 'name_asc',   label: 'Name A–Z' },
] as const

const priceRange = {
  min: Math.min(...mockProducts.map((p) => p.price)),
  max: Math.max(...mockProducts.map((p) => p.price)),
}

function ShopPage() {
  const [filters, setFilters] = useState<ShopFilters>({ sort: 'popularity', page: 1, per_page: 24 })
  const [searchInput, setSearchInput] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const { data: categoriesData } = useCategories()
  const { data: brandsData } = useBrands()
  const { data: productsData, isFetching } = useProducts(filters)
  const { data: bundlesData } = useBundles()

  const categories = categoriesData?.data ?? []
  const brands = brandsData?.data ?? []
  const products = productsData?.data ?? []
  const meta = productsData?.meta
  const bundles = bundlesData?.data ?? []

  const appliedFilters = useMemo(() => {
    const chips: { label: string; clear: () => void }[] = []
    if (filters.category) {
      const cat = categories.find((c) => c.slug === filters.category)
      if (cat) chips.push({ label: cat.name, clear: () => updateFilters({ category: undefined }) })
    }
    filters.brand?.forEach((b) => {
      const brand = brands.find((br) => br.slug === b)
      if (brand) chips.push({ label: brand.name, clear: () => updateFilters({ brand: filters.brand?.filter((x) => x !== b) }) })
    })
    if (filters.price_min) chips.push({ label: `Min ${filters.price_min.toLocaleString()} DA`, clear: () => updateFilters({ price_min: undefined }) })
    if (filters.price_max) chips.push({ label: `Max ${filters.price_max.toLocaleString()} DA`, clear: () => updateFilters({ price_max: undefined }) })
    if (filters.in_stock)  chips.push({ label: 'In stock', clear: () => updateFilters({ in_stock: undefined }) })
    if (filters.low_stock) chips.push({ label: 'Low stock', clear: () => updateFilters({ low_stock: undefined }) })
    if (filters.on_sale)   chips.push({ label: 'On sale', clear: () => updateFilters({ on_sale: undefined }) })
    return chips
  }, [filters, categories, brands])

  function updateFilters(next: Partial<ShopFilters>) {
    setFilters((prev) => ({ ...prev, ...next }))
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    updateFilters({ q: searchInput || undefined, page: 1 })
  }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      <main style={{ flex: 1 }}>
        {/* Page header */}
        <div style={{ borderBottom: '1px solid var(--hairline)', background: 'var(--canvas-elev)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 24px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.3px' }}>
                  All products
                </h1>
                {meta && (
                  <p style={{ margin: '2px 0 0', fontSize: 13, color: 'var(--stone)' }}>
                    {meta.total} product{meta.total !== 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Inline search */}
              <form onSubmit={handleSearch} style={{ flex: 1, minWidth: 240, maxWidth: 440, marginLeft: 'auto' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'var(--surface)', border: '1px solid var(--hairline)',
                  borderRadius: 8, padding: '0 12px', height: 40,
                  transition: 'border-color 150ms',
                }}>
                  <Search size={15} style={{ color: 'var(--stone)', flexShrink: 0 }} />
                  <input
                    type="search"
                    placeholder="Search parts, brands, SKUs"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    style={{
                      flex: 1, background: 'transparent', border: 'none', outline: 'none',
                      fontSize: 14, color: 'var(--ink)',
                    }}
                  />
                  <kbd style={{
                    fontSize: 11, fontFamily: 'Geist Mono, monospace',
                    background: 'var(--surface-2)', color: 'var(--stone)',
                    padding: '2px 6px', borderRadius: 4,
                    border: '1px solid var(--hairline)',
                  }}>↵</kbd>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          {/* Toolbar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 0', gap: 12, flexWrap: 'wrap',
          }}>
            {/* Applied filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', flex: 1 }}>
              <button
                onClick={() => setMobileFiltersOpen(true)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 500, color: 'var(--slate)',
                  background: 'transparent', border: '1px solid var(--hairline-strong)',
                  borderRadius: 9999, padding: '5px 12px', cursor: 'pointer',
                }}
              >
                <SlidersHorizontal size={13} /> Filters
              </button>

              {appliedFilters.map((chip, i) => (
                <button
                  key={i}
                  onClick={chip.clear}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 12, fontWeight: 500,
                    background: 'var(--ink)', color: 'var(--canvas)',
                    border: 'none', borderRadius: 9999, padding: '4px 8px 4px 12px',
                    cursor: 'pointer',
                  }}
                >
                  {chip.label}
                  <span style={{
                    width: 18, height: 18, borderRadius: '50%', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.15)',
                  }}>
                    <X size={10} />
                  </span>
                </button>
              ))}

              {appliedFilters.length > 1 && (
                <button
                  onClick={() => setFilters({ sort: filters.sort, page: 1, per_page: filters.per_page })}
                  style={{
                    fontSize: 12, fontWeight: 500, color: 'var(--stone)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    padding: '4px 8px',
                  }}
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={filters.sort ?? 'popularity'}
              onChange={(e) => updateFilters({ sort: e.target.value as ShopFilters['sort'], page: 1 })}
              style={{
                height: 36, padding: '0 32px 0 12px',
                borderRadius: 8, border: '1px solid var(--hairline-strong)',
                background: 'var(--canvas-elev)', color: 'var(--ink)',
                fontSize: 13, cursor: 'pointer', outline: 'none',
              }}
            >
              {SORT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          {/* Layout: filter sidebar + grid */}
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
            {/* Desktop filter panel */}
            <div style={{ position: 'sticky', top: 76 }}>
              <FilterPanel
                categories={categories}
                brands={brands}
                filters={filters}
                priceRange={priceRange}
                onChange={(next) => updateFilters({ ...next, page: 1 })}
              />
            </div>

            {/* Product grid */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {isFetching && products.length === 0 ? (
                <ProductGridSkeleton />
              ) : products.length === 0 ? (
                <EmptyState onClear={() => setFilters({ sort: 'popularity', page: 1, per_page: 24 })} />
              ) : (
                <>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 16,
                    opacity: isFetching ? 0.6 : 1,
                    transition: 'opacity 150ms',
                  }}>
                    {products.map((p) => <ProductCard key={p.id} product={p} />)}
                  </div>
                  {meta && <Pagination meta={meta} onChange={(page) => updateFilters({ page })} />}
                </>
              )}
            </div>
          </div>

          {/* Bundles rail */}
          {bundles.length > 0 && <BundlesRail bundles={bundles} />}
        </div>
      </main>

      <Footer />

      {/* Mobile filter drawer (simple overlay for now) */}
      {mobileFiltersOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)',
          }}
          onClick={() => setMobileFiltersOpen(false)}
        >
          <div
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: 300, background: 'var(--canvas-elev)',
              borderRight: '1px solid var(--hairline)',
              padding: '20px 16px', overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)' }}>Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--stone)' }}>
                <X size={18} />
              </button>
            </div>
            <FilterPanel
              categories={categories}
              brands={brands}
              filters={filters}
              priceRange={priceRange}
              onChange={(next) => { updateFilters({ ...next, page: 1 }); setMobileFiltersOpen(false) }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{
          borderRadius: 12, border: '1px solid var(--hairline)',
          background: 'var(--canvas-elev)', padding: 16,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          <div style={{
            aspectRatio: '4/3', borderRadius: 8,
            background: `linear-gradient(90deg, var(--surface) 25%, var(--surface-2) 50%, var(--surface) 75%)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s ease-in-out infinite',
          }} />
          <div style={{ height: 12, width: '40%', borderRadius: 4, background: 'var(--surface-2)', animation: 'shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ height: 14, width: '80%', borderRadius: 4, background: 'var(--surface-2)', animation: 'shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ height: 12, width: '60%', borderRadius: 4, background: 'var(--surface-2)', animation: 'shimmer 1.5s ease-in-out infinite' }} />
        </div>
      ))}
    </div>
  )
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div style={{
      border: '1px dashed var(--hairline-strong)',
      borderRadius: 12, padding: '64px 32px', textAlign: 'center',
    }}>
      <p style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: 'var(--ink)' }}>No products found</p>
      <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--steel)' }}>Try adjusting your filters or search term.</p>
      <button
        onClick={onClear}
        style={{
          fontSize: 14, fontWeight: 500, padding: '9px 20px', borderRadius: 9999,
          background: 'var(--ink)', color: 'var(--canvas)', border: 'none', cursor: 'pointer',
        }}
      >
        Clear all filters
      </button>
    </div>
  )
}
