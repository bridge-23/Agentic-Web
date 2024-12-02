import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Check if we're on the onboarding page
  const isOnboarding = router.pathname === '/onboarding'

  // If not onboarding and on the root path, redirect to dashboard
  if (!isOnboarding && router.pathname === '/') {
    router.push('/dashboard')
  }

  return <Component {...pageProps} />
}

