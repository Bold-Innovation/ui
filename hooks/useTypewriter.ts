"use client"

import { useState, useEffect, useRef } from "react"

interface UseTypewriterOptions {
  text: string
  speed?: number // milliseconds per character
  startDelay?: number // delay before starting
  onComplete?: () => void
}

export function useTypewriter({ 
  text, 
  speed = 50, 
  startDelay = 0,
  onComplete 
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!text) return

    setIsTyping(true)
    setDisplayText("")

    const startTimeout = setTimeout(() => {
      let currentIndex = 0

      const type = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutRef.current = setTimeout(type, speed)
        } else {
          setIsTyping(false)
          if (onComplete) {
            onComplete()
          }
        }
      }

      type()
    }, startDelay)

    return () => {
      clearTimeout(startTimeout)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, speed, startDelay, onComplete])

  return { displayText, isTyping }
}
