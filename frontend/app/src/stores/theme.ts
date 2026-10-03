import { useState, useCallback } from 'react'
import { applyTheme, getInitialTheme } from '@/lib/theme'
import type { Theme } from '@/lib/theme'

let globalTheme: Theme = getInitialTheme()
applyTheme(globalTheme)

const listeners = new Set<() => void>()

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(globalTheme)

  const setTheme = useCallback((next: Theme) => {
    globalTheme = next
    applyTheme(next)
    setThemeState(next)
    listeners.forEach((l) => l())
  }, [])

  const toggle = useCallback(() => {
    setTheme(globalTheme === 'dark' ? 'light' : 'dark')
  }, [setTheme])

  return { theme, setTheme, toggle }
}
