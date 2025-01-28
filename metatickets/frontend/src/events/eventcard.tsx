import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface EventCardProps {
  title: string
  description: string
  image: string
  rating: number
  reviews: number
  price: number
  category: string
}

export function EventCard({ title, description, image, rating, reviews, price, category }: EventCardProps) {
  return (
    <Card className="w-full overflow-hidden bg-zinc-900 text-white">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-300">
            {rating} ({reviews})
          </span>
        </div>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="mt-2 text-sm text-gray-400">{category}</div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">${price}</span>
        <Button variant="secondary" size="sm">
          Book now
        </Button>
      </CardFooter>
    </Card>
  )
}

