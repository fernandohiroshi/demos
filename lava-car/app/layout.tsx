import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CruzeWash - Serviços Premium de Lavagem e Estética Automotiva",
  description:
    "Transforme seu veículo com nossos serviços de cuidado automotivo de luxo. Detalhamento profissional, produtos premium e atenção incomparável aos detalhes.",
  keywords: "lava jato, estética automotiva, enceramento cerâmico, cuidado premium de carros, lavagem de luxo"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
