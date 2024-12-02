import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (router.query.redirect) {
      router.push(router.query.redirect)
    }
  }, [router])

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Button onClick={() => router.push('/about')}>Go to About</Button>
    </div>
  )
}

