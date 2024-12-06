"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Settings } from 'lucide-react'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const routes = [
    { href: "/dashboard", label: "Overview" },
    { href: "/agents", label: "Agents" },
    { href: "/data-portfolio", label: "Data Portfolio" },
    { href: "/wallet", label: "Wallet" },
    { href: "/credits-marketplace", label: "Credits Marketplace" },
    { href: "/settings", label: "Settings" },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 sticky top-0 z-50 bg-background shadow-sm", className)}
      {...props}
    >
      <Link href="/dashboard" className="mr-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%20Black%20transparent%20-%20Bridge23%20Logo%20v%201-7tis8804K0ZLkmP1nDsVwegyHnm1FG.png"
          alt="Bridge23 Logo"
          width={50}
          height={50}
          className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] dark:invert"
        />
      </Link>
      <div className="hidden md:flex md:space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === route.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {routes.map((route) => (
              <DropdownMenuItem key={route.href} asChild>
                <Link href={route.href}>
                  {route.label === "Settings" ? (
                    <Settings className="mr-2 h-4 w-4" />
                  ) : null}
                  {route.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}