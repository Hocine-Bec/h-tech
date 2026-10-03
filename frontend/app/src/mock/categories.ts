import type { Category } from '@/types/api'

export const mockCategories: Category[] = [
  { id: '1', slug: 'graphics-cards',  name: 'Graphics cards',  description: 'GPUs from NVIDIA, AMD, and Intel Arc.', product_count: 86, sort_order: 1, is_visible: true },
  { id: '2', slug: 'processors',      name: 'Processors',      description: 'Intel Core and AMD Ryzen CPUs.',          product_count: 54, sort_order: 2, is_visible: true },
  { id: '3', slug: 'motherboards',    name: 'Motherboards',    description: null,                                       product_count: 41, sort_order: 3, is_visible: true },
  { id: '4', slug: 'memory',          name: 'Memory',          description: 'DDR4 and DDR5 RAM kits.',                 product_count: 38, sort_order: 4, is_visible: true },
  { id: '5', slug: 'storage',         name: 'Storage',         description: 'SSDs and HDDs.',                          product_count: 47, sort_order: 5, is_visible: true },
  { id: '6', slug: 'power-supplies',  name: 'Power supplies',  description: null,                                       product_count: 29, sort_order: 6, is_visible: true },
  { id: '7', slug: 'cases',           name: 'Cases',           description: null,                                       product_count: 22, sort_order: 7, is_visible: true },
  { id: '8', slug: 'cooling',         name: 'Cooling',         description: 'Air and liquid cooling solutions.',        product_count: 31, sort_order: 8, is_visible: true },
  { id: '9', slug: 'peripherals',     name: 'Peripherals',     description: 'Monitors, keyboards, mice and more.',      product_count: 63, sort_order: 9, is_visible: true },
]
