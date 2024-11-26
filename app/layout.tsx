import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agentic Dashboard',
  description: 'Manage your tasks, credits, and insights with Agentic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between py-4">
              <MainNav />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}