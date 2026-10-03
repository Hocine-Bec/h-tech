import { Link } from '@tanstack/react-router'
import { ShoppingBag, Sun, Moon, Search, Menu } from 'lucide-react'
import { useTheme } from '@/stores/theme'

export function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      height: 60,
      background: theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(250,249,246,0.72)',
      backdropFilter: 'saturate(180%) blur(12px)',
      WebkitBackdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--hairline)',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        width: '100%', display: 'flex', alignItems: 'center', gap: 32,
      }}>
        {/* Wordmark */}
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          textDecoration: 'none', flexShrink: 0,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 6,
            background: 'var(--brand-green)', color: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 700,
          }}>H</span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 17, fontWeight: 600,
            color: 'var(--ink)', letterSpacing: '-0.3px',
          }}>H-Tech</span>
        </Link>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }}>
          {[
            { label: 'Shop', href: '/shop' },
            { label: 'Bundles', href: '/bundles' },
            { label: 'Support', href: '/support' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              to={href as '/shop'}
              style={{ textDecoration: 'none' }}
            >
              {({ isActive }: { isActive: boolean }) => (
                <span style={{
                  display: 'block',
                  fontSize: 14, fontWeight: 500,
                  color: isActive ? 'var(--ink)' : 'var(--steel)',
                  padding: '6px 10px', borderRadius: 6,
                  transition: 'color 150ms, background 150ms',
                }}>
                  {label}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          <IconBtn label="Search" onClick={() => {}}>
            <Search size={18} />
          </IconBtn>
          <IconBtn label="Toggle theme" onClick={toggle}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </IconBtn>
          <IconBtn label="Cart" onClick={() => {}}>
            <ShoppingBag size={18} />
          </IconBtn>
          <button style={{
            display: 'none', /* shown on mobile */
            background: 'transparent', border: 'none',
            color: 'var(--slate)', cursor: 'pointer', padding: 8,
          }}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

function IconBtn({ label, onClick, children }: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      style={{
        width: 36, height: 36, borderRadius: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'transparent',
        border: '1px solid var(--hairline-strong)',
        color: 'var(--slate)', cursor: 'pointer',
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
      {children}
    </button>
  )
}
