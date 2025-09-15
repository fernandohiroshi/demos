"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
    setIsOpen(false);

    setTimeout(() => {
      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 px-4 py-6 bg-white/20 backdrop-blur-3xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">Nutritionist</div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:bg-white/20"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white/90 backdrop-blur-3xl p-8"
          >
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              <button
                onClick={() => handleNavClick("top")}
                className="text-lg font-medium text-gray-800 text-left hover:text-emerald-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="text-lg font-medium text-gray-800 text-left hover:text-emerald-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="text-lg font-medium text-gray-800 text-left hover:text-emerald-600 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-lg font-medium text-gray-800 text-left hover:text-emerald-600 transition-colors"
              >
                Contato
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
