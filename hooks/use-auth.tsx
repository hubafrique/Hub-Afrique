"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/auth"
import { database } from "@/lib/database"
import type { User } from "@supabase/supabase-js"
import type { Profile } from "@/lib/supabase"

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>
  signInWithGoogle: () => Promise<{ error: any }>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { session } = await auth.getCurrentSession()
      if (session?.user) {
        setUser(session.user)
        await loadProfile(session.user.id)
      }
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user)
        await loadProfile(session.user.id)
      } else {
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const loadProfile = async (userId: string) => {
    const { data: profileData } = await database.profiles.getProfile(userId)
    if (profileData) {
      setProfile(profileData)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await auth.signIn(email, password)
    if (!error) {
      // Redirect based on user role will be handled by auth state change
      router.push("/dashboard")
    }
    return { error }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await auth.signUp(email, password, fullName)
    if (!error) {
      router.push("/auth/verify-email")
    }
    return { error }
  }

  const signInWithGoogle = async () => {
    const { error } = await auth.signInWithGoogle()
    return { error }
  }

  const signOut = async () => {
    await auth.signOut()
    setUser(null)
    setProfile(null)
    router.push("/")
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error("No user logged in") }

    const { data, error } = await database.profiles.updateProfile(user.id, updates)
    if (data) {
      setProfile(data)
    }
    return { error }
  }

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
