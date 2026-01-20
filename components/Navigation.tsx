"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageToggle } from "./LanguageToggle"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }
}

export function Navigation() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-[rgb(74,87,100)]/90 backdrop-blur-sm z-50 border-b border-gray-200/30 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base font-medium text-attio-dark dark:text-white tracking-[-0.01em]">
            Bold Innovation
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#what-we-do" 
              onClick={(e) => handleAnchorClick(e, "#what-we-do")}
              className="text-[14px] font-normal text-attio-light dark:text-gray-400 hover:text-attio-dark dark:hover:text-white transition-colors tracking-[-0.01em]"
            >
              {t.nav.whatWeDo}
            </Link>
            <Link 
              href="#who-we-are" 
              onClick={(e) => handleAnchorClick(e, "#who-we-are")}
              className="text-[14px] font-normal text-attio-light dark:text-gray-400 hover:text-attio-dark dark:hover:text-white transition-colors tracking-[-0.01em]"
            >
              {t.nav.whoWeAre}
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-[14px] font-normal text-attio-light dark:text-gray-400 hover:text-attio-dark dark:hover:text-white transition-colors tracking-[-0.01em]"
            >
              {t.nav.contact}
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
