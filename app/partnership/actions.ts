"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export interface PartnershipInquiry {
  full_name: string
  organization: string
  email: string
  phone?: string
  interest_type: string
  message: string
}

export async function submitPartnershipInquiry(formData: FormData) {
  try {
    const inquiry: PartnershipInquiry = {
      full_name: formData.get("full_name") as string,
      organization: formData.get("organization") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      interest_type: formData.get("interest_type") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!inquiry.full_name || !inquiry.organization || !inquiry.email || !inquiry.interest_type || !inquiry.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(inquiry.email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("partnership_inquiries").insert([inquiry]).select().single()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit partnership inquiry. Please try again.",
      }
    }

    // In a real application, you would send emails here
    // For now, we'll simulate the email sending
    console.log("Partnership inquiry submitted:", data)

    // Simulate sending confirmation email to partner
    console.log(`Sending confirmation email to: ${inquiry.email}`)

    // Simulate sending notification to Hub Afrique team
    console.log("Sending notification to partnerships@hubafrique.com")

    revalidatePath("/partnership")

    return {
      success: true,
      message: "Thank you for your partnership inquiry! We will get back to you within 2-3 business days.",
    }
  } catch (error) {
    console.error("Error submitting partnership inquiry:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
