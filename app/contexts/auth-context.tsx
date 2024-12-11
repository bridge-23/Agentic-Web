'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { AuthService } from '../services/auth.service'

interface User {
  id?: string
  email?: string
  name?: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  signIn: async () => {},
  signOut: async () => {},
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initializeAuth()
  }, [])

  async function initializeAuth() {
    try {
      await AuthService.initialize()
      setLoading(false)
    } catch (error) {
      console.error('Auth initialization failed:', error)
      setLoading(false)
    }
  }

  const signIn = async () => {
    await AuthService.signIn()
    setIsAuthenticated(true)
    setUser({ /* Set user data from AuthService */ })
  }

  const signOut = async () => {
    await AuthService.signOut()
    setIsAuthenticated(false)
    setUser(null)
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
  return useContext(AuthContext)
}