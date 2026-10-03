import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Inter, sans-serif', color: 'var(--ink)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '8px' }}>H-Tech</h1>
      <p style={{ color: 'var(--steel)' }}>Storefront coming soon.</p>
    </main>
  )
}
