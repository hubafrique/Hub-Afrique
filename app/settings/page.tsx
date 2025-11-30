"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { database } from "@/lib/database"
import { supabase, type Profile, type UserSettings } from "@/lib/supabase"
import {
    Settings as SettingsIcon,
    Bell,
    Shield,
    Palette,
    Globe,
    Save,
    Moon,
    Sun,
    Mail,
    Smartphone,
    Eye,
    EyeOff,
    Lock,
    UserCheck
} from "lucide-react";
import { useTranslations } from 'next-intl'

export default function SettingsPage() {
    const { user, profile, updateProfile } = useAuth()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [settings, setSettings] = useState<Partial<UserSettings>>({
        theme: "system",
        email_notifications: true,
        push_notifications: true,
        marketing_emails: false,
        language: "en",
        profile_visibility: "public",
        two_factor_enabled: false,
    });
    const t = useTranslations('Settings')

    useEffect(() => {
        if (user) {
            // Load settings from user_settings table
            const loadSettings = async () => {
                const { data, error } = await database.userSettings.getUserSettings(user.id)
                if (data) {
                    setSettings({
                        theme: data.theme,
                        email_notifications: data.email_notifications,
                        push_notifications: data.push_notifications,
                        marketing_emails: data.marketing_emails,
                        language: data.language,
                        profile_visibility: data.profile_visibility,
                        two_factor_enabled: data.two_factor_enabled,
                    })
                } else if (error) {
                    // If no settings exist, keep defaults
                    console.log("No user settings found, using defaults")
                }
            }
            loadSettings()
        }
    }, [user])

    const handleSettingChange = (key: keyof UserSettings, value: any) => {
        setSettings(prev => ({ ...prev, [key]: value }))
    }

    const handleSave = async () => {
        if (!user) return

        setLoading(true)
        try {
            const { data, error } = await database.userSettings.upsertUserSettings(user.id, settings as UserSettings)

            if (error) {
                toast({
                    title: "Error",
                    description: "Failed to update settings. Please try again.",
                    variant: "destructive",
                })
            } else {
                toast({
                    title: "Success",
                    description: "Settings updated successfully!",
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

    if (!user || !profile) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-4"></div>
                            <p className="text-muted-foreground">Loading settings...</p>
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
                            {t('settings.title')}
                        </h1>
                        <p className="text-sm sm:text-base text-muted-foreground">
                            {t('settings.description')}
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Settings Form */}
                        <Card className="lg:col-span-2">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <SettingsIcon className="h-5 w-5" />
                                    <span>{t('settings.preferences')}</span>
                                </CardTitle>
                                <CardDescription>
                                    Configure your account settings and preferences
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {/* Appearance */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                                        <Palette className="h-4 w-4 mr-2" />
                                        Appearance
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="theme">Theme</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Choose your preferred theme
                                                </p>
                                            </div>
                                            <Select
                                                value={settings.theme}
                                                onValueChange={(value: UserSettings["theme"]) => handleSettingChange("theme", value)}
                                            >
                                                <SelectTrigger className="w-32">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="light">
                                                        <div className="flex items-center space-x-2">
                                                            <Sun className="h-4 w-4" />
                                                            <span>Light</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="dark">
                                                        <div className="flex items-center space-x-2">
                                                            <Moon className="h-4 w-4" />
                                                            <span>Dark</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="system">
                                                        <div className="flex items-center space-x-2">
                                                            <SettingsIcon className="h-4 w-4" />
                                                            <span>System</span>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="language">{t('settings.language')}</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    {t('settings.languageDescription')}
                                                </p>
                                            </div>
                                            <Select
                                                value={settings.language}
                                                onValueChange={(value) => handleSettingChange("language", value)}
                                            >
                                                <SelectTrigger className="w-32">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="en">English</SelectItem>
                                                    <SelectItem value="fr">Français</SelectItem>
                                                    <SelectItem value="es">Español</SelectItem>
                                                    <SelectItem value="pt">Português</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* Notifications */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                                        <Bell className="h-4 w-4 mr-2" />
                                        Notifications
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="email-notifications">Email Notifications</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Receive notifications via email
                                                </p>
                                            </div>
                                            <Switch
                                                id="email-notifications"
                                                checked={settings.email_notifications}
                                                onCheckedChange={(checked) => handleSettingChange("email_notifications", checked)}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="push-notifications">{t('settings.pushNotifications')}</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    {t('settings.pushNotificationsDescription')}
                                                </p>
                                            </div>
                                            <Switch
                                                id="push-notifications"
                                                checked={settings.push_notifications}
                                                onCheckedChange={(checked) => handleSettingChange("push_notifications", checked)}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="marketing-emails">Marketing Emails</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Receive emails about new features and updates
                                                </p>
                                            </div>
                                            <Switch
                                                id="marketing-emails"
                                                checked={settings.marketing_emails}
                                                onCheckedChange={(checked) => handleSettingChange("marketing_emails", checked)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* Privacy & Security */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                                        <Shield className="h-4 w-4 mr-2" />
                                        {t('settings.privacySecurity')}
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="profile-visibility">Profile Visibility</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Control who can see your profile
                                                </p>
                                            </div>
                                            <Select
                                                value={settings.profile_visibility}
                                                onValueChange={(value: UserSettings["profile_visibility"]) => handleSettingChange("profile_visibility", value)}
                                            >
                                                <SelectTrigger className="w-40">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="public">
                                                        <div className="flex items-center space-x-2">
                                                            <Eye className="h-4 w-4" />
                                                            <span>Public</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="connections">
                                                        <div className="flex items-center space-x-2">
                                                            <UserCheck className="h-4 w-4" />
                                                            <span>Connections</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="private">
                                                        <div className="flex items-center space-x-2">
                                                            <EyeOff className="h-4 w-4" />
                                                            <span>Private</span>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Add an extra layer of security to your account
                                                </p>
                                            </div>
                                            <Switch
                                                id="two-factor"
                                                checked={settings.two_factor_enabled}
                                                onCheckedChange={(checked) => handleSettingChange("two_factor_enabled", checked)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* Save Button */}
                                <div className="flex justify-end">
                                    <Button onClick={handleSave} disabled={loading}>
                                        {loading ? (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        ) : (
                                            <Save className="h-4 w-4 mr-2" />
                                        )}
                                        Save Settings
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </DashboardLayout>
        </AuthGuard>
    )
}
