import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthProvider } from '@/app/contexts/auth-context'
import { Toaster } from '@/components/ui/toaster'
import { BottomNav } from "@/components/bottom-nav"
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pantheon',
  description: 'Your personal AI avatar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <header className="border-b">
                <div className="flex h-16 items-center px-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%20Black%20transparent%20-%20Bridge23%20Logo%20v%201-7tis8804K0ZLkmP1nDsVwegyHnm1FG.png"
                    alt="Bridge23 Logo"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] dark:invert mr-4 md:hidden"
                  />
                  <MainNav className="mx-6 hidden md:flex" />
                  <div className="ml-auto flex items-center space-x-4">
                    <Search className="hidden md:flex" />
                    <ThemeToggle className="hidden md:flex" />
                    <UserNav />
                  </div>
                </div>
                <Toaster />
              </header>
              <main className="flex-1 pb-16">
                {children}
              </main>
              <BottomNav className="md:hidden" />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}