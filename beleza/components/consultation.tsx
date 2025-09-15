import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Consultation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="bg-rose-100 rounded-2xl p-8 text-stone-800">
              <h2 className="text-3xl font-light mb-6">
                Obtenha uma{" "}
                <span className="italic text-rose-400">consulta gratuita</span>
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Agende uma consulta gratuita com nossos especialistas em beleza.
                Avaliaremos suas necessidades e recomendaremos os tratamentos
                perfeitos para ajudá-la a alcançar seus objetivos de beleza.
              </p>
              <Button className="bg-rose-400 hover:bg-rose-500 text-white px-8">
                Agendar Consulta
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/consultation.png"
                alt="Consulta de beleza"
                width={600}
                height={600}
                className="w-full h-auto object-covers"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
