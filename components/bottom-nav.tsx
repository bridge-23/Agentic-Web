'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Users, Database, Wallet, CreditCard } from 'lucide-react'

const routes = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/agents", label: "Agents", icon: Users },
  { href: "/data-portfolio", label: "Data", icon: Database },
  { href: "/wallet", label: "Wallet", icon: Wallet },
  { href: "/credits-marketplace", label: "Credits", icon: CreditCard },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-around">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex flex-col items-center py-2 px-3 text-xs",
              pathname === route.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <route.icon className="h-5 w-5 mb-1" />
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

