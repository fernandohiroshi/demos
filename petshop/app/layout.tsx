import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Petique - Banho e Tosa Profissional",
  description:
    "Serviços especializados em banho e tosa para pets. Mais de 15 anos cuidando da beleza e bem-estar do seu melhor amigo.",
  keywords: "banho e tosa, pet shop, grooming, tosa canina, banho para cães, estética canina, cuidados para pets"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
