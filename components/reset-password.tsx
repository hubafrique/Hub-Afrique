"use client"

import { auth } from "@/lib/auth"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, EyeOff, Eye, Lock } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { Alert, AlertDescription } from "./ui/alert"
import { Button } from "./ui/button"
import { CardContent } from "./ui/card"

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Check if we have the access_token and type=recovery in URL
        const accessToken = searchParams.get('access_token')
        const type = searchParams.get('type')

        if (!accessToken || type !== 'recovery') {
            setError("Invalid or expired reset link. Please request a new password reset.")
        }
    }, [searchParams])

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        setError("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        // Validate password confirmation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            setLoading(false)
            return
        }

        // Validate password strength
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long")
            setLoading(false)
            return
        }

        const { error } = await auth.updatePassword(formData.password)

        if (error) {
            setError(error.message)
        } else {
            setSuccess(true)
            // Redirect to sign in after a delay
            setTimeout(() => {
                router.push("/auth/signin")
            }, 3000)
        }

        setLoading(false)
    }

    return (
        <CardContent>
            {error && (
                <Alert className="mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-700 dark:text-red-300">{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert className="mb-6 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-700 dark:text-green-300">
                        Password updated successfully! Redirecting to sign in...
                    </AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Password */}
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                        New Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-10 pr-10 border-orange-200 dark:border-slate-600 focus:border-orange-500 focus:ring-orange-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                        Confirm New Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm new password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-10 pr-10 border-orange-200 dark:border-slate-600 focus:border-orange-500 focus:ring-orange-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3"
                    disabled={loading || success}
                >
                    {loading ? "Updating..." : success ? "Password Updated" : "Update Password"}
                </Button>
            </form>

            {/* Sign In Link */}
            <div className="text-center pt-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    Remember your password?{" "}
                    <Link href="/auth/signin" className="text-orange-600 hover:text-orange-700 font-medium underline">
                        Sign in here
                    </Link>
                </p>
            </div>
        </CardContent>
    )
}