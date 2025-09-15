import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AdoptionSection() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
            PROMOÇÃO
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight mb-8">
            PACOTE COMPLETO,
            <br />
            BANHO + TOSA + HIDRATAÇÃO
          </h2>
          <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-8 py-3 rounded-full text-lg font-semibold">
            APROVEITAR OFERTA
          </Button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-3xl"></div>
            <Image
              src="https://images.pexels.com/photos/6131001/pexels-photo-6131001.jpeg"
              alt="Adoção de pets"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
