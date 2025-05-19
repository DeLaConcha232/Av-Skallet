"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage, type Language, languageNames, languageFlags } from "@/contexts/language-context"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    closeDropdown()
  }

  return (
    <div className="relative">
      <motion.button
        className="flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/50 px-2 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span className="mx-1">{languageFlags[language]}</span>
        <ChevronDown className="h-3 w-3" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-full z-50 mt-1 w-40 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="py-1">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <motion.li key={lang} whileHover={{ backgroundColor: "rgba(82, 82, 91, 0.3)" }}>
                  <button
                    className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-zinc-300 hover:text-white"
                    onClick={() => handleLanguageChange(lang)}
                    aria-label={`Change language to ${languageNames[lang]}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{languageFlags[lang]}</span>
                      <span>{languageNames[lang]}</span>
                    </span>
                    {language === lang && <Check className="h-4 w-4 text-red-500" />}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
