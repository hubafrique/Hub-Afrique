import { supabase } from "./supabase"
import type { Profile, Notification, Job } from "./supabase"

export const database = {
  // Profile operations
  profiles: {
    async getProfile(userId: string) {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()
      return { data, error }
    },

    async updateProfile(userId: string, updates: Partial<Profile>) {
      const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single()
      return { data, error }
    },

    async getAllProfiles() {
      const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })
      return { data, error }
    },
  },

  // Course operations
  courses: {
    async getAllCourses() {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
      return { data, error }
    },

    async getCourse(courseId: string) {
      const { data, error } = await supabase.from("courses").select("*").eq("id", courseId).single()
      return { data, error }
    },

    async getCoursesByCategory(category: string) {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("category", category)
        .eq("is_active", true)
        .order("created_at", { ascending: false })
      return { data, error }
    },
  },

  // Enrollment operations
  enrollments: {
    async enrollInCourse(userId: string, courseId: string) {
      const { data, error } = await supabase
        .from("enrollments")
        .insert({
          user_id: userId,
          course_id: courseId,
          progress: 0,
        })
        .select()
        .single()
      return { data, error }
    },

    async getUserEnrollments(userId: string) {
      const { data, error } = await supabase
        .from("enrollments")
        .select(`
          *,
          courses (*)
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
      return { data, error }
    },

    async updateProgress(enrollmentId: string, progress: number) {
      const { data, error } = await supabase
        .from("enrollments")
        .update({ progress })
        .eq("id", enrollmentId)
        .select()
        .single()
      return { data, error }
    },

    async getEnrollment(userId: string, courseId: string) {
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", userId)
        .eq("course_id", courseId)
        .single()
      return { data, error }
    },
  },

  // Notification operations
  notifications: {
    async getUserNotifications(userId: string) {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
      return { data, error }
    },

    async markAsRead(notificationId: string) {
      const { data, error } = await supabase
        .from("notifications")
        .update({ read: true })
        .eq("id", notificationId)
        .select()
        .single()
      return { data, error }
    },

    async getUnreadCount(userId: string) {
      const { count, error } = await supabase
        .from("notifications")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId)
        .eq("read", false)
      return { count, error }
    },

    async createNotification(notification: Omit<Notification, "id" | "created_at">) {
      const { data, error } = await supabase.from("notifications").insert(notification).select().single()
      return { data, error }
    },
  },

  // Job operations
  jobs: {
    async getAllJobs() {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
      return { data, error }
    },

    async getJob(jobId: string) {
      const { data, error } = await supabase.from("jobs").select("*").eq("id", jobId).single()
      return { data, error }
    },

    async createJob(job: Omit<Job, "id" | "created_at" | "updated_at">) {
      const { data, error } = await supabase.from("jobs").insert(job).select().single()
      return { data, error }
    },
  },

  // Project operations
  projects: {
    async getAllProjects() {
      const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })
      return { data, error }
    },

    async getProject(projectId: string) {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          *,
          project_members (
            *,
            profiles (*)
          )
        `)
        .eq("id", projectId)
        .single()
      return { data, error }
    },

    async joinProject(projectId: string, userId: string) {
      const { data, error } = await supabase
        .from("project_members")
        .insert({
          project_id: projectId,
          user_id: userId,
        })
        .select()
        .single()
      return { data, error }
    },
  },

  // Onboarding operations
  onboarding: {
    async submitOnboardingForm(
      userId: string,
      formData: {
        mentorship_type: "one_on_one" | "project_board"
        selected_skills: string[]
        goals: string
      },
    ) {
      const { data, error } = await supabase
        .from("onboarding_forms")
        .insert({
          user_id: userId,
          ...formData,
        })
        .select()
        .single()
      return { data, error }
    },

    async getOnboardingForm(userId: string) {
      const { data, error } = await supabase.from("onboarding_forms").select("*").eq("user_id", userId).single()
      return { data, error }
    },
  },
}
