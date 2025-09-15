import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutritionist - Nutricionista que pode te fazer feliz",
  description:
    "Uma abordagem inovadora para sua nutrição. Consultas personalizadas e planos alimentares que vão transformar sua relação com a comida.",
  keywords: "nutricionista, nutrição, alimentação saudável, consulta nutricional, plano alimentar"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
