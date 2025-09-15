"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "./ui/dialog";

const navigationItems = [
  { name: "Home", href: "#" },
  { name: "Serviços", href: "#servicos" },
  { name: "Produtos", href: "#products" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F5F1E8] px-4 py-4 lg:px-8 shadow-sm transition-all duration-300 ${
        scrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          PETIQUE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Button className="hidden lg:block bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">
          AGENDAR
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#F5F1E8]">
            <DialogTitle>Menu</DialogTitle>
            <div className="flex flex-col space-y-6 mt-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-600 transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full w-fit">
                AGENDAR
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
