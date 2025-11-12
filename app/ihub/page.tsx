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
import {
  Users,
  Lightbulb,
  Briefcase,
  Star,
  MapPin,
  Clock,
  MessageCircle,
  Plus,
  Search,
  Award,
  TrendingUp,
  Send,
  Eye,
  Heart,
  Share,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function IHubPage() {
  const [activeTab, setActiveTab] = useState("projects")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkill, setSelectedSkill] = useState("all")

  // Tab options for mobile dropdown
  const tabOptions = [
    { value: "projects", label: "Projects" },
    { value: "mentors", label: "Mentors" },
    { value: "ideas", label: "Idea Pitch" },
    { value: "my-activity", label: "My Activity" },
  ]

  // Mock data
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Africa",
      location: "Lagos, Nigeria",
      rating: 4.9,
      reviews: 127,
      expertise: ["React", "Node.js", "AWS", "System Design"],
      hourlyRate: "$50",
      avatar: "/placeholder.svg?height=60&width=60",
      bio: "10+ years building scalable web applications. Passionate about mentoring the next generation of African developers.",
      availability: "Available",
    },
    {
      id: 2,
      name: "Dr. Amina Hassan",
      title: "Data Science Lead",
      company: "AI Solutions Kenya",
      location: "Nairobi, Kenya",
      rating: 4.8,
      reviews: 89,
      expertise: ["Python", "Machine Learning", "Data Analysis", "AI"],
      hourlyRate: "$60",
      avatar: "/placeholder.svg?height=60&width=60",
      bio: "PhD in Computer Science with focus on AI applications in healthcare and agriculture.",
      availability: "Busy",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Mobile App Architect",
      company: "Innovation Hub Ghana",
      location: "Accra, Ghana",
      rating: 4.7,
      reviews: 156,
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      hourlyRate: "$45",
      avatar: "/placeholder.svg?height=60&width=60",
      bio: "Built 50+ mobile apps with millions of downloads. Expert in cross-platform development.",
      availability: "Available",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "EcoTrack - Carbon Footprint App",
      description:
        "Mobile app to help individuals and businesses track their carbon footprint and get personalized recommendations for reducing environmental impact.",
      category: "Environmental Tech",
      skills: ["React Native", "Node.js", "MongoDB", "Data Visualization"],
      teamSize: "3/5",
      duration: "3 months",
      difficulty: "Intermediate",
      mentor: "Sarah Johnson",
      applicants: 12,
      status: "Recruiting",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "AgriConnect - Farmer Marketplace",
      description:
        "Platform connecting smallholder farmers directly with buyers, eliminating middlemen and ensuring fair prices for agricultural products.",
      category: "AgriTech",
      skills: ["Vue.js", "Python", "PostgreSQL", "Payment Integration"],
      teamSize: "4/6",
      duration: "4 months",
      difficulty: "Advanced",
      mentor: "Dr. Amina Hassan",
      applicants: 18,
      status: "In Progress",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "EduStream - Online Learning Platform",
      description:
        "Affordable online education platform designed for African students with offline capabilities and local language support.",
      category: "EdTech",
      skills: ["React", "Django", "WebRTC", "PWA"],
      teamSize: "2/4",
      duration: "5 months",
      difficulty: "Advanced",
      mentor: "Michael Chen",
      applicants: 25,
      status: "Recruiting",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ideas = [
    {
      id: 1,
      title: "HealthBot AI",
      description:
        "AI-powered chatbot providing basic health advice and connecting users with local healthcare providers in rural areas.",
      author: "Fatima Al-Rashid",
      category: "HealthTech",
      votes: 45,
      comments: 12,
      timeAgo: "2 hours ago",
      tags: ["AI", "Healthcare", "Chatbot", "Rural Development"],
    },
    {
      id: 2,
      title: "Solar Panel Optimizer",
      description:
        "IoT solution to optimize solar panel efficiency in African climates with predictive maintenance and performance analytics.",
      author: "James Okoye",
      category: "CleanTech",
      votes: 38,
      comments: 8,
      timeAgo: "5 hours ago",
      tags: ["IoT", "Solar Energy", "Analytics", "Sustainability"],
    },
    {
      id: 3,
      title: "Local Language Translator",
      description:
        "Real-time translation app supporting major African languages to break down communication barriers in business and education.",
      author: "Aisha Kone",
      category: "Language Tech",
      votes: 52,
      comments: 15,
      timeAgo: "1 day ago",
      tags: ["NLP", "Translation", "Mobile App", "Cultural Preservation"],
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">iHub Innovation Center</h1>
              <p className="opacity-90 text-sm sm:text-base">
                Build experience through mentorship and collaborative projects
              </p>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-xl sm:text-2xl font-bold">24</div>
              <div className="text-xs sm:text-sm opacity-90">Active Projects</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-green-600">Mentors Available</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">156</p>
                </div>
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-blue-600">Active Projects</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">24</p>
                </div>
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-600">Ideas Pitched</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900">89</p>
                </div>
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-orange-600">Success Rate</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900">87%</p>
                </div>
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500" />
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
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="ideas">Idea Pitch</TabsTrigger>
            <TabsTrigger value="my-activity">My Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-sm sm:text-base"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="nodejs">Node.js</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                  </SelectContent>
                </Select>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Propose Project</span>
                      <span className="sm:hidden">New Project</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle>Propose a New Project</DialogTitle>
                      <DialogDescription>
                        Share your project idea with the community and find collaborators
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-title">Project Title</Label>
                        <Input id="project-title" placeholder="Enter project title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-description">Description</Label>
                        <Textarea
                          id="project-description"
                          placeholder="Describe your project idea, goals, and impact"
                          rows={4}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fintech">FinTech</SelectItem>
                              <SelectItem value="healthtech">HealthTech</SelectItem>
                              <SelectItem value="edtech">EdTech</SelectItem>
                              <SelectItem value="agritech">AgriTech</SelectItem>
                              <SelectItem value="cleantech">CleanTech</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="duration">Duration</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Project duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 months</SelectItem>
                              <SelectItem value="3-4">3-4 months</SelectItem>
                              <SelectItem value="5-6">5-6 months</SelectItem>
                              <SelectItem value="6+">6+ months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="skills">Required Skills</Label>
                        <Input id="skills" placeholder="e.g., React, Node.js, Python (comma separated)" />
                      </div>
                      <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                          Save as Draft
                        </Button>
                        <Button className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">Submit Project</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-2 right-2 text-xs ${
                        project.status === "Recruiting" ? "bg-green-500" : "bg-blue-500"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardHeader className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-3 text-xs sm:text-sm mt-1 sm:mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{project.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
                        <span className="text-slate-600">Mentor: {project.mentor}</span>
                        <Badge variant="outline" className="text-xs w-fit">
                          {project.difficulty}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.skills.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <span className="text-xs sm:text-sm text-slate-600">{project.applicants} applicants</span>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 sm:flex-none text-xs sm:text-sm bg-transparent"
                          >
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-500 hover:bg-green-600 flex-1 sm:flex-none text-xs sm:text-sm"
                          >
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="Search mentors by name, skill, or company..." className="pl-10" />
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                      <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                      <AvatarFallback>
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-base sm:text-lg">{mentor.name}</CardTitle>
                    <CardDescription className="text-sm">{mentor.title}</CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm text-slate-600">
                      <span className="truncate">{mentor.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center justify-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{mentor.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{mentor.rating}</span>
                        </div>
                        <span className="text-slate-600 text-sm text-center">({mentor.reviews} reviews)</span>
                        <Badge
                          variant={mentor.availability === "Available" ? "default" : "secondary"}
                          className={`text-xs ${mentor.availability === "Available" ? "bg-green-500" : ""}`}
                        >
                          {mentor.availability}
                        </Badge>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 text-center line-clamp-3">{mentor.bio}</p>

                      <div className="flex flex-wrap gap-1 justify-center">
                        {mentor.expertise.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-center">
                        <span className="text-base sm:text-lg font-bold text-green-600">{mentor.hourlyRate}/hour</span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" className="flex-1 bg-transparent text-xs sm:text-sm px-2 sm:px-4">
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">Message</span>
                          <span className="sm:hidden">Chat</span>
                        </Button>
                        <Button className="flex-1 bg-green-500 hover:bg-green-600 text-xs sm:text-sm px-2 sm:px-4">
                          <span className="hidden sm:inline">Book Session</span>
                          <span className="sm:hidden">Book</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ideas" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Idea Pitch Board</h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Share your innovative ideas and get community feedback
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Pitch Idea</span>
                    <span className="sm:hidden">New Idea</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl mx-4">
                  <DialogHeader>
                    <DialogTitle>Pitch Your Idea</DialogTitle>
                    <DialogDescription>Share your innovative idea with the community</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="idea-title">Idea Title</Label>
                      <Input id="idea-title" placeholder="Enter your idea title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idea-description">Description</Label>
                      <Textarea
                        id="idea-description"
                        placeholder="Describe your idea, the problem it solves, and its potential impact"
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idea-category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="agritech">AgriTech</SelectItem>
                          <SelectItem value="cleantech">CleanTech</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idea-tags">Tags</Label>
                      <Input id="idea-tags" placeholder="e.g., AI, Mobile, Blockchain (comma separated)" />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                      <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                        Save as Draft
                      </Button>
                      <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
                        <Send className="w-4 h-4 mr-2" />
                        Pitch Idea
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Ideas List */}
            <div className="space-y-4">
              {ideas.map((idea) => (
                <Card key={idea.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="flex flex-row sm:flex-col items-center sm:items-center space-x-2 sm:space-x-0 sm:space-y-2">
                        <Button variant="ghost" size="sm" className="p-1 h-auto">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-red-500" />
                        </Button>
                        <span className="text-sm font-medium text-slate-600">{idea.votes}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900">{idea.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-600">
                              by {idea.author} • {idea.timeAgo}
                            </p>
                          </div>
                          <Badge variant="secondary" className="w-fit">
                            {idea.category}
                          </Badge>
                        </div>

                        <p className="text-slate-700 mb-4 text-sm sm:text-base">{idea.description}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {idea.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center space-x-2 sm:space-x-4">
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              {idea.comments} Comments
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <Share className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                          <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
                            Collaborate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-activity" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Projects</CardTitle>
                    <CardDescription>Projects you're currently involved in</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 border border-slate-200 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                        <Briefcase className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-medium text-slate-900">EcoTrack - Carbon Footprint App</h3>
                        <p className="text-sm text-slate-600">Frontend Developer • 2 months remaining</p>
                        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2">
                          <div className="w-32 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                          <span className="text-sm text-slate-600">60%</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Sessions</CardTitle>
                    <CardDescription>Your upcoming and past mentorship sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 border border-slate-200 rounded-lg">
                      <Avatar className="w-12 h-12 mx-auto sm:mx-0">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-medium text-slate-900">Sarah Johnson</h3>
                        <p className="text-sm text-slate-600">React Development Session</p>
                        <p className="text-sm text-slate-500">Tomorrow, 2:00 PM - 3:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                        Join Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Projects Joined</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Mentorship Hours</span>
                      <span className="font-medium">24h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Ideas Pitched</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Community Votes</span>
                      <span className="font-medium">156</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Team Player</p>
                        <p className="text-xs text-slate-600">Completed first project</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Innovator</p>
                        <p className="text-xs text-slate-600">Pitched 2 ideas</p>
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
