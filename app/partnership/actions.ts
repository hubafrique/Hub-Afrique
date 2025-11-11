"use server"

import { getSupabaseClient } from "@/lib/supabase"

export async function submitPartnershipInquiry(formData: FormData) {
  try {
    const supabase = getSupabaseClient()

    const data = {
      company_name: formData.get("companyName") as string,
      contact_person: formData.get("contactPerson") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      partnership_type: formData.get("partnershipType") as string,
      company_size: formData.get("companySize") as string,
      industry: formData.get("industry") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string,
    }

    const { error } = await supabase.from("partnership_inquiries").insert([data])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Failed to submit partnership inquiry. Please try again.",
      }
    }

    return {
      success: true,
      message: "Partnership inquiry submitted successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Partnership submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
