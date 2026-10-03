import type { ShopFilters, ListResponse, SimpleListResponse, Product, Category, Brand, Bundle } from '@/types/api'
import { mockProducts } from '@/mock/products'
import { mockCategories } from '@/mock/categories'
import { mockBrands } from '@/mock/brands'
import { mockBundles } from '@/mock/bundles'

const MOCK = true // flip to false when backend is live

const delay = (ms = 300) => new Promise<void>((r) => setTimeout(r, ms))

// ─── Categories ───────────────────────────────────────────────────────────────

export async function fetchCategories(): Promise<SimpleListResponse<Category>> {
  if (MOCK) {
    await delay()
    return { data: mockCategories.filter((c) => c.is_visible) }
  }
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categories`)
  if (!res.ok) throw new Error('Failed to fetch categories')
  return res.json()
}

// ─── Brands ───────────────────────────────────────────────────────────────────

export async function fetchBrands(): Promise<SimpleListResponse<Brand>> {
  if (MOCK) {
    await delay()
    return { data: mockBrands }
  }
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/brands`)
  if (!res.ok) throw new Error('Failed to fetch brands')
  return res.json()
}

// ─── Products ─────────────────────────────────────────────────────────────────

export async function fetchProducts(filters: ShopFilters = {}): Promise<ListResponse<Product>> {
  if (MOCK) {
    await delay()
    let items = [...mockProducts]

    if (filters.q) {
      const q = filters.q.toLowerCase()
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q),
      )
    }
    if (filters.category) {
      items = items.filter((p) => p.category_slug === filters.category)
    }
    if (filters.brand?.length) {
      items = items.filter((p) => filters.brand!.includes(p.brand.toLowerCase().replace(/\s+/g, '-')))
    }
    if (filters.price_min != null) {
      items = items.filter((p) => p.price >= filters.price_min!)
    }
    if (filters.price_max != null) {
      items = items.filter((p) => p.price <= filters.price_max!)
    }
    if (filters.in_stock) {
      items = items.filter((p) => p.stock > 0)
    }
    if (filters.low_stock) {
      items = items.filter((p) => p.stock_state === 'low_stock')
    }
    if (filters.on_sale) {
      items = items.filter((p) => p.on_sale)
    }

    switch (filters.sort) {
      case 'price_asc':  items.sort((a, b) => a.price - b.price); break
      case 'price_desc': items.sort((a, b) => b.price - a.price); break
      case 'newest':     items.sort((a, b) => b.created_at.localeCompare(a.created_at)); break
      case 'name_asc':   items.sort((a, b) => a.name.localeCompare(b.name)); break
      default:           items.sort((a, b) => b.review_count - a.review_count); break
    }

    const page = filters.page ?? 1
    const per_page = filters.per_page ?? 24
    const total = items.length
    const total_pages = Math.ceil(total / per_page)
    const data = items.slice((page - 1) * per_page, page * per_page)

    return { data, meta: { page, per_page, total, total_pages } }
  }

  const url = new URL(`${import.meta.env.VITE_API_BASE_URL}/products`)
  if (filters.q)          url.searchParams.set('q', filters.q)
  if (filters.category)   url.searchParams.set('category', filters.category)
  if (filters.price_min)  url.searchParams.set('price_min', String(filters.price_min))
  if (filters.price_max)  url.searchParams.set('price_max', String(filters.price_max))
  if (filters.in_stock)   url.searchParams.set('in_stock', 'true')
  if (filters.low_stock)  url.searchParams.set('low_stock', 'true')
  if (filters.on_sale)    url.searchParams.set('on_sale', 'true')
  if (filters.sort)       url.searchParams.set('sort', filters.sort)
  if (filters.page)       url.searchParams.set('page', String(filters.page))
  if (filters.per_page)   url.searchParams.set('per_page', String(filters.per_page))
  filters.brand?.forEach((b) => url.searchParams.append('brand', b))

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

// ─── Bundles ──────────────────────────────────────────────────────────────────

export async function fetchBundles(): Promise<SimpleListResponse<Bundle>> {
  if (MOCK) {
    await delay()
    return { data: mockBundles }
  }
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bundles`)
  if (!res.ok) throw new Error('Failed to fetch bundles')
  return res.json()
}
