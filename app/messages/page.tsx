"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  MessageCircle,
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Plus,
  ArrowLeft,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mentor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Great progress on your React project! Let's schedule a review session.",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      type: "mentorship",
    },
    {
      id: 2,
      name: "TechCorp Africa",
      role: "Recruiter",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We'd like to schedule an interview for the Senior React Developer position.",
      timestamp: "1 hour ago",
      unread: 1,
      online: false,
      type: "job",
    },
    {
      id: 3,
      name: "EcoTrack Team",
      role: "Project Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Michael: The API integration is complete. Ready for testing!",
      timestamp: "3 hours ago",
      unread: 0,
      online: true,
      type: "project",
    },
    {
      id: 4,
      name: "Dr. Amina Hassan",
      role: "Mentor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Here are some resources for machine learning fundamentals.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      type: "mentorship",
    },
    {
      id: 5,
      name: "Design Studio Kenya",
      role: "Recruiter",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thank you for your portfolio submission. We'll review and get back to you.",
      timestamp: "2 days ago",
      unread: 0,
      online: false,
      type: "job",
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: "Sarah Johnson",
      content: "Hi John! I reviewed your latest React component and I'm impressed with your progress.",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      senderId: 1,
      senderName: "You",
      content: "Thank you! I've been working hard on implementing the state management patterns you suggested.",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      senderId: 2,
      senderName: "Sarah Johnson",
      content: "That's exactly what I wanted to see. Your code is much cleaner now and follows React best practices.",
      timestamp: "10:35 AM",
      isOwn: false,
    },
    {
      id: 4,
      senderId: 1,
      senderName: "You",
      content:
        "I have a question about the useEffect hook. When should I include dependencies in the dependency array?",
      timestamp: "10:37 AM",
      isOwn: true,
    },
    {
      id: 5,
      senderId: 2,
      senderName: "Sarah Johnson",
      content:
        "Great question! You should include any value from component scope that's used inside the effect. This includes props, state, and any functions defined in the component.",
      timestamp: "10:40 AM",
      isOwn: false,
    },
    {
      id: 6,
      senderId: 2,
      senderName: "Sarah Johnson",
      content:
        "Let's schedule a review session for next week to go over your project in detail. What day works best for you?",
      timestamp: "10:42 AM",
      isOwn: false,
    },
  ]

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "mentorship":
        return "bg-blue-100 text-blue-800"
      case "job":
        return "bg-green-100 text-green-800"
      case "project":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "mentorship":
        return "🎓"
      case "job":
        return "💼"
      case "project":
        return "🚀"
      default:
        return "💬"
    }
  }

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-8rem)] flex flex-col sm:flex-row bg-white rounded-lg border border-slate-200 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${selectedChat ? "hidden sm:flex" : "flex"} w-full sm:w-80 border-r border-slate-200 flex-col`}
        >
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-slate-200">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Messages</h2>
              <Button size="icon" variant="ghost" className="w-8 h-8 sm:w-10 sm:h-10">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-1 sm:p-2">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === conversation.id ? "bg-orange-50 border border-orange-200" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback className="text-xs sm:text-sm">
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-slate-900 truncate text-sm sm:text-base">{conversation.name}</h3>
                      <span className="text-xs text-slate-500 shrink-0">{conversation.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs sm:text-sm text-slate-600 truncate flex-1">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <Badge className="ml-2 bg-orange-500 text-white text-xs">{conversation.unread}</Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <Badge variant="secondary" className={`text-xs ${getTypeColor(conversation.type)}`}>
                        {getTypeIcon(conversation.type)} {conversation.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className={`${selectedChat ? "flex" : "hidden sm:flex"} flex-1 flex-col`}>
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-3 sm:p-4 border-b border-slate-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="sm:hidden w-8 h-8"
                      onClick={() => setSelectedChat(null)}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div className="relative">
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                        <AvatarImage
                          src={selectedConversation.avatar || "/placeholder.svg"}
                          alt={selectedConversation.name}
                        />
                        <AvatarFallback className="text-xs sm:text-sm">
                          {selectedConversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-slate-900 text-sm sm:text-base truncate">
                        {selectedConversation.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 truncate">
                        {selectedConversation.online ? "Online" : "Last seen 2 hours ago"}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${getTypeColor(selectedConversation.type)} text-xs hidden sm:inline-flex`}
                    >
                      {getTypeIcon(selectedConversation.type)} {selectedConversation.role}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10">
                      <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10">
                      <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-3 sm:p-4">
                <div className="space-y-3 sm:space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex items-end space-x-2 max-w-[85%] sm:max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        {!message.isOwn && (
                          <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                            <AvatarImage
                              src={selectedConversation.avatar || "/placeholder.svg"}
                              alt={message.senderName}
                            />
                            <AvatarFallback className="text-xs">
                              {message.senderName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg ${
                            message.isOwn ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-900"
                          }`}
                        >
                          <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.isOwn ? "text-orange-100" : "text-slate-500"}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-3 sm:p-4 border-t border-slate-200 bg-white">
                <div className="flex items-end space-x-2">
                  <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                    <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                      className="min-h-[36px] sm:min-h-[40px] max-h-32 resize-none text-sm sm:text-base"
                      rows={1}
                    />
                  </div>
                  <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                    <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-orange-500 hover:bg-orange-600 w-8 h-8 sm:w-10 sm:h-10 p-0"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-slate-50 p-4">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2">Select a conversation</h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Choose a conversation from the sidebar to start messaging
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
