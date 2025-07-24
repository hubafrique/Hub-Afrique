import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, X, Star, Users, Zap, Crown, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      currency: "",
      period: "",
      description: "Perfect for getting started with your professional journey",
      icon: <Users className="w-8 h-8 text-green-600" />,
      color: "green",
      features: [
        { name: "Access to ProLab courses", included: true },
        { name: "Community discussions", included: true },
        { name: "Basic profile creation", included: true },
        { name: "Job application tracking", included: true },
        { name: "Mobile app access", included: true },
        { name: "Mentorship matching", included: false },
        { name: "Project collaboration", included: false },
        { name: "Certificates", included: false },
        { name: "Priority support", included: false },
        { name: "AI career coaching", included: false },
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "₦5,000",
      currency: "₦",
      period: "/month",
      description: "For professionals ready to accelerate their growth",
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      color: "orange",
      features: [
        { name: "Everything in Starter", included: true },
        { name: "Mentorship matching", included: true },
        { name: "Project collaboration in iHub", included: true },
        { name: "Course certificates", included: true },
        { name: "Priority job applications", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Direct messaging", included: true },
        { name: "AI career coaching", included: false },
        { name: "Profile boost", included: false },
        { name: "Custom learning paths", included: false },
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Elite",
      price: "₦15,000",
      currency: "₦",
      period: "/month",
      description: "Complete access for serious professionals and teams",
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      color: "purple",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "AI career coaching", included: true },
        { name: "Profile boost & visibility", included: true },
        { name: "Custom learning paths", included: true },
        { name: "Premium job matching", included: true },
        { name: "1-on-1 mentor sessions", included: true },
        { name: "Team collaboration tools", included: true },
        { name: "Priority customer support", included: true },
        { name: "Early access to features", included: true },
        { name: "Networking events access", included: true },
      ],
      cta: "Go Elite",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Do I need a card to start?",
      answer:
        "No! Our Starter plan is completely free and doesn't require any payment information. You can upgrade to Pro or Elite anytime.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, mobile money (MTN, Airtel, etc.), and bank transfers across African countries.",
    },
    {
      question: "Is there a student discount?",
      answer:
        "Yes! Students with valid .edu email addresses get 50% off Pro and Elite plans. Contact support to apply your discount.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "Your profile and learning progress remain accessible. You'll be moved to the Starter plan, and premium features will be disabled.",
    },
    {
      question: "Do you offer team/company plans?",
      answer:
        "Yes! We have special pricing for teams of 5+ people. Contact our sales team for custom enterprise solutions.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption and work with trusted payment processors. We never store your full payment details.",
    },
  ]

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
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Careers
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

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700">
            💳 Simple, Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-orange-800 to-red-800 dark:from-slate-100 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Choose the plan that fits your professional journey. Start free and upgrade as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                Start Free Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 bg-transparent"
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-orange-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative ${plan.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${plan.color}-100 to-${plan.color}-200 dark:from-${plan.color}-900/30 dark:to-${plan.color}-800/30 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {plan.price}
                  {plan.period && <span className="text-lg text-slate-500 dark:text-slate-400">{plan.period}</span>}
                </div>
                <CardDescription className="text-slate-600 dark:text-slate-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className={`w-full mb-6 ${plan.popular ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" : "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800"}`}
                >
                  {plan.cta}
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${feature.included ? "text-slate-700 dark:text-slate-300" : "text-slate-400 dark:text-slate-500"}`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Try any paid plan risk-free for 30 days. If you're not completely satisfied, we'll refund your money, no
            questions asked.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-orange-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Need an Enterprise Solution?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Custom pricing for teams of 50+ with advanced features, dedicated support, and enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Ready to Start Your Journey?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of African professionals who are already transforming their careers with Hub Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-4"
              >
                Start Free Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-lg px-8 py-4 bg-transparent"
              >
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
