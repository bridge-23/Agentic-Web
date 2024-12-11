'use client'

import ProtectedRoute from '@/components/protected-route'
import { OnboardingContent } from './onboarding-content'

export default function Onboarding() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <OnboardingContent />
      </div>
    </ProtectedRoute>
  )
}