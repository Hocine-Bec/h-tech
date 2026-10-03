import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer style={{
      background: 'var(--canvas-elev)',
      borderTop: '1px solid var(--hairline)',
      marginTop: 96,
      padding: '48px 0 24px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{
                width: 22, height: 22, borderRadius: 6,
                background: 'var(--brand-green)', color: '#000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700,
              }}>H</span>
              <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.3px' }}>H-Tech</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--steel)', margin: 0, lineHeight: 1.55 }}>
              Computer parts & peripherals, delivered anywhere in Algeria. Cash on delivery. 7-day DOA return.
            </p>
          </div>

          <FooterCol title="Shop" links={[
            { label: 'All products', href: '/shop' },
            { label: 'Graphics cards', href: '/c/graphics-cards' },
            { label: 'Processors', href: '/c/processors' },
            { label: 'Memory', href: '/c/memory' },
            { label: 'Storage', href: '/c/storage' },
            { label: 'Bundles', href: '/bundles' },
          ]} />

          <FooterCol title="Support" links={[
            { label: 'Help centre', href: '/support' },
            { label: 'Track my order', href: '/support/track-order' },
            { label: 'Returns', href: '/support/returns' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Compatibility help', href: '/support/compatibility' },
          ]} />

          <FooterCol title="Company" links={[
            { label: 'About H-Tech', href: '/about' },
            { label: 'Terms of service', href: '/legal/terms' },
            { label: 'Privacy policy', href: '/legal/privacy' },
            { label: 'Warranty', href: '/legal/warranty' },
          ]} />
        </div>

        <div style={{
          borderTop: '1px solid var(--hairline)', paddingTop: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--stone)' }}>
            © 2026 H-Tech SARL · Bab Ezzouar, Alger
          </p>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--stone)' }}>
            Sat–Thu 9:00–18:00 · WhatsApp & phone support
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{title}</h4>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              to={href as '/shop'}
              style={{ fontSize: 14, color: 'var(--steel)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-green)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--steel)' }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
