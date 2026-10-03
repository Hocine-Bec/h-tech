export function formatPrice(da: number): string {
  return new Intl.NumberFormat('fr-DZ').format(Math.round(da)) + ' DA'
}

export function formatRating(avg: number): string {
  return avg.toFixed(1)
}
