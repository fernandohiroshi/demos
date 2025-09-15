import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "SHAMPOO PREMIUM",
    price: "R$ 45,90",
    image: "https://images.pexels.com/photos/4432261/pexels-photo-4432261.jpeg",
  },
  {
    name: "ROUPINHA PET",
    price: "R$ 59,90",
    image: "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg",
  },
  {
    name: "BRINQUEDO INTERATIVO",
    price: "R$ 34,90",
    image: "https://images.pexels.com/photos/3860306/pexels-photo-3860306.jpeg",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-[#F5F1E8] px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
            PRODUTOS PROFISSIONAIS
          </h2>
          <p className="text-gray-600 text-lg">
            Produtos premium utilizados em nossos serviços, agora disponíveis
            para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-black">{product.name}</h3>
                <p className="text-2xl font-bold text-[#E85A4F]">
                  {product.price}
                </p>
                <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-6 py-2 rounded-full font-semibold w-full">
                  COMPRAR
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#E85A4F] hover:bg-[#D44A3F] text-white px-8 py-3 rounded-full text-lg font-semibold">
            VER CATÁLOGO
          </Button>
        </div>
      </div>
    </section>
  );
}
