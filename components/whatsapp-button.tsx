"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    // Format the phone number (remove any non-digit characters)
    const formattedNumber = phoneNumber.replace(/\D/g, "")

    // Create the WhatsApp URL with the phone number and encoded message
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Contact on WhatsApp</span>
      <motion.div
        className="absolute -inset-1 rounded-full border-2 border-green-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.button>
  )
}
