"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
          alt="Background fitness"
          width={1200}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          ELEVE SEUS OBJETIVOS FITNESS
          <br />
          <span className="text-lime-400">COM O GLADIATOR</span>
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se à nossa comunidade e transforme sua vida com os melhores equipamentos e treinadores especializados.
        </p>

        <div>
          <Button className="bg-lime-400 text-black hover:bg-lime-500 px-12 py-4 text-lg font-semibold">
            JUNTE-SE AGORA
          </Button>
        </div>
      </div>
    </section>
  )
}
