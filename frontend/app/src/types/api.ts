import { z } from 'zod'

// ─── Category ────────────────────────────────────────────────────────────────

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  product_count: z.number().int().nonnegative(),
  sort_order: z.number().int(),
  is_visible: z.boolean(),
})
export type Category = z.infer<typeof CategorySchema>

// ─── Brand ───────────────────────────────────────────────────────────────────

export const BrandSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  product_count: z.number().int().nonnegative(),
})
export type Brand = z.infer<typeof BrandSchema>

// ─── Product ─────────────────────────────────────────────────────────────────

export const StockStateSchema = z.enum(['in_stock', 'low_stock', 'out_of_stock'])
export type StockState = z.infer<typeof StockStateSchema>

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  sku: z.string(),
  name: z.string(),
  brand: z.string(),
  category: z.string(),
  category_slug: z.string(),
  image: z.string(),
  price: z.number().int().nonnegative(),
  original_price: z.number().int().nonnegative(),
  stock: z.number().int().nonnegative(),
  stock_state: StockStateSchema,
  rating_avg: z.number().min(0).max(5).nullable(),
  review_count: z.number().int().nonnegative(),
  is_new: z.boolean(),
  on_sale: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})
export type Product = z.infer<typeof ProductSchema>

// ─── Bundle ──────────────────────────────────────────────────────────────────

export const BundleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  label: z.string(),
  parts: z.array(z.string()),
  total_price: z.number().nonnegative(),
  original_price: z.number().nonnegative(),
  savings_pct: z.number().int().nonnegative(),
})
export type Bundle = z.infer<typeof BundleSchema>

// ─── Pagination meta ─────────────────────────────────────────────────────────

export const PaginationMetaSchema = z.object({
  page: z.number().int().positive(),
  per_page: z.number().int().positive(),
  total: z.number().int().nonnegative(),
  total_pages: z.number().int().nonnegative(),
})
export type PaginationMeta = z.infer<typeof PaginationMetaSchema>

// ─── Shop filters (query params) ─────────────────────────────────────────────

export interface ShopFilters {
  q?: string
  category?: string
  brand?: string[]
  price_min?: number
  price_max?: number
  in_stock?: boolean
  low_stock?: boolean
  on_sale?: boolean
  sort?: 'popularity' | 'price_asc' | 'price_desc' | 'newest' | 'name_asc'
  page?: number
  per_page?: number
}

// ─── List response wrappers ───────────────────────────────────────────────────

export interface ListResponse<T> {
  data: T[]
  meta: PaginationMeta
}

export interface SimpleListResponse<T> {
  data: T[]
}
