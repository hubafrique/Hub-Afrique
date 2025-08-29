"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Skeleton } from "@/components/ui/skeleton"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  requiredRole?: "learner" | "mentor" | "recruiter"
  requireProLabCompletion?: boolean
}

export function AuthGuard({
  children,
  requireAuth = true,
  requiredRole,
  requireProLabCompletion = false,
}: AuthGuardProps) {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return

    // Redirect to login if auth is required but user is not logged in
    if (requireAuth && !user) {
      router.push("/auth/signin")
      return
    }

    // Redirect if specific role is required
    if (requiredRole && profile?.role !== requiredRole) {
      router.push("/dashboard")
      return
    }

    // Redirect if ProLab completion is required but not completed
    if (requireProLabCompletion && profile?.prolab_status !== "completed") {
      router.push("/prolab")
      return
    }
  }, [user, profile, loading, requireAuth, requiredRole, requireProLabCompletion, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Skeleton className="h-8 w-64" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Don't render if auth requirements are not met
  if (requireAuth && !user) return null
  if (requiredRole && profile?.role !== requiredRole) return null
  if (requireProLabCompletion && profile?.prolab_status !== "completed") return null

  return <>{children}</>
}
