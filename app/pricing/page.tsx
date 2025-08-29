"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  X,
  Star,
  Users,
  BookOpen,
  Briefcase,
  MessageCircle,
  Globe,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started with your professional journey",
      price: { monthly: 0, annual: 0 },
      badge: "Most Popular",
      badgeColor: "bg-green-100 text-green-800 border-green-200",
      features: [
        { name: "Access to ProLab courses", included: true },
        { name: "Basic AI learning assistant", included: true },
        { name: "Community forums", included: true },
        { name: "Mobile app access", included: true },
        { name: "Basic progress tracking", included: true },
        { name: "Certificate of completion", included: true },
        { name: "iHub project access", included: false, note: "Requires ProLab completion" },
        { name: "1-on-1 mentorship", included: false },
        { name: "Priority job matching", included: false },
        { name: "Advanced analytics", included: false },
      ],
      cta: "Start Free",
      ctaVariant: "outline" as const,
      popular: true,
    },
    {
      name: "Pro",
      description: "For professionals ready to accelerate their growth",
      price: { monthly: 5, annual: 50 },
      badge: "Best Value",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      features: [
        { name: "Everything in Starter", included: true },
        { name: "Advanced AI learning paths", included: true },
        { name: "iHub project collaboration", included: true, note: "After ProLab completion" },
        { name: "Monthly 1-on-1 mentorship", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced progress analytics", included: true },
        { name: "Resume builder & review", included: true },
        { name: "Job application tracking", included: true },
        { name: "Networking events access", included: false },
        { name: "Custom learning paths", included: false },
      ],
      cta: "Upgrade to Pro",
      ctaVariant: "default" as const,
      popular: false,
    },
    {
      name: "Elite",
      description: "For ambitious professionals and teams seeking maximum impact",
      price: { monthly: 10, annual: 100 },
      badge: "Premium",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Weekly 1-on-1 mentorship", included: true },
        { name: "Custom learning paths", included: true },
        { name: "Priority job matching", included: true },
        { name: "Exclusive networking events", included: true },
        { name: "Direct recruiter connections", included: true },
        { name: "Advanced portfolio builder", included: true },
        { name: "Interview preparation", included: true },
        { name: "Salary negotiation support", included: true },
        { name: "Lifetime access guarantee", included: true },
      ],
      cta: "Go Elite",
      ctaVariant: "default" as const,
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How does the certificate-based progression work?",
      answer:
        "You start with ProLab to learn essential skills. Once you complete a course and earn your certificate, you automatically gain access to iHub where you can collaborate on real projects with mentors and build your portfolio.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      question: "What happens if I don't complete ProLab?",
      answer:
        "No worries! You can take your time with ProLab courses. There's no time limit, and you'll retain access to all learning materials. iHub access is unlocked once you earn your first certificate.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes! We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment in full.",
    },
    {
      question: "Do you offer student discounts?",
      answer:
        "Yes! Students with valid .edu email addresses receive 50% off Pro and Elite plans. Contact our support team to apply your discount.",
    },
    {
      question: "Can I use Hub Afrique for my team?",
      answer:
        "We offer team plans with additional collaboration features, admin dashboards, and bulk billing. Contact sales for custom team pricing.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Okafor",
      role: "Software Engineer at Paystack",
      content:
        "The Pro plan's mentorship program was game-changing. I went from learning to landing my dream job in 4 months!",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Ahmed Hassan",
      role: "Data Scientist at Flutterwave",
      content: "Elite plan's direct recruiter connections helped me skip the application queue. Worth every penny!",
      avatar: "/placeholder.svg?height=48&width=48",
    },
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
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
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
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700 mb-6">
            💰 Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Invest in Your{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
              Professional Future
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Choose the plan that fits your career goals. Start free, upgrade when you're ready to accelerate your
            growth.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span
              className={`text-sm ${!isAnnual ? "text-slate-900 dark:text-slate-100 font-medium" : "text-slate-500"}`}
            >
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span
              className={`text-sm ${isAnnual ? "text-slate-900 dark:text-slate-100 font-medium" : "text-slate-500"}`}
            >
              Annual
            </span>
            <Badge className="bg-green-100 text-green-800 border-green-200 ml-2">Save 17%</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-orange-200 dark:border-orange-700 shadow-lg scale-105"
                    : "border-slate-200 dark:border-slate-700"
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={plan.badgeColor}>{plan.badge}</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 mt-2">
                    {plan.description}
                  </CardDescription>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-slate-500 dark:text-slate-400 ml-2">/{isAnnual ? "year" : "month"}</span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                        Save ${plan.price.monthly * 12 - plan.price.annual} per year
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <span
                            className={`text-sm ${
                              feature.included
                                ? "text-slate-700 dark:text-slate-300"
                                : "text-slate-400 dark:text-slate-500"
                            }`}
                          >
                            {feature.name}
                          </span>
                          {feature.note && (
                            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">{feature.note}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.ctaVariant === "outline"
                        ? "border-orange-200 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                        : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                    }`}
                    variant={plan.ctaVariant}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Why Choose Hub Afrique?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              More than just learning - a complete career transformation platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">AI-Powered Learning</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Personalized learning paths that adapt to your pace and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Expert Mentorship</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Connect with industry leaders and experienced professionals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Career Opportunities</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Direct access to jobs from top African and global companies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Pan-African Network</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Connect with professionals across all 54 African countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See how our members are transforming their careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Everything you need to know about our pricing and platform
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of African professionals who are building successful careers with Hub Afrique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Sales
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
