"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ParticleEffect } from "@/components/ParticleEffect"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="h-screen pt-24 pb-16 px-6 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative overflow-hidden flex items-center">
      <ParticleEffect containerRef={sectionRef} />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-gray-900 dark:text-white leading-[1.1] transition-colors mb-6 tracking-tight">
            ZAMIEŃ SWOJE DANE W WIEDZĘ
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-2xl mx-auto transition-colors leading-relaxed">
          Wyprzedź konkurencję dzięki zaawansowanej automatyzacji opartej na sztucznej inteligencji.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gray-900 dark:bg-white dark:text-[rgb(74,87,100)] text-white hover:bg-gray-800 dark:hover:bg-gray-100 transition-all rounded-full px-8 py-6 text-base font-normal shadow-sm hover:shadow-md"
          >
            Pobierz na eBook o wdrażaniu AI
          </Button>
        </div>
        <p className="text-lg md:text-xl font-display font-light text-gray-700 dark:text-gray-200 transition-colors">
          Pomożemy Ci w cyfrowej transformacji Twojej firmy.
        </p>
      </div>
    </section>
  )
}
