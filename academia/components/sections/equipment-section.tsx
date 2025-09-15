"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function EquipmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div>
              <Badge className="bg-lime-400 text-black mb-6 px-4 py-2 font-semibold">EQUIPAMENTOS</Badge>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              EXPLORE NOSSO
              <br />
              <span className="text-lime-400">ESPAÇO DE TREINO</span>
            </h2>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Nossa academia conta com equipamentos de última geração dos principais fabricantes, garantindo que você
              tenha acesso às melhores ferramentas para sua jornada fitness.
            </p>

            <div>
              <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 font-semibold">
                VER TODOS EQUIPAMENTOS
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
                alt="Equipamentos de academia modernos"
                width={600}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
