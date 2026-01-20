"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-white dark:bg-[rgb(74,87,100)] border-t border-gray-200 dark:border-white/10 py-12 px-4 transition-colors relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">{t.footer.company}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors mb-2">{t.footer.email}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors mb-2">{t.contact.phone}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">{t.contact.nip}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm transition-colors">
              <li>
                <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t.nav.whatWeDo}
                </Link>
              </li>
              <li>
                <Link href="#who-we-are" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t.nav.whoWeAre}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">{t.footer.followUs}</h4>
            <a
              href="https://www.linkedin.com/company/boldinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
