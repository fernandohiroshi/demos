import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
}

export function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-gray-600 mb-6 italic">"{content}"</p>

        <div className="flex items-center gap-3">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
