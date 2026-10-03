import { useQuery } from '@tanstack/react-query'
import { fetchCategories, fetchBrands, fetchProducts, fetchBundles } from '@/lib/api'
import type { ShopFilters } from '@/types/api'

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  })
}

export function useBrands() {
  return useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands,
    staleTime: 5 * 60 * 1000,
  })
}

export function useProducts(filters: ShopFilters) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    placeholderData: (prev) => prev,
  })
}

export function useBundles() {
  return useQuery({
    queryKey: ['bundles'],
    queryFn: fetchBundles,
    staleTime: 10 * 60 * 1000,
  })
}
