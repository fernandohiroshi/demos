import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sarah Mitchell - Jornalista Investigativa",
  description:
    "Jornalista investigativa premiada, dedicada a descobrir a verdade, responsabilizar os poderosos e contar histórias que importam.",
  keywords: "jornalismo investigativo, repórter, notícias, investigações, verdade, responsabilidade",
  authors: [{ name: "Sarah Mitchell" }],
  openGraph: {
    title: "Sarah Mitchell - Jornalista Investigativa",
    description: "Jornalista investigativa premiada com mais de 15 anos de experiência",
    type: "website",
  }
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
