import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Users,
  Briefcase,
  TrendingUp,
  Calendar,
  Award,
  MessageCircle,
  Clock,
  Target,
  Star,
  ArrowRight,
  Play,
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Courses Completed",
      value: "12",
      change: "+2 this month",
      icon: <BookOpen className="h-4 w-4" />,
      color: "text-blue-600",
    },
    {
      title: "Projects Active",
      value: "3",
      change: "+1 this week",
      icon: <Users className="h-4 w-4" />,
      color: "text-green-600",
    },
    {
      title: "Job Applications",
      value: "8",
      change: "+3 this week",
      icon: <Briefcase className="h-4 w-4" />,
      color: "text-orange-600",
    },
    {
      title: "Profile Views",
      value: "156",
      change: "+12% this month",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "text-purple-600",
    },
  ]

  const recentActivity = [
    {
      type: "course",
      title: "Completed 'Advanced React Patterns'",
      time: "2 hours ago",
      icon: <BookOpen className="h-4 w-4 text-blue-600" />,
    },
    {
      type: "project",
      title: "Joined 'E-commerce Platform' project",
      time: "1 day ago",
      icon: <Users className="h-4 w-4 text-green-600" />,
    },
    {
      type: "job",
      title: "Applied to Frontend Developer at Paystack",
      time: "2 days ago",
      icon: <Briefcase className="h-4 w-4 text-orange-600" />,
    },
    {
      type: "achievement",
      title: "Earned 'JavaScript Expert' badge",
      time: "3 days ago",
      icon: <Award className="h-4 w-4 text-yellow-600" />,
    },
  ]

  const upcomingEvents = [
    {
      title: "React Workshop",
      date: "Tomorrow, 2:00 PM",
      attendees: 45,
    },
    {
      title: "Career Mentorship Session",
      date: "Friday, 10:00 AM",
      attendees: 12,
    },
    {
      title: "Project Demo Day",
      date: "Next Monday, 3:00 PM",
      attendees: 89,
    },
  ]

  const recommendedCourses = [
    {
      title: "Advanced TypeScript",
      instructor: "Sarah Johnson",
      duration: "6 hours",
      rating: 4.8,
      image: "/placeholder.svg?height=100&width=150&text=TypeScript",
    },
    {
      title: "Node.js Masterclass",
      instructor: "Michael Chen",
      duration: "8 hours",
      rating: 4.9,
      image: "/placeholder.svg?height=100&width=150&text=Node.js",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Welcome back, John! 👋
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your professional journey today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={stat.color}>{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Learning Progress */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-orange-600" />
                <span>Learning Progress</span>
              </CardTitle>
              <CardDescription>Your current learning goals and achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">JavaScript Mastery Path</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">React Development Track</span>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Backend Development</span>
                  <span className="text-sm text-muted-foreground">30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>Upcoming Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.attendees} attending</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Your latest actions and achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">{activity.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Recommended Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-600" />
                <span>Recommended for You</span>
              </CardTitle>
              <CardDescription>Courses picked based on your interests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-16 h-12 rounded object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{course.title}</p>
                    <p className="text-xs text-muted-foreground">by {course.instructor}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-muted-foreground ml-1">{course.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{course.duration}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Play className="h-3 w-3" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                Browse All Courses
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump into your most common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button className="h-20 flex-col space-y-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">Start Learning</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-green-50 hover:bg-green-100 text-green-700 border-green-200">
                <Users className="h-6 w-6" />
                <span className="text-sm">Join Project</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200">
                <Briefcase className="h-6 w-6" />
                <span className="text-sm">Find Jobs</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200">
                <MessageCircle className="h-6 w-6" />
                <span className="text-sm">Connect</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
