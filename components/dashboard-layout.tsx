"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Handle responsive behavior - Desktop should replicate tablet view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // Changed from 768 to 1024 for tablet-like behavior on desktop
        setIsCollapsed(false)
        setIsMobileMenuOpen(false)
      } else {
        // Desktop should use tablet-like layout (not collapsed by default)
        setIsCollapsed(false)
      }
    }

    handleResize() // Call on mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isActiveRoute = (url: string) => {
    return pathname === url
  }

  const handleDiscordClick = () => {
    window.open("https://discord.gg/8ZnsMnhAC", "_blank", "noopener,noreferrer")
  }

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return null
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Sidebar */}
        <aside
          className={`${isCollapsed ? "w-16" : "w-60"} ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            } fixed lg:relative z-50 h-full transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col shrink-0`}
        >
          {/* Sidebar Header */}
          <div className="p-3 sm:p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <img
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique Logo"
                  className="w-10 h-10 sm:w-[52px] sm:h-[52px] shrink-0 object-contain dark:brightness-110 dark:contrast-125"
                />
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent block truncate">
                      Hub Afrique
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 truncate">Professional Network</p>
                  </div>
                )}
              </div>

              {/* Desktop Toggle Button - Hidden on desktop for tablet-like behavior */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-orange-100 dark:hover:bg-orange-900/20 shrink-0 hidden xl:flex"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">{isCollapsed ? "Expand sidebar" : "Collapse sidebar"}</span>
              </Button>

              {/* Mobile Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-orange-100 dark:hover:bg-orange-900/20 shrink-0 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3 sm:p-4">
            <div className="space-y-4 sm:space-y-6">
              {navigation.map((group) => (
                <div key={group.title}>
                  {!isCollapsed && (
                    <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
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
                                  className={`flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg transition-colors group ${isActive
                                    ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                    : "hover:bg-orange-100 dark:hover:bg-orange-900/20"
                                    }`}
                                >
                                  <item.icon
                                    className={`h-4 w-4 sm:h-5 sm:w-5 ${isActive
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
                              className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 rounded-lg transition-colors group ${isActive
                                ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                : "hover:bg-orange-100 dark:hover:bg-orange-900/20"
                                }`}
                            >
                              <item.icon
                                className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 ${isActive
                                  ? "text-orange-600 dark:text-orange-400"
                                  : "text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                                  }`}
                              />
                              <span
                                className={`text-sm font-medium truncate ${isActive
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

              {/* Discord Community Link */}
              <div>
                {!isCollapsed && (
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
                    Community
                  </h3>
                )}
                <div className="space-y-1">
                  {isCollapsed ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={handleDiscordClick}
                          className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg transition-colors group hover:bg-orange-100 dark:hover:bg-orange-900/20"
                        >
                          <svg
                            className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                          </svg>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Join Discord Community</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <button
                      onClick={handleDiscordClick}
                      className="flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 rounded-lg transition-colors group hover:bg-orange-100 dark:hover:bg-orange-900/20 w-full text-left"
                    >
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      <span className="text-sm font-medium truncate text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                        Discord Community
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile Theme Toggle - Only visible in mobile sidebar */}
              <div className="lg:hidden">
                {!isCollapsed && (
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
                    Settings
                  </h3>
                )}
                <div className="space-y-1">
                  <button
                    onClick={handleThemeToggle}
                    className="flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 rounded-lg transition-colors group hover:bg-orange-100 dark:hover:bg-orange-900/20 w-full text-left"
                  >
                    <div className="relative h-4 w-4 sm:h-5 sm:w-5 shrink-0">
                      <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute top-0 left-0 h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </div>
                    <span className="text-sm font-medium truncate text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-700">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`${isCollapsed ? "w-9 h-9 sm:w-10 sm:h-10 p-0" : "w-full justify-start"} hover:bg-orange-100 dark:hover:bg-orange-900/20`}
                >
                  <Avatar className="h-7 w-7 sm:h-8 sm:w-8 shrink-0">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs sm:text-sm">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  {!isCollapsed && (
                    <>
                      <div className="ml-2 sm:ml-3 text-left flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                          John Doe
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">john@example.com</p>
                      </div>
                      <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 shrink-0" />
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
          <header className="h-14 sm:h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-3 sm:px-4 lg:px-6 shrink-0">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-orange-100 dark:hover:bg-orange-900/20 w-8 h-8 sm:w-10 sm:h-10"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Open menu</span>
              </Button>

              <div className="relative">
                <Search className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="h-8 sm:h-10 w-32 sm:w-48 lg:w-64 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Desktop Theme Toggle - Hidden on mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeToggle}
                className="hidden lg:flex hover:bg-orange-100 dark:hover:bg-orange-900/20 w-8 h-8 sm:w-10 sm:h-10"
              >
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-orange-100 dark:hover:bg-orange-900/20 w-8 h-8 sm:w-10 sm:h-10"
              >
                <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 text-xs bg-red-500 dark:bg-red-600 text-white font-bold border-2 border-background flex items-center justify-center">
                    {notifications}
                  </Badge>
                )}
              </Button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-3 sm:p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}
