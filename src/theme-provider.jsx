import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const ThemeContext = createContext(undefined)

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', THEME.LIGHT)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (theme) {
      document.documentElement.classList.toggle('dark', theme === THEME.DARK)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme = prefersDark ? THEME.DARK : THEME.LIGHT
      setTheme(systemTheme)
      document.documentElement.classList.toggle('dark', systemTheme === THEME.DARK)
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === THEME.DARK)
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
