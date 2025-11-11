import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageCircle, Book, Users, Briefcase, GraduationCap, Phone, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Help Center - Hub Afrique",
  description:
    "Find answers to your questions about Hub Afrique. Get help with your account, courses, networking, and more.",
  keywords: ["help", "support", "FAQ", "Hub Afrique", "assistance", "troubleshooting"],
}

export default function HelpPage() {
  const helpCategories = [
    {
      icon: Users,
      title: "Getting Started",
      description: "Learn the basics of using Hub Afrique",
      articles: 12,
      color: "bg-blue-500",
    },
    {
      icon: Briefcase,
      title: "ProHub - Jobs",
      description: "Find and apply for jobs across Africa",
      articles: 8,
      color: "bg-green-500",
    },
    {
      icon: GraduationCap,
      title: "ProLab - Learning",
      description: "Access courses and certifications",
      articles: 15,
      color: "bg-purple-500",
    },
    {
      icon: MessageCircle,
      title: "iHub - Innovation",
      description: "Connect with mentors and pitch ideas",
      articles: 10,
      color: "bg-orange-500",
    },
    {
      icon: Book,
      title: "Account & Billing",
      description: "Manage your account and subscriptions",
      articles: 6,
      color: "bg-red-500",
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Troubleshoot technical issues",
      articles: 9,
      color: "bg-indigo-500",
    },
  ]

  const popularArticles = [
    "How to create your professional profile",
    "Finding the right job opportunities",
    "Enrolling in courses and tracking progress",
    "Connecting with mentors and industry experts",
    "Upgrading your subscription plan",
    "Setting up notifications and preferences",
  ]

  const faqs = [
    {
      question: "How do I create an account on Hub Afrique?",
      answer:
        'You can create an account by clicking the "Sign Up" button on our homepage. Fill in your details, verify your email, and start building your professional profile.',
    },
    {
      question: "Is Hub Afrique free to use?",
      answer:
        "Hub Afrique offers both free and premium features. Basic networking and job browsing are free, while advanced features like premium courses and enhanced visibility require a subscription.",
    },
    {
      question: "How do I apply for jobs through ProHub?",
      answer:
        'Browse jobs in ProHub, click on positions that interest you, and use the "Apply Now" button. Make sure your profile is complete to increase your chances of success.',
    },
    {
      question: "Can I access courses offline in ProLab?",
      answer:
        "Currently, courses require an internet connection. However, you can download course materials and resources for offline study.",
    },
    {
      question: "How do I connect with mentors in iHub?",
      answer:
        "Visit the iHub section, browse available mentors by industry or expertise, and send a connection request or book a session directly through their profile.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, mobile money (M-Pesa, MTN Mobile Money), and bank transfers across African countries.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HA</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Hub Afrique</span>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Find answers to your questions and get the most out of Hub Afrique
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles..."
              className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900 border-0 rounded-xl shadow-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {category.articles} articles
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                  <div className="flex items-center mt-4 text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">View articles</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Popular Articles</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-900 group-hover:text-blue-600">{article}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Still need help?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HA</span>
            </div>
            <span className="text-xl font-bold">Hub Afrique</span>
          </div>
          <p className="text-gray-400">© 2025 Hub Afrique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
