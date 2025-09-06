import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This middleware protects routes by checking if the user is authenticated.
// If not authenticated, it redirects to the login page.

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value

    // If no token found, redirect to login page
    if (!token) {
        const loginUrl = new URL("/auth/login", request.url)
        return NextResponse.redirect(loginUrl)
    }

    // Allow the request to proceed if token exists
    return NextResponse.next()
}

// Apply middleware to all routes under /dashboard and /profile (example)
export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"],
}
