"use client"

import { useState, useEffect } from "react"
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Clock, Brain } from 'lucide-react'
import { AgentCard } from "@/components/agent-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThreadDialog } from "@/components/thread-dialog"
import { MemoryDialog } from "@/components/memory-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const agents = [
  {
    name: "Mercurios",
    description: "Plans and organizes travel itineraries",
    status: "Active",
    tasks: 152,
    uptime: "99.9%",
  },
  {
    name: "Hippocrates",
    description: "Provides personalized meal plans and nutrition advice",
    status: "Active",
    tasks: 87,
    uptime: "98.5%",
  },
  {
    name: "Prometheus",
    description: "Organizes and prioritizes tasks and to-do lists",
    status: "Active",
    tasks: 203,
    uptime: "100%",
  },
  {
    name: "Venus",
    description: "Schedules and optimizes daily activities",
    status: "Idle",
    tasks: 56,
    uptime: "97.8%",
  },
  {
    name: "Jupiter",
    description: "Coordinates and schedules meetings efficiently",
    status: "Active",
    tasks: 98,
    uptime: "99.5%",
  },
  {
    name: "Minerva",
    description: "Transcribes and summarizes meetings and conversations",
    status: "Maintenance",
    tasks: 72,
    uptime: "95.2%",
  },
]

const threads = [
  {
    id: 1,
    agent: "Mercurios",
    topic: "Travel planning for summer vacation",
    lastUpdated: "2 hours ago",
    messages: [
      { id: 1, sender: "User", content: "I'm planning a summer vacation to Europe. Can you help?", timestamp: "2023-06-15 10:00:00" },
      { id: 2, sender: "Mercurios", content: "I'd be happy to help you plan your European summer vacation. Could you please provide me with some more details about your preferences?", timestamp: "2023-06-15 10:02:00" },
      { id: 3, sender: "User", content: "I'm interested in visiting France and Italy for about 2 weeks in August.", timestamp: "2023-06-15 10:05:00" },
      { id: 4, sender: "Mercurios", content: "Great choices! Let's start by outlining a rough itinerary. We'll need to consider transportation between countries, accommodations, and must-see attractions. Shall we begin with Paris?", timestamp: "2023-06-15 10:08:00" },
    ]
  },
  {
    id: 2,
    agent: "Hippocrates",
    topic: "Weekly meal plan creation",
    lastUpdated: "1 day ago",
    messages: [
      { id: 1, sender: "User", content: "I need a healthy meal plan for next week.", timestamp: "2023-06-14 09:00:00" },
      { id: 2, sender: "Hippocrates", content: "I'd be glad to help you create a healthy meal plan. Do you have any dietary restrictions or preferences I should be aware of?", timestamp: "2023-06-14 09:02:00" },
      { id: 3, sender: "User", content: "I'm vegetarian and trying to increase my protein intake.", timestamp: "2023-06-14 09:05:00" },
      { id: 4, sender: "Hippocrates", content: "Thank you for providing that information. I'll create a vegetarian meal plan with a focus on high-protein options. Let's start with breakfast ideas. How about a protein-packed smoothie bowl?", timestamp: "2023-06-14 09:08:00" },
    ]
  },
  {
    id: 3,
    agent: "Prometheus",
    topic: "Project deadline management",
    lastUpdated: "3 hours ago",
    messages: [
      { id: 1, sender: "User", content: "I'm struggling to meet my project deadlines. Can you help me manage my time better?", timestamp: "2023-06-15 14:00:00" },
      { id: 2, sender: "Prometheus", content: "Of course, I'd be happy to help you improve your time management and meet your project deadlines. Can you tell me more about your current project and the deadlines you're working with?", timestamp: "2023-06-15 14:02:00" },
      { id: 3, sender: "User", content: "I have a web development project due in 2 weeks, but I'm behind on the backend work.", timestamp: "2023-06-15 14:05:00" },
      { id: 4, sender: "Prometheus", content: "I see. Let's break down your project into smaller, manageable tasks and create a schedule. We'll prioritize the backend work. Can you estimate how many hours you think you need for the backend development?", timestamp: "2023-06-15 14:08:00" },
    ]
  },
]

const memories = [
  {
    id: 1,
    agent: "Mercurios",
    content: "User prefers window seats on flights",
    created: "1 week ago",
    details: "During a conversation about flight bookings, the user mentioned they always choose window seats for better views and to avoid disturbances."
  },
  {
    id: 2,
    agent: "Hippocrates",
    content: "User is allergic to peanuts",
    created: "2 weeks ago",
    details: "While discussing dietary restrictions, the user disclosed a severe peanut allergy. This information is crucial for all future meal plans and restaurant recommendations."
  },
  {
    id: 3,
    agent: "Prometheus",
    content: "User's most productive hours are 9AM-11AM",
    created: "3 days ago",
    details: "Through analysis of the user's work patterns and direct feedback, it was determined that the user is most focused and productive in the morning, specifically between 9AM and 11AM."
  },
  {
    id: 4,
    agent: "Venus",
    content: "User likes to have a 30-minute break at 2PM",
    created: "5 days ago",
    details: "When optimizing the user's daily schedule, it was noted that they prefer and benefit from a short break in the afternoon, typically around 2PM, to recharge and maintain productivity."
  },
  {
    id: 5,
    agent: "Jupiter",
    content: "User prefers video calls over phone calls",
    created: "1 week ago",
    details: "During multiple instances of scheduling meetings, the user has consistently opted for video call options when available, indicating a preference for this mode of communication over traditional phone calls."
  },
]

interface CommunicationMethod {
  name: string
  icon: string
  isConnected: boolean
  chatLink: string
}

export default function AgentsPage() {
  const [communicationMethods, setCommunicationMethods] = useState<CommunicationMethod[]>([
    {
      name: "WhatsApp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital_Glyph_Green-9MeLm8wj6mKY5IS1hZhBZDZF8pXAl6.png",
      isConnected: false,
      chatLink: "",
    },
    {
      name: "Telegram",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-TClIjQKdkhE7lCUqkA4eewKeTgZs0n.png",
      isConnected: false,
      chatLink: "",
    },
    {
      name: "Messenger",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook_Messenger_logo_2020.svg-L7tCu3abLuJxbPzvndGglgmLcDAYCb.webp",
      isConnected: false,
      chatLink: "",
    },
  ])

  const [selectedMethod, setSelectedMethod] = useState<CommunicationMethod | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [chatLink, setChatLink] = useState("")
  const [showCongrats, setShowCongrats] = useState(false)
  const [showAddAgentDialog, setShowAddAgentDialog] = useState(false)
  const [newAgentName, setNewAgentName] = useState("")
  const [newAgentDescription, setNewAgentDescription] = useState("")

  const handleConnect = (method: CommunicationMethod) => {
    setSelectedMethod(method)
    setIsConnecting(true)
  }

  const handleDisconnect = (method: CommunicationMethod) => {
    const updatedMethods = communicationMethods.map((m) =>
      m.name === method.name ? { ...m, isConnected: false, chatLink: "" } : m
    )
    setCommunicationMethods(updatedMethods)
    toast({
      title: "Disconnected",
      description: `You have been disconnected from ${method.name}.`,
    })
  }

  const handleSubmitChatLink = () => {
    if (selectedMethod) {
      const updatedMethods = communicationMethods.map((m) =>
        m.name === selectedMethod.name ? { ...m, isConnected: true, chatLink } : m
      )
      setCommunicationMethods(updatedMethods)
      setIsConnecting(false)
      setChatLink("")
      setShowCongrats(true)
      toast({
        title: "Connected",
        description: `You have successfully connected to ${selectedMethod.name}.`,
      })
    }
  }

  const handleAddAgent = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the new agent data to your backend
    toast({
      title: "Agent Added",
      description: `${newAgentName} has been successfully added.`,
    })
    setShowAddAgentDialog(false)
    setNewAgentName("")
    setNewAgentDescription("")
  }

  useEffect(() => {
    if (showCongrats) {
      const timer = setTimeout(() => {
        setShowCongrats(false)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [showCongrats])

  const CongratsWindow = ({ onClose }: { onClose: () => void }) => (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Congratulations!</DialogTitle>
          <DialogDescription>
            You have successfully connected to the chat.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Agents</h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">View</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>View options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Grid view</DropdownMenuItem>
                <DropdownMenuItem>List view</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="w-full md:w-auto" onClick={() => setShowAddAgentDialog(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Agent
            </Button>
          </div>
        </div>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Communication Preferences</CardTitle>
            <CardDescription>Choose your primary method for communicating with agents</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {communicationMethods.map((method) => (
              <Button
                key={method.name}
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => method.isConnected ? handleDisconnect(method) : handleConnect(method)}
              >
                <Image 
                  src={method.icon}
                  alt={method.name}
                  width={20}
                  height={20}
                />
                {method.name}
                <Badge variant={method.isConnected ? "secondary" : "outline"}>
                  {method.isConnected ? "Connected" : "Connect"}
                </Badge>
              </Button>
            ))}
          </CardContent>
        </Card>
        <Tabs defaultValue="agents" className="space-y-4">
          <TabsList>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="threads">Threads History</TabsTrigger>
            <TabsTrigger value="memory">Agents Memory</TabsTrigger>
          </TabsList>
          <TabsContent value="agents" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {agents && agents.length > 0 ? (
                agents.map((agent) => (
                  <AgentCard key={agent.name} agent={agent} />
                ))
              ) : (
                <div className="col-span-full text-center">
                  <p className="text-lg font-medium">No agents available.</p>
                  <p className="text-sm text-muted-foreground">Add a new agent to get started.</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="threads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Threads History</CardTitle>
                <CardDescription>Recent conversation threads with your agents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {threads.map((thread) => (
                    <li key={thread.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{thread.agent}</p>
                        <p className="text-sm text-muted-foreground">{thread.topic}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{thread.lastUpdated}</span>
                        </div>
                        <ThreadDialog thread={thread} />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="memory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Agents Memory</CardTitle>
                <CardDescription>Important information remembered by your agents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {memories.map((memory) => (
                    <li key={memory.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{memory.agent}</p>
                        <p className="text-sm">{memory.content}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Brain className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{memory.created}</span>
                        </div>
                        <MemoryDialog memory={memory} />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isConnecting} onOpenChange={setIsConnecting}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connect to {selectedMethod?.name}</DialogTitle>
            <DialogDescription>
              Enter your chat link to connect with {selectedMethod?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="chatLink" className="text-right">
                Chat Link
              </Label>
              <Input
                id="chatLink"
                value={chatLink}
                onChange={(e) => setChatLink(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmitChatLink}>Connect</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showAddAgentDialog} onOpenChange={setShowAddAgentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Agent</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new agent to your team.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddAgent}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newAgentName}
                  onChange={(e) => setNewAgentName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newAgentDescription}
                  onChange={(e) => setNewAgentDescription(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Agent</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {showCongrats && <CongratsWindow onClose={() => setShowCongrats(false)} />}
    </div>
  )
}

