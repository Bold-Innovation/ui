"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Language = "pl" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pl")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved language or default to pl
    const savedLanguage = localStorage.getItem("language") as Language | null
    const initialLanguage = savedLanguage || "pl"
    
    setLanguageState(initialLanguage)
    setMounted(true)
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
      localStorage.setItem("language", lang)
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const newLanguage = prev === "pl" ? "en" : "pl"
      
      // Immediately apply to DOM
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLanguage
        localStorage.setItem("language", newLanguage)
      }
      
      return newLanguage
    })
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
