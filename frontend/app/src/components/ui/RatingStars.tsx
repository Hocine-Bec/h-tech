interface Props {
  avg: number | null
  count: number
}

export function RatingStars({ avg, count }: Props) {
  if (!avg || count === 0) return null

  const full = Math.floor(avg)
  const hasHalf = avg - full >= 0.5

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <div style={{ display: 'flex', gap: 1 }}>
        {Array.from({ length: 5 }, (_, i) => {
          const filled = i < full || (i === full && hasHalf)
          return (
            <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="none">
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill={filled ? 'var(--brand-green)' : 'var(--hairline-strong)'}
                stroke="none"
              />
            </svg>
          )
        })}
      </div>
      <span style={{ fontSize: 12, color: 'var(--stone)', lineHeight: 1 }}>
        {avg.toFixed(1)} ({count})
      </span>
    </div>
  )
}
