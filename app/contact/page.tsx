import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Hub Afrique",
  description:
    "Get in touch with Hub Afrique. Contact our support team for help with your account, partnerships, or general inquiries.",
  keywords: ["contact", "support", "help", "Hub Afrique", "customer service"],
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "support@hubafrique.com",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance",
      contact: "+234 800 123 4567",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 9 AM - 6 PM WAT",
      action: "Start Chat",
    },
  ]

  const offices = [
    {
      city: "Lagos, Nigeria",
      address: "123 Victoria Island, Lagos State, Nigeria",
      phone: "+234 800 123 4567",
      email: "lagos@hubafrique.com",
    },
    {
      city: "Nairobi, Kenya",
      address: "456 Westlands Road, Nairobi, Kenya",
      phone: "+254 700 123 456",
      email: "nairobi@hubafrique.com",
    },
    {
      city: "Cape Town, South Africa",
      address: "789 Long Street, Cape Town, South Africa",
      phone: "+27 21 123 4567",
      email: "capetown@hubafrique.com",
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
            <Link href="/help">
              <Button variant="outline" size="sm">
                Help Center
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We're here to help you succeed. Reach out to us for support, partnerships, or any questions about Hub
            Afrique.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
            How would you like to reach us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+234 800 123 4567" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>

                {/* Business Hours */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM WAT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM WAT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Offices */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Our Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {offices.map((office, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p>{office.address}</p>
                            <p>Phone: {office.phone}</p>
                            <p>Email: {office.email}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Looking for quick answers?</h3>
              <p className="text-gray-600 mb-6">
                Check out our Help Center for frequently asked questions and detailed guides.
              </p>
              <Link href="/help">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  Visit Help Center
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
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
