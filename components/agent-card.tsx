import { MoreHorizontal, Play, Pause, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface AgentCardProps {
  agent: {
    name: string
    description: string
    status: string
    tasks: number
    uptime: string
  }
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>View history</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit agent</DropdownMenuItem>
            <DropdownMenuItem>Delete agent</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <CardDescription>{agent.description}</CardDescription>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge
            variant={
              agent.status === "Active"
                ? "default"
                : agent.status === "Idle"
                ? "secondary"
                : "destructive"
            }
          >
            {agent.status}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {agent.tasks} tasks completed
          </span>
        </div>
        <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <span className="text-sm font-medium">Uptime: {agent.uptime}</span>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              <Play className="mr-2 h-4 w-4" />
              Start
            </Button>
            <Button size="sm" variant="outline">
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </Button>
            <Button size="sm" variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

