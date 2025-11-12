"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Clock,
  Star,
  Users,
  Play,
  Search,
  Award,
  TrendingUp,
  CheckCircle,
  Zap,
  Target,
  Calendar,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ProLabPage() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  // Tab options for mobile dropdown
  const tabOptions = [
    { value: "browse", label: "Browse Courses" },
    { value: "enrolled", label: "My Courses" },
    { value: "certificates", label: "Certificates" },
    { value: "ai-partner", label: "AI Partner" },
  ]

  // Mock data
  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      description: "Master modern web development with React, Node.js, and MongoDB",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1250,
      duration: "12 weeks",
      level: "Intermediate",
      category: "Web Development",
      price: "Free",
      progress: 65,
      thumbnail: "/placeholder.svg?height=200&width=300",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      isEnrolled: true,
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Learn data analysis, visualization, and machine learning",
      instructor: "Dr. Amina Hassan",
      rating: 4.9,
      students: 890,
      duration: "10 weeks",
      level: "Beginner",
      category: "Data Science",
      price: "Free",
      progress: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
      isEnrolled: false,
    },
    {
      id: 3,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps for iOS and Android",
      instructor: "Michael Chen",
      rating: 4.7,
      students: 650,
      duration: "8 weeks",
      level: "Intermediate",
      category: "Mobile Development",
      price: "Premium",
      progress: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      skills: ["React Native", "JavaScript", "Mobile UI"],
      isEnrolled: false,
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      description: "Master design principles and create stunning user experiences",
      instructor: "Fatima Al-Rashid",
      rating: 4.8,
      students: 1100,
      duration: "6 weeks",
      level: "Beginner",
      category: "Design",
      price: "Free",
      progress: 30,
      thumbnail: "/placeholder.svg?height=200&width=300",
      skills: ["Figma", "Design Systems", "User Research"],
      isEnrolled: true,
    },
    {
      id: 5,
      title: "Cloud Computing with AWS",
      description: "Learn cloud infrastructure and deployment strategies",
      instructor: "James Okoye",
      rating: 4.6,
      students: 780,
      duration: "14 weeks",
      level: "Advanced",
      category: "Cloud Computing",
      price: "Premium",
      progress: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      skills: ["AWS", "Docker", "Kubernetes", "DevOps"],
      isEnrolled: false,
    },
    {
      id: 6,
      title: "Digital Marketing Mastery",
      description: "Complete guide to digital marketing and growth strategies",
      instructor: "Aisha Kone",
      rating: 4.7,
      students: 920,
      duration: "8 weeks",
      level: "Beginner",
      category: "Marketing",
      price: "Free",
      progress: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      skills: ["SEO", "Social Media", "Analytics", "Content Marketing"],
      isEnrolled: false,
    },
  ]

  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Design",
    "Cloud Computing",
    "Marketing",
  ]
  const levels = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const enrolledCourses = courses.filter((course) => course.isEnrolled)
  const completedCourses = enrolledCourses.filter((course) => course.progress === 100)

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">ProLab Learning Hub</h1>
              <p className="opacity-90 text-sm sm:text-base">Master new skills with AI-powered learning</p>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-xl sm:text-2xl font-bold">{enrolledCourses.length}</div>
              <div className="text-xs sm:text-sm opacity-90">Active Courses</div>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-blue-600">Courses Enrolled</p>
                  <p className="text-lg sm:text-2xl font-bold text-blue-900">{enrolledCourses.length}</p>
                </div>
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-green-600">Completed</p>
                  <p className="text-lg sm:text-2xl font-bold text-green-900">{completedCourses.length}</p>
                </div>
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-600">Certificates</p>
                  <p className="text-lg sm:text-2xl font-bold text-purple-900">8</p>
                </div>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-orange-600">Learning Streak</p>
                  <p className="text-lg sm:text-2xl font-bold text-orange-900">12</p>
                </div>
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
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
            <TabsTrigger value="browse">Browse Courses</TabsTrigger>
            <TabsTrigger value="enrolled">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="ai-partner">AI Partner</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="text-xs sm:text-sm">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="text-xs sm:text-sm">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-lg"
                    />
                    {course.isEnrolled && (
                      <Badge className="absolute top-2 right-2 bg-green-500 text-xs">Enrolled</Badge>
                    )}
                    {course.price === "Premium" && (
                      <Badge className="absolute top-2 left-2 bg-orange-500 text-xs">Premium</Badge>
                    )}
                  </div>
                  <CardHeader className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg line-clamp-2 leading-tight">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-xs sm:text-sm mt-1">
                          {course.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
                        <span className="text-slate-600 text-center sm:text-left">by {course.instructor}</span>
                        <Badge variant="secondary" className="text-xs w-fit mx-auto sm:mx-0">
                          {course.level}
                        </Badge>
                      </div>

                      {course.isEnrolled && course.progress > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-slate-600">Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                        {course.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {course.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.skills.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {course.isEnrolled ? (
                          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm">
                            <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Continue
                          </Button>
                        ) : (
                          <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-xs sm:text-sm">
                            Enroll Now
                          </Button>
                        )}
                        <Button variant="outline" size="icon" className="shrink-0 bg-transparent">
                          <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enrolled" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>by {course.instructor}</CardDescription>
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} students</span>
                        </div>
                      </div>

                      <Button className="w-full bg-blue-500 hover:bg-blue-600">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((cert) => (
                <Card key={cert} className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Web Development Mastery</h3>
                    <p className="text-sm text-slate-600 mb-4">Completed on March 15, 2024</p>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Verified Certificate</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai-partner" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      Your AI Learning Companion
                    </CardTitle>
                    <CardDescription>Personalized guidance and motivation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-white/60 rounded-lg p-4">
                      <h3 className="font-medium text-slate-900 mb-2">Today's Check-in</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        "Great progress on your React course! You're 15% ahead of schedule. Ready for today's
                        challenge?"
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                          I'm Ready!
                        </Button>
                        <Button size="sm" variant="outline">
                          Need Help
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white/60 rounded-lg p-4">
                      <h3 className="font-medium text-slate-900 mb-2">Learning Insights</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          You learn best in the morning (9-11 AM)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          Interactive exercises boost your retention by 40%
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          Consider taking breaks every 45 minutes
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/60 rounded-lg p-4">
                      <h3 className="font-medium text-slate-900 mb-2">Motivational Quote</h3>
                      <blockquote className="text-sm text-slate-600 italic">
                        "The expert in anything was once a beginner. Keep pushing forward, John!"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      Weekly Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Complete 3 lessons</span>
                        <span className="font-medium">2/3</span>
                      </div>
                      <Progress value={67} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Practice coding</span>
                        <span className="font-medium">4/5 days</span>
                      </div>
                      <Progress value={80} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Join study group</span>
                        <span className="font-medium">1/2</span>
                      </div>
                      <Progress value={50} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-500" />
                      Study Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                      <span className="text-sm font-medium">Today 9:00 AM</span>
                      <Badge variant="secondary">React Hooks</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm font-medium">Tomorrow 10:00 AM</span>
                      <Badge variant="secondary">State Management</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm font-medium">Friday 2:00 PM</span>
                      <Badge variant="secondary">Project Review</Badge>
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
