"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { africanCountries, professions } from "@/data"
import { MapPin, Briefcase, User } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export default function Onboarding() {
    const router = useRouter()
    const { profile, updateProfile } = useAuth()

    const [formData, setFormData] = useState({
        country: profile?.location || "",
        profession: profile?.role || "",
    })

    const [loading, setLoading] = useState(false)

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Map profession to role type expected by Profile type
        // Assuming role can be "learner" for all onboarding users by default
        const updates = {
            location: formData.country,
            role: "learner" as "learner" | "mentor" | "recruiter",
        }
        const { error } = await updateProfile(updates)
        setLoading(false)
        if (!error) {
            router.push("/dashboard")
        } else {
            // Handle error (could add UI feedback)
            alert("Failed to update profile. Please try again.")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="border-orange-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex items-center justify-center space-x-3">
                            <img
                                src="/images/hub-afrique-logo.png"
                                alt="Hub Afrique Logo"
                                className="w-12 h-12 dark:brightness-110 dark:contrast-125"
                            />
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                                    Hub Afrique
                                </span>
                            </div>
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">Complete Your Profile</CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-300">
                                Please provide the remaining details to complete your profile
                            </CardDescription>
                        </div>
                        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
                            🌍 Free to get started
                        </Badge>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Country */}
                            <div className="space-y-2">
                                <Label htmlFor="country" className="text-sm font-medium">
                                    Country
                                </Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                                        <SelectTrigger className="pl-10 border-orange-200 dark:border-slate-600 focus:border-orange-500 focus:ring-orange-500">
                                            <SelectValue placeholder="Select your country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {africanCountries.map((country) => (
                                                <SelectItem key={country} value={country}>
                                                    {country}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Profession */}
                            <div className="space-y-2">
                                <Label htmlFor="profession" className="text-sm font-medium">
                                    Profession
                                </Label>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                                    <Select value={formData.profession} onValueChange={(value) => handleInputChange("profession", value)}>
                                        <SelectTrigger className="pl-10 border-orange-200 dark:border-slate-600 focus:border-orange-500 focus:ring-orange-500">
                                            <SelectValue placeholder="Select your profession" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {professions.map((profession) => (
                                                <SelectItem key={profession} value={profession}>
                                                    {profession}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3"
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Complete Profile"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
