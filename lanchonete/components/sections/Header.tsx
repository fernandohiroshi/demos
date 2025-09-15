'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50" data-konbinicode="main-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-konbinicode="logo-section">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-red rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-black">Smash House</h1>
              <p className="text-xs text-brand-red font-medium">BURGERS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-konbinicode="desktop-nav">
            <button onClick={() => scrollToSection('sobre')} className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('cardapio')} className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Cardápio
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Galeria
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Blog
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Localização
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4" data-konbinicode="header-cta">
            <div className="flex items-center space-x-2 text-sm text-brand-black">
              <Phone size={16} className="text-brand-red" />
              <span>(11) 99999-9999</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-brand-yellow to-brand-red hover:from-brand-red hover:to-brand-yellow text-brand-black font-bold transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('pedido')}
            >
              Peça Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-brand-black hover:bg-gray-100"
            data-konbinicode="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-b-lg p-4" data-konbinicode="mobile-menu">
            <div className="space-y-4">
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 text-brand-black hover:text-brand-red font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection('cardapio')} className="block w-full text-left py-2 text-brand-black hover:text-brand-red font-medium">
                Cardápio
              </button>
              <button onClick={() => scrollToSection('galeria')} className="block w-full text-left py-2 text-brand-black hover:text-brand-red font-medium">
                Galeria
              </button>
              <button onClick={() => scrollToSection('blog')} className="block w-full text-left py-2 text-brand-black hover:text-brand-red font-medium">
                Blog
              </button>
              <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left py-2 text-brand-black hover:text-brand-red font-medium">
                Localização
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-brand-black mb-3">
                  <Phone size={16} className="text-brand-red" />
                  <span>(11) 99999-9999</span>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-brand-yellow to-brand-red hover:from-brand-red hover:to-brand-yellow text-brand-black font-bold"
                  onClick={() => scrollToSection('pedido')}
                >
                  Peça Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}