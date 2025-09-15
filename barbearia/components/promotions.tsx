import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Gift, Users } from "lucide-react";
import Image from "next/image";

export default function Promotions() {
  const promotions = [
    {
      icon: Crown,
      title: "Pacote Cavalheiro",
      description: "Experiência completa de cuidado masculino",
      originalPrice: "R$ 150",
      salePrice: "R$ 115",
      discount: "25% OFF",
      features: [
        "Corte de Cabelo",
        "Aparar Barba",
        "Barba Quente",
        "Tratamento Facial",
      ],
      popular: true,
    },
    {
      icon: Gift,
      title: "Especial Primeira Visita",
      description: "Oferta exclusiva para novos clientes",
      originalPrice: "R$ 65",
      salePrice: "R$ 45",
      discount: "30% OFF",
      features: [
        "Corte Premium",
        "Finalização",
        "Consultoria",
        "Amostra de Produto",
      ],
      popular: false,
    },
    {
      icon: Users,
      title: "Pai & Filho",
      description: "Sessão de cuidado em família",
      originalPrice: "R$ 100",
      salePrice: "R$ 80",
      discount: "20% OFF",
      features: [
        "2 Cortes",
        "Finalização para Ambos",
        "Sessão de Fotos",
        "Bebidas Cortesia",
      ],
      popular: false,
    },
  ];

  const products = [
    {
      name: "Bálsamo para Barba",
      brand: "Coleção Premium",
      price: "$24.99",
      image:
        "https://images.pexels.com/photos/31810243/pexels-photo-31810243.jpeg",
    },
    {
      name: "Pomada Capilar",
      brand: "Estilo Clássico",
      price: "$19.99",
      image:
        "https://images.pexels.com/photos/8102128/pexels-photo-8102128.jpeg",
    },
    {
      name: "Creme de Barbear",
      brand: "Barba de Luxo",
      price: "$29.99",
      image:
        "https://images.pexels.com/photos/8789590/pexels-photo-8789590.jpeg",
    },
  ];
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotions Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            OFERTAS ESPECIAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-500">Promoções</span> por Tempo Limitado
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aproveite nossos pacotes exclusivos e ofertas especiais. Serviços
            premium de cuidado masculino com preços imbatíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className={`bg-zinc-950 border-amber-500/20 relative overflow-hidden ${
                promo.popular ? "ring-2 ring-amber-500" : ""
              }`}
            >
              {promo.popular && (
                <Badge className="absolute top-4 right-4 bg-amber-500 text-black font-semibold">
                  MAIS POPULAR
                </Badge>
              )}

              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-amber-500/10 rounded-full w-fit">
                  <promo.icon className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-xl text-white">
                  {promo.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {promo.description}
                </CardDescription>

                <div className="flex items-center justify-center space-x-2 mt-4">
                  <span className="text-gray-400 line-through text-lg">
                    {promo.originalPrice}
                  </span>
                  <span className="text-3xl font-bold text-amber-500">
                    {promo.salePrice}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-500 text-amber-500 mt-2"
                >
                  {promo.discount}
                </Badge>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {promo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  Agendar Pacote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            PRODUTOS EM DESTAQUE
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="text-amber-500">Produtos</span> em Destaque
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-zinc-950 border-amber-500/20 hover:border-amber-500/40 transition-colors group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {product.name}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{product.brand}</p>
                <div className="text-xl font-bold text-amber-500 mb-4">
                  {product.price}
                </div>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black bg-transparent"
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
