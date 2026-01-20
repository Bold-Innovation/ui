"use client"

import { InteractiveMap } from "@/components/InteractiveMap"
import { DigitalTransformationJourney } from "@/components/DigitalTransformationJourney"
import { Eye, TrendingUp, Shield, Users, Hand, Code, Puzzle, Network, Brain, Search, FileText, Upload, Settings, ClipboardList, Heart } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"
import { TypewriterText } from "./TypewriterText"

export function ServiceSections() {
  const { language } = useLanguage()
  const t = translations[language]

  // Standard positions for 4-element maps
  const fourElementPositions = [
    { x: 15, y: 25 },
    { x: 50, y: 15 },
    { x: 85, y: 25 },
    { x: 50, y: 50 }
  ]

  const openSourceSteps = t.services.openSource.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.description,
    icon: [ClipboardList, Users, Shield, Heart][index],
    position: fourElementPositions[index]
  }))

  const cloudSteps = t.services.cloud.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.description,
    icon: [Search, FileText, Upload, Settings][index],
    position: fourElementPositions[index]
  }))

  const automationSteps = t.services.automation.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.description,
    icon: [Hand, Code, Puzzle, Network, Brain][index],
    position: [{ x: 10, y: 30 }, { x: 30, y: 15 }, { x: 50, y: 30 }, { x: 70, y: 15 }, { x: 90, y: 30 }][index]
  }))

  const dataModernizationSteps = t.services.dataModernization.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.description,
    icon: [Eye, TrendingUp, Shield, Users][index],
    position: fourElementPositions[index]
  }))

  return (
    <section className="py-32 px-6 bg-white dark:bg-[rgb(74,87,100)] transition-colors relative z-10">
      <div className="container mx-auto max-w-5xl space-y-40">
        {/* Open Source Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[32px] leading-[38px] font-medium tracking-[-0.16px] mb-16 font-sans">
            <span className="text-attio-dark dark:text-white">
              {t.services.openSource.intro}
            </span>{" "}
            <span className="text-attio-light dark:text-gray-400">
              <TypewriterText 
                text={t.services.openSource.description}
                speed={10}
                startDelay={300}
                showCursor={false}
              />
            </span>
          </p>
          <InteractiveMap 
            title=""
            steps={openSourceSteps}
          />
        </div>

        {/* Cloud Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[32px] leading-[38px] font-medium tracking-[-0.16px] mb-8 font-sans">
            <span className="text-attio-dark dark:text-white">
              {t.services.cloud.intro}
            </span>{" "}
            <span className="text-attio-light dark:text-gray-400">
              <TypewriterText 
                text={t.services.cloud.description}
                speed={10}
                startDelay={300}
                showCursor={false}
              />
            </span>
          </p>
          <InteractiveMap 
            title=""
            steps={cloudSteps}
          />
        </div>

        {/* Automation Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[32px] leading-[38px] font-medium tracking-[-0.16px] mb-8 font-sans">
            <span className="text-attio-dark dark:text-white">
              {t.services.automation.intro}
            </span>{" "}
            <span className="text-attio-light dark:text-gray-400">
              <TypewriterText 
                text={t.services.automation.description}
                speed={10}
                startDelay={300}
                showCursor={false}
              />
            </span>
          </p>
          <InteractiveMap 
            title=""
            steps={automationSteps}
          />
        </div>

        {/* Digital Transformation Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[32px] leading-[38px] font-medium tracking-[-0.16px] mb-8 font-sans">
            <span className="text-attio-dark dark:text-white">
              {t.services.digitalTransformation.intro}
            </span>{" "}
            <span className="text-attio-light dark:text-gray-400">
              <TypewriterText 
                text={t.services.digitalTransformation.description}
                speed={10}
                startDelay={300}
                showCursor={false}
              />
            </span>
          </p>
          <DigitalTransformationJourney />
        </div>

        {/* Data Modernization Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[32px] leading-[38px] font-medium tracking-[-0.16px] mb-8 font-sans">
            <span className="text-attio-dark dark:text-white">
              {t.services.dataModernization.intro}
            </span>{" "}
            <span className="text-attio-light dark:text-gray-400">
              <TypewriterText 
                text={t.services.dataModernization.description}
                speed={10}
                startDelay={300}
                showCursor={false}
              />
            </span>
          </p>
          <InteractiveMap 
            title=""
            steps={dataModernizationSteps}
          />
        </div>
      </div>
    </section>
  )
}
