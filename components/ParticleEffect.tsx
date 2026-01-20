"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "./ThemeProvider"

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  ax: number
  ay: number
  az: number
  radius: number
  opacity: number
  color: string
}

interface ParticleEffectProps {
  containerRef?: React.RefObject<HTMLElement>
}

export function ParticleEffect({ containerRef }: ParticleEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const draggedParticleRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number>()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const container = containerRef?.current || canvas.parentElement
    if (!container) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return
    
    // Ensure crisp, non-blurred rendering
    ctx.imageSmoothingEnabled = false
    ctx.imageSmoothingQuality = 'low'

    const getParticleColor = () => {
      const isDark = theme === "dark"
      return isDark ? "rgba(255, 255, 255" : "rgba(59, 130, 246"
    }

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    if (particlesRef.current.length === 0) {
      const particleCount = 70
      const particleColor = getParticleColor()
      const rect = container.getBoundingClientRect()

      particlesRef.current = []
      
      for (let i = 0; i < particleCount; i++) {
        // Completely random positions
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        const z = Math.random() * 350 + 50
        
        // Completely random directions
        const randomDirection = Math.random() * Math.PI * 2
        const speed = 0.01 + Math.random() * 0.05 // More varied speeds
        
        particlesRef.current.push({
          x: x,
          y: y,
          z: z,
          vx: Math.cos(randomDirection) * speed,
          vy: Math.sin(randomDirection) * speed,
          vz: (Math.random() - 0.5) * 0.02,
          ax: (Math.random() - 0.5) * 0.0002,
          ay: (Math.random() - 0.5) * 0.0002,
          az: (Math.random() - 0.5) * 0.0001,
          radius: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.5 + 0.5,
          color: particleColor,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      
      if (draggedParticleRef.current !== null) {
        const particle = particlesRef.current[draggedParticleRef.current]
        if (particle) {
          particle.x = mouseRef.current.x
          particle.y = mouseRef.current.y
        }
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      let closestIndex = -1
      let closestDistance = Infinity
      
      particlesRef.current.forEach((particle, i) => {
        const focalLength = 300
        const scale = focalLength / (focalLength + particle.z)
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 50 / scale && distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      })
      
      if (closestIndex !== -1) {
        draggedParticleRef.current = closestIndex
        const particle = particlesRef.current[closestIndex]
        particle.vx = 0
        particle.vy = 0
        particle.vz = 0
      }
    }

    const handleMouseUp = () => {
      if (draggedParticleRef.current !== null) {
        const particle = particlesRef.current[draggedParticleRef.current]
        if (particle) {
          particle.vx = (Math.random() - 0.5) * 0.05
          particle.vy = (Math.random() - 0.5) * 0.05
          particle.vz = (Math.random() - 0.5) * 0.02
          particle.ax = (Math.random() - 0.5) * 0.0001
          particle.ay = (Math.random() - 0.5) * 0.0001
          particle.az = (Math.random() - 0.5) * 0.00005
        }
      }
      draggedParticleRef.current = null
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mousedown", handleMouseDown)
    container.addEventListener("mouseup", handleMouseUp)

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const currentColor = getParticleColor()

      particles.forEach((particle, i) => {
        if (draggedParticleRef.current === i) {
          return
        }

        particle.vx += particle.ax
        particle.vy += particle.ay
        particle.vz += particle.az

        particle.vx *= 0.999
        particle.vy *= 0.999
        particle.vz *= 0.999

        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        // Wrap around edges (seamless looping)
        if (particle.x < 0) {
          particle.x = rect.width
        } else if (particle.x > rect.width) {
          particle.x = 0
        }
        
        if (particle.y < 0) {
          particle.y = rect.height
        } else if (particle.y > rect.height) {
          particle.y = 0
        }
        
        // Wrap z dimension
        if (particle.z < 50) {
          particle.z = 400
        } else if (particle.z > 400) {
          particle.z = 50
        }

        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (draggedParticleRef.current === null && distance > 0) {
          const maxDistance = 300
          const force = distance < maxDistance ? (maxDistance - distance) / maxDistance : 0.1
          
          particle.ax -= (dx / distance) * force * 0.0008
          particle.ay -= (dy / distance) * force * 0.0008
          particle.az += (Math.random() - 0.5) * force * 0.0001
        }

        // More random acceleration changes
        if (Math.random() < 0.02) {
          particle.ax += (Math.random() - 0.5) * 0.0003
          particle.ay += (Math.random() - 0.5) * 0.0003
          particle.az += (Math.random() - 0.5) * 0.00015
        }

        const maxAccel = 0.002
        particle.ax = Math.max(-maxAccel, Math.min(maxAccel, particle.ax))
        particle.ay = Math.max(-maxAccel, Math.min(maxAccel, particle.ay))
        particle.az = Math.max(-maxAccel * 0.5, Math.min(maxAccel * 0.5, particle.az))

        const focalLength = 300
        const scale = focalLength / (focalLength + particle.z)
        const x2d = particle.x
        const y2d = particle.y
        const radius2d = particle.radius * scale
        const opacity2d = Math.min(1, particle.opacity * (1 - (particle.z - 100) / 400))

        // Draw crisp particle
        ctx.save()
        ctx.imageSmoothingEnabled = false
        ctx.beginPath()
        ctx.arc(x2d, y2d, radius2d, 0, Math.PI * 2)
        ctx.fillStyle = `${currentColor}, ${opacity2d})`
        ctx.fill()
        ctx.restore()

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const dz = particle.z - otherParticle.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          const connectionDistance = 180
          if (distance < connectionDistance) {
            const otherScale = focalLength / (focalLength + otherParticle.z)
            const connectionOpacity = 0.5 * (1 - distance / connectionDistance) * Math.min(scale, otherScale)
            
            const otherX2d = otherParticle.x
            const otherY2d = otherParticle.y
            const gradient = ctx.createLinearGradient(x2d, y2d, otherX2d, otherY2d)
            gradient.addColorStop(0, `${currentColor}, ${connectionOpacity})`)
            gradient.addColorStop(0.5, `${currentColor}, ${connectionOpacity * 0.8})`)
            gradient.addColorStop(1, `${currentColor}, ${connectionOpacity})`)
            
            ctx.beginPath()
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(otherX2d, otherY2d)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.8 * Math.min(scale, otherScale)
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mousedown", handleMouseDown)
      container.removeEventListener("mouseup", handleMouseUp)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mounted, theme, containerRef])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-[1] cursor-move"
      style={{ 
        mixBlendMode: theme === "dark" ? "screen" : "normal",
        imageRendering: "crisp-edges"
      }}
    />
  )
}
