"use client"

import type React from "react"
import { useState } from "react"
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

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
  const { theme, setTheme } = useTheme()

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <aside
          className={`${
            isCollapsed ? "w-16" : "w-60"
          } transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col`}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/hub-afrique-logo.png"
                  alt="Hub Afrique Logo"
                  className="w-8 h-8 dark:brightness-110 dark:contrast-125"
                />
                {!isCollapsed && (
                  <div>
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                      Hub Afrique
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Professional Network</p>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-orange-100 dark:hover:bg-orange-900/20"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                <span className="sr-only">{isCollapsed ? "Expand sidebar" : "Collapse sidebar"}</span>
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
                    {group.items.map((item) => (
                      <div key={item.title}>
                        {isCollapsed ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={item.url}
                                className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors group"
                              >
                                <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <Link
                            href={item.url}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors group"
                          >
                            <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                              {item.title}
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
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
                    <Sun className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    <Moon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
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
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  {!isCollapsed && (
                    <>
                      <div className="ml-3 text-left flex-1">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">john@example.com</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-slate-400" />
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
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="h-10 w-64 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
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
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 dark:bg-red-600 text-white font-bold border-2 border-background flex items-center justify-center">
                  3
                </Badge>
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
