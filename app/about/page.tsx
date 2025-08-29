import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Users,
  Target,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  BookOpen,
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-orange-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/images/hub-afrique-logo.png"
              alt="Hub Afrique Logo"
              className="w-10 h-10 dark:brightness-110 dark:contrast-125"
            />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                Hub Afrique
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">Your complete professional ecosystem</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/careers"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/pricing"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Pricing
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
            🌍 About Hub Afrique
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-orange-800 to-red-800 dark:from-slate-100 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent">
            About Hub Afrique
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Hub Afrique is Africa's most dynamic professional ecosystem, guiding users through learning, mentorship, and
            real earning opportunities. Built by Africans, for Africans — we're on a mission to nurture a generation of
            skilled, connected, and confident professionals across the continent.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  To empower African professionals by providing comprehensive learning opportunities, meaningful
                  mentorship connections, and access to real earning potential through our integrated ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  To become the leading professional development platform in Africa, creating a thriving ecosystem where
                  talent meets opportunity and dreams become reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Core Values</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Hub Afrique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Community First</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We believe in the power of community and collaboration to drive success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We continuously innovate to provide cutting-edge solutions for professional growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Integrity</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We maintain the highest standards of honesty and transparency in all our interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Excellence</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We strive for excellence in everything we do, from our platform to our support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Platform */}
      <section className="py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Platform</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Three integrated stages designed to take you from learning to earning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-300">ProLab</CardTitle>
                <CardDescription className="dark:text-slate-400">Learn & Grow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Our comprehensive learning platform offers AI-powered bootcamps, personalized learning paths, and
                  industry-relevant courses.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• AI-powered learning recommendations</li>
                  <li>• Industry-certified courses</li>
                  <li>• Hands-on projects and assessments</li>
                  <li>• Progress tracking and analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-300">iHub</CardTitle>
                <CardDescription className="dark:text-slate-400">Build & Connect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Connect with mentors, collaborate on projects, and build your professional network through our
                  community platform.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Expert mentorship programs</li>
                  <li>• Collaborative project spaces</li>
                  <li>• Networking events and workshops</li>
                  <li>• Peer-to-peer learning groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-orange-700 dark:text-orange-300">ProHub</CardTitle>
                <CardDescription className="dark:text-slate-400">Earn & Thrive</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Access premium opportunities through our AI-powered freelance marketplace with secure payments and
                  smart matching.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• AI-powered job matching</li>
                  <li>• Secure escrow payments</li>
                  <li>• Project management tools</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Making a real difference in the lives of African professionals
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-slate-300">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">2K+</div>
              <div className="text-slate-300">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15K+</div>
              <div className="text-slate-300">Jobs Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the movement that's transforming professional development across Africa.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique Logo"
                  width={32}
                  height={32}
                  className="brightness-110 contrast-125"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Hub Afrique
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering African professionals through innovative learning and networking solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com/hapnethq"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/hapnethq"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/company/hapnet"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://x.com/hapnet" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/prolab" className="hover:text-orange-400 transition-colors">
                    ProLab
                  </Link>
                </li>
                <li>
                  <Link href="/ihub" className="hover:text-orange-400 transition-colors">
                    iHub
                  </Link>
                </li>
                <li>
                  <Link href="/prohub" className="hover:text-orange-400 transition-colors">
                    ProHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-orange-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-orange-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-orange-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/partnership" className="hover:text-orange-400 transition-colors">
                    Partnership
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/help" className="hover:text-orange-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-orange-400 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>&copy; 2024 Hub Afrique. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ for African professionals</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
