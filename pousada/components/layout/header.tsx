"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Quartos", href: "#rooms" },
    { name: "Gastronomia", href: "#food" },
    { name: "Wellness", href: "#wellness" },
    { name: "Ofertas", href: "#offers" },
    { name: "Reservas", href: "#booking" },
  ];

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-cream-50/60 backdrop-blur-md shadow-lg"
          : "bg-cream-50/80 backdrop-blur-2xl"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light tracking-wider text-black"
          >
            POUSADA LECH
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light tracking-wide text-cream-700 transition-colors hover:text-cream-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-cream-200 bg-cream-50/95 mb-4 backdrop-blur-md lg:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleMobileMenuClose}
                  className="block w-full text-left text-sm font-light tracking-wide text-cream-700 transition-colors hover:text-cream-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
