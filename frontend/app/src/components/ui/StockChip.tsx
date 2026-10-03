import type { StockState } from '@/types/api'

interface Props {
  state: StockState
  qty: number
}

export function StockChip({ state, qty }: Props) {
  if (state === 'out_of_stock') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        fontSize: 12, fontWeight: 500, padding: '2px 10px',
        borderRadius: 9999,
        background: 'var(--surface-2)', color: 'var(--stone)',
      }}>
        Out of stock
      </span>
    )
  }

  const isLow = state === 'low_stock'
  const color = isLow ? 'var(--brand-warn)' : 'var(--brand-green)'
  const bg = isLow ? 'var(--brand-warn-soft)' : 'var(--brand-green-soft)'
  const label = isLow && qty <= 3 ? `Only ${qty} left` : `${qty} left`

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: 12, fontWeight: 500, padding: '2px 10px 2px 6px',
      borderRadius: 9999, background: bg, color,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: color, flexShrink: 0,
      }} />
      {label}
    </span>
  )
}
