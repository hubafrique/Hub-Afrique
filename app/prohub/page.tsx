"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Search,
  Eye,
  Heart,
  Send,
  Upload,
  Award,
  Calendar,
  FileText,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ProHubPage() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Tab options for mobile dropdown
  const tabOptions = [
    { value: "browse", label: "Browse Jobs" },
    { value: "applications", label: "My Applications" },
    { value: "saved", label: "Saved Jobs" },
    { value: "profile", label: "Talent Profile" },
  ]

  // Mock data
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Africa",
      location: "Lagos, Nigeria",
      type: "Full-time",
      remote: true,
      salary: "$3,000 - $5,000",
      description:
        "We're looking for an experienced React developer to join our growing team and help build the next generation of African fintech solutions.",
      requirements: [
        "5+ years React experience",
        "TypeScript proficiency",
        "REST API integration",
        "Agile methodology",
      ],
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      postedDate: "2 days ago",
      applicants: 45,
      logo: "/placeholder.svg?height=60&width=60",
      featured: true,
      saved: false,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Design Studio Kenya",
      location: "Nairobi, Kenya",
      type: "Contract",
      remote: false,
      salary: "$2,000 - $3,500",
      description:
        "Join our creative team to design beautiful and intuitive user experiences for mobile and web applications serving African markets.",
      requirements: ["3+ years UI/UX experience", "Figma expertise", "Mobile-first design", "User research skills"],
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      postedDate: "1 day ago",
      applicants: 28,
      logo: "/placeholder.svg?height=60&width=60",
      featured: false,
      saved: true,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "AgriTech Solutions",
      location: "Cape Town, South Africa",
      type: "Full-time",
      remote: true,
      salary: "$4,000 - $6,000",
      description:
        "Help revolutionize African agriculture through data-driven insights and machine learning solutions for smallholder farmers.",
      requirements: [
        "PhD/Masters in Data Science",
        "Python/R proficiency",
        "ML model deployment",
        "Agricultural domain knowledge",
      ],
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      postedDate: "3 days ago",
      applicants: 67,
      logo: "/placeholder.svg?height=60&width=60",
      featured: true,
      saved: false,
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "FinTech Innovations",
      location: "Accra, Ghana",
      type: "Full-time",
      remote: false,
      salary: "$2,500 - $4,000",
      description: "Build cutting-edge mobile banking solutions that will serve millions of users across West Africa.",
      requirements: [
        "React Native experience",
        "Mobile payment integration",
        "Security best practices",
        "App store deployment",
      ],
      skills: ["React Native", "JavaScript", "Mobile Payments", "Security"],
      postedDate: "5 days ago",
      applicants: 34,
      logo: "/placeholder.svg?height=60&width=60",
      featured: false,
      saved: false,
    },
  ]

  const applications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      company: "TechCorp Africa",
      appliedDate: "2024-01-15",
      status: "Interview Scheduled",
      statusColor: "bg-blue-500",
      nextStep: "Technical interview on Jan 20, 2024",
    },
    {
      id: 2,
      jobTitle: "UI/UX Designer",
      company: "Design Studio Kenya",
      appliedDate: "2024-01-10",
      status: "Under Review",
      statusColor: "bg-yellow-500",
      nextStep: "Waiting for portfolio review",
    },
    {
      id: 3,
      jobTitle: "Full-Stack Developer",
      company: "StartupHub Nigeria",
      appliedDate: "2024-01-08",
      status: "Rejected",
      statusColor: "bg-red-500",
      nextStep: "Application not successful",
    },
  ]

  const savedJobs = jobs.filter((job) => job.saved)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" ||
      job.skills.some((skill) => skill.toLowerCase().includes(selectedCategory.toLowerCase()))
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation)
    const matchesType = selectedType === "all" || job.type === selectedType

    return matchesSearch && matchesCategory && matchesLocation && matchesType
  })

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">ProHub Marketplace</h1>
              <p className="opacity-90 text-sm sm:text-base">Discover premium opportunities across Africa</p>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-xl sm:text-2xl font-bold">{jobs.length}</div>
              <div className="text-xs sm:text-sm opacity-90">Active Jobs</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-blue-600">Applications</p>
                  <p className="text-lg sm:text-2xl font-bold text-blue-900">{applications.length}</p>
                </div>
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-green-600">Interviews</p>
                  <p className="text-lg sm:text-2xl font-bold text-green-900">2</p>
                </div>
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-600">Saved Jobs</p>
                  <p className="text-lg sm:text-2xl font-bold text-purple-900">{savedJobs.length}</p>
                </div>
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-orange-600">Profile Views</p>
                  <p className="text-lg sm:text-2xl font-bold text-orange-900">127</p>
                </div>
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Mobile Dropdown Navigation */}
          <div className="md:hidden">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                {tabOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Tabs Navigation */}
          <TabsList className="hidden md:grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Jobs</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            <TabsTrigger value="profile">Talent Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-sm sm:text-base"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="text-xs sm:text-sm">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="text-xs sm:text-sm">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Lagos">Lagos</SelectItem>
                    <SelectItem value="Nairobi">Nairobi</SelectItem>
                    <SelectItem value="Cape Town">Cape Town</SelectItem>
                    <SelectItem value="Accra">Accra</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="text-xs sm:text-sm">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className={`hover:shadow-lg transition-shadow ${job.featured ? "border-orange-300 bg-orange-50/30" : ""}`}
                >
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border border-slate-200 mx-auto sm:mx-0"
                      />

                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-tight">
                                {job.title}
                              </h3>
                              {job.featured && (
                                <Badge className="bg-orange-500 text-white text-xs w-fit mx-auto sm:mx-0">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <p className="text-slate-600 font-medium text-sm sm:text-base">{job.company}</p>
                          </div>
                          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500">
                              <Heart
                                className={`w-4 h-4 sm:w-5 sm:h-5 ${job.saved ? "fill-red-500 text-red-500" : ""}`}
                              />
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-sm sm:text-base w-full sm:w-auto">
                                  Apply Now
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl mx-4">
                                <DialogHeader>
                                  <DialogTitle>Apply for {job.title}</DialogTitle>
                                  <DialogDescription>Submit your application to {job.company}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="cover-letter">Cover Letter</Label>
                                    <Textarea
                                      id="cover-letter"
                                      placeholder="Tell us why you're perfect for this role..."
                                      rows={6}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="resume">Resume</Label>
                                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                      <p className="text-sm text-slate-600">
                                        Click to upload or drag and drop your resume
                                      </p>
                                      <p className="text-xs text-slate-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms" className="text-sm">
                                      I agree to the terms and conditions and privacy policy
                                    </Label>
                                  </div>
                                  <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                                      Save as Draft
                                    </Button>
                                    <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                                      <Send className="w-4 h-4 mr-2" />
                                      Submit Application
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{job.location}</span>
                            {job.remote && (
                              <Badge variant="secondary" className="ml-1 text-xs">
                                Remote
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{job.postedDate}</span>
                          </div>
                        </div>

                        <p className="text-slate-700 mb-4 line-clamp-2 text-xs sm:text-sm leading-relaxed">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 justify-center sm:justify-start">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <span className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
                            {job.applicants} applicants
                          </span>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 sm:flex-none text-xs sm:text-sm bg-transparent"
                            >
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              <span className="hidden sm:inline">View Details</span>
                              <span className="sm:hidden">View</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="space-y-4">
              {applications.map((application) => (
                <Card key={application.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                          {application.jobTitle}
                        </h3>
                        <p className="text-slate-600 mb-2 text-sm sm:text-base">{application.company}</p>
                        <p className="text-xs sm:text-sm text-slate-500 mb-3">
                          Applied on {new Date(application.appliedDate).toLocaleDateString()}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600">{application.nextStep}</p>
                      </div>
                      <div className="text-center sm:text-right">
                        <Badge className={`${application.statusColor} text-white mb-2 text-xs`}>
                          {application.status}
                        </Badge>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full sm:w-auto text-xs sm:text-sm bg-transparent"
                          >
                            View Application
                          </Button>
                          {application.status === "Interview Scheduled" && (
                            <Button
                              size="sm"
                              className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto text-xs sm:text-sm"
                            >
                              Join Interview
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            {savedJobs.length > 0 ? (
              <div className="space-y-4">
                {savedJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                        <img
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border border-slate-200 mx-auto sm:mx-0"
                        />

                        <div className="flex-1 text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                            <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{job.title}</h3>
                              <p className="text-slate-600 font-medium text-sm sm:text-base">{job.company}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                              <Button variant="ghost" size="icon" className="text-red-500">
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500" />
                              </Button>
                              <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">Apply Now</Button>
                            </div>
                          </div>

                          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{job.postedDate}</span>
                            </div>
                          </div>

                          <p className="text-slate-700 mb-4 text-sm sm:text-base">{job.description}</p>

                          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 sm:p-12 text-center">
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">No Saved Jobs</h3>
                  <p className="text-slate-600 mb-4 text-sm sm:text-base">
                    Start saving jobs you're interested in to keep track of opportunities
                  </p>
                  <Button onClick={() => setActiveTab("browse")} className="bg-orange-500 hover:bg-orange-600">
                    Browse Jobs
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Talent Profile</CardTitle>
                    <CardDescription>Showcase your skills and experience to potential employers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto sm:mx-0">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">John Doe</h3>
                        <p className="text-slate-600 text-sm sm:text-base">Full-Stack Developer</p>
                        <p className="text-xs sm:text-sm text-slate-500">Lagos, Nigeria • Available for work</p>
                        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">4.9</span>
                          </div>
                          <span className="text-sm text-slate-600">(23 reviews)</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                        Edit Profile
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">About</h4>
                      <p className="text-slate-600 text-sm sm:text-base">
                        Passionate full-stack developer with 5+ years of experience building scalable web applications.
                        Specialized in React, Node.js, and cloud technologies. Strong advocate for clean code and
                        user-centered design.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "TypeScript", "Python", "AWS", "MongoDB", "PostgreSQL", "Docker"].map(
                          (skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">
                              {skill}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Experience</h4>
                      <div className="space-y-4">
                        <div className="border-l-2 border-orange-200 pl-4">
                          <h5 className="font-medium text-slate-900 text-sm sm:text-base">Senior Developer</h5>
                          <p className="text-slate-600 text-xs sm:text-sm">TechCorp Africa • 2022 - Present</p>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Led development of fintech platform serving 100k+ users across Nigeria
                          </p>
                        </div>
                        <div className="border-l-2 border-orange-200 pl-4">
                          <h5 className="font-medium text-slate-900 text-sm sm:text-base">Full-Stack Developer</h5>
                          <p className="text-slate-600 text-xs sm:text-sm">StartupHub Lagos • 2020 - 2022</p>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Built and maintained multiple web applications using React and Node.js
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Profile Views</span>
                      <span className="font-medium">127</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Job Matches</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Applications</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Response Rate</span>
                      <span className="font-medium">68%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        "John delivered exceptional work on our fintech platform. Highly recommended!"
                      </p>
                      <p className="text-xs text-blue-600">- Sarah Johnson, TechCorp Africa</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800 mb-2">
                        "Outstanding developer with great communication skills and attention to detail."
                      </p>
                      <p className="text-xs text-green-600">- Michael Chen, StartupHub</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">AWS Certified Developer</p>
                        <p className="text-xs text-slate-600">Amazon Web Services</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">React Developer Certification</p>
                        <p className="text-xs text-slate-600">Meta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
