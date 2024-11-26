"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
    { href: "/data", label: "Data" },
    { href: "/agents", label: "Agents" },
    { href: "/analytics", label: "Analytics" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/fine-tuning", label: "Fine-Tuning" },
    { href: "/support", label: "Support" },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 ml-36">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary relative py-2",
            pathname === item.href
              ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
              : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}