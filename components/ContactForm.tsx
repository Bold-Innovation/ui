"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

export function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    privacy: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

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

        <Card className="border border-white/20 dark:border-white/10 bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md transition-all shadow-sm hover:shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-display font-semibold text-gray-900 dark:text-white transition-colors">{t.contact.formTitle}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors">{t.contact.formDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg font-medium text-green-600 dark:text-green-400 transition-colors">
                  {t.contact.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">{t.contact.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-300 dark:border-white/20 dark:bg-white/5 dark:text-white focus:border-gray-900 dark:focus:border-white focus:ring-gray-900 dark:focus:ring-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">{t.contact.lastName}</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="border-gray-300 dark:border-white/20 dark:bg-white/5 dark:text-white focus:border-gray-900 dark:focus:border-white focus:ring-gray-900 dark:focus:ring-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">{t.contact.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-gray-300 dark:border-white/20 dark:bg-white/5 dark:text-white focus:border-gray-900 dark:focus:border-white focus:ring-gray-900 dark:focus:ring-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-gray-300 dark:border-white/20 dark:bg-white/5 dark:text-white focus:border-gray-900 dark:focus:border-white focus:ring-gray-900 dark:focus:ring-white"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    {t.contact.privacy}{" "}
                    <a href="#" className="text-gray-900 dark:text-white hover:underline transition-colors">{t.contact.privacyLink}</a>
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gray-900 dark:bg-white dark:text-[rgb(74,87,100)] text-white hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  {t.contact.submit}
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                  {t.contact.disclaimer}
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
