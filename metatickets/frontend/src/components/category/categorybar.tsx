import { Button } from "@/components/ui/button"

const categories = ["All", "Theatre", "Bars", "Clubs", "Fishing", "Sea & Beach", "Sports"]

export function CategoryFilter() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button key={category} variant="ghost" className="text-gray-400 hover:text-white">
          {category}
        </Button>
      ))}
    </div>
  )
}