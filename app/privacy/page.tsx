import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Hub Afrique",
  description:
    "Learn how Hub Afrique protects your privacy and handles your personal data. Read our comprehensive privacy policy.",
  keywords: ["privacy policy", "data protection", "Hub Afrique", "personal information", "GDPR"],
}

export default function PrivacyPage() {
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
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-100" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-blue-200">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Privacy Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We're clear about what data we collect and how we use it.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your data is protected with industry-standard security measures.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">You have control over your personal information and privacy settings.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
              <p className="mb-4 text-gray-600">
                We collect information you provide directly to us, such as when you create an account, update your
                profile, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Name, email address, and contact information</li>
                <li>Professional information (job title, company, skills, experience)</li>
                <li>Educational background and certifications</li>
                <li>Profile photos and other content you upload</li>
                <li>Payment information for premium services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Usage Information</h3>
              <p className="mb-6 text-gray-600">
                We automatically collect certain information about your use of our platform, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and preferences</li>
                <li>Log data and analytics information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">2. How We Use Your Information</h2>
              <p className="mb-4 text-gray-600">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide, maintain, and improve our services</li>
                <li>Create and manage your account</li>
                <li>Connect you with relevant opportunities, courses, and professionals</li>
                <li>Send you updates, newsletters, and promotional materials</li>
                <li>Process payments and manage subscriptions</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">3. Information Sharing</h2>
              <p className="mb-4 text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  <strong>With your consent:</strong> When you explicitly agree to share information
                </li>
                <li>
                  <strong>Service providers:</strong> With trusted partners who help us operate our platform
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>Public profiles:</strong> Information you choose to make public on your profile
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">4. Data Security</h2>
              <p className="mb-6 text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include encryption,
                secure servers, access controls, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Your Rights and Choices</h2>
              <p className="mb-4 text-gray-600">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  <strong>Access:</strong> Request a copy of your personal information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li>
                  <strong>Privacy settings:</strong> Control who can see your profile information
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">6. Cookies and Tracking</h2>
              <p className="mb-6 text-gray-600">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide
                personalized content. You can control cookie settings through your browser preferences, though some
                features may not function properly if cookies are disabled.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">7. International Data Transfers</h2>
              <p className="mb-6 text-gray-600">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your information in accordance with applicable data
                protection laws.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">8. Children's Privacy</h2>
              <p className="mb-6 text-gray-600">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal
                information from children under 16. If we become aware that we have collected such information, we will
                take steps to delete it promptly.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">9. Changes to This Policy</h2>
              <p className="mb-6 text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any material changes by
                posting the new policy on this page and updating the "Last updated" date. Your continued use of our
                services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">10. Contact Us</h2>
              <p className="mb-4 text-gray-600">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> privacy@hubafrique.com
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
              <h3 className="text-xl font-bold mb-4 text-gray-900">Questions about your privacy?</h3>
              <p className="text-gray-600 mb-6">
                Our privacy team is here to help you understand how we protect your information.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Privacy Team
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
