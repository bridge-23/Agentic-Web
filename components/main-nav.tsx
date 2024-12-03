"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'

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
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href="/dashboard" className="hidden md:flex items-center mr-6">
        <Image
          src="/Bridge23Logo v 1.png"
          alt="Bridge23 Logo"
          width={140}
          height={40}
          className="h-10 w-auto object-contain"
          priority
        />
      </Link>
      <div className="md:hidden">
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/Bridge23Logo v 1.png"
            alt="Bridge23 Logo"
            width={100}
            height={30}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
      </div>
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
      <div className="md:hidden ml-auto">
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
                <Link href={route.href}>{route.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}