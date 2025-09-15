"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { href: "#inicio", label: "INÍCIO" },
  { href: "#sobre", label: "SOBRE" },
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#blog", label: "BLOG" },
  { href: "#planos", label: "PLANOS" },
  { href: "#contato", label: "CONTATO" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.95)"
          : "rgba(0, 0, 0, 0.8)",
        backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        borderBottomColor: isScrolled
          ? "rgba(156, 163, 175, 0.3)"
          : "rgba(156, 163, 175, 0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="border-b border-gray-800 fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          animate={{
            paddingTop: isScrolled ? "12px" : "16px",
            paddingBottom: isScrolled ? "12px" : "16px",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ fontSize: isScrolled ? "20px" : "24px" }}
            transition={{ duration: 0.3 }}
            className="font-bold cursor-pointer text-white"
          >
            GLADIATOR
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-lime-400 transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-lime-400 text-black hidden lg:block hover:bg-lime-500 font-semibold"
                size={isScrolled ? "sm" : "default"}
              >
                JUNTE-SE AGORA
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-lime-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-700 bg-black/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-white hover:text-lime-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
