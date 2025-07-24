import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Star,
  UserCheck,
  Rocket,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
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
              href="/about"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              About
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
            <Link
              href="/auth/signin"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Sign In
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
            🌍 Launch your professional journey
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-orange-800 to-red-800 dark:from-slate-100 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent">
            Your complete professional ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto">
            The ultimate African network connecting professionals at every stage of their career journey across the
            continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-4"
              >
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/prohub">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-lg px-8 py-4 bg-transparent"
              >
                Explore Opportunities
              </Button>
            </Link>
          </div>

          {/* 3-Stage Journey */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-300">ProLab</CardTitle>
                <CardDescription className="dark:text-slate-400">Learn & Grow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Master in-demand skills through AI-powered bootcamps and personalized learning paths.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-300">iHub</CardTitle>
                <CardDescription className="dark:text-slate-400">Build & Connect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Gain real experience through mentorship, collaborative projects, and idea pitching.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-orange-700 dark:text-orange-300">ProHub</CardTitle>
                <CardDescription className="dark:text-slate-400">Earn & Thrive</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Access premium opportunities through our AI-powered freelance marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Your Journey to Success</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Follow our proven path from learning to earning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Learn & Grow</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Master in-demand skills through our comprehensive learning platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Get Experience</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Apply for internships and gain real-world experience with top companies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Start Earning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Take on freelance projects and build your professional reputation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Scale Up</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Grow your network and advance your career with our community support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Powerful Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to accelerate your professional journey in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">AI-Powered Learning</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Personalized learning paths with AI accountability partner and smart recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Expert Mentorship</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Connect with industry leaders and experienced professionals across Africa.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Job Marketplace</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Access premium opportunities with smart matching and secure payment systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Certifications</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Earn recognized certificates and build your professional credibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Secure Platform</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Enterprise-grade security with escrow payments and verified profiles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Analytics & Insights</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Track your progress with detailed analytics and performance insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Join Our Thriving Community</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Connect with like-minded professionals and accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "Hub Afrique transformed my career! I went from a complete beginner to landing my dream internship in
                  just 6 months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Sarah Johnson</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Software Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "The ProHub helped me scale my business efficiently. I found amazing talent and completed projects
                  faster than ever."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Mike Rodriguez</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Startup Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "The community support (iHub) is incredible. I've made lifelong connections and learned from industry
                  experts."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">AL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Anna Lee</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">UX Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-slate-300">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">2K+</div>
              <div className="text-slate-300">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15K+</div>
              <div className="text-slate-300">Jobs Posted</div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of African professionals who are already building their future with Hub Afrique.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4">
              Start Your Journey Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique Logo"
                  className="w-8 h-8 brightness-110 contrast-125"
                />
                <span className="text-xl font-bold">Hub Afrique</span>
              </div>
              <p className="text-slate-400 mb-6">
                Empowering African professionals through learning, mentorship, and opportunities.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/prolab" className="hover:text-white transition-colors">
                    ProLab
                  </Link>
                </li>
                <li>
                  <Link href="/ihub" className="hover:text-white transition-colors">
                    iHub
                  </Link>
                </li>
                <li>
                  <Link href="/prohub" className="hover:text-white transition-colors">
                    ProHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Hub Afrique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
