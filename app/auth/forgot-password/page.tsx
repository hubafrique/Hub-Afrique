"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Mail, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { auth } from "@/lib/auth"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        const { error } = await auth.resetPassword(email)

        if (error) {
            setError(error.message)
        } else {
            setSuccess(true)
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

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
                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">Reset Your Password</CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-300">
                                Enter your email address and we'll send you a link to reset your password
                            </CardDescription>
                        </div>
                        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
                            🔐 Secure password reset
                        </Badge>
                    </CardHeader>

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
                                    Password reset link sent! Check your email.
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 border-orange-200 dark:border-slate-600 focus:border-orange-500 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3"
                                disabled={loading || success}
                            >
                                {loading ? "Sending..." : success ? "Email Sent" : "Send Reset Link"}
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
                </Card>

                {/* Trust Indicators */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Trusted by 50,000+ African professionals</p>
                    <div className="flex justify-center space-x-6 opacity-60">
                        <div className="text-xs">🔒 Secure</div>
                        <div className="text-xs">🌍 Pan-African</div>
                        <div className="text-xs">⚡ Fast Access</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
