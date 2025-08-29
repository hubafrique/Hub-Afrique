"use client"

import { useEffect, useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
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
  CheckCircle,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { database } from "@/lib/database"
import type { Enrollment, Notification } from "@/lib/supabase"

export default function DashboardPage() {
  const { user, profile } = useAuth()
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadDashboardData()
    }
  }, [user])

  const loadDashboardData = async () => {
    if (!user) return

    try {
      const [enrollmentsResult, notificationsResult] = await Promise.all([
        database.enrollments.getUserEnrollments(user.id),
        database.notifications.getUserNotifications(user.id),
      ])

      if (enrollmentsResult.data) {
        setEnrollments(enrollmentsResult.data)
      }

      if (notificationsResult.data) {
        setNotifications(notificationsResult.data.slice(0, 5)) // Show latest 5
      }
    } catch (error) {
      console.error("Error loading dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    {
      title: "Courses Enrolled",
      value: enrollments.length.toString(),
      change: "+2 this month",
      icon: <BookOpen className="h-4 w-4" />,
      color: "text-blue-600",
    },
    {
      title: "Courses Completed",
      value: enrollments.filter((e) => e.progress === 100).length.toString(),
      change: "+1 this week",
      icon: <CheckCircle className="h-4 w-4" />,
      color: "text-green-600",
    },
    {
      title: "iHub Access",
      value: profile?.prolab_status === "completed" ? "Unlocked" : "Locked",
      change: profile?.prolab_status === "completed" ? "Certificate earned!" : "Complete ProLab first",
      icon: <Users className="h-4 w-4" />,
      color: profile?.prolab_status === "completed" ? "text-green-600" : "text-orange-600",
    },
    {
      title: "Profile Views",
      value: "156",
      change: "+12% this month",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "text-purple-600",
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

  if (loading) {
    return (
      <AuthGuard>
        <DashboardLayout>
          <div className="space-y-8">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded w-64 mb-4"></div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-32 bg-slate-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </DashboardLayout>
      </AuthGuard>
    )
  }

  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Welcome back, {profile?.full_name?.split(" ")[0] || "there"}! 👋
            </h1>
            <p className="text-muted-foreground">Here's what's happening with your professional journey today.</p>
          </div>

          {/* ProLab Status Alert */}
          {profile?.prolab_status !== "completed" && (
            <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100">
                      Complete ProLab to unlock iHub
                    </h3>
                    <p className="text-sm text-orange-700 dark:text-orange-200">
                      Finish a course in ProLab to earn your certificate and gain access to collaborative projects in
                      iHub.
                    </p>
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

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
                <CardDescription>Your current courses and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrollments.length > 0 ? (
                  enrollments.slice(0, 3).map((enrollment) => (
                    <div key={enrollment.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{(enrollment as any).courses?.title || "Course"}</span>
                        <span className="text-sm text-muted-foreground">{enrollment.progress}%</span>
                      </div>
                      <Progress value={enrollment.progress} className="h-2" />
                      {enrollment.certificate_link && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Award className="w-3 h-3 mr-1" />
                          Certificate Earned
                        </Badge>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 dark:text-slate-400">No courses enrolled yet</p>
                    <Button className="mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      Browse Courses
                    </Button>
                  </div>
                )}
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
            {/* Recent Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Recent Updates</span>
                </CardTitle>
                <CardDescription>Your latest notifications and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {notification.type === "certificate" && <Award className="w-4 h-4 text-yellow-600" />}
                        {notification.type === "welcome" && <MessageCircle className="w-4 h-4 text-blue-600" />}
                        {notification.type === "ihub_invite" && <Users className="w-4 h-4 text-green-600" />}
                        {notification.type === "general" && <Clock className="w-4 h-4 text-slate-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(notification.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <p className="text-slate-600 dark:text-slate-400">No recent updates</p>
                  </div>
                )}
                <Button variant="outline" className="w-full bg-transparent">
                  View All Notifications
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
                <Button
                  className={`h-20 flex-col space-y-2 ${
                    profile?.prolab_status === "completed"
                      ? "bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                  }`}
                  disabled={profile?.prolab_status !== "completed"}
                >
                  <Users className="h-6 w-6" />
                  <span className="text-sm">
                    {profile?.prolab_status === "completed" ? "Join iHub" : "iHub Locked"}
                  </span>
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
    </AuthGuard>
  )
}
