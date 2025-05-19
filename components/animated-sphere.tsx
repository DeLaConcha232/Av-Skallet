"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    // Create particles
    const createParticles = () => {
      particles = []
      const particleCount = 80
      const width = canvas.width
      const height = canvas.height

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          color: i % 5 === 0 ? "#ef4444" : "#ffffff",
          speed: Math.random() * 1 + 0.5,
          direction: Math.random() * 360,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Move particles
        const radians = (particle.direction * Math.PI) / 180
        particle.x += Math.cos(radians) * particle.speed
        particle.y += Math.sin(radians) * particle.speed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = (180 - particle.direction) % 360
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = (360 - particle.direction) % 360
        }

        // Random direction changes
        if (Math.random() < 0.01) {
          particle.direction = (particle.direction + (Math.random() * 30 - 15)) % 360
        }
      })

      // Draw connecting lines
      ctx.strokeStyle = "#ffffff10"
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    setCanvasDimensions()
    createParticles()
    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <canvas ref={canvasRef} className="h-full w-full" style={{ width: "100%", height: "100%" }} />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent" />
    </motion.div>
  )
}

// Particle type
interface Particle {
  x: number
  y: number
  radius: number
  color: string
  speed: number
  direction: number
  opacity: number
}
