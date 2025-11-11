"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowRight,
  Users,
  Lightbulb,
  Eye,
  Heart,
  BookOpen,
  Briefcase,
  Code,
  Award,
  MessageCircle,
  Phone,
  Mail,
  Building,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { submitPartnershipInquiry, type PartnershipFormData } from "./actions"

export default function PartnershipPage() {
  const [formData, setFormData] = useState<PartnershipFormData>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    interestType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleInputChange = (field: keyof PartnershipFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear previous submit result when user starts typing
    if (submitResult) {
      setSubmitResult(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitPartnershipInquiry(formData)
      setSubmitResult(result)

      if (result.success) {
        // Reset form on success
        setFormData({
          fullName: "",
          organization: "",
          email: "",
          phone: "",
          interestType: "",
          message: "",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById("partnership-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Access to Top Talent",
      description: "Connect with skilled graduates and professionals across Africa.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Innovative Collaboration",
      description: "Co-create projects, research, and hackathons.",
    },
    {
      icon: <Eye className="w-8 h-8 text-orange-600" />,
      title: "Brand Visibility",
      description: "Showcase your brand to our growing professional community.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Social Impact",
      description: "Invest in Africa's next generation of leaders and innovators.",
    },
  ]

  const partnershipModels = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Training & Education Partners",
      description: "Bootcamps, corporate training, workshops",
      features: [
        "Custom curriculum development",
        "Instructor certification",
        "Learning analytics",
        "Brand co-marketing",
      ],
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-600" />,
      title: "Hiring & Recruitment Partners",
      description: "Access vetted talent pool via ProHub",
      features: ["Pre-screened candidates", "Skills assessment", "Direct talent pipeline", "Recruitment analytics"],
    },
    {
      icon: <Code className="w-12 h-12 text-purple-600" />,
      title: "Project Collaboration",
      description: "Joint ventures, hackathons, mentorship programs",
      features: ["Innovation challenges", "Mentorship matching", "Project incubation", "Community engagement"],
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "Sponsorship Opportunities",
      description: "Event sponsorship, scholarship programs",
      features: ["Event branding", "Scholarship funds", "Award ceremonies", "Media coverage"],
    },
  ]

  const partnershipProcess = [
    {
      step: "01",
      title: "Reach Out",
      description: "Fill out our inquiry form",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Discovery Call",
      description: "Discuss objectives & scope",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Proposal",
      description: "Customized partnership plan",
      icon: <Building className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Launch",
      description: "Collaborate and make impact",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ]

  const partners = [
    { name: "Partner 1", logo: "/placeholder-partner.png" },
    { name: "Partner 2", logo: "/placeholder-partner.png" },
    { name: "Partner 3", logo: "/placeholder-partner.png" },
    { name: "Partner 4", logo: "/placeholder-partner.png" },
    { name: "Partner 5", logo: "/placeholder-partner.png" },
    { name: "Partner 6", logo: "/placeholder-partner.png" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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

            <div className="hidden md:flex items-center space-x-8">
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

            <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700 mb-4 sm:mb-6 text-xs sm:text-sm">
            🤝 Partnership Opportunities
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 leading-tight">
            Partner with{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
              Hub Afrique
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in empowering Africa's professionals — from learning to earning. Together, we can build the future
            of work across the continent.
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            Start a Partnership
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Join Africa's fastest-growing professional network and make a lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-slate-100 leading-tight">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Partnership Models
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Choose the partnership model that aligns with your goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {partnershipModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                    {model.icon}
                    <div className="text-center sm:text-left">
                      <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-slate-100 leading-tight">
                        {model.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
                        {model.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {model.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2 sm:space-x-3 text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current & Past Partners */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Partners</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Trusted by leading organizations across Africa and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Simple steps to start our collaboration</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {partnershipProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold text-orange-600 dark:text-orange-400">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="partnership-form" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Partnership Inquiry
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Ready to partner with us? Fill out the form below and we'll get back to you within 2-3 business days.
            </p>
          </div>

          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-4 sm:p-6 md:p-8">
              {submitResult && (
                <Alert
                  className={`mb-6 ${submitResult.success ? "border-green-200 bg-green-50 dark:bg-green-900/20" : "border-red-200 bg-red-50 dark:bg-red-900/20"}`}
                >
                  {submitResult.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription
                    className={
                      submitResult.success ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                    }
                  >
                    {submitResult.success ? submitResult.message : submitResult.error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="mt-1 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      Organization Name *
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      className="mt-1 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interestType" className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                    Partnership Interest *
                  </Label>
                  <Select
                    value={formData.interestType}
                    onValueChange={(value) => handleInputChange("interestType", value)}
                  >
                    <SelectTrigger className="mt-1 text-sm sm:text-base">
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training">Training & Education</SelectItem>
                      <SelectItem value="hiring">Hiring & Recruitment</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="collaboration">Project Collaboration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1 text-sm sm:text-base"
                    rows={4}
                    placeholder="Tell us about your partnership goals and how we can work together..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 text-base sm:text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Partnership Request"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />}
                </Button>
              </form>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>partnerships@hubafrique.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Response within 2-3 business days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
