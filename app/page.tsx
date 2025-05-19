"use client"

import type React from "react"

import { useState, useRef, useActionState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Server,
  Smartphone,
  Palette,
  Globe,
  PenTool,
  BarChart,
  Layers,
  ChevronUp,
  ChevronDown,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/animated-text"
import { FadeIn } from "@/components/fade-in"
import { AnimatedSphere } from "@/components/animated-sphere"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { submitContactForm, type FormState } from "./actions"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

// Project data
const projectsData = [
  {
    title: "Zetio",
    description: "Web App Tournament Platform is a web application designed to help sports clubs manage their tournaments, statistics, and players, providing both admin and user interfaces. The goal is to offer a scalable, modular, and easy-to-maintain solution for organizing sports events.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Vite", "Tailwind", "Supabase", "PostgreSQL", "PWA"],
    link: "#",
  },
  {
    title: "BodyCalculator",
    description: "Web App designed to help users calculate their daily caloric intake and macronutrient distribution based on personal metrics such as age, weight, height, and physical activity level. Whether you aim to lose, maintain, or gain weight, this tool provides a personalized approach to managing your nutritional needs.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JS", "CSS Modules", "Vite"],
    link: "https://bodycalculator.surge.sh/",
  },
  {
    title: "SheetFromForm",
    description: "Its a custom software for a contability company to improve execution times of some activities with the implementation with documents of Excel",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Vite", "CSS Modules", "Node JS", "Express", "SQLite"],
    link: "#",
  },
  {
    title: "Deportiva-X",
    description: "Sports E-commerce platform for purchasing clothing, gear, and footwear classified by various sports, developed as a university project.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Vite", "CSS Modules", "C#", "MySQL"],
    link: "#",
  },
  {
    title: "StartConsulting",
    description: "LandingPage consultancy that combines the development of custom technology solutions with an educational mission. ",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Astro", "Tailwind"],
    link: "https://startconsulting.surge.sh/",
  },
  {
    title: "Gemada",
    description: "Videogame 2D with ",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["GODOT", "GDScript"],
    link: "#",
  },
]

// Form submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()
  const { t } = useLanguage()

  return (
    <Button className="w-full bg-red-500 text-white hover:bg-red-600" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t("contact.form.sending")}
        </>
      ) : (
        t("contact.form.submit")
      )}
    </Button>
  )
}

export default function PortfolioPage() {
  // State to control showing all projects or just the initial ones
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Number of projects to show initially
  const initialProjectCount = 3

  // Projects to display based on state
  const displayedProjects = showAllProjects ? projectsData : projectsData.slice(0, initialProjectCount)

  // Toggle function for showing/hiding projects
  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects)
  }

  // Refs for section navigation
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Form state
  const initialFormState: FormState = { errors: {} }
  const [formState, formAction] = useActionState(submitContactForm, initialFormState)

  // Get translation function
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+1234567890" message="Hi! I'm interested in your portfolio services." />

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <motion.span
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Dev
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              Portfolio
            </motion.span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { key: "nav.home", href: "#home" },
                { key: "nav.services", href: "#services" },
                { key: "nav.skills", href: "#skills" },
                { key: "nav.projects", href: "#projects" },
                { key: "nav.whyMe", href: "#why-me" },
                { key: "nav.contact", href: "#contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {t(item.key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <LanguageSelector />
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-950 hover:text-white"
              onClick={() => scrollToSection(contactRef)}
            >
              {t("nav.hireMe")}
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center justify-center pt-16">
        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-red-500 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-red-700 blur-[100px]"
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Badge className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20">{t("hero.available")}</Badge>
              </motion.div>
              <AnimatedText
                text={t("hero.title")}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                delay={2}
              />
              <motion.p
                className="mt-4 text-xl text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Button className="bg-red-500 text-white hover:bg-red-600" onClick={() => scrollToSection(projectsRef)}>
                {t("hero.viewProjects")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-zinc-800 bg-transparent text-white hover:bg-zinc-900"
                onClick={() => scrollToSection(contactRef)}
              >
                {t("hero.contactMe")}
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <Link href="#" className="hover:text-red-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <AnimatedSphere />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20">{t("services.badge")}</Badge>
              <AnimatedText
                text={t("services.title")}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              />
              <motion.p
                className="mt-4 text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("services.subtitle")}
              </motion.p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t("services.web.title"),
                description: t("services.web.description"),
                icon: <Globe className="h-10 w-10 text-red-500" />,
                features: [
                  t("services.web.feature1"),
                  t("services.web.feature2"),
                  t("services.web.feature3"),
                  t("services.web.feature4"),
                ],
              },
              {
                title: t("services.mobile.title"),
                description: t("services.mobile.description"),
                icon: <Smartphone className="h-10 w-10 text-red-500" />,
                features: [
                  t("services.mobile.feature1"),
                  t("services.mobile.feature2"),
                  t("services.mobile.feature3"),
                  t("services.mobile.feature4"),
                ],
              },
              {
                title: t("services.uiux.title"),
                description: t("services.uiux.description"),
                icon: <Palette className="h-10 w-10 text-red-500" />,
                features: [
                  t("services.uiux.feature1"),
                  t("services.uiux.feature2"),
                  t("services.uiux.feature3"),
                  t("services.uiux.feature4"),
                ],
              },
              {
                title: t("services.brand.title"),
                description: t("services.brand.description"),
                icon: <PenTool className="h-10 w-10 text-red-500" />,
                features: [
                  t("services.brand.feature1"),
                  t("services.brand.feature2"),
                  t("services.brand.feature3"),
                  t("services.brand.feature4"),
                ],
              },
              {
                title: t("services.marketing.title"),
                description: t("services.marketing.description"),
                icon: <BarChart className="h-10 w-10 text-red-500" />,
                features: [
                  t("services.marketing.feature1"),
                  t("services.marketing.feature2"),
                  t("services.marketing.feature3"),
                  t("services.marketing.feature4"),
                ],
              },
              {
                title: t("services.software.title"),
                description: t("services.software.description"),
                icon: <Layers className="h-10 w-10 text-red-500" />,
                features: [
                  t("services.software.feature1"),
                  t("services.software.feature2"),
                  t("services.software.feature3"),
                  t("services.software.feature4"),
                ],
              },
            ].map((service, index) => (
              <FadeIn key={index} delay={index} direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}>
                <motion.div className="h-full" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card className="border-zinc-800 bg-zinc-900/50 text-white h-full">
                    <CardHeader>
                      <motion.div
                        className="mb-4 rounded-full bg-red-500/10 p-3 w-fit"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-zinc-400">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center text-zinc-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * featureIndex + 0.5, duration: 0.3 }}
                          >
                            <span className="mr-2 text-red-500">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="#contact"
                          className="flex items-center text-sm text-red-500 hover:text-red-400"
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(contactRef)
                          }}
                        >
                          {t("services.learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20">{t("skills.badge")}</Badge>
              <AnimatedText
                text={t("skills.title")}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              />
              <motion.p
                className="mt-4 text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("skills.subtitle")}
              </motion.p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: t("skills.frontend.title"),
                description: t("skills.frontend.description"),
                icon: <Monitor className="h-10 w-10 text-red-500" />,
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
              },
              {
                title: t("skills.backend.title"),
                description: t("skills.backend.description"),
                icon: <Server className="h-10 w-10 text-red-500" />,
                skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "AWS"],
              },
              {
                title: t("skills.practices.title"),
                description: t("skills.practices.description"),
                icon: <Code className="h-10 w-10 text-red-500" />,
                skills: ["CI/CD", "Test-Driven Development", "Agile", "Git", "Docker", "Performance Optimization"],
              },
            ].map((skill, index) => (
              <FadeIn key={index} delay={index * 2} direction="up">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <Card className="border-zinc-800 bg-zinc-900/50 text-white">
                    <CardHeader>
                      <motion.div
                        className="mb-4 rounded-full bg-red-500/10 p-2 w-fit"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <CardTitle>{skill.title}</CardTitle>
                      <CardDescription className="text-zinc-400">{skill.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((item, skillIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                          >
                            <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50">
                              {item}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-950" ref={projectsRef}>
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20">Portfolio</Badge>
              <AnimatedText
                text="Featured Projects"
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              />
              <motion.p
                className="mt-4 text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                A selection of my most impactful work across various domains and technologies.
              </motion.p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <FadeIn key={project.title} delay={index} direction={index % 2 === 0 ? "left" : "right"}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} layout>
                    <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 text-white h-full">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="text-zinc-400">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-zinc-700 bg-zinc-800/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link
                            href={project.link}
                            className="flex items-center text-sm text-red-500 hover:text-red-400"
                          >
                            View Project <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <FadeIn delay={6}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="outline"
                  className="border-zinc-800 bg-transparent text-white hover:bg-zinc-900"
                  onClick={toggleProjects}
                >
                  {showAllProjects ? "Show Less" : "View All Projects"}
                  {showAllProjects ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why-me" className="py-24">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20">{t("whyMe.badge")}</Badge>
              <AnimatedText
                text={t("whyMe.title")}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              />
              <motion.p
                className="mt-4 text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("whyMe.subtitle")}
              </motion.p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quality-Focused",
                description: "Meticulous attention to detail and commitment to excellence in every line of code.",
              },
              {
                title: "User-Centered",
                description: "Designs and implementations that prioritize the end-user experience above all else.",
              },
              {
                title: "Performance-Optimized",
                description: "Applications built with speed and efficiency as core principles, not afterthoughts.",
              },
              {
                title: "Future-Proof",
                description: "Solutions designed to scale and adapt to changing requirements and technologies.",
              },
              {
                title: "Collaborative Process",
                description: "Transparent communication and partnership throughout the development lifecycle.",
              },
              {
                title: "Timely Delivery",
                description: "Consistent record of meeting deadlines without compromising on quality.",
              },
              {
                title: "Continuous Learning",
                description: "Always at the forefront of emerging technologies and industry best practices.",
              },
              {
                title: "Post-Launch Support",
                description: "Ongoing maintenance and support to ensure long-term success of your project.",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.5} direction={index % 2 === 0 ? "up" : "down"}>
                <motion.div
                  whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-zinc-800 bg-zinc-900/50 text-white h-full">
                    <CardHeader>
                      <motion.div
                        className="mb-2 text-2xl font-bold text-red-500"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950" ref={contactRef}>
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20">{t("contact.badge")}</Badge>
              <AnimatedText
                text={t("contact.title")}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              />
              <motion.p
                className="mt-4 text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("contact.subtitle")}
              </motion.p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <FadeIn direction="left">
              <Card className="border-zinc-800 bg-zinc-900/50 text-white h-full">
                <CardHeader>
                  <CardTitle>{t("contact.info.title")}</CardTitle>
                  <CardDescription className="text-zinc-400">{t("contact.info.subtitle")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "hello@devportfolio.com" },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      label: "LinkedIn",
                      value: "linkedin.com/in/devportfolio",
                    },
                    { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "github.com/devportfolio" },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 * index, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="rounded-full bg-red-500/10 p-2 text-red-500">{contact.icon}</div>
                      <div>
                        <p className="text-sm text-zinc-400">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={2}>
              <Card className="border-zinc-800 bg-zinc-900/50 text-white h-full">
                <CardHeader>
                  <CardTitle>{t("contact.form.title")}</CardTitle>
                  <CardDescription className="text-zinc-400">{t("contact.form.subtitle")}</CardDescription>
                </CardHeader>
                <CardContent>
                  {formState.success ? (
                    <motion.div
                      className="flex flex-col items-center justify-center space-y-4 py-8 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <h3 className="text-xl font-medium">{t("contact.form.success.title")}</h3>
                      <p className="text-zinc-400">{formState.message}</p>
                      <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                        {t("contact.form.success.button")}
                      </Button>
                    </motion.div>
                  ) : (
                    <form action={formAction} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            {t("contact.form.name")}
                          </label>
                          <input
                            id="name"
                            name="name"
                            placeholder={t("contact.form.name")}
                            className={`w-full rounded-md border ${
                              formState.errors?.name ? "border-red-500" : "border-zinc-800"
                            } bg-zinc-950 px-3 py-2 text-white placeholder:text-zinc-600 focus:border-red-500 focus:outline-none`}
                          />
                          {formState.errors?.name && (
                            <p className="mt-1 text-xs text-red-500">{formState.errors.name[0]}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            {t("contact.form.email")}
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("contact.form.email")}
                            className={`w-full rounded-md border ${
                              formState.errors?.email ? "border-red-500" : "border-zinc-800"
                            } bg-zinc-950 px-3 py-2 text-white placeholder:text-zinc-600 focus:border-red-500 focus:outline-none`}
                          />
                          {formState.errors?.email && (
                            <p className="mt-1 text-xs text-red-500">{formState.errors.email[0]}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          {t("contact.form.subject")}
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          placeholder={t("contact.form.subject")}
                          className={`w-full rounded-md border ${
                            formState.errors?.subject ? "border-red-500" : "border-zinc-800"
                          } bg-zinc-950 px-3 py-2 text-white placeholder:text-zinc-600 focus:border-red-500 focus:outline-none`}
                        />
                        {formState.errors?.subject && (
                          <p className="mt-1 text-xs text-red-500">{formState.errors.subject[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          {t("contact.form.message")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder={t("contact.form.message")}
                          rows={4}
                          className={`w-full rounded-md border ${
                            formState.errors?.message ? "border-red-500" : "border-zinc-800"
                          } bg-zinc-950 px-3 py-2 text-white placeholder:text-zinc-600 focus:border-red-500 focus:outline-none`}
                        />
                        {formState.errors?.message && (
                          <p className="mt-1 text-xs text-red-500">{formState.errors.message[0]}</p>
                        )}
                      </div>
                      {formState.errors?._form && (
                        <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-500">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            <p>{formState.errors._form[0]}</p>
                          </div>
                        </div>
                      )}
                      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <SubmitButton />
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-zinc-800 bg-black py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="text-xl font-bold">
                <span className="text-red-500">Dev</span>Portfolio
              </span>
              <span className="text-sm text-zinc-500">
                © {new Date().getFullYear()} {t("footer.rights")}
              </span>
            </motion.div>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="text-zinc-400 hover:text-red-500">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="text-zinc-400 hover:text-red-500">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="text-zinc-400 hover:text-red-500">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
