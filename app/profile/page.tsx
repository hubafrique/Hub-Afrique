"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { database } from "@/lib/database"
import { supabase, type Profile } from "@/lib/supabase"
import { Edit, Save, X, User, MapPin, Briefcase, Award, FileText, Camera } from "lucide-react"

export default function ProfilePage() {
    const { user, profile, updateProfile } = useAuth()
    const { toast } = useToast()
    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [uploadingAvatar, setUploadingAvatar] = useState(false)
    const [formData, setFormData] = useState<Partial<Profile>>({})

    useEffect(() => {
        if (profile) {
            setFormData(profile)
        }
    }, [profile])

    const handleInputChange = (field: keyof Profile, value: string | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSave = async () => {
        if (!user || !profile) return

        setLoading(true)
        try {
            const { data, error } = await database.profiles.updateProfile(user.id, formData)

            if (error) {
                toast({
                    title: "Error",
                    description: "Failed to update profile. Please try again.",
                    variant: "destructive",
                })
            } else {
                updateProfile(data)
                setIsEditing(false)
                toast({
                    title: "Success",
                    description: "Profile updated successfully!",
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        setFormData(profile || {})
        setIsEditing(false)
    }

    const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file || !user) return

        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast({
                title: "Error",
                description: "Please upload an image file.",
                variant: "destructive",
            })
            return
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast({
                title: "Error",
                description: "Image size must be less than 5MB.",
                variant: "destructive",
            })
            return
        }

        setUploadingAvatar(true)
        try {
            // Create a unique file name with user folder
            const fileExt = file.name.split('.').pop()
            const fileName = `avatar.${fileExt}`
            const filePath = `${user.id}/${fileName}`

            // Upload to Supabase storage
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: true
                })

            if (uploadError) throw uploadError

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath)

            // Update profile with new avatar URL
            const { data, error } = await database.profiles.updateProfile(user.id, {
                profile_picture: publicUrl
            })

            if (error) throw error

            updateProfile(data)
            setFormData(prev => ({ ...prev, profile_picture: publicUrl }))

            toast({
                title: "Success",
                description: "Profile picture updated successfully!",
            })
        } catch (error) {
            console.error('Avatar upload error:', error)
            toast({
                title: "Error",
                description: "Failed to upload profile picture. Please try again.",
                variant: "destructive",
            })
        } finally {
            setUploadingAvatar(false)
        }
    }

    if (!user || !profile) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-4"></div>
                            <p className="text-muted-foreground">Loading profile...</p>
                        </div>
                    </div>
                </DashboardLayout>
            </AuthGuard>
        )
    }

    return (
        <AuthGuard>
            <DashboardLayout>
                <div className="space-y-8">
                    {/* Header */}
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                            My Profile
                        </h1>
                        <p className="text-sm sm:text-base text-muted-foreground">
                            Manage your personal information and professional details.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Profile Overview */}
                        <Card className="lg:col-span-1">
                            <CardHeader className="text-center">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="relative">
                                        <Avatar className="h-24 w-24">
                                            <AvatarImage
                                                src={formData.profile_picture || profile.profile_picture || user.user_metadata.avatar_url || "/placeholder.svg?height=96&width=96"}
                                                alt="Profile picture"
                                            />
                                            <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-2xl">
                                                {user.user_metadata.full_name?.split(' ').map(n => n[0]).join('') || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        {isEditing && (
                                            <label
                                                htmlFor="avatar-upload"
                                                className="absolute bottom-0 right-0 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-2 cursor-pointer shadow-lg transition-colors"
                                            >
                                                {uploadingAvatar ? (
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                ) : (
                                                    <Camera className="h-4 w-4" />
                                                )}
                                                <input
                                                    id="avatar-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleAvatarUpload}
                                                    disabled={uploadingAvatar}
                                                    className="hidden"
                                                />
                                            </label>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{user.user_metadata.full_name || "User"}</h3>
                                        <p className="text-sm text-muted-foreground">{user.email}</p>
                                        <Badge variant="secondary" className="mt-2">
                                            {profile.role === "learner" ? "Learner" :
                                                profile.role === "mentor" ? "Mentor" : "Recruiter"}
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2 text-sm">
                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                    <span>{profile.profession || "Not specified"}</span>
                                </div>
                                {profile.location && (
                                    <div className="flex items-center space-x-2 text-sm">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>{profile.location}</span>
                                    </div>
                                )}
                                <div className="flex items-center space-x-2 text-sm">
                                    <Award className="h-4 w-4 text-muted-foreground" />
                                    <span>ProLab: {profile.prolab_status === "completed" ? "Completed" :
                                        profile.prolab_status === "in_progress" ? "In Progress" : "Not Started"}</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Profile Details */}
                        <Card className="lg:col-span-2">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="flex items-center space-x-2">
                                            <User className="h-5 w-5" />
                                            <span>Profile Information</span>
                                        </CardTitle>
                                        <CardDescription>
                                            Update your personal and professional information
                                        </CardDescription>
                                    </div>
                                    {!isEditing ? (
                                        <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Profile
                                        </Button>
                                    ) : (
                                        <div className="flex space-x-2">
                                            <Button onClick={handleSave} disabled={loading} size="sm">
                                                {loading ? (
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                ) : (
                                                    <Save className="h-4 w-4 mr-2" />
                                                )}
                                                Save
                                            </Button>
                                            <Button onClick={handleCancel} variant="outline" size="sm">
                                                <X className="h-4 w-4 mr-2" />
                                                Cancel
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Basic Information */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                        Basic Information
                                    </h4>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="profession">Profession</Label>
                                            {isEditing ? (
                                                <Input
                                                    id="profession"
                                                    value={formData.profession || ""}
                                                    onChange={(e) => handleInputChange("profession", e.target.value)}
                                                    placeholder="e.g. Software Developer"
                                                />
                                            ) : (
                                                <p className="text-sm py-2 px-3 bg-muted rounded-md">
                                                    {profile.profession || "Not specified"}
                                                </p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="role">Role</Label>
                                            {isEditing ? (
                                                <Select
                                                    value={formData.role || ""}
                                                    onValueChange={(value) => handleInputChange("role", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select your role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="learner">Learner</SelectItem>
                                                        <SelectItem value="mentor">Mentor</SelectItem>
                                                        <SelectItem value="recruiter">Recruiter</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            ) : (
                                                <p className="text-sm py-2 px-3 bg-muted rounded-md capitalize">
                                                    {profile.role || "Not specified"}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        {isEditing ? (
                                            <Input
                                                id="location"
                                                value={formData.location || ""}
                                                onChange={(e) => handleInputChange("location", e.target.value)}
                                                placeholder="e.g. Lagos, Nigeria"
                                            />
                                        ) : (
                                            <p className="text-sm py-2 px-3 bg-muted rounded-md">
                                                {profile.location || "Not specified"}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <Separator />

                                {/* Bio */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Bio
                                    </h4>
                                    <div className="space-y-2">
                                        <Label htmlFor="bio">About Me</Label>
                                        {isEditing ? (
                                            <Textarea
                                                id="bio"
                                                value={formData.bio || ""}
                                                onChange={(e) => handleInputChange("bio", e.target.value)}
                                                placeholder="Tell us about yourself..."
                                                rows={4}
                                            />
                                        ) : (
                                            <p className="text-sm py-2 px-3 bg-muted rounded-md min-h-[100px]">
                                                {profile.bio || "No bio provided"}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <Separator />

                                {/* Skills */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                        Skills
                                    </h4>
                                    <div className="space-y-2">
                                        <Label htmlFor="skills">Skills (comma-separated)</Label>
                                        {isEditing ? (
                                            <Textarea
                                                id="skills"
                                                value={formData.skills?.join(", ") || ""}
                                                onChange={(e) => handleInputChange("skills", e.target.value.split(", "))}
                                                placeholder="e.g. JavaScript, React, Node.js"
                                                rows={3}
                                            />
                                        ) : (
                                            <div className="flex flex-wrap gap-2 py-2 px-3 bg-muted rounded-md min-h-[60px]">
                                                {profile.skills && profile.skills.length > 0 ? (
                                                    profile.skills.map((skill, index) => (
                                                        <Badge key={index} variant="secondary">
                                                            {skill}
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    <p className="text-sm text-muted-foreground">No skills specified</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </DashboardLayout>
        </AuthGuard>
    )
}