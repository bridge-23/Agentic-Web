import { Metadata } from "next"
import { Plus } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
// import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { AgentCard } from "@/components/agent-card"

export const metadata: Metadata = {
  title: "Agents",
  description: "Manage your AI agents in Pantheon",
}

const agents = [
  {
    name: "Travel Planner",
    description: "Plans and organizes travel itineraries",
    status: "Active",
    tasks: 152,
    uptime: "99.9%",
  },
  {
    name: "Nutrition Guide",
    description: "Provides personalized meal plans and nutrition advice",
    status: "Active",
    tasks: 87,
    uptime: "98.5%",
  },
  {
    name: "Task Manager",
    description: "Organizes and prioritizes tasks and to-do lists",
    status: "Active",
    tasks: 203,
    uptime: "100%",
  },
  {
    name: "Day Planner",
    description: "Schedules and optimizes daily activities",
    status: "Idle",
    tasks: 56,
    uptime: "97.8%",
  },
  {
    name: "Meeting Scheduler",
    description: "Coordinates and schedules meetings efficiently",
    status: "Active",
    tasks: 98,
    uptime: "99.5%",
  },
  {
    name: "Transcription Assistant",
    description: "Transcribes and summarizes meetings and conversations",
    status: "Maintenance",
    tasks: 72,
    uptime: "95.2%",
  },
]

export default function AgentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher /> */}
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
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
            <Button className="w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Add Agent
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  )
}

