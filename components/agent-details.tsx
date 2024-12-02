import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AgentDetailsProps {
  agent: {
    name: string;
    // Add other agent properties you need
  }
}

export default function AgentDetails({ }: AgentDetailsProps) {
  // This is mock data. In a real application, you would fetch this data based on the selected agent.
  const agentDetails = {
    description: "This AI agent is designed to assist with a wide range of tasks and queries.",
    capabilities: ["Natural Language Processing", "Task Planning", "Information Retrieval"],
    trainingData: "Large corpus of text from the internet, books, and academic papers",
    lastUpdated: "2023-05-15",
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{agentDetails.description}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {agentDetails.capabilities.map((capability, index) => (
              <Badge key={index} variant="secondary">
                {capability}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Training Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{agentDetails.trainingData}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Last Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{agentDetails.lastUpdated}</p>
        </CardContent>
      </Card>
    </div>
  )
}

