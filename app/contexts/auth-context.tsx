'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { AuthService } from '../services/auth.service'

interface AuthContextType {
  isAuthenticated: boolean
  user: any
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initializeAuth()
  }, [])

  async function initializeAuth() {
    try {
      await AuthService.initialize()
      // We'll handle authentication state through Juno's built-in mechanisms
      setLoading(false)
    } catch (error) {
      console.error('Auth initialization failed:', error)
      setLoading(false)
    }
  }

  const signIn = async () => {
    await AuthService.signIn()
    setIsAuthenticated(true)
  }

  const signOut = async () => {
    await AuthService.signOut()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
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