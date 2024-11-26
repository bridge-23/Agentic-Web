import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 ml-36">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/profile"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Profile
      </Link>
      <Link
        href="/data"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Data
      </Link>
      <Link
        href="/agents"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Agents
      </Link>
      <Link
        href="/analytics"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Analytics
      </Link>
      <Link
        href="/marketplace"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Marketplace
      </Link>
      <Link
        href="/fine-tuning"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Fine-Tuning
      </Link>
      <Link
        href="/support"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Support
      </Link>
    </nav>
  )
}

