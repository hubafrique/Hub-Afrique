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
  resendConfirmation: (email: string) => Promise<{ error: any }>
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

        // Check email confirmation first
        if (!session.user.email_confirmed_at) {
          router.push("/auth/verify-email")
          return
        }

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
    const { data, error } = await auth.signIn(email, password)
    if (!error && data?.session) {
      // Set user and profile state
      setUser(data.session.user)
      await loadProfile(data.session.user.id)

      // Check profile completeness before redirecting
      const { data: profileData } = await database.profiles.getProfile(data.session.user.id)
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
    } else if (error) {
      // Check if error is due to unconfirmed email
      if (error.message?.includes("Email not confirmed") || error.message?.includes("email_not_confirmed")) {
        // Store email in localStorage for security instead of URL params
        localStorage.setItem('unconfirmedEmail', email)
        router.push('/auth/verify-email')
        return { error: null }
      }
    }
    return { error }
  }

  const signUp = async (email: string, password: string, userData: Partial<Profile>) => {
    const { data, error } = await auth.signUp(email, password, userData);
    if (!error && data?.user) {
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
    console.log(user);


    const { data, error } = await database.profiles.updateProfile(user.id, updates as Profile)
    if (data) {
      setProfile(data)
    }
    return { error }
  }

  const resendConfirmation = async (email: string) => {
    const { error } = await auth.resendConfirmation(email)
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
    resendConfirmation,
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
