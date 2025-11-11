import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client-side Supabase client
export function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Server-side Supabase client
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}

export { createClient }

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: "student" | "professional" | "mentor" | "admin"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          role?: "student" | "professional" | "mentor" | "admin"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: "student" | "professional" | "mentor" | "admin"
          created_at?: string
          updated_at?: string
        }
      }
      partnership_inquiries: {
        Row: {
          id: string
          full_name: string
          organization: string
          email: string
          phone: string | null
          interest_type: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          full_name: string
          organization: string
          email: string
          phone?: string | null
          interest_type: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          organization?: string
          email?: string
          phone?: string | null
          interest_type?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}
