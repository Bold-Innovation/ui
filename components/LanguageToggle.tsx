"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleLanguage()
      }}
      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}
      aria-label="Toggle language"
      type="button"
    >
      <span className="text-[14px] font-medium text-gray-700 dark:text-gray-300 mr-1 tracking-[-0.01em]">
        {language === "pl" ? "EN" : "PL"}
      </span>
      <Languages className="h-4 w-4 text-gray-700 dark:text-gray-300" />
    </button>
  )
}
