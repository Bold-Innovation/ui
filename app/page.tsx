import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { WhatWeDo } from "@/components/WhatWeDo"
import { ServiceSections } from "@/components/ServiceSections"
import { Team } from "@/components/Team"
import { Construma } from "@/components/Construma"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"
import { GlobalParticles } from "@/components/GlobalParticles"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GlobalParticles />
      <Navigation />
      <Hero />
      <WhatWeDo />
      <ServiceSections />
      <Team />
      <Construma />
      <ContactForm />
      <Footer />
    </main>
  )
}
