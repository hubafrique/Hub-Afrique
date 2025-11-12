import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, Users, Mail, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Hub Afrique",
  description:
    "Read the terms and conditions for using Hub Afrique. Understand your rights and responsibilities as a user.",
  keywords: ["terms of service", "terms and conditions", "Hub Afrique", "user agreement", "legal"],
}

export default function TermsPage() {
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
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-blue-100" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            These terms govern your use of Hub Afrique and outline the rights and responsibilities of all users.
          </p>
          <p className="text-sm text-blue-200">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Terms Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>User Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your rights and privileges as a Hub Afrique user.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your obligations and responsibilities when using our platform.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Key terms and conditions you should be aware of.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">1. Acceptance of Terms</h2>
              <p className="mb-6 text-gray-600">
                By accessing or using Hub Afrique ("the Platform"), you agree to be bound by these Terms of Service
                ("Terms"). If you do not agree to these Terms, please do not use our services. These Terms apply to all
                users, including visitors, registered users, and premium subscribers.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">2. Description of Service</h2>
              <p className="mb-4 text-gray-600">
                Hub Afrique is a professional networking platform designed to connect African professionals, students,
                and entrepreneurs. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  <strong>ProHub:</strong> Job search and recruitment services
                </li>
                <li>
                  <strong>ProLab:</strong> Online courses and professional development
                </li>
                <li>
                  <strong>iHub:</strong> Innovation hub for mentorship and idea development
                </li>
                <li>
                  <strong>Networking:</strong> Professional connections and messaging
                </li>
                <li>
                  <strong>Content sharing:</strong> Articles, posts, and professional updates
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">3. User Accounts</h2>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Account Creation</h3>
              <p className="mb-4 text-gray-600">
                To use certain features of our platform, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as needed</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Account Eligibility</h3>
              <p className="mb-6 text-gray-600">
                You must be at least 16 years old to create an account. By creating an account, you represent that you
                meet this age requirement and have the legal capacity to enter into these Terms.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">4. User Conduct</h2>
              <p className="mb-4 text-gray-600">You agree not to use the Platform to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Post false, misleading, or fraudulent information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Share inappropriate, offensive, or illegal content</li>
                <li>Violate intellectual property rights</li>
                <li>Spam or send unsolicited communications</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or collect data</li>
                <li>Impersonate others or create fake profiles</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Content and Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Content</h3>
              <p className="mb-6 text-gray-600">
                You retain ownership of content you post on the Platform. However, by posting content, you grant us a
                non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in
                connection with our services.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Content</h3>
              <p className="mb-6 text-gray-600">
                The Platform and its content, features, and functionality are owned by Hub Afrique and are protected by
                copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our
                content without permission.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">6. Premium Services and Payments</h2>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Subscription Plans</h3>
              <p className="mb-4 text-gray-600">
                We offer premium subscription plans with additional features. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Pay all applicable fees and charges</li>
                <li>Provide accurate billing information</li>
                <li>Accept automatic renewal unless cancelled</li>
                <li>Comply with payment terms and conditions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Refunds and Cancellations</h3>
              <p className="mb-6 text-gray-600">
                You may cancel your subscription at any time. Refunds are provided according to our refund policy. No
                refunds are given for partial months or unused portions of your subscription.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">7. Privacy and Data Protection</h2>
              <p className="mb-6 text-gray-600">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                information. By using our services, you consent to our data practices as described in our Privacy
                Policy.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">8. Termination</h2>
              <p className="mb-4 text-gray-600">
                We may terminate or suspend your account and access to our services at any time, with or without notice,
                for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Technical or security reasons</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">9. Disclaimers and Limitations</h2>
              <p className="mb-4 text-gray-600">
                Our services are provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Uninterrupted or error-free service</li>
                <li>Accuracy or completeness of content</li>
                <li>Success in job searches or business ventures</li>
                <li>Compatibility with all devices or browsers</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">10. Indemnification</h2>
              <p className="mb-6 text-gray-600">
                You agree to indemnify and hold harmless Hub Afrique from any claims, damages, or expenses arising from
                your use of our services, violation of these Terms, or infringement of any rights of others.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">11. Governing Law</h2>
              <p className="mb-6 text-gray-600">
                These Terms are governed by the laws of Nigeria. Any disputes will be resolved in the courts of Lagos
                State, Nigeria. If any provision of these Terms is found to be unenforceable, the remaining provisions
                will continue in full force.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">12. Changes to Terms</h2>
              <p className="mb-6 text-gray-600">
                We may update these Terms from time to time. We will notify you of material changes by posting the
                updated Terms on this page and updating the "Last updated" date. Your continued use of our services
                constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">13. Contact Information</h2>
              <p className="mb-4 text-gray-600">If you have questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> legal@hubafrique.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Address:</strong> 123 Victoria Island, Lagos State, Nigeria
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +234 800 123 4567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Questions about these terms?</h3>
              <p className="text-gray-600 mb-6">
                Our legal team is available to help clarify any questions about our terms of service.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Legal Team
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
