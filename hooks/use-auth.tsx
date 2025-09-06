"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/auth"
import { database } from "@/lib/database"
import type { User } from "@supabase/supabase-js"
import type { Profile } from "@/lib/supabase"
import { TUser } from "@/types"

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, userData: Partial<TUser>) => Promise<{ error: any }>
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

        // Check if profile exists and is complete
        const { data: profileData } = await database.profiles.getProfile(session.user.id)
        if (profileData) {
          // Profile exists, check if it's complete
          if (!profileData.location || !profileData.role) {
            router.push("/auth/signup/onboarding")
          } else {
            router.push("/dashboard")
          }
        } else {
          // Profile doesn't exist, redirect to onboarding
          router.push("/auth/signup/onboarding")
        }
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
    } else {
      // Create profile if it doesn't exist (for Google sign-in)
      const newProfile = {
        location: "",
        role: undefined,
      }
      const { data: createdProfile } = await database.profiles.updateProfile(userId, newProfile)
      if (createdProfile) {
        setProfile(createdProfile)
      }
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await auth.signIn(email, password)
    if (!error) {
      // Check profile completeness before redirecting
      const { data: profileData } = await database.profiles.getProfile(user?.id || "")
      if (profileData) {
        // Profile exists, check if it's complete
        if (!profileData.location || !profileData.role) {
          router.push("/auth/signup/onboarding")
        } else {
          router.push("/dashboard")
        }
      } else {
        // Profile doesn't exist, redirect to onboarding
        router.push("/auth/signup/onboarding")
      }
    }
    return { error }
  }

  const signUp = async (email: string, password: string, userData: Partial<TUser>) => {
    const { data, error } = await auth.signUp(email, password, userData);
    if (!error && data?.user) {
      // Create profile in profiles table with additional data
      const profileData = {
        id: data.user.id,
        location: userData.country || "",
        role: userData.profession as "learner" | "mentor" | "recruiter" | undefined,
      }
      const { error: profileError } = await database.profiles.updateProfile(data.user.id, profileData)
      if (profileError) {
        return { error: profileError }
      }
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
    router.push("/auth/login")
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
