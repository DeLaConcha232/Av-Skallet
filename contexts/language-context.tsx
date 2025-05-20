"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define supported languages
export type Language = "en" | "es" | "fr" | "zh"

// Language names for display
export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  zh: "中文",
}

// Language flags (emoji)
export const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  zh: "🇨🇳",
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to English, but check localStorage on client
  const [language, setLanguage] = useState<Language>("en")
  const [loaded, setLoaded] = useState(false)

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && Object.keys(languageNames).includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
    setLoaded(true)
  }, [])

  // Save language preference
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("language", language)
    }
  }, [language, loaded])

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) return translations.en[key] || key
    return translations[language][key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.whyMe": "Why Me",
    "nav.contact": "Contact",
    "nav.hireMe": "Hire Me",

    // Hero Section
    "hero.available": "Available for hire",
    "hero.title": "Crafting Digital Experiences",
    "hero.subtitle":
      "Full-stack developer specializing in creating elegant, performant, and user-centered digital experiences.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // Services Section
    "services.badge": "Services",
    "services.title": "What I Can Do For You",
    "services.subtitle": "Comprehensive digital solutions tailored to your specific needs and goals.",
    "services.learnMore": "Learn More",

    // Web Development
    "services.web.title": "Web Application Development",
    "services.web.description":
      "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
    "services.web.feature1": "Responsive Design",
    "services.web.feature2": "Progressive Web Apps",
    "services.web.feature3": "E-commerce Solutions",
    "services.web.feature4": "CMS Integration",

    // Mobile Development
    "services.mobile.title": "Mobile App Development",
    "services.mobile.description":
      "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    "services.mobile.feature1": "iOS & Android Apps",
    "services.mobile.feature2": "React Native",
    "services.mobile.feature3": "Flutter",
    "services.mobile.feature4": "App Store Optimization",

    // UI/UX Design
    "services.uiux.title": "UI/UX Design",
    "services.uiux.description":
      "User-centered design that balances aesthetics with functionality to create intuitive and engaging digital experiences.",
    "services.uiux.feature1": "User Research",
    "services.uiux.feature2": "Wireframing",
    "services.uiux.feature3": "Prototyping",
    "services.uiux.feature4": "Usability Testing",

    // Brand Identity
    "services.brand.title": "Brand Identity",
    "services.brand.description":
      "Comprehensive brand development services that help establish a strong, cohesive identity across all touchpoints.",
    "services.brand.feature1": "Logo Design",
    "services.brand.feature2": "Brand Guidelines",
    "services.brand.feature3": "Visual Identity",
    "services.brand.feature4": "Brand Strategy",

    // Digital Marketing
    "services.marketing.title": "Digital Marketing",
    "services.marketing.description":
      "Data-driven marketing strategies that increase visibility, drive traffic, and convert visitors into customers.",
    "services.marketing.feature1": "SEO Optimization",
    "services.marketing.feature2": "Content Strategy",
    "services.marketing.feature3": "Social Media",
    "services.marketing.feature4": "Analytics & Reporting",

    // Custom Software
    "services.software.title": "Custom Software Solutions",
    "services.software.description":
      "Tailored software solutions designed to address specific business challenges and streamline operations.",
    "services.software.feature1": "Business Analysis",
    "services.software.feature2": "Custom Development",
    "services.software.feature3": "System Integration",
    "services.software.feature4": "Maintenance & Support",

    // Skills Section
    "skills.badge": "Expertise",
    "skills.title": "Technical Proficiency",
    "skills.subtitle": "A comprehensive toolkit of technologies and methodologies to bring your vision to life.",

    // Frontend
    "skills.frontend.title": "Frontend Development",
    "skills.frontend.description": "Creating responsive, accessible, and performant user interfaces",

    // Backend
    "skills.backend.title": "Backend Development",
    "skills.backend.description": "Building robust, scalable, and secure server-side applications",

    // Practices
    "skills.practices.title": "Development Practices",
    "skills.practices.description": "Following industry best practices for quality and efficiency",

    // Design
    "skills.design.title": "Design Practices",
    "skills.design.description": "Applying creative and user-centered design principles to deliver visually appealing and functional digital experiences.",

    // Projects Section
    "projects.badge": "Portfolio",
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my most impactful work across various domains and technologies.",
    "projects.viewProject": "View Project",
    "projects.viewAll": "View All Projects",
    "projects.showLess": "Show Less",

    // Why Me Section
    "whyMe.badge": "Why Choose Me",
    "whyMe.title": "The Competitive Edge",
    "whyMe.subtitle": "What sets my services apart and why clients consistently choose to work with me.",

    // Contact Section
    "contact.badge": "Get In Touch",
    "contact.title": "Let's Build Something Amazing",
    "contact.subtitle": "Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Reach out through any of these channels",
    "contact.form.title": "Send a Whatsapp Message",
    "contact.form.subtitle": "Send me a message below and I'll get back to you as soon as possible",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success.title": "Message Sent!",
    "contact.form.success.button": "Send Another Message",

    // Footer
    "footer.rights": "All rights reserved.",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.whyMe": "Por Qué Yo",
    "nav.contact": "Contacto",
    "nav.hireMe": "Contrátame",

    // Hero Section
    "hero.available": "Disponible para contratar",
    "hero.title": "Ayudando a nacer nuevas ideas",
    "hero.subtitle":
      "Equipo de desarrollo especializado en ayudarte a sacar adelante tus ideas [cambiar]",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contactMe": "Contáctame",

    // Services Section
    "services.badge": "Servicios",
    "services.title": "Qué Puedo Hacer Por Ti",
    "services.subtitle": "Soluciones digitales integrales adaptadas a tus necesidades y objetivos específicos.",
    "services.learnMore": "Saber Más",

    // Web Development
    "services.web.title": "Desarrollo de Aplicaciones Web",
    "services.web.description":
      "Aplicaciones web personalizadas construidas con frameworks modernos y mejores prácticas para un rendimiento y experiencia de usuario óptimos.",
    "services.web.feature1": "Diseño Responsivo",
    "services.web.feature2": "Aplicaciones Web Progresivas",
    "services.web.feature3": "Soluciones E-commerce",
    "services.web.feature4": "Integración CMS",

    // Mobile Development
    "services.mobile.title": "Desarrollo de Aplicaciones Móviles",
    "services.mobile.description":
      "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias fluidas en dispositivos iOS y Android.",
    "services.mobile.feature1": "Apps iOS y Android",
    "services.mobile.feature2": "React Native",
    "services.mobile.feature3": "Flutter",
    "services.mobile.feature4": "Optimización App Store",

    // UI/UX Design
    "services.uiux.title": "Diseño UI/UX",
    "services.uiux.description":
      "Diseño centrado en el usuario que equilibra la estética con la funcionalidad para crear experiencias digitales intuitivas y atractivas.",
    "services.uiux.feature1": "Investigación de Usuarios",
    "services.uiux.feature2": "Wireframing",
    "services.uiux.feature3": "Prototipado",
    "services.uiux.feature4": "Pruebas de Usabilidad",

    // Brand Identity
    "services.brand.title": "Identidad de Marca",
    "services.brand.description":
      "Servicios integrales de desarrollo de marca que ayudan a establecer una identidad sólida y coherente en todos los puntos de contacto.",
    "services.brand.feature1": "Diseño de Logo",
    "services.brand.feature2": "Guías de Marca",
    "services.brand.feature3": "Identidad Visual",
    "services.brand.feature4": "Estrategia de Marca",

    // Digital Marketing
    "services.marketing.title": "Marketing Digital",
    "services.marketing.description":
      "Estrategias de marketing basadas en datos que aumentan la visibilidad, generan tráfico y convierten visitantes en clientes.",
    "services.marketing.feature1": "Optimización SEO",
    "services.marketing.feature2": "Estrategia de Contenido",
    "services.marketing.feature3": "Redes Sociales",
    "services.marketing.feature4": "Análisis e Informes",

    // Custom Software
    "services.software.title": "Soluciones de Software Personalizadas",
    "services.software.description":
      "Soluciones de software a medida diseñadas para abordar desafíos empresariales específicos y optimizar operaciones.",
    "services.software.feature1": "Análisis de Negocio",
    "services.software.feature2": "Desarrollo Personalizado",
    "services.software.feature3": "Integración de Sistemas",
    "services.software.feature4": "Mantenimiento y Soporte",

    // Skills Section
    "skills.badge": "Experiencia",
    "skills.title": "Competencia Técnica",
    "skills.subtitle": "Un conjunto completo de tecnologías y metodologías para dar vida a tu visión.",

    // Frontend
    "skills.frontend.title": "Desarrollo Frontend",
    "skills.frontend.description": "Creación de interfaces de usuario responsivas, accesibles y eficientes",

    // Backend
    "skills.backend.title": "Desarrollo Backend",
    "skills.backend.description": "Construcción de aplicaciones robustas, escalables y seguras del lado del servidor",

    // Practices
    "skills.practices.title": "Prácticas de Desarrollo",
    "skills.practices.description": "Siguiendo las mejores prácticas de la industria para calidad y eficiencia",

    // Design
    "skills.design.title": "Prácticas de Diseño",
    "skills.design.description": "Aplicando principios creativos y centrados en el usuario para ofrecer experiencias digitales visualmente atractivas y funcionales.",

    // Projects Section
    "projects.badge": "Portafolio",
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Una selección de mis trabajos más impactantes en diversos dominios y tecnologías.",
    "projects.viewProject": "Ver Proyecto",
    "projects.viewAll": "Ver Todos los Proyectos",
    "projects.showLess": "Mostrar Menos",

    // Why Me Section
    "whyMe.badge": "Por Qué Elegirme",
    "whyMe.title": "La Ventaja Competitiva",
    "whyMe.subtitle": "Lo que distingue mis servicios y por qué los clientes eligen constantemente trabajar conmigo.",

    // Contact Section
    "contact.badge": "Ponte en Contacto",
    "contact.title": "Construyamos Algo Increíble",
    "contact.subtitle":
      "¿Tienes un proyecto en mente? Me encantaría escucharlo. Hablemos sobre cómo podemos trabajar juntos.",
    "contact.info.title": "Información de Contacto",
    "contact.info.subtitle": "Comunícate a través de cualquiera de estos canales",
    "contact.form.title": "Envía un mensaje de Whatsapp",
    "contact.form.subtitle": "Envíame un mensaje abajo y te responderé lo antes posible",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success.title": "¡Mensaje Enviado!",
    "contact.form.success.button": "Enviar Otro Mensaje",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.whyMe": "Pourquoi Moi",
    "nav.contact": "Contact",
    "nav.hireMe": "Engagez-Moi",

    // Hero Section
    "hero.available": "Disponible pour embauche",
    "hero.title": "Création d'Expériences Numériques",
    "hero.subtitle":
      "Développeur full-stack spécialisé dans la création d'expériences numériques élégantes, performantes et centrées sur l'utilisateur.",
    "hero.viewProjects": "Voir les Projets",
    "hero.contactMe": "Me Contacter",

    // Services Section
    "services.badge": "Services",
    "services.title": "Ce Que Je Peux Faire Pour Vous",
    "services.subtitle": "Des solutions numériques complètes adaptées à vos besoins et objectifs spécifiques.",
    "services.learnMore": "En Savoir Plus",

    // Web Development
    "services.web.title": "Développement d'Applications Web",
    "services.web.description":
      "Applications web personnalisées construites avec des frameworks modernes et les meilleures pratiques pour des performances et une expérience utilisateur optimales.",
    "services.web.feature1": "Design Responsive",
    "services.web.feature2": "Applications Web Progressives",
    "services.web.feature3": "Solutions E-commerce",
    "services.web.feature4": "Intégration CMS",

    // Mobile Development
    "services.mobile.title": "Développement d'Applications Mobiles",
    "services.mobile.description":
      "Applications mobiles natives et multiplateformes offrant des expériences fluides sur les appareils iOS et Android.",
    "services.mobile.feature1": "Apps iOS et Android",
    "services.mobile.feature2": "React Native",
    "services.mobile.feature3": "Flutter",
    "services.mobile.feature4": "Optimisation App Store",

    // UI/UX Design
    "services.uiux.title": "Design UI/UX",
    "services.uiux.description":
      "Design centré sur l'utilisateur qui équilibre l'esthétique et la fonctionnalité pour créer des expériences numériques intuitives et engageantes.",
    "services.uiux.feature1": "Recherche Utilisateur",
    "services.uiux.feature2": "Wireframing",
    "services.uiux.feature3": "Prototypage",
    "services.uiux.feature4": "Tests d'Utilisabilité",

    // Brand Identity
    "services.brand.title": "Identité de Marque",
    "services.brand.description":
      "Services complets de développement de marque qui aident à établir une identité forte et cohérente à travers tous les points de contact.",
    "services.brand.feature1": "Conception de Logo",
    "services.brand.feature2": "Directives de Marque",
    "services.brand.feature3": "Identité Visuelle",
    "services.brand.feature4": "Stratégie de Marque",

    // Digital Marketing
    "services.marketing.title": "Marketing Digital",
    "services.marketing.description":
      "Stratégies marketing basées sur les données qui augmentent la visibilité, génèrent du trafic et convertissent les visiteurs en clients.",
    "services.marketing.feature1": "Optimisation SEO",
    "services.marketing.feature2": "Stratégie de Contenu",
    "services.marketing.feature3": "Médias Sociaux",
    "services.marketing.feature4": "Analyse et Rapports",

    // Custom Software
    "services.software.title": "Solutions Logicielles Personnalisées",
    "services.software.description":
      "Solutions logicielles sur mesure conçues pour répondre à des défis commerciaux spécifiques et rationaliser les opérations.",
    "services.software.feature1": "Analyse d'Affaires",
    "services.software.feature2": "Développement Personnalisé",
    "services.software.feature3": "Intégration de Systèmes",
    "services.software.feature4": "Maintenance et Support",

    // Skills Section
    "skills.badge": "Expertise",
    "skills.title": "Compétence Technique",
    "skills.subtitle": "Une boîte à outils complète de technologies et méthodologies pour donner vie à votre vision.",

    // Frontend
    "skills.frontend.title": "Développement Frontend",
    "skills.frontend.description": "Création d'interfaces utilisateur réactives, accessibles et performantes",

    // Backend
    "skills.backend.title": "Développement Backend",
    "skills.backend.description": "Construction d'applications côté serveur robustes, évolutives et sécurisées",

    // Practices
    "skills.practices.title": "Pratiques de Développement",
    "skills.practices.description": "Suivant les meilleures pratiques de l'industrie pour la qualité et l'efficacité",

    // Design
    "skills.design.title": "Pratiques de Design",
    "skills.design.description": "Application de principes créatifs et centrés sur l'utilisateur pour offrir des expériences numériques visuellement attrayantes et fonctionnelles.",

    // Projects Section
    "projects.badge": "Portfolio",
    "projects.title": "Projets en Vedette",
    "projects.subtitle": "Une sélection de mes travaux les plus impactants dans divers domaines et technologies.",
    "projects.viewProject": "Voir le Projet",
    "projects.viewAll": "Voir Tous les Projets",
    "projects.showLess": "Afficher Moins",

    // Why Me Section
    "whyMe.badge": "Pourquoi Me Choisir",
    "whyMe.title": "L'Avantage Compétitif",
    "whyMe.subtitle":
      "Ce qui distingue mes services et pourquoi les clients choisissent constamment de travailler avec moi.",

    // Contact Section
    "contact.badge": "Prenez Contact",
    "contact.title": "Construisons Quelque Chose d'Incroyable",
    "contact.subtitle":
      "Vous avez un projet en tête ? J'aimerais en entendre parler. Discutons de la façon dont nous pouvons travailler ensemble.",
    "contact.info.title": "Informations de Contact",
    "contact.info.subtitle": "Contactez-moi par l'un de ces canaux",
    "contact.form.title": "Envoyez un message Whatsapp",
    "contact.form.subtitle": "Envoyez-moi un message ci-dessous et je vous répondrai dès que possible",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success.title": "Message Envoyé !",
    "contact.form.success.button": "Envoyer un Autre Message",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },

  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.whyMe": "为何选择我",
    "nav.contact": "联系",
    "nav.hireMe": "雇佣我",

    // Hero Section
    "hero.available": "可接受雇佣",
    "hero.title": "打造数字体验",
    "hero.subtitle": "全栈开发者，专注于创建优雅、高效且以用户为中心的数字体验。",
    "hero.viewProjects": "查看项目",
    "hero.contactMe": "联系我",

    // Services Section
    "services.badge": "服务",
    "services.title": "我能为您做什么",
    "services.subtitle": "根据您的特定需求和目标量身定制的全面数字解决方案。",
    "services.learnMore": "了解更多",

    // Web Development
    "services.web.title": "网络应用开发",
    "services.web.description": "使用现代框架和最佳实践构建的自定义网络应用，以获得最佳性能和用户体验。",
    "services.web.feature1": "响应式设计",
    "services.web.feature2": "渐进式网络应用",
    "services.web.feature3": "电子商务解决方案",
    "services.web.feature4": "CMS集成",

    // Mobile Development
    "services.mobile.title": "移动应用开发",
    "services.mobile.description": "在iOS和Android设备上提供无缝体验的原生和跨平台移动应用。",
    "services.mobile.feature1": "iOS和Android应用",
    "services.mobile.feature2": "React Native",
    "services.mobile.feature3": "Flutter",
    "services.mobile.feature4": "应用商店优化",

    // UI/UX Design
    "services.uiux.title": "UI/UX设计",
    "services.uiux.description": "以用户为中心的设计，平衡美学与功能，创造直观且引人入胜的数字体验。",
    "services.uiux.feature1": "用户研究",
    "services.uiux.feature2": "线框图",
    "services.uiux.feature3": "原型设计",
    "services.uiux.feature4": "可用性测试",

    // Brand Identity
    "services.brand.title": "品牌标识",
    "services.brand.description": "全面的品牌开发服务，帮助在所有接触点建立强大、一致的身份。",
    "services.brand.feature1": "标志设计",
    "services.brand.feature2": "品牌指南",
    "services.brand.feature3": "视觉标识",
    "services.brand.feature4": "品牌策略",

    // Digital Marketing
    "services.marketing.title": "数字营销",
    "services.marketing.description": "数据驱动的营销策略，提高可见度，增加流量，将访问者转化为客户。",
    "services.marketing.feature1": "SEO优化",
    "services.marketing.feature2": "内容策略",
    "services.marketing.feature3": "社交媒体",
    "services.marketing.feature4": "分析与报告",

    // Custom Software
    "services.software.title": "定制软件解决方案",
    "services.software.description": "专为解决特定业务挑战和简化运营而设计的定制软件解决方案。",
    "services.software.feature1": "业务分析",
    "services.software.feature2": "定制开发",
    "services.software.feature3": "系统集成",
    "services.software.feature4": "维护与支持",

    // Skills Section
    "skills.badge": "专业知识",
    "skills.title": "技术能力",
    "skills.subtitle": "全面的技术和方法工具包，将您的愿景变为现实。",

    // Frontend
    "skills.frontend.title": "前端开发",
    "skills.frontend.description": "创建响应式、无障碍和高性能的用户界面",

    // Backend
    "skills.backend.title": "后端开发",
    "skills.backend.description": "构建强大、可扩展和安全的服务器端应用",

    // Practices
    "skills.practices.title": "开发实践",
    "skills.practices.description": "遵循行业最佳实践，确保质量和效率",

    // 设计
    "skills.design.title": "设计实践",
    "skills.design.description": "运用创造性和以用户为中心的设计原则，打造视觉吸引力强且功能完善的数字体验。",

    // Projects Section
    "projects.badge": "作品集",
    "projects.title": "精选项目",
    "projects.subtitle": "我在各种领域和技术中最具影响力的作品精选。",
    "projects.viewProject": "查看项目",
    "projects.viewAll": "查看所有项目",
    "projects.showLess": "显示较少",

    // Why Me Section
    "whyMe.badge": "为何选择我",
    "whyMe.title": "竞争优势",
    "whyMe.subtitle": "我的服务的独特之处以及客户为何一直选择与我合作。",

    // Contact Section
    "contact.badge": "联系我",
    "contact.title": "让我们共同打造精彩",
    "contact.subtitle": "有项目想法？我很乐意听取。让我们讨论如何合作。",
    "contact.info.title": "联系信息",
    "contact.info.subtitle": "通过以下任何渠道联系",
    "contact.form.title": "发送消息",
    "contact.form.subtitle": "填写下面的表格，我会尽快回复您",
    "contact.form.name": "姓名",
    "contact.form.email": "电子邮件",
    "contact.form.subject": "主题",
    "contact.form.message": "消息",
    "contact.form.submit": "发送消息",
    "contact.form.sending": "发送中...",
    "contact.form.success.title": "消息已发送！",
    "contact.form.success.button": "发送另一条消息",

    // Footer
    "footer.rights": "版权所有。",
  },
}
