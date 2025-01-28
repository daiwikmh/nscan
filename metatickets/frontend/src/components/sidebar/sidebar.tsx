"use client"

import { PlaneIcon as Airplane, Bus, CreditCard, Home, LayoutGrid, ShoppingBag, Train, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MainSidebar({ className, ...props }: SidebarProps) {
  const icons = [
    { icon: LayoutGrid, label: "Dashboard" },
    { icon: CreditCard, label: "Payments" },
    { icon: ShoppingBag, label: "Shopping" },
    { icon: Airplane, label: "Flights" },
    { icon: Train, label: "Trains" },
    { icon: Bus, label: "Buses" },
    { icon: Home, label: "Hotels" },
  ]

  return (
    <div className={cn("flex h-screen w-[60px] flex-col items-center bg-black/90 py-4", className)} {...props}>
      <div className="mb-8">
        <Button size="icon" variant="ghost" className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
          Q
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {icons.map((Icon, index) => (
          <Button
            key={index}
            size="icon"
            variant="ghost"
            className="rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <Icon.icon className="h-5 w-5" />
            <span className="sr-only">{Icon.label}</span>
          </Button>
        ))}
      </div>

      <div className="mt-auto">
        <Button size="icon" variant="ghost" className="rounded-full bg-gray-800 text-white hover:bg-gray-700">
          <User className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </div>
  )
}

