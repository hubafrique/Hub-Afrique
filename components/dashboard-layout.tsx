"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Home,
  BookOpen,
  Users,
  Briefcase,
  MessageCircle,
  User,
  Settings,
  Bell,
  Search,
  Award,
  TrendingUp,
  Calendar,
  HelpCircle,
  LogOut,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: Home },
      { title: "Analytics", url: "/analytics", icon: TrendingUp },
      { title: "Calendar", url: "/calendar", icon: Calendar },
    ],
  },
  {
    title: "Learning",
    items: [
      { title: "ProLab", url: "/prolab", icon: BookOpen },
      { title: "Certificates", url: "/certificates", icon: Award },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "iHub", url: "/ihub", icon: Users },
      { title: "Messages", url: "/messages", icon: MessageCircle },
    ],
  },
  {
    title: "Opportunities",
    items: [{ title: "ProHub", url: "/prohub", icon: Briefcase }],
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(false)
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isActiveRoute = (url: string) => {
    return pathname === url
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Sidebar */}
        <aside
          className={`${isCollapsed ? "w-16" : "w-60"} ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } fixed md:relative z-50 h-full transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col shrink-0`}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0">
                <img
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique Logo"
                  className="w-[52px] h-[52px] shrink-0 object-contain dark:brightness-110 dark:contrast-125"
                />
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent block truncate">
                      Hub Afrique
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 truncate">Professional Network</p>
                  </div>
                )}
              </div>

              {/* Desktop Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-orange-100 dark:hover:bg-orange-900/20 shrink-0 hidden md:flex"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">{isCollapsed ? "Expand sidebar" : "Collapse sidebar"}</span>
              </Button>

              {/* Mobile Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-orange-100 dark:hover:bg-orange-900/20 shrink-0 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {navigation.map((group) => (
                <div key={group.title}>
                  {!isCollapsed && (
                    <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      {group.title}
                    </h3>
                  )}
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = isActiveRoute(item.url)

                      return (
                        <div key={item.title}>
                          {isCollapsed ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={item.url}
                                  className={`flex items-center justify-center h-10 w-10 rounded-lg transition-colors group ${
                                    isActive
                                      ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                      : "hover:bg-orange-100 dark:hover:bg-orange-900/20"
                                  }`}
                                >
                                  <item.icon
                                    className={`h-5 w-5 ${
                                      isActive
                                        ? "text-orange-600 dark:text-orange-400"
                                        : "text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                                    }`}
                                  />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                <p>{item.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <Link
                              href={item.url}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group ${
                                isActive
                                  ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                  : "hover:bg-orange-100 dark:hover:bg-orange-900/20"
                              }`}
                            >
                              <item.icon
                                className={`h-5 w-5 shrink-0 ${
                                  isActive
                                    ? "text-orange-600 dark:text-orange-400"
                                    : "text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                                }`}
                              />
                              <span
                                className={`text-sm font-medium truncate ${
                                  isActive
                                    ? "text-orange-600 dark:text-orange-400"
                                    : "text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                                }`}
                              >
                                {item.title}
                              </span>
                            </Link>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* Theme Toggle */}
              {!isCollapsed && (
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    Appearance
                  </h3>
                  <div className="flex items-center space-x-3 px-3 py-2">
                    <Sun className="h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" />
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    <Moon className="h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" />
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`${
                    isCollapsed ? "w-10 h-10 p-0" : "w-full justify-start"
                  } hover:bg-orange-100 dark:hover:bg-orange-900/20`}
                >
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  {!isCollapsed && (
                    <>
                      <div className="ml-3 text-left flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">john@example.com</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Top Bar */}
          <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center space-x-4 min-w-0">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-orange-100 dark:hover:bg-orange-900/20"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="h-10 w-64 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-orange-100 dark:hover:bg-orange-900/20"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Button variant="ghost" size="icon" className="relative hover:bg-orange-100 dark:hover:bg-orange-900/20">
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 dark:bg-red-600 text-white font-bold border-2 border-background flex items-center justify-center">
                    {notifications}
                  </Badge>
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}
