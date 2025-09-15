
"use client";
import { Button } from "@/components/ui/button"
import { Mail, Menu } from "lucide-react"
import Link from "next/link"

import React, { useState } from "react";
import Sidebar from "./sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Sarah Mitchell
              </Link>
              <nav className="hidden lg:flex items-center space-x-6">
                <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sobre
                </Link>
                <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Serviços
                </Link>
                <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Portfólio
                </Link>
                <Link href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Experiência
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contato
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">sarah@sarahmitchell.com</span>
              </div>
              <Button className="hidden lg:block bg-gray-900 hover:bg-gray-800 text-white">Fale Comigo</Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
