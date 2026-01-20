"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { ComponentProps } from "react"

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
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

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
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
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

  return (
    <div className="relative py-12">
      <h3 className="text-xl md:text-2xl font-display font-semibold mb-12 text-center text-gray-900 dark:text-white transition-colors">
        {title}
      </h3>
      
      {/* Interactive Map Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] bg-gray-50/50 dark:bg-[rgb(60,70,82)]/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden transition-colors"
      >
        {/* SVG for paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Connection paths */}
          {pathPoints.length > 1 && pathPoints.map((point, index) => {
            if (index === pathPoints.length - 1) return null
            const nextPoint = pathPoints[index + 1]
            const isActive = hoveredStep === point.number || hoveredStep === nextPoint.number || 
                           activeStep === point.number || activeStep === nextPoint.number
            
            return (
              <g key={`path-${index}`}>
                {/* Base path */}
                <path
                  d={`M ${point.x} ${point.y} L ${nextPoint.x} ${nextPoint.y}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-300 dark:text-white/20 transition-all duration-300"
                  strokeDasharray={isActive ? "0" : "5,5"}
                />
                {/* Active path overlay */}
                {isActive && (
                  <path
                    d={`M ${point.x} ${point.y} L ${nextPoint.x} ${nextPoint.y}`}
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-blue-500 dark:text-blue-400 transition-all duration-300"
                  />
                )}
                {/* Arrow marker */}
                {isActive && (
                  <circle
                    cx={(point.x + nextPoint.x) / 2}
                    cy={(point.y + nextPoint.y) / 2}
                    r="4"
                    fill="currentColor"
                    className="text-blue-500 dark:text-blue-400"
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* Step Nodes */}
        {steps.map((step) => {
          const Icon = step.icon
          const isHovered = hoveredStep === step.number
          const isActive = activeStep === step.number

          return (
            <div
              key={step.number}
              className={`absolute transition-all duration-300 pointer-events-auto ${
                isHovered || isActive ? 'z-30' : 'z-10'
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
                if (activeStep !== step.number) {
                  setHoveredStep(null)
                }
              }}
              onClick={(e) => {
                e.stopPropagation()
                if (activeStep === step.number) {
                  setActiveStep(null)
                  setHoveredStep(null)
                } else {
                  setActiveStep(step.number)
                  setHoveredStep(null)
                }
              }}
            >
              {/* Node */}
              <div className="relative">
                {/* Pulse effect when active */}
                {(isHovered || isActive) && (
                  <div className="absolute inset-0 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping opacity-20" 
                       style={{ width: '80px', height: '80px', margin: '-40px 0 0 -40px' }} />
                )}
                
                {/* Node circle */}
                <div 
                  className={`relative w-16 h-16 rounded-full bg-white dark:bg-[rgb(74,87,100)] border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isHovered || isActive 
                      ? 'border-blue-500 dark:border-blue-400 scale-110 shadow-lg' 
                      : 'border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40'
                  }`}
                >
                  <Icon className={`w-7 h-7 transition-all duration-300 ${
                    isHovered || isActive 
                      ? 'text-blue-500 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`} />
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-display font-semibold transition-all duration-300 ${
                    isHovered || isActive
                      ? 'bg-blue-500 dark:bg-blue-400 text-white'
                      : 'bg-gray-200 dark:bg-white/20 text-gray-700 dark:text-gray-300'
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Expanded Card on hover/click - always show on hover */}
                {(isActive || isHovered) && (
                  <div className={`absolute mt-4 w-72 z-40 ${
                    step.position.x > 50 ? 'right-0' : 'left-0'
                  }`}>
                    <Card className="border border-white/20 dark:border-white/20 bg-white/80 dark:bg-[rgb(74,87,100)]/80 backdrop-blur-md shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-display font-semibold text-gray-900 dark:text-white mb-2">
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {/* Start indicator */}
        {activeStep && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 text-center animate-in fade-in duration-200">
            <div className="flex items-center justify-center gap-2 bg-white dark:bg-[rgb(74,87,100)] px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></div>
              <span className="font-medium">Aktywny krok: {activeStep}</span>
            </div>
          </div>
        )}
        {!activeStep && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 text-center">
            <p className="mb-1">Kliknij lub najedź na węzły, aby zobaczyć szczegóły</p>
          </div>
        )}
      </div>
    </div>
  )
}
