import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Barbearia - Experimente a Arte da Excelência em Barbearia",
  description:
    "Serviços premium de barbearia para o cavalheiro moderno. Cortes especializados, barbas tradicionais e tratamentos de cuidado masculino em ambiente elegante.",
  keywords: "barbearia, corte de cabelo, barba, cuidado masculino, homens, barba, estilo, premium, tradicional",
  openGraph: {
    title: "Barbearia - Experimente a Arte da Excelência em Barbearia",
    description:
      "Serviços premium de barbearia para o cavalheiro moderno. Cortes especializados, barbas tradicionais e tratamentos de cuidado masculino.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia - Experimente a Arte da Excelência em Barbearia",
    description: "Serviços premium de barbearia para o cavalheiro moderno.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
