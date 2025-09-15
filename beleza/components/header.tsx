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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-stone-800">
              Shine
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-600 hover:text-rose-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & Booking Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-stone-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">(11) 9999-8888</span>
            </div>
            <Button className="bg-rose-400 hover:bg-rose-500 text-white px-6">Agendar</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600 hover:text-stone-800">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-stone-600 hover:text-rose-400 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-stone-200 mt-2">
                <div className="flex items-center text-stone-600 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(11) 9999-8888</span>
                </div>
                <Button className="w-full bg-rose-400 hover:bg-rose-500 text-white">Agendar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
