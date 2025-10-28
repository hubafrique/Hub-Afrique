import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type { User } from "@supabase/supabase-js"

// Types for our database
export type Profile = {
  id: string
  profession: string
  role: "learner" | "mentor" | "recruiter"
  prolab_status: "not_started" | "in_progress" | "completed"
  profile_picture?: string
  bio?: string
  skills?: string[]
  location?: string
  created_at: string
  updated_at: string
}

export type Course = {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  instructor_id?: string
  duration_hours?: number
  difficulty_level?: string
  thumbnail_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type Enrollment = {
  id: string
  user_id: string
  course_id: string
  progress: number
  certificate_link?: string
  completed_at?: string
  created_at: string
  updated_at: string
}

export type Notification = {
  id: string
  user_id: string
  type: "welcome" | "certificate" | "ihub_invite" | "job_application" | "general"
  title: string
  message: string
  read: boolean
  metadata?: any
  created_at: string
}

export type Job = {
  id: string
  title: string
  company: string
  description: string
  requirements: string[]
  location?: string
  salary_range?: string
  job_type?: string
  posted_by?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type Project = {
  id: string
  title: string
  description: string
  category: string
  skills_required: string[]
  team_size_limit: number
  current_team_size: number
  mentor_id?: string
  status: string
  created_at: string
  updated_at: string
}

export type PartnershipInquiry = {
  id: string
  full_name: string
  organization: string
  email: string
  phone?: string
  interest_type: string
  message: string
  created_at: string
}
