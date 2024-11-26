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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
              <MainNav />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 space-y-4 p-8 pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}