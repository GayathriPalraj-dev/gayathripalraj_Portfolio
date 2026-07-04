import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../../hooks/useTheme'
import type { ThemeToggleProps } from './ThemeToggle.types'

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={className}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
