"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#F5F1E8] px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
                BANHO E TOSA
                <br />
                <span className="relative">COMPLETA</span>
                <br />
                PARA SEU PET
              </h1>
              <p className="text-gray-600 text-lg lg:text-xl max-w-md">
                Serviços profissionais de banho, tosa, hidratação e cuidados
                especiais. Seu pet sempre limpo, cheiroso e bonito.
              </p>
            </div>
            <Button className="bg-[#E85A4F] hover:bg-[#D44A3F] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              AGENDAR AGORA
            </Button>
          </div>

          {/* Dog Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
                alt="Cachorro tomando banho"
                fill
                className="object-cover object-center rounded-2xl"
                priority
              />
              {/* Tesoura girando no canto inferior direito */}
              <span
                className="absolute top-4 right-4 text-orange-400 text-4xl lg:text-7xl drop-shadow-lg animate-spin-slow"
                style={{ pointerEvents: "none" }}
              >
                <Image
                  src="/scissors.png"
                  alt="Tesoura girando"
                  width={100}
                  height={100}
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </span>
              <style jsx global>{`
                @keyframes spin-slow {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
                .animate-spin-slow {
                  animation: spin-slow 6s linear infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
