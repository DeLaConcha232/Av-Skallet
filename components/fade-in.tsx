"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeIn({ children, className, direction = "up", delay = 0, duration = 0.5, once = true }: FadeInProps) {
  const { ref, isVisible } = useScrollAnimation()

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  const animations = {
    initial: {
      opacity: 0,
      ...directions[direction],
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        variants={animations}
        viewport={{ once }}
      >
        {children}
      </motion.div>
    </div>
  )
}
