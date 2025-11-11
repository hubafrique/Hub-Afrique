import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Award,
  TrendingUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Star,
  Target,
  Globe,
  Coffee,
} from "lucide-react"
import Link from "next/link"

const openRoles = [
  {
    title: "Senior Frontend Developer",
    location: "Lagos, Nigeria",
    type: "Full-time",
    department: "Engineering",
    description: "Build beautiful, responsive user interfaces for our platform using React and Next.js.",
  },
  {
    title: "Product Marketing Manager",
    location: "Cape Town, South Africa",
    type: "Full-time",
    department: "Marketing",
    description: "Drive product adoption and growth through strategic marketing initiatives.",
  },
  {
    title: "UX/UI Designer",
    location: "Nairobi, Kenya",
    type: "Full-time",
    department: "Design",
    description: "Create intuitive and engaging user experiences for our African professional community.",
  },
  {
    title: "Community Manager",
    location: "Accra, Ghana",
    type: "Full-time",
    department: "Community",
    description: "Build and nurture our growing community of African professionals.",
  },
  {
    title: "Data Scientist",
    location: "Remote",
    type: "Full-time",
    department: "Data",
    description: "Analyze user data and build predictive models to improve our platform's performance.",
  },
]

export default function CareersPage() {
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
              href="/about"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-semibold"
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
            🌍 Join Our Mission
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-orange-800 to-red-800 dark:from-slate-100 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent">
            Shape the Future of African Professional Development
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto">
            We're building the ultimate platform to empower African professionals. Join our diverse team of innovators,
            creators, and problem-solvers working across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-4"
            >
              View Open Roles <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-lg px-8 py-4 bg-transparent"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-20 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Open Roles</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Join our team and help us build the future of professional development in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700">
                      {role.department}
                    </Badge>
                    <Badge variant="outline" className="border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300">
                      {role.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-100">{role.title}</CardTitle>
                  <CardDescription className="flex items-center text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    {role.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{role.description}</p>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section
        id="why-join"
        className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Why Join Hub Afrique?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We're more than just a job - we're a movement transforming professional development across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Impactful Mission</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Work on projects that directly empower millions of African professionals and drive economic growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Pan-African Focus</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Collaborate with talented professionals from across the continent in a truly diverse environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Innovation First</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Work with cutting-edge technologies and be part of building the future of professional platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Inclusive Culture</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Join a supportive community that values diversity, equity, and professional growth for all.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Work-Life Balance</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Flexible work arrangements and a culture that prioritizes well-being and personal development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Growth Opportunities</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Continuous learning, mentorship programs, and clear paths for career advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our mission to empower African professionals and help shape the future of work on the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4">
              View Open Roles <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
              Contact Us
            </Button>
          </div>
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
