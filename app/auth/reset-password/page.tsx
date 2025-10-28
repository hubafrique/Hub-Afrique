"use client"

export const dynamic = 'force-dynamic'

import type React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ResetPasswordForm from "@/components/reset-password"

export default function ResetPasswordPage() {
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
                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">Set New Password</CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-300">
                                Enter your new password below
                            </CardDescription>
                        </div>
                        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
                            🔑 Secure your account
                        </Badge>
                    </CardHeader>

                    <Suspense fallback={
                        <CardContent>
                            <div className="flex items-center justify-center py-8">
                                <div className="text-slate-600 dark:text-slate-300">Loading...</div>
                            </div>
                        </CardContent>
                    }>
                        <ResetPasswordForm />
                    </Suspense>
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