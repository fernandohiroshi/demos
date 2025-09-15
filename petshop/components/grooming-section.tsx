import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GroomingSection() {
  return (
    <section className="bg-[#F5F1E8] px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
              BANHO E TOSA,
              <br />
              PROFISSIONAL
              <br />
              HÁ 15 ANOS
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Somos especialistas em banho e tosa com mais de 15 anos de experiência. Utilizamos apenas produtos de alta
              qualidade e técnicas modernas para garantir o bem-estar e a beleza do seu pet. Nossa equipe é treinada
              para lidar com pets de todos os portes e temperamentos.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold">
              CONHEÇA NOSSA EQUIPE
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4587994/pexels-photo-4587994.jpeg"
                alt="Grooming profissional"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
