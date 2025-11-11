"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
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
  Menu,
  X,
  ChevronDown,
  Rocket,
  Zap,
  Award,
  Star,
  CheckCircle,
  MapPin,
  Github,
  Code,
  Layers,
  Cpu,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const programs = [
    {
      title: "Entrepreneurship",
      description: "Build and scale your startup with expert guidance",
      icon: <Rocket className="w-4 h-4" />,
      href: "/programs/entrepreneurship",
    },
    {
      title: "Freelance Academy",
      description: "Master freelancing skills and build your client base",
      icon: <Users className="w-4 h-4" />,
      href: "/programs/freelance",
    },
    {
      title: "Founder Academy",
      description: "Learn from successful founders and investors",
      icon: <Award className="w-4 h-4" />,
      href: "/programs/founder",
    },
    {
      title: "All Tech Skills",
      description: "AI, Web Development, Data Analytics, and more",
      icon: <Zap className="w-4 h-4" />,
      href: "/programs/tech-skills",
    },
  ]

  const teamMembers = [
    {
      name: "Mmokomabasi Uko",
      role: "Founder & CEO",
      location: "Akwa Ibom, Nigeria",
      avatar: "/placeholder-user.jpg",
      bio: "Visionary leader driving Hub Afrique's mission to empower African professionals",
      social: {
        linkedin: "https://linkedin.com/in/mmokomabasi-uko",
        twitter: "https://twitter.com/mmokomabasi",
        github: "",
      },
    },
    {
      name: "Michelle Muthoni Ndiangu",
      role: "Chief Technology Officer",
      location: "Nairobi, Kenya",
      avatar: "/placeholder-user.jpg",
      bio: "Tech innovator building scalable solutions for African professionals",
      social: {
        linkedin: "https://linkedin.com/in/michelle-ndiangu",
        twitter: "https://twitter.com/michellendiangu",
        github: "https://github.com/michellendiangu",
      },
    },
    {
      name: "Mesode Kelly Akwe",
      role: "Head of Community",
      location: "South West Region, Cameroon",
      avatar: "/placeholder-user.jpg",
      bio: "Community builder connecting African professionals across the continent",
      social: {
        linkedin: "https://linkedin.com/in/mesode-kelly-akwe",
        twitter: "https://twitter.com/mesodeakwe",
        instagram: "https://instagram.com/mesodeakwe",
      },
    },
    {
      name: "Alexandria Okoh",
      role: "Head of Partnerships",
      location: "Abuja, Nigeria",
      avatar: "/placeholder-user.jpg",
      bio: "Strategic partnerships expert driving ecosystem growth and collaborations",
      social: {
        linkedin: "https://linkedin.com/in/alexandria-okoh",
        twitter: "https://twitter.com/alexandriaokoh",
        github: "",
      },
    },
    {
      name: "Dr. Emmanuel Onuoha",
      role: "Head of Learning",
      location: "Minneapolis, Minnesota, USA",
      avatar: "/placeholder-user.jpg",
      bio: "Educational innovator designing transformative learning experiences for African professionals",
      social: {
        linkedin: "https://linkedin.com/in/emmanuel-onuoha",
        twitter: "https://twitter.com/emmanuelonuoha",
        github: "",
      },
    },
    {
      name: "Joy Obite",
      role: "Recruitment Manager",
      location: "Abuja, Nigeria",
      avatar: "/placeholder-user.jpg",
      bio: "Talent specialist connecting top professionals with career opportunities",
      social: {
        linkedin: "https://linkedin.com/in/joy-obite",
        twitter: "https://twitter.com/joyobite",
        instagram: "",
      },
    },
  ]

  const achievements = [
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      number: "100K+",
      label: "Active Professionals",
      description: "Across 54 African countries",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      number: "5K+",
      label: "Expert Mentors",
      description: "Industry leaders and entrepreneurs",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
      number: "$50M+",
      label: "Earnings Generated",
      description: "Through our platform ecosystem",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      number: "54",
      label: "Countries Served",
      description: "Pan-African reach and impact",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Hub Afrique launched with vision to transform African professional development",
    },
    {
      year: "2021",
      title: "ProLab Launch",
      description: "Introduced AI-powered learning platform with first 1,000 students",
    },
    {
      year: "2022",
      title: "iHub Community",
      description: "Built mentorship network connecting 10,000+ professionals",
    },
    {
      year: "2023",
      title: "ProHub Marketplace",
      description: "Launched freelance platform generating $10M+ in earnings",
    },
    {
      year: "2024",
      title: "Continental Expansion",
      description: "Reached 100,000+ users across all 54 African countries",
    },
  ]

  return (
    <>
      <Head>
        <title>
          About Hub Afrique - Leading African Professional Development Platform | Career Growth, Skills Training,
          Mentorship
        </title>
        <meta
          name="description"
          content="Discover Hub Afrique's mission to empower African professionals through innovative learning, mentorship, and earning opportunities. Join 100K+ professionals across 54 countries building successful careers."
        />
        <meta
          name="keywords"
          content="African professional development, career growth Africa, skills training Africa, mentorship platform, freelance opportunities Africa, entrepreneurship training, tech skills Africa, professional networking Africa, online learning Africa, career advancement"
        />
        <meta property="og:title" content="About Hub Afrique - Empowering African Professionals" />
        <meta
          property="og:description"
          content="Leading platform for African professional development with 100K+ users across 54 countries. Learn, connect, and earn with expert mentorship and AI-powered tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hubafrique.com/about" />
        <meta property="og:image" content="/images/hub-afrique-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Hub Afrique - Leading African Professional Platform" />
        <meta
          name="twitter:description"
          content="Empowering 100K+ African professionals with learning, mentorship, and earning opportunities across 54 countries."
        />
        <link rel="canonical" href="https://hubafrique.com/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique - African Professional Network Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 dark:brightness-110 dark:contrast-125"
                />
                <div>
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
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
                  className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors font-medium"
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
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                    className="block px-4 py-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 font-medium"
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
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden">
          {/* Background Graphics */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 dark:from-orange-500/3 dark:to-blue-500/3"></div>

            {/* Floating Tech Icons */}
            <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
              <Code className="w-8 h-8 text-orange-500 animate-pulse" />
            </div>
            <div className="absolute top-32 right-20 opacity-20 dark:opacity-10">
              <Layers className="w-10 h-10 text-blue-500 animate-bounce" style={{ animationDelay: "1s" }} />
            </div>
            <div className="absolute top-60 left-1/4 opacity-20 dark:opacity-10">
              <Cpu className="w-6 h-6 text-purple-500 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>
            <div className="absolute bottom-40 right-10 opacity-20 dark:opacity-10">
              <Database className="w-8 h-8 text-green-500 animate-bounce" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="absolute bottom-60 left-16 opacity-20 dark:opacity-10">
              <Cloud className="w-12 h-12 text-indigo-500 animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>
            <div className="absolute top-40 right-1/3 opacity-20 dark:opacity-10">
              <Smartphone className="w-7 h-7 text-red-500 animate-bounce" style={{ animationDelay: "3s" }} />
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-16 right-1/4 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 right-8 w-16 h-16 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-lg"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-3">
              <div className="grid grid-cols-12 gap-4 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-slate-300 dark:border-slate-600"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="mb-6">
                  <span className="inline-block text-sm sm:text-base font-medium text-orange-600 dark:text-orange-400 mb-2">
                    🌍 About Hub Afrique
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-orange-800 to-red-800 dark:from-slate-100 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent leading-tight">
                    Empowering African Professionals
                  </h1>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Hub Afrique is Africa's most dynamic professional ecosystem, empowering over{" "}
                  <strong className="text-orange-600 dark:text-orange-400">100,000+ professionals</strong> across{" "}
                  <strong className="text-blue-600 dark:text-blue-400">54 countries</strong> through innovative
                  learning, meaningful mentorship, and real earning opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/auth/signup">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg"
                    >
                      Join Our Community <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </Link>
                  <Link href="/partnership">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/20 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent"
                    >
                      Partner With Us
                    </Button>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">100K+</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">54</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">5K+</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Mentors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">$50M+</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Earnings</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden">
                <div className="relative w-full h-96 lg:h-[500px]">
                  {/* Main Illustration Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 rounded-3xl overflow-hidden">
                    {/* Network Connections */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>

                      {/* Connection Lines */}
                      <path
                        d="M50 100 Q200 150 350 100"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                      />
                      <path
                        d="M80 200 Q200 250 320 200"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                      <path
                        d="M60 300 Q200 350 340 300"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "2s" }}
                      />
                      <path
                        d="M90 400 Q200 450 310 400"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </svg>

                    {/* Floating Elements */}
                    <div className="absolute top-16 left-16 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className="absolute top-32 right-20 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div
                      className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{ animationDelay: "2s" }}
                    >
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="absolute bottom-16 right-16 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <Target className="w-5 h-5 text-white" />
                    </div>

                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <Globe className="w-10 h-10 text-white" />
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="w-40 h-40 border-2 border-orange-300/30 rounded-full animate-spin"
                        style={{ animationDuration: "20s" }}
                      >
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-500 rounded-full"></div>
                      </div>
                      <div
                        className="absolute top-0 left-0 w-60 h-60 border-2 border-blue-300/30 rounded-full animate-spin"
                        style={{ animationDuration: "30s", animationDirection: "reverse" }}
                      >
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                Our Impact Across Africa
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                Measurable results that demonstrate our commitment to African professional development
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800"
                >
                  <CardContent className="pt-6 pb-4 sm:pt-8 sm:pb-6">
                    <div className="flex justify-center mb-3 sm:mb-4">{achievement.icon}</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {achievement.number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
                      {achievement.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
              <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-slate-100 mb-2 sm:mb-4">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    To empower African professionals by providing comprehensive learning opportunities, meaningful
                    mentorship connections, and access to real earning potential through our integrated ecosystem.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
                        Skills development and certification
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
                        Expert mentorship and guidance
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
                        Real earning opportunities
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-slate-100 mb-2 sm:mb-4">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    To become the leading professional development platform in Africa, creating a thriving ecosystem
                    where talent meets opportunity and dreams become reality.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
                        Continental leadership in professional development
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
                        Sustainable career growth for all Africans
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
                        Global recognition of African talent
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 sm:py-16 md:py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                The principles that guide everything we do at Hub Afrique and shape our commitment to African
                professionals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                  Community First
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  We believe in the power of community and collaboration to drive collective success across Africa.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                  Innovation
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  We continuously innovate to provide cutting-edge solutions for professional growth and development.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                  Integrity
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  We maintain the highest standards of honesty and transparency in all our interactions and services.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                  Excellence
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  We strive for excellence in everything we do, from our platform features to our customer support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                Key milestones in our mission to transform African professional development
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start mb-8 sm:mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 sm:w-20 md:w-24 text-right mr-4 sm:mr-6 md:mr-8">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full mt-1 sm:mt-2 mr-4 sm:mr-6 md:mr-8 shadow-lg"></div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Platform */}
        <section className="py-12 sm:py-16 md:py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                Our Integrated Platform
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                Three powerful stages designed to take you from learning to earning in the African professional
                ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="border-blue-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-blue-700 dark:text-blue-300 mb-2">ProLab</CardTitle>
                  <CardDescription className="text-base sm:text-lg dark:text-slate-400">Learn & Grow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                    Our comprehensive learning platform offers AI-powered bootcamps, personalized learning paths, and
                    industry-relevant courses designed for African professionals.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>AI-powered learning recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Industry-certified courses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Hands-on projects and assessments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Progress tracking and analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-green-700 dark:text-green-300 mb-2">iHub</CardTitle>
                  <CardDescription className="text-base sm:text-lg dark:text-slate-400">
                    Build & Connect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                    Connect with mentors, collaborate on projects, and build your professional network through our
                    vibrant community platform.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Expert mentorship programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Collaborative project spaces</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Networking events and workshops</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Peer-to-peer learning groups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-orange-700 dark:text-orange-300 mb-2">
                    ProHub
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg dark:text-slate-400">Earn & Thrive</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                    Access premium opportunities through our AI-powered freelance marketplace with secure payments and
                    intelligent matching.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>AI-powered job matching</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Secure escrow payments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Project management tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>Performance analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
                Meet Our Leadership Team
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                Passionate African leaders driving innovation and empowering professionals across the continent
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800"
                >
                  <CardContent className="pt-6 sm:pt-8 text-center">
                    <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ring-2 sm:ring-4 ring-orange-100 dark:ring-orange-900/30">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={`${member.name} - ${member.role}`} />
                      <AvatarFallback className="text-sm sm:text-lg font-semibold bg-gradient-to-br from-orange-500 to-red-600 text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-slate-900 dark:text-slate-100">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-orange-600 dark:text-orange-400 font-medium mb-2">
                      {member.role}
                    </p>

                    <div className="flex items-center justify-center space-x-1 mb-3 sm:mb-4 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{member.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex justify-center space-x-3 sm:space-x-4">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link
                          href={member.social.twitter}
                          className="text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                      {member.social.github && (
                        <Link
                          href={member.social.github}
                          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                      {member.social.instagram && (
                        <Link
                          href={member.social.instagram}
                          className="text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join over 100,000+ African professionals who are already building successful careers through our
              integrated platform. Your journey to professional excellence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg"
                >
                  Start Your Journey <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/partnership">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent"
                >
                  Explore Partnerships
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Company Info */}
              <div className="sm:col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Image
                    src="/images/hub-afrique-logo.png"
                    alt="Hub Afrique - African Professional Network Logo"
                    width={28}
                    height={28}
                    className="sm:w-8 sm:h-8 brightness-110 contrast-125"
                  />
                  <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Hub Afrique
                  </span>
                </div>
                <p className="text-slate-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Empowering African professionals through innovative learning, meaningful mentorship, and real earning
                  opportunities.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <Link
                    href="https://facebook.com/hapnethq"
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    href="https://instagram.com/hapnethq"
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/hapnet"
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    href="https://x.com/hapnet"
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>

              {/* Platform */}
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Platform</h3>
                <ul className="space-y-1 sm:space-y-2 text-slate-400 text-sm">
                  <li>
                    <Link href="/prolab" className="hover:text-orange-400 transition-colors">
                      ProLab - Learning
                    </Link>
                  </li>
                  <li>
                    <Link href="/ihub" className="hover:text-orange-400 transition-colors">
                      iHub - Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/prohub" className="hover:text-orange-400 transition-colors">
                      ProHub - Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link href="/messages" className="hover:text-orange-400 transition-colors">
                      Messages
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
                <ul className="space-y-1 sm:space-y-2 text-slate-400 text-sm">
                  <li>
                    <Link href="/about" className="hover:text-orange-400 transition-colors">
                      About Us
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
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
                <ul className="space-y-1 sm:space-y-2 text-slate-400 text-sm">
                  <li>
                    <Link href="/help" className="hover:text-orange-400 transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-orange-400 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-orange-400 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="bg-slate-700 mb-6 sm:mb-8" />

            <div className="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
              <p>&copy; 2024 Hub Afrique. All rights reserved.</p>
              <p className="mt-2 sm:mt-0">Made with ❤️ for African professionals worldwide</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
