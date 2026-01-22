"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

export function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">{t.contact.heading}</h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 mb-8 transition-all shadow-sm">
          <h3 className="font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">{t.contact.companyName}</h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm transition-colors">
            <p>{t.contact.city}</p>
            <p>{t.contact.street}</p>
            <p>{t.contact.postalCode}</p>
            <p>{t.contact.phone}</p>
            <p>{t.contact.email}</p>
            <p>{t.contact.nip}</p>
            <p>{t.contact.regon}</p>
            <p>{t.contact.krs}</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-gray-900 dark:bg-white dark:text-[rgb(74,87,100)] text-white hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-medium transition-colors px-8 py-6 text-lg"
          >
            <a
              href="https://calendar.app.google/aWHG1swS5MNJwJMp9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t.hero.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
