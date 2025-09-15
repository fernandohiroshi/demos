"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Equipe", href: "#team" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-amber-500/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-amber-500">
              BARBEARIA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Phone and Booking Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-amber-500">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">(11) 99999-9999</span>
            </div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">Agendar</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-500 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-3 mb-3">
                  <Phone className="h-4 w-4 mr-2 text-amber-500" />
                  <span className="text-sm text-amber-500">(11) 99999-9999</span>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">Agendar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
