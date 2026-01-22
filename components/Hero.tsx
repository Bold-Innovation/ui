"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ParticleEffect } from "@/components/ParticleEffect"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative overflow-hidden flex items-center">
      <ParticleEffect containerRef={sectionRef} />
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="mb-6">
          <p className="text-sm font-medium tracking-wide text-attio-light uppercase font-sans">
            {t.hero.tagline}
          </p>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-[-0.03em] text-attio-dark dark:text-white leading-[1.1] font-sans text-center">
            {t.hero.heading}
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-attio-light dark:text-gray-400 font-sans px-4">
          {t.hero.description}
        </p>
        <div className="flex items-center justify-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border border-gray-900 dark:border-white bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all rounded-lg px-6 py-3 text-sm font-medium"
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
