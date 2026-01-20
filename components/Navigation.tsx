"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

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
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[rgb(74,87,100)]/80 backdrop-blur-xl z-50 border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-light text-gray-900 dark:text-white tracking-tight">
            Bold
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light"
            >
              Główna
            </Link>
            <Link 
              href="#construma" 
              onClick={(e) => handleAnchorClick(e, "#construma")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light"
            >
              Construma 2026
            </Link>
            <Link 
              href="#what-we-do" 
              onClick={(e) => handleAnchorClick(e, "#what-we-do")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light"
            >
              Co robimy
            </Link>
            <Link 
              href="#who-we-are" 
              onClick={(e) => handleAnchorClick(e, "#who-we-are")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light"
            >
              Kim jesteśmy
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light"
            >
              Kontakt
            </Link>
            <Link 
              href="#blog" 
              onClick={(e) => handleAnchorClick(e, "#blog")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light"
            >
              Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>PL</span>
              <span>|</span>
              <span className="text-gray-400 dark:text-gray-500">EN</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
