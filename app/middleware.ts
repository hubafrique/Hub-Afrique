import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

// This middleware protects routes by checking if the user is authenticated.
// If not authenticated, it redirects to the login page.

export async function middleware(request: NextRequest) {
    // Create a Supabase client for server-side auth checking
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Refresh session if expired - required for Server Components
    const { data: { session } } = await supabase.auth.getSession()

    const isAuthPage = request.nextUrl.pathname.startsWith('/auth/')
    const isPublicPage = request.nextUrl.pathname === '/'

    // If user is not authenticated and trying to access protected routes
    if (!session && !isAuthPage && !isPublicPage) {
        const loginUrl = new URL("/auth/signin", request.url)
        return NextResponse.redirect(loginUrl)
    }

    // If user is authenticated and trying to access auth pages, redirect to dashboard
    if (session && isAuthPage) {
        const dashboardUrl = new URL("/dashboard", request.url)
        return NextResponse.redirect(dashboardUrl)
    }

    // Allow the request to proceed
    return NextResponse.next()
}

// Apply middleware to all routes under /dashboard and /profile
export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/auth/:path*"],
}
