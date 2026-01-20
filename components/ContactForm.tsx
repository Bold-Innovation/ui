"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
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
          <h2 className="text-3xl font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Spróbujmy się złapać</h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            Spotkajmy się i porozmawiajmy, rozmowa jest zawsze dobra, a może wyjdzie nam z tego coś wspaniałego!
          </p>
        </div>

        <div className="bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 mb-8 transition-all shadow-sm">
          <h3 className="font-display font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Bold Innovation Sp. z o.o.</h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm transition-colors">
            <p>Miasto: Szczecin, Polska</p>
            <p>Ulica: Cyfrowa 6</p>
            <p>Kod pocztowy: 71-441</p>
            <p>+48 667485006 / +48 505726411</p>
            <p>lukasz@boldinnovation.pl</p>
            <p>NIP: 8522710466</p>
            <p>REGON: 529361257</p>
            <p>KRS: 0001121112</p>
          </div>
        </div>

        <Card className="border border-white/20 dark:border-white/10 bg-white/70 dark:bg-[rgb(74,87,100)]/70 backdrop-blur-md transition-all shadow-sm hover:shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-display font-semibold text-gray-900 dark:text-white transition-colors">Kontakt</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors">Wypełnij formularz, a skontaktujemy się z Tobą</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg font-medium text-green-600 dark:text-green-400 transition-colors">
                  Thank You we cant't wait to read it!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-300 dark:border-white/20 dark:bg-white/5 dark:text-white focus:border-gray-900 dark:focus:border-white focus:ring-gray-900 dark:focus:ring-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">Last Name</Label>
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
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">E-mail</Label>
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
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm transition-colors">Your message</Label>
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
                    I declare that I have read the information clause contained in Privacy Policy regarding processing of persona data.{" "}
                    <a href="#" className="text-gray-900 dark:text-white hover:underline transition-colors">Check: Privacy Policy</a>
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gray-900 dark:bg-white dark:text-[rgb(74,87,100)] text-white hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md font-medium transition-colors"
                >
                  Send it now
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                  Klikając przycisk „Wyślij wiadomość", przesyłasz nam swoje dane osobowe, które będą przetwarzane w celu udzielenia odpowiedzi na Twoje pytanie. Administratorem Twoich danych osobowych jest Stepwise sp. z o.o. z siedzibą w Warszawie. Więcej informacji na temat przetwarzania Twoich danych osobowych znajdziesz w Polityce Prywatności.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
