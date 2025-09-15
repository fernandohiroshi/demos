"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Artistas", href: "#artistas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black border-b border-black"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-bold"
        >
          inked
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden md:flex items-center space-x-8"
        >
          {[
            { label: "Início", href: "#inicio" },
            { label: "Sobre", href: "#sobre" },
            { label: "Serviços", href: "#servicos" },
            { label: "Galeria", href: "#galeria" },
            { label: "Artistas", href: "#artistas" },
            { label: "Contato", href: "#contato" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Sheet para mobile/tablet */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 bg-black">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="flex flex-col gap-6 p-8">
                  {navLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          {/* Botão antigo visível só se JS quebrar */}
          <Button variant="ghost" size="icon" className="md:hidden hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
