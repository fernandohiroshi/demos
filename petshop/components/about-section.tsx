import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F1E8] px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
              ESPECIALISTAS
              <br />
              EM ESTÉTICA
              <br />
              CANINA
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nossa paixão é cuidar da beleza e bem-estar dos pets. Com
              equipamentos modernos, produtos premium e uma equipe altamente
              qualificada, oferecemos os melhores serviços de banho e tosa da
              região. Cada pet recebe atenção personalizada e carinho especial.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold">
              NOSSA HISTÓRIA
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-white rounded-3xl transform rotate-3"></div>
              <div className="relative h-full rounded-3xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg"
                  alt="Veterinária cuidando de um cachorro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
