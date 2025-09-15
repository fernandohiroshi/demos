import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CtaSection() {
  return (
    <section className="py-20 bg-emerald-700">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Precisa de ajuda com alimentação saudável?
            </h2>
            <p className="text-emerald-100 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Fale comigo
            </Button>
          </div>

          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
              alt="Nutricionista feliz em meio à natureza"
              width={400}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
