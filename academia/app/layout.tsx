import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gladiator Fitness - Academia Premium",
  description:
    "Transforme seu corpo e mente com nossos programas fitness abrangentes e orientação especializada. Academia premium com equipamentos de última geração.",
  keywords: "academia, fitness, musculação, treinamento pessoal, São Paulo"
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
