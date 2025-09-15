import Image from "next/image"

export function GallerySection() {
  const images = [
    {
      src: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      alt: "Ingredientes frescos e coloridos",
    },
    {
      src: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      alt: "Preparação de refeição saudável",
    },
    {
      src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      alt: "Mesa posta com alimentos nutritivos",
    },
    {
      src: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      alt: "Variedade de frutas e vegetais",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 leading-tight">
            Alimentação saudável em imagens
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inspire-se com nossa galeria de alimentos nutritivos e deliciosos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
