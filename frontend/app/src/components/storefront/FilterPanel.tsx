import { ChevronDown } from 'lucide-react'
import type { Category, Brand, ShopFilters } from '@/types/api'
import { formatPrice } from '@/lib/format'

interface Props {
  categories: Category[]
  brands: Brand[]
  filters: ShopFilters
  priceRange: { min: number; max: number }
  onChange: (next: Partial<ShopFilters>) => void
}

export function FilterPanel({ categories, brands, filters, priceRange, onChange }: Props) {
  const toggle = (key: 'in_stock' | 'low_stock' | 'on_sale') =>
    onChange({ [key]: !filters[key], page: 1 })

  const toggleBrand = (slug: string) => {
    const current = filters.brand ?? []
    const next = current.includes(slug)
      ? current.filter((b) => b !== slug)
      : [...current, slug]
    onChange({ brand: next.length ? next : undefined, page: 1 })
  }

  return (
    <aside style={{ width: 260, flexShrink: 0 }}>
      {/* Categories */}
      <FilterGroup title="Categories">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FilterItem
            label="All products"
            count={categories.reduce((s, c) => s + c.product_count, 0)}
            active={!filters.category}
            onClick={() => onChange({ category: undefined, page: 1 })}
          />
          {categories.map((c) => (
            <FilterItem
              key={c.id}
              label={c.name}
              count={c.product_count}
              active={filters.category === c.slug}
              onClick={() => onChange({ category: c.slug, page: 1 })}
            />
          ))}
        </ul>
      </FilterGroup>

      {/* Brands */}
      <FilterGroup title="Brand">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {brands.map((b) => {
            const slug = b.slug
            const checked = (filters.brand ?? []).includes(slug)
            return (
              <li key={b.id}>
                <button
                  onClick={() => toggleBrand(slug)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 8,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    padding: '6px 8px', borderRadius: 6, textAlign: 'left',
                    color: checked ? 'var(--ink)' : 'var(--slate)',
                    fontWeight: checked ? 500 : 400, fontSize: 14,
                    transition: 'background 150ms, color 150ms',
                  }}
                  onMouseEnter={(e) => { if (!checked) { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--brand-green)' } }}
                  onMouseLeave={(e) => { if (!checked) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--slate)' } }}
                >
                  <span style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                    border: checked ? 'none' : '1.5px solid var(--hairline-strong)',
                    background: checked ? 'var(--brand-green)' : 'var(--canvas-elev)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 150ms',
                  }}>
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  {b.name}
                  <span style={{ marginLeft: 'auto', fontSize: 12, fontFamily: 'Geist Mono, monospace', color: 'var(--stone)' }}>
                    {b.product_count}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      {/* Price range */}
      <FilterGroup title="Price (DA)">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <PriceInput
            placeholder="Min"
            value={filters.price_min ?? ''}
            onChange={(v) => onChange({ price_min: v || undefined, page: 1 })}
          />
          <span style={{ color: 'var(--muted)', fontSize: 13 }}>–</span>
          <PriceInput
            placeholder="Max"
            value={filters.price_max ?? ''}
            onChange={(v) => onChange({ price_max: v || undefined, page: 1 })}
          />
        </div>
        <p style={{ fontSize: 12, color: 'var(--stone)', marginTop: 6 }}>
          Range: {formatPrice(priceRange.min)} – {formatPrice(priceRange.max)}
        </p>
      </FilterGroup>

      {/* Availability */}
      <FilterGroup title="Availability">
        <ToggleRow label="In stock only" checked={!!filters.in_stock} onChange={() => toggle('in_stock')} />
        <ToggleRow label="Low stock only" checked={!!filters.low_stock} onChange={() => toggle('low_stock')} />
      </FilterGroup>

      {/* Discount */}
      <FilterGroup title="Discount">
        <ToggleRow label="On sale only" checked={!!filters.on_sale} onChange={() => toggle('on_sale')} />
      </FilterGroup>
    </aside>
  )
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h4 style={{
          margin: 0, fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          color: 'var(--stone)',
        }}>{title}</h4>
        <ChevronDown size={14} style={{ color: 'var(--muted)' }} />
      </div>
      {children}
    </div>
  )
}

function FilterItem({ label, count, active, onClick }: {
  label: string; count: number; active: boolean; onClick: () => void
}) {
  return (
    <li>
      <button
        onClick={onClick}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'transparent', border: 'none', cursor: 'pointer',
          padding: '6px 8px', borderRadius: 6, textAlign: 'left',
          fontSize: 14,
          color: active ? 'var(--ink)' : 'var(--slate)',
          fontWeight: active ? 500 : 400,
          transition: 'background 150ms, color 150ms',
        }}
        onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--brand-green)' } }}
        onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--slate)' } }}
      >
        {label}
        <span style={{
          fontSize: 12, fontFamily: 'Geist Mono, monospace',
          color: active ? 'var(--brand-green)' : 'var(--stone)',
        }}>{count}</span>
      </button>
    </li>
  )
}

function ToggleRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 0', borderBottom: '1px solid var(--hairline-soft)',
    }}>
      <span style={{ fontSize: 14, color: 'var(--slate)' }}>{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        style={{
          width: 36, height: 20, borderRadius: 9999, border: 'none',
          background: checked ? 'var(--brand-green)' : 'var(--hairline-strong)',
          cursor: 'pointer', position: 'relative',
          transition: 'background 200ms',
          flexShrink: 0,
        }}
      >
        <span style={{
          position: 'absolute', top: 2,
          left: checked ? 18 : 2,
          width: 16, height: 16, borderRadius: '50%',
          background: 'var(--canvas-elev)',
          transition: 'left 200ms',
        }} />
      </button>
    </div>
  )
}

function PriceInput({ placeholder, value, onChange }: {
  placeholder: string
  value: number | string
  onChange: (v: number) => void
}) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{
        flex: 1, padding: '8px 10px', borderRadius: 8,
        border: '1px solid var(--hairline-strong)',
        background: 'var(--canvas-elev)', color: 'var(--ink)',
        fontSize: 13, fontFamily: 'Geist Mono, monospace',
        outline: 'none', width: 0,
        transition: 'border-color 150ms',
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = 'var(--brand-green)'
        e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-green-soft)'
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = 'var(--hairline-strong)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    />
  )
}
