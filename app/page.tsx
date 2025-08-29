"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  Award,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Rocket,
  Zap,
  Play,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const stats = [
    { label: "Active Professionals", value: "50,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Courses Available", value: "200+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Job Opportunities", value: "1,500+", icon: <Briefcase className="w-6 h-6" /> },
    { label: "Success Stories", value: "10,000+", icon: <Star className="w-6 h-6" /> },
  ]

  const features = [
    {
      title: "ProLab Learning Hub",
      description: "Master in-demand skills with AI-powered learning paths and personalized mentorship.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      link: "/prolab",
      badge: "Learn",
    },
    {
      title: "iHub Innovation Center",
      description: "Collaborate on real projects with mentors and build your professional portfolio.",
      icon: <Users className="w-8 h-8 text-green-600" />,
      link: "/ihub",
      badge: "Build",
    },
    {
      title: "ProHub Career Center",
      description: "Connect with top employers and discover opportunities across Africa.",
      icon: <Briefcase className="w-8 h-8 text-orange-600" />,
      link: "/prohub",
      badge: "Work",
    },
  ]

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Data Scientist at Paystack",
      location: "Lagos, Nigeria",
      content: "Hub Afrique transformed my career. From learning Python to landing my dream job in 6 months!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Kwame Asante",
      role: "Full-Stack Developer",
      location: "Accra, Ghana",
      content: "The mentorship program connected me with industry experts who guided my journey to success.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Fatima Al-Rashid",
      role: "UX Designer at Flutterwave",
      location: "Cairo, Egypt",
      content: "The collaborative projects in iHub gave me real-world experience that employers value.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const programs = [
    {
      title: "Entrepreneurship",
      description: "Build and scale your startup with expert guidance",
      icon: <Rocket className="w-5 h-5" />,
      href: "/programs/entrepreneurship",
    },
    {
      title: "Freelance Academy",
      description: "Master freelancing skills and build your client base",
      icon: <Users className="w-5 h-5" />,
      href: "/programs/freelance",
    },
    {
      title: "Founder Academy",
      description: "Learn from successful founders and investors",
      icon: <Award className="w-5 h-5" />,
      href: "/programs/founder",
    },
    {
      title: "All Tech Skills",
      description: "AI, Web Development, Data Analytics, and more",
      icon: <Zap className="w-5 h-5" />,
      href: "/programs/tech-skills",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/hub-afrique-logo.png"
                alt="Hub Afrique Logo"
                className="w-10 h-10 dark:brightness-110 dark:contrast-125"
              />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Hub Afrique
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 hidden sm:block">
                  African Professional Network
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20">
                      Programs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        {programs.map((program) => (
                          <NavigationMenuLink key={program.title} asChild>
                            <Link
                              href={program.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                              <div className="flex-shrink-0 p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                                {program.icon}
                              </div>
                              <div>
                                <h3 className="font-medium text-slate-900 dark:text-slate-100">{program.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{program.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

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
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost" className="hover:bg-orange-50 dark:hover:bg-orange-900/20">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      Programs
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {programs.map((program) => (
                      <DropdownMenuItem key={program.title} asChild>
                        <Link href={program.href} className="flex items-center space-x-2">
                          {program.icon}
                          <span>{program.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="/about"
                  className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-orange-600"
                >
                  About
                </Link>
                <Link
                  href="/careers"
                  className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-orange-600"
                >
                  Careers
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-orange-600"
                >
                  Pricing
                </Link>

                <div className="flex flex-col space-y-2 px-4">
                  <Link href="/auth/signin">
                    <Button variant="outline" className="w-full bg-transparent">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
                  🌍 Launch Your Professional Journey
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  The Ultimate{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                    African Network
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Connect professionals at every stage of their career journey across the continent. Learn, build, and
                  grow with Africa's most vibrant professional community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free to get started</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">ProLab Learning</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Master new skills</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">iHub Innovation</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Build with mentors</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">ProHub Careers</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Find opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Your Complete Professional Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From learning new skills to building projects and finding your dream job - we've got you covered at every
              step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {feature.icon}
                    <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-100">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={feature.link}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                      Explore {feature.badge}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Success Stories from Across Africa
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Join thousands of professionals who've transformed their careers with Hub Afrique
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                      <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Launch Your Professional Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 50,000+ African professionals who are building their careers with Hub Afrique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>
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
