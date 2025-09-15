import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clínica Essência | Psicologia & Bem-estar",
  description: "Clínica Essência: psicoterapia humanizada, acolhimento e saúde mental em São Paulo. Agende sua consulta e transforme sua vida.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>{children}</body>
    </html>
  );
}