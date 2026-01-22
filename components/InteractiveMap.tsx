"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { ComponentProps } from "react"
import { useLanguage } from "./LanguageProvider"
import { translations } from "@/lib/translations"

interface Step {
  number: number
  title: string
  description: string
  icon: React.ComponentType<ComponentProps<"svg">>
  position: { x: number; y: number }
}

interface InteractiveMapProps {
  title: string
  steps: Step[]
}

export function InteractiveMap({ title, steps }: InteractiveMapProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight || 600
        })
      }
    }

    updateDimensions()
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }
    window.addEventListener("resize", updateDimensions)
    return () => {
      window.removeEventListener("resize", updateDimensions)
      resizeObserver.disconnect()
    }
  }, [])

  const getPathPoints = () => {
    if (dimensions.width === 0) return []
    return steps.map(step => ({
      x: (step.position.x / 100) * dimensions.width,
      y: (step.position.y / 100) * dimensions.height,
      number: step.number
    }))
  }

  const pathPoints = getPathPoints()

  // Create smooth curved path between two points
  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = end.x - start.x
    const dy = end.y - start.y
    const midX = start.x + dx / 2
    const midY = start.y + dy / 2
    
    // Create a slight curve using quadratic bezier
    const controlX = midX + (dy * 0.3)
    const controlY = midY - (dx * 0.3)
    
    return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`
  }

  return (
    <div className="relative py-12">
      {title && (
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.2] sm:leading-[1.3] md:leading-[38px] font-medium tracking-[-0.16px] mb-8 sm:mb-12 md:mb-16 text-center text-attio-dark dark:text-white font-sans">
          {title}
        </h3>
      )}
      
      {/* Interactive Map Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-gray-50/80 via-white/50 to-gray-100/30 dark:from-[rgb(60,70,82)] dark:via-[rgb(65,75,90)] dark:to-[rgb(55,65,75)] rounded-2xl border border-gray-200/50 dark:border-white/10 transition-colors shadow-lg backdrop-blur-sm overflow-hidden"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* SVG for paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Connection paths */}
          {pathPoints.length > 1 && pathPoints.map((point, index) => {
            if (index === pathPoints.length - 1) return null
            const nextPoint = pathPoints[index + 1]
            const isActive = hoveredStep === point.number || hoveredStep === nextPoint.number
            const pathD = createCurvedPath(point, nextPoint)
            
            return (
              <g key={`path-${index}`}>
                {/* Base path with subtle glow */}
                <path
                  d={pathD}
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  className="text-gray-300/40 dark:text-white/5 transition-all duration-500"
                  strokeDasharray="6,4"
                  strokeLinecap="round"
                />
                {/* Active path overlay with gradient */}
                {isActive && (
                  <>
                    <path
                      d={pathD}
                      stroke="url(#pathGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="transition-all duration-500"
                      strokeLinecap="round"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                      }}
                    />
                    {/* Animated dot along path */}
                    <circle
                      r="4"
                      fill="rgb(59, 130, 246)"
                      className="transition-all duration-500"
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))'
                      }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </circle>
                  </>
                )}
              </g>
            )
          })}
        </svg>

        {/* Step Nodes */}
        {steps.map((step) => {
          const Icon = step.icon
          const isHovered = hoveredStep === step.number

          return (
            <div
              key={step.number}
              className={`absolute transition-all duration-500 pointer-events-auto cursor-pointer ${
                isHovered ? 'z-30' : 'z-10'
              }`}
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setHoveredStep(step.number)
              }}
              onMouseLeave={() => {
                setHoveredStep(null)
              }}
            >
              {/* Node */}
              <div className="relative">
                {/* Node circle */}
                <div 
                  className={`relative w-20 h-20 rounded-full bg-white dark:bg-[rgb(74,87,100)] border-2 flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                    isHovered 
                      ? 'border-blue-500 dark:border-blue-400 scale-125 shadow-2xl shadow-blue-500/30 dark:shadow-blue-400/30 ring-4 ring-blue-500/20 dark:ring-blue-400/20' 
                      : 'border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/30 hover:scale-110'
                  }`}
                  style={{
                    boxShadow: isHovered 
                      ? '0 0 0 4px rgba(59, 130, 246, 0.1), 0 20px 40px rgba(59, 130, 246, 0.2)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Icon className={`w-8 h-8 transition-all duration-500 ${
                    isHovered 
                      ? 'text-blue-500 dark:text-blue-400 scale-110' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`} />
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-500 ${
                    isHovered
                      ? 'bg-blue-500 dark:bg-blue-400 text-white scale-125 shadow-lg'
                      : 'bg-gray-200 dark:bg-white/20 text-gray-700 dark:text-gray-300 border border-gray-300/50 dark:border-white/20'
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Expanded Card on hover */}
                {isHovered && (
                  <div className={`absolute mt-8 w-[320px] z-40 ${
                    step.position.x > 70 ? 'right-0' : step.position.x < 30 ? 'left-0' : 'left-1/2 -translate-x-1/2'
                  }`}>
                    <Card className="border border-gray-200/80 dark:border-white/20 bg-white/95 dark:bg-[rgb(74,87,100)]/95 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 rounded-xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
                      <CardContent className="p-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
                              {language === "pl" ? "Krok" : "Step"} {step.number}
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-semibold text-attio-dark dark:text-white mb-2 font-sans tracking-tight">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-attio-light dark:text-gray-400 leading-relaxed font-sans">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {/* Hint text */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 dark:text-gray-500 text-center pointer-events-none">
          <p className="bg-white/80 dark:bg-[rgb(74,87,100)]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-white/10">
            {t.interactiveMap.hint}
          </p>
        </div>
      </div>
    </div>
  )
}
