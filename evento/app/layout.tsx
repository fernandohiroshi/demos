import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Tânia & João - Casamento",
  description: "Celebre conosco nosso grande dia! 21 de Setembro, 2024",
  keywords: "casamento, wedding, Tânia, João, celebração",
  authors: [{ name: "Tânia & João" }],
  openGraph: {
    title: "Tânia & João - Casamento",
    description: "Celebre conosco nosso grande dia! 21 de Setembro, 2024",
    type: "website",
    locale: "pt_BR",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
