"use client"

import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

export function WhatWeDo() {
  const { language } = useLanguage()
  const t = translations[language]
  const services = t.whatWeDo.services

  return (
    <section id="what-we-do" className="py-32 px-6 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-white/10 dark:via-white/20 dark:to-white/10 hover:from-blue-500 hover:via-blue-500 hover:to-blue-500 dark:hover:from-blue-500 dark:hover:via-blue-500 dark:hover:to-blue-500 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="p-8 rounded-2xl bg-white dark:bg-[rgb(74,87,100)] h-full">
                <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-attio-dark dark:text-white mb-4 font-sans">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl font-medium tracking-[-0.16px] text-attio-light dark:text-gray-400 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
