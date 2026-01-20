"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

export function Team() {
  const { language } = useLanguage()
  const t = translations[language]
  const teamMembers = t.team.members.map((member, index) => ({
    ...member,
    image: index === 0 ? "/hubert.jpeg" : "/lukasz.jpeg"
  }))

  return (
    <section id="who-we-are" className="py-24 px-4 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-display font-semibold text-center mb-3 text-gray-900 dark:text-white transition-colors">{t.team.heading}</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 transition-colors">{t.team.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border border-white/20 dark:border-white/10 bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md transition-all shadow-sm hover:shadow-lg rounded-2xl"
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gray-100 dark:bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl font-display font-semibold text-gray-700 dark:text-white transition-colors">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg font-display font-semibold text-gray-900 dark:text-white transition-colors">{member.name}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">{member.description}</p>
                <a href="#" className="flex items-center justify-center text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
