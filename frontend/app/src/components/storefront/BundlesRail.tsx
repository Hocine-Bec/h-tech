import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import type { Bundle } from '@/types/api'
import { formatPrice } from '@/lib/format'

interface Props {
  bundles: Bundle[]
}

export function BundlesRail({ bundles }: Props) {
  const shown = bundles.slice(0, 3)

  return (
    <section style={{ marginTop: 64 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        justifyContent: 'space-between', marginBottom: 24,
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.3px' }}>
            Curated bundles
          </h2>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--steel)' }}>
            Hand-picked combos that work — and save you money.
          </p>
        </div>
        <Link
          to="/shop"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 14, fontWeight: 500, color: 'var(--slate)',
            textDecoration: 'none', padding: '8px 16px',
            border: '1px solid var(--hairline-strong)', borderRadius: 9999,
            transition: 'color 150ms, border-color 150ms, background 150ms',
          }}
          onMouseEnter={(e) => {
            const t = e.currentTarget
            t.style.color = 'var(--brand-green)'
            t.style.borderColor = 'var(--brand-green)'
            t.style.background = 'var(--brand-green-soft)'
          }}
          onMouseLeave={(e) => {
            const t = e.currentTarget
            t.style.color = 'var(--slate)'
            t.style.borderColor = 'var(--hairline-strong)'
            t.style.background = 'transparent'
          }}
        >
          See all bundles <ArrowRight size={14} />
        </Link>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16,
      }}>
        {shown.map((b) => <BundleCard key={b.id} bundle={b} />)}
      </div>
    </section>
  )
}

function BundleCard({ bundle }: { bundle: Bundle }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to="/shop"
      style={{
        display: 'flex', flexDirection: 'column', gap: 12,
        textDecoration: 'none',
        background: 'var(--canvas-elev)',
        border: `1px solid ${hovered ? 'var(--brand-green)' : 'var(--hairline)'}`,
        borderRadius: 16, padding: 20,
        transition: 'border-color 150ms, transform 150ms, box-shadow 150ms',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-card)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label */}
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        alignSelf: 'flex-start',
        fontSize: 12, fontWeight: 500,
        background: 'var(--brand-green-soft)', color: 'var(--brand-green)',
        padding: '3px 10px 3px 6px', borderRadius: 9999,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-green)' }} />
        {bundle.label}
      </span>

      {/* Name */}
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>
        {bundle.name}
      </h3>

      {/* Parts */}
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {bundle.parts.map((part, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--steel)' }}>
            <Check size={12} style={{ color: 'var(--brand-green)', flexShrink: 0 }} />
            {part}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div style={{
        marginTop: 'auto', paddingTop: 12,
        borderTop: '1px solid var(--hairline)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>
            {formatPrice(bundle.total_price)}
          </span>
          <span style={{
            display: 'block', fontSize: 12, color: 'var(--stone)',
            textDecoration: 'line-through', fontFamily: 'Geist Mono, monospace',
          }}>
            {formatPrice(bundle.original_price)}
          </span>
        </div>
        <span style={{
          fontSize: 12, fontWeight: 600,
          background: 'var(--brand-green)', color: '#000',
          padding: '3px 10px', borderRadius: 9999,
        }}>
          Save {bundle.savings_pct}%
        </span>
      </div>
    </Link>
  )
}
