"use client"

import { useTypewriter } from "@/hooks/useTypewriter"
import { useScrollTrigger } from "@/hooks/useScrollTrigger"
import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  startDelay?: number
  showCursor?: boolean
  cursorChar?: string
  triggerOnScroll?: boolean // If false, starts immediately
}

export function TypewriterText({ 
  text, 
  className = "", 
  speed = 50,
  startDelay = 0,
  showCursor = true,
  cursorChar = "|",
  triggerOnScroll = true
}: TypewriterTextProps) {
  const { ref, isVisible } = useScrollTrigger({ 
    threshold: 0.15, 
    rootMargin: "-50px 0px -100px 0px", 
    triggerOnce: true 
  })
  const [shouldStart, setShouldStart] = useState(false)
  const { displayText, isTyping } = useTypewriter({ 
    text: shouldStart ? text : "", 
    speed,
    startDelay 
  })

  useEffect(() => {
    if (triggerOnScroll && isVisible) {
      setShouldStart(true)
    } else if (!triggerOnScroll) {
      setShouldStart(true)
    }
  }, [isVisible, triggerOnScroll])

  return (
    <span ref={triggerOnScroll ? (ref as React.RefObject<HTMLSpanElement>) : undefined} className={className}>
      {displayText}
      {showCursor && isTyping && (
        <span className="animate-pulse text-inherit ml-0.5">{cursorChar}</span>
      )}
    </span>
  )
}
