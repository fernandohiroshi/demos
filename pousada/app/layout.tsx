import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pousada Lech im Sonnwend - Aconchego nos Alpes Austríacos",
  description:
    "Experimente a hospitalidade alpina familiar na Pousada Lech im Sonnwend. Localizada no coração dos Alpes austríacos, oferecemos uma experiência única de aconchego e conforto caseiro.",
  keywords: "pousada familiar, Alpes austríacos, bem-estar, esqui, gastronomia caseira, hospitalidade alpina"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
