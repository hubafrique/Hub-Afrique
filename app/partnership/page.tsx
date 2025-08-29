"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Lightbulb,
  Eye,
  Heart,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  MessageSquare,
  Calendar,
  FileText,
  Rocket,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import { submitPartnershipInquiry } from "./actions"

export default function PartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    const result = await submitPartnershipInquiry(formData)

    if (result.success) {
      setSubmitMessage({ type: "success", text: result.message || "Partnership inquiry submitted successfully!" })
      // Reset form
      const form = document.getElementById("partnership-form") as HTMLFormElement
      form?.reset()
    } else {
      setSubmitMessage({ type: "error", text: result.error || "Failed to submit inquiry" })
    }

    setIsSubmitting(false)
  }

  const scrollToForm = () => {
    document.getElementById("partnership-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/hub-afrique-logo.png"
                alt="Hub Afrique"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-primary">Hub Afrique</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/partnership" className="text-primary font-medium">
                Partnership
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-yellow-950/20" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=African+Pattern')] opacity-5" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Partner with <span className="text-orange-600">Hub Afrique</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in empowering Africa's professionals — from learning to earning.
          </p>
          <Button size="lg" onClick={scrollToForm} className="bg-orange-600 hover:bg-orange-700">
            Start a Partnership
          </Button>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Unlock opportunities and create meaningful impact across Africa's professional landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access to Top Talent</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect with skilled graduates and professionals across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovative Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">Co-create projects, research, and hackathons.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Brand Visibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Showcase your brand to our growing professional community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Invest in Africa's next generation of leaders and innovators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partnership Models</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the partnership model that aligns with your goals and objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Training & Education Partners</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Collaborate on bootcamps, corporate training programs, and specialized workshops to upskill Africa's
                  workforce.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Custom curriculum development</li>
                  <li>• Corporate training programs</li>
                  <li>• Professional certification courses</li>
                  <li>• Skills assessment and validation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Hiring & Recruitment Partners</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access our vetted talent pool through ProHub and streamline your recruitment process across Africa.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Pre-screened candidate pipeline</li>
                  <li>• Skills-based matching</li>
                  <li>• Remote work facilitation</li>
                  <li>• Talent retention programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Project Collaboration</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Partner on joint ventures, hackathons, and mentorship programs that drive innovation across the
                  continent.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Innovation challenges</li>
                  <li>• Research partnerships</li>
                  <li>• Mentorship programs</li>
                  <li>• Open source contributions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Sponsorship Opportunities</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Support our mission through event sponsorship, scholarship programs, and community initiatives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Event and conference sponsorship</li>
                  <li>• Scholarship and grant programs</li>
                  <li>• Community outreach initiatives</li>
                  <li>• Brand partnership campaigns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current & Past Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Trusted by leading organizations across Africa and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Image
                  src={`/placeholder-partner.png?height=60&width=120&text=Partner+${i}`}
                  alt={`Partner ${i}`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partnership Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Simple steps to start your partnership journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Reach Out</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out our inquiry form with your partnership interests and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Discovery Call</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Schedule a call to discuss objectives, scope, and mutual benefits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Proposal</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive a customized partnership plan tailored to your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Launch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Begin collaboration and start making meaningful impact together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="partnership-form" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Start Your Partnership Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready to collaborate? Fill out the form below and we'll get back to you within 2-3 business days.
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="pt-0">
                <form id="partnership-form" action={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="Enter your organization"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="interest_type">Partnership Interest *</Label>
                    <Select name="interest_type" required>
                      <SelectTrigger className="mt-1">
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

                  <div className="mb-6">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="mt-1"
                      rows={5}
                      placeholder="Tell us about your partnership goals, objectives, and how you'd like to collaborate with Hub Afrique..."
                    />
                  </div>

                  {submitMessage && (
                    <div
                      className={`mb-6 p-4 rounded-md ${
                        submitMessage.type === "success"
                          ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                          : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
                      }`}
                    >
                      {submitMessage.text}
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Partnership Request..." : "Send Partnership Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-300">
                Have questions? Email us directly at{" "}
                <a href="mailto:partnerships@hubafrique.com" className="text-orange-600 hover:underline">
                  partnerships@hubafrique.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Hub Afrique</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Africa's professionals from learning to earning through innovative technology and community.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/hapnethq" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/hapnethq" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/hapnet"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/hapnet" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/prolab" className="text-gray-400 hover:text-white transition-colors">
                    ProLab
                  </Link>
                </li>
                <li>
                  <Link href="/ihub" className="text-gray-400 hover:text-white transition-colors">
                    iHub
                  </Link>
                </li>
                <li>
                  <Link href="/prohub" className="text-gray-400 hover:text-white transition-colors">
                    ProHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/partnership" className="text-gray-400 hover:text-white transition-colors">
                    Partnership
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Hub Afrique. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ for African professionals</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
