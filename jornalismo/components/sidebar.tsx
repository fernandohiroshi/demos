import React from "react";
import Link from "next/link";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${open ? "visible" : "invisible"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          ×
        </button>
        <nav className="mt-16 flex flex-col space-y-6 px-8">
          <Link href="#about" onClick={onClose} className="text-gray-700 hover:text-gray-900 text-lg font-medium">Sobre</Link>
          <Link href="#services" onClick={onClose} className="text-gray-700 hover:text-gray-900 text-lg font-medium">Serviços</Link>
          <Link href="#portfolio" onClick={onClose} className="text-gray-700 hover:text-gray-900 text-lg font-medium">Portfólio</Link>
          <Link href="#experience" onClick={onClose} className="text-gray-700 hover:text-gray-900 text-lg font-medium">Experiência</Link>
          <Link href="#contact" onClick={onClose} className="text-gray-700 hover:text-gray-900 text-lg font-medium">Contato</Link>
        </nav>
      </aside>
    </div>
  );
}
