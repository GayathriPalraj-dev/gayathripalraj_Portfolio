import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../../hooks/useTheme'
import type { ThemeToggleProps } from './ThemeToggle.types'

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={[
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-700 [html[data-theme='dark']_&]:focus-visible:outline-blue-400",
        className,
      ].filter(Boolean).join(" ")}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Moon size={18} aria-hidden="true" />
      ) : (
        <Sun size={18} aria-hidden="true" />
      )}
    </button>
  )
}
