import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Av-Skallet",
  description: "A professional Developer Business"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>
      <body className={`${inter.className} bg-black text-white`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
