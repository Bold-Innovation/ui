"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const initialTheme = savedTheme || "dark"
    
    // Apply theme immediately to prevent flash
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(initialTheme)
    
    setTheme(initialTheme)
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light"
      
      // Immediately apply to DOM
      if (typeof document !== "undefined") {
        const root = document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(newTheme)
        localStorage.setItem("theme", newTheme)
      }
      
      return newTheme
    })
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
