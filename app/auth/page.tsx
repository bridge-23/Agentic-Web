'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../contexts/auth-context'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'

export default function AuthPage() {
  const { isAuthenticated, signIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/onboarding')
    }
  }, [isAuthenticated, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to Pantheon</CardTitle>
          <CardDescription>Sign in to continue to your AI avatar</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button 
            variant="outline" 
            onClick={signIn}
            className="w-full md:w-auto"
          >
            Sign In with Internet Identity
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}