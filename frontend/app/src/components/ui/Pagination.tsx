import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { PaginationMeta } from '@/types/api'

interface Props {
  meta: PaginationMeta
  onChange: (page: number) => void
}

export function Pagination({ meta, onChange }: Props) {
  if (meta.total_pages <= 1) return null

  const { page, total_pages } = meta

  const pages: (number | '…')[] = []
  if (total_pages <= 7) {
    for (let i = 1; i <= total_pages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (page > 3) pages.push('…')
    for (let i = Math.max(2, page - 1); i <= Math.min(total_pages - 1, page + 1); i++) pages.push(i)
    if (page < total_pages - 2) pages.push('…')
    pages.push(total_pages)
  }

  return (
    <nav aria-label="Pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 40 }}>
      <PageBtn disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="Previous page">
        <ChevronLeft size={16} />
      </PageBtn>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} style={{ width: 34, textAlign: 'center', fontSize: 14, color: 'var(--muted)' }}>…</span>
        ) : (
          <PageBtn key={p} active={p === page} onClick={() => onChange(p as number)}>
            {p}
          </PageBtn>
        )
      )}

      <PageBtn disabled={page === total_pages} onClick={() => onChange(page + 1)} aria-label="Next page">
        <ChevronRight size={16} />
      </PageBtn>
    </nav>
  )
}

function PageBtn({
  children, active, disabled, onClick, 'aria-label': ariaLabel,
}: {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  onClick: () => void
  'aria-label'?: string
}) {
  return (
    <button
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      disabled={disabled}
      onClick={onClick}
      style={{
        minWidth: 34, height: 34, padding: '0 6px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 8, border: '1px solid',
        fontSize: 14, fontWeight: active ? 600 : 500, cursor: disabled ? 'not-allowed' : 'pointer',
        background: active ? 'var(--ink)' : 'var(--canvas-elev)',
        color: active ? 'var(--canvas)' : disabled ? 'var(--muted)' : 'var(--slate)',
        borderColor: active ? 'var(--ink)' : 'var(--hairline)',
        opacity: disabled ? 0.5 : 1,
        transition: 'background 150ms, color 150ms, border-color 150ms',
      }}
    >
      {children}
    </button>
  )
}
