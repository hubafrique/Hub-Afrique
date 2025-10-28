"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"

export default function VerifyEmailPage() {
    const [resendLoading, setResendLoading] = useState(false)
    const [resendMessage, setResendMessage] = useState("")
    const [resendError, setResendError] = useState("")
    const { user, resendConfirmation } = useAuth()

    // Get email from localStorage if available (more secure than URL params)
    const emailFromStorage = typeof window !== 'undefined' ? localStorage.getItem('unconfirmedEmail') : null

    const handleResendConfirmation = async () => {
        const emailToUse = user?.email || emailFromStorage
        if (!emailToUse) return

        setResendLoading(true)
        setResendError("")
        setResendMessage("")

        const { error } = await resendConfirmation(emailToUse)

        if (error) {
            setResendError(error.message)
        } else {
            setResendMessage("Confirmation email sent successfully!")
            // Clear the stored email after successful resend
            if (emailFromStorage) {
                localStorage.removeItem('unconfirmedEmail')
            }
        }

        setResendLoading(false)
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
                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">Check Your Email</CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-300">
                                We've sent you a verification link to complete your account setup
                            </CardDescription>
                        </div>
                        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
                            📧 Verify to get started
                        </Badge>
                    </CardHeader>

                    <CardContent className="text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-slate-600 dark:text-slate-300">
                                Click the verification link in your email to activate your Hub Afrique account.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Didn't receive the email? Check your spam folder or resend it below.
                            </p>
                        </div>

                        {resendError && (
                            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
                                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                                <AlertDescription className="text-red-700 dark:text-red-300">{resendError}</AlertDescription>
                            </Alert>
                        )}

                        {resendMessage && (
                            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                <AlertDescription className="text-green-700 dark:text-green-300">{resendMessage}</AlertDescription>
                            </Alert>
                        )}

                        <Button
                            onClick={handleResendConfirmation}
                            disabled={resendLoading}
                            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3"
                        >
                            {resendLoading ? "Sending..." : "Resend Confirmation Email"}
                        </Button>

                        {/* Sign In Link */}
                        <div className="pt-4">
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Already verified?{" "}
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
