"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Globe,
  Award,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description: "Join our engineering team to build scalable solutions for Africa's professional network.",
    requirements: ["5+ years experience", "React/Node.js", "TypeScript", "Cloud platforms"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    description: "Lead product strategy and development for our learning management platform.",
    requirements: ["3+ years PM experience", "EdTech background", "Data-driven", "Agile methodology"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Cape Town, South Africa",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    description: "Design intuitive user experiences for our professional development platform.",
    requirements: ["4+ years design experience", "Figma/Sketch", "User research", "Mobile-first design"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    description: "Build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: ["AWS/Azure experience", "Docker/Kubernetes", "CI/CD pipelines", "Monitoring tools"],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Accra, Ghana",
    type: "Full-time",
    salary: "$35,000 - $50,000",
    description: "Create compelling content to engage our community of African professionals.",
    requirements: ["3+ years content marketing", "SEO knowledge", "Social media", "Analytics tools"],
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Data Scientist",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Analyze user data to improve our AI-powered career recommendations.",
    requirements: ["PhD/Masters in relevant field", "Python/R", "Machine Learning", "Big Data tools"],
    posted: "4 days ago",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Zap,
    title: "Professional Growth",
    description: "Learning budget and conference attendance support",
  },
  {
    icon: Globe,
    title: "Remote Flexibility",
    description: "Work from anywhere with flexible hours",
  },
  {
    icon: Award,
    title: "Equity Package",
    description: "Share in our success with competitive equity options",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-orange-200 dark:border-orange-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/hub-afrique-logo.png"
                alt="Hub Afrique Logo"
                width={40}
                height={40}
                className="dark:brightness-110 dark:contrast-125"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                Hub Afrique
              </span>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="icon"
                className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-900/20 bg-transparent lg:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Home</span>
              </Button>
            </Link>
            <Link href="/" className="hidden lg:block">
              <Button
                variant="outline"
                className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-900/20 bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
              Join Our Mission
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Help us empower African professionals to achieve their career goals through innovative technology and
            community building.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>50+ Team Members</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>15+ Countries</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Remote-First Culture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl mb-2 leading-tight">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs"
                        >
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center sm:text-right">
                      {job.posted}
                    </span>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">{job.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Requirements:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm sm:text-base">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for empowering African professionals.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
            Send Us Your Resume
          </Button>
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
                <li>
                  <Link href="/features" className="hover:text-orange-400 transition-colors">
                    Features
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
