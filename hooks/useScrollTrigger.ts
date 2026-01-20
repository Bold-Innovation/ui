"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollTriggerOptions {
  threshold?: number // 0 to 1, how much of element must be visible
  rootMargin?: string // margin around root
  triggerOnce?: boolean // only trigger once
}

export function useScrollTrigger(options: UseScrollTriggerOptions = {}) {
  const { threshold = 0.2, rootMargin = "0px", triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If already triggered and triggerOnce is true, don't observe again
    if (hasTriggered && triggerOnce) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame to ensure state update happens after render
            requestAnimationFrame(() => {
              setIsVisible(true)
              if (triggerOnce) {
                setHasTriggered(true)
              }
            })
            if (triggerOnce) {
              observer.disconnect()
            }
          } else if (!triggerOnce) {
            requestAnimationFrame(() => {
              setIsVisible(false)
            })
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Small delay to ensure element is mounted
    const timeoutId = setTimeout(() => {
      observer.observe(element)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isVisible }
}
