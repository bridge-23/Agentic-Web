import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, Code, PenTool, Search } from 'lucide-react'

const agents = [
  { id: 1, name: "General Assistant", icon: Brain },
  { id: 2, name: "Code Helper", icon: Code },
  { id: 3, name: "Creative Writer", icon: PenTool },
  { id: 4, name: "Research Analyst", icon: Search },
]

export default function AgentList({ onSelectAgent }) {
  const [selectedAgentId, setSelectedAgentId] = useState(null)

  const handleSelectAgent = (agent) => {
    setSelectedAgentId(agent.id)
    onSelectAgent(agent)
  }

  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-2">
        {agents.map((agent) => {
          const Icon = agent.icon
          return (
            <Button
              key={agent.id}
              variant={selectedAgentId === agent.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleSelectAgent(agent)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {agent.name}
            </Button>
          )
        })}
      </div>
    </ScrollArea>
  )
}

