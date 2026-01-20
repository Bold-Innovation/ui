"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Construma() {
  return (
    <section id="construma" className="py-24 px-4 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-4xl">
        <Card className="border border-white/20 dark:border-white/10 bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md transition-all shadow-sm hover:shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-display font-semibold text-gray-900 dark:text-white transition-colors">Construma 2026</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-gray-100 dark:bg-white/5 rounded-md mb-4 flex items-center justify-center border border-gray-200 dark:border-white/10 transition-colors">
              <span className="text-gray-400 dark:text-gray-500 text-sm transition-colors">Construma 2026 Budapeszt.png</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Udział w wydarzeniu dofinansowany w ramach projektu niekonkurencyjnego pn. „Ster na Eksport" realizowany w ramach programu Fundusze Europejskie dla Pomorza Zachodniego 2021-2027, Działanie 1.9 Przygotowanie i wdrożenie nowych modeli biznesowych przedsiębiorstw (w tym wspólne projekty przedsiębiorstw i IOB) - Typ projektu 3 Promocja eksportu i internacjonalizacja MŚP.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
