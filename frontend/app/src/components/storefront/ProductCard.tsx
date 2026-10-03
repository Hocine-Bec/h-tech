import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Heart } from 'lucide-react'
import type { Product } from '@/types/api'
import { StockChip } from '@/components/ui/StockChip'
import { RatingStars } from '@/components/ui/RatingStars'
import { formatPrice } from '@/lib/format'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const [wishlisted, setWishlisted] = useState(false)
  const [hovered, setHovered] = useState(false)

  const hasDiscount = product.on_sale && product.original_price > product.price

  return (
    <article
      style={{
        background: 'var(--canvas-elev)',
        border: `1px solid ${hovered ? 'var(--brand-green)' : 'var(--hairline)'}`,
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'relative',
        cursor: 'pointer',
        transition: 'border-color 150ms, box-shadow 150ms, transform 150ms',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-card)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badges */}
      <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6, zIndex: 1 }}>
        {product.is_new && (
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', padding: '2px 8px', borderRadius: 6,
            background: 'var(--brand-tag-soft)', color: 'var(--brand-tag)',
          }}>New</span>
        )}
        {product.on_sale && (
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', padding: '2px 8px', borderRadius: 6,
            background: 'var(--brand-green)', color: '#000',
          }}>Sale</span>
        )}
      </div>

      {/* Wishlist */}
      <button
        aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        onClick={(e) => { e.preventDefault(); setWishlisted((w) => !w) }}
        style={{
          position: 'absolute', top: 10, right: 10, zIndex: 1,
          width: 32, height: 32, borderRadius: '50%',
          background: 'var(--canvas-elev)', border: '1px solid var(--hairline)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: wishlisted ? 'var(--brand-error)' : 'var(--stone)',
          transition: 'color 150ms, border-color 150ms',
        }}
      >
        <Heart size={14} fill={wishlisted ? 'currentColor' : 'none'} />
      </button>

      {/* Image */}
      <Link to="/shop" style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{
          aspectRatio: '4/3', borderRadius: 8,
          background: 'var(--surface)', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Brand */}
      <p style={{
        margin: 0, fontSize: 12, fontWeight: 500,
        color: 'var(--stone)', textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        {product.brand}
      </p>

      {/* Name */}
      <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p style={{
          margin: 0, fontSize: 14, fontWeight: 500,
          color: 'var(--ink)', lineHeight: 1.4,
        }}>
          {product.name}
        </p>
      </Link>

      {/* Rating */}
      <RatingStars avg={product.rating_avg} count={product.review_count} />

      {/* Price + stock */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', flexWrap: 'wrap', gap: 6 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {hasDiscount && (
            <span style={{
              fontSize: 12, color: 'var(--stone)',
              textDecoration: 'line-through',
              fontFamily: 'Geist Mono, monospace',
            }}>
              {formatPrice(product.original_price!)}
            </span>
          )}
          <span style={{
            fontSize: 14, fontWeight: 600, color: 'var(--ink)',
            fontFamily: 'Inter, sans-serif',
          }}>
            {formatPrice(product.price)}
          </span>
        </div>
        <StockChip state={product.stock_state} qty={product.stock} />
      </div>
    </article>
  )
}
