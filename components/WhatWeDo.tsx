"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WhatWeDo() {
  const services = [
    {
      title: "Automatyzacje",
      description: "Od prac ręcznych do sztucznej inteligencji",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Migracja do Chmury",
      description: "Szybko i bezpiecznie",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Migracja do Open Source",
      description: "Wolność, która się opłaca",
      borderColor: "border-green-500/20"
    },
    {
      title: "Transformacja cyfrowa",
      description: "Technologia, która zmienia sposób działania firmy",
      borderColor: "border-orange-500/20"
    },
    {
      title: "Modernizacja danych",
      description: "Nowoczesne dane, lepsze decyzje",
      borderColor: "border-indigo-500/20"
    },
    {
      title: "Wdrożenia AI",
      description: "Sztuczna inteligencja w Twojej firmie",
      borderColor: "border-violet-500/20"
    }
  ]

  return (
    <section id="what-we-do" className="py-32 px-6 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-display font-light text-center mb-20 text-gray-900 dark:text-white transition-colors tracking-tight">What we do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md shadow-sm hover:shadow-lg rounded-2xl"
            >
              <CardHeader className="p-8">
                <CardTitle className="text-xl font-display font-light text-gray-900 dark:text-white mb-3 transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base font-light leading-relaxed transition-colors">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
