import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hub Afrique - Professional Network for Africa",
  description:
    "Connect, learn, and grow with Africa's leading professional network. Access opportunities, mentorship, and resources to advance your career.",
  keywords: ["professional network", "Africa", "career development", "mentorship", "opportunities"],
  authors: [{ name: "Hub Afrique" }],
  creator: "Hub Afrique",
  publisher: "Hub Afrique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hubafrique.com"),
  openGraph: {
    title: "Hub Afrique - Professional Network for Africa",
    description: "Connect, learn, and grow with Africa's leading professional network.",
    url: "https://hubafrique.com",
    siteName: "Hub Afrique",
    images: [
      {
        url: "/images/hub-afrique-logo.png",
        width: 1200,
        height: 630,
        alt: "Hub Afrique Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub Afrique - Professional Network for Africa",
    description: "Connect, learn, and grow with Africa's leading professional network.",
    images: ["/images/hub-afrique-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarnings>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
