import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { STORAGE_KEYS } from '../constants/storage'
import { THEME_VALUES } from '../constants/theme'
import { ThemeContext } from './ThemeContext'
import type { Theme, ThemeContextValue } from '../types/theme'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return THEME_VALUES.light
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme)

    return storedTheme === THEME_VALUES.dark ? THEME_VALUES.dark : THEME_VALUES.light
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEYS.theme, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === THEME_VALUES.dark ? THEME_VALUES.light : THEME_VALUES.dark))
  }, [])

  const value: ThemeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
