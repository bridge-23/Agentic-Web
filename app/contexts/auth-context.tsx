'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { AuthService } from '../services/auth.service'
import type { User } from '@junobuild/core'

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initializeAuth()
  }, [])

  async function initializeAuth() {
    try {
      await AuthService.initialize()
      const currentUser = await AuthService.getUser()
      setUser(currentUser)
    } catch (error) {
      console.error('Auth initialization failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async () => {
    const newUser = await AuthService.signIn()
    setUser(newUser)
  }

  const signOut = async () => {
    await AuthService.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signIn,
        signOut,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}