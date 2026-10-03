import type { Bundle } from '@/types/api'

export const mockBundles: Bundle[] = [
  {
    id: '1',
    slug: 'ryzen-7-starter',
    name: 'Ryzen 7 build starter',
    label: 'Best value',
    parts: ['Ryzen 7 7700X', 'MSI MAG B760 Tomahawk', 'Corsair Vengeance 32GB DDR5'],
    total_price: 289400,
    original_price: 315000,
    savings_pct: 8,
  },
  {
    id: '2',
    slug: 'core-i7-starter',
    name: 'Core i7 build starter',
    label: 'Popular',
    parts: ['Core i7-13700K', 'ASUS ROG Strix B650E-F', 'Kingston Fury Beast 32GB DDR5'],
    total_price: 268900,
    original_price: 295000,
    savings_pct: 9,
  },
  {
    id: '3',
    slug: 'budget-rtx-builder',
    name: 'Budget RTX builder',
    label: 'Great pick',
    parts: ['Core i5-13600K', 'MSI MAG B760 Tomahawk', 'GeForce RTX 4060 Ti 8GB'],
    total_price: 156000,
    original_price: 168000,
    savings_pct: 7,
  },
]
