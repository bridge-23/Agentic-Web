"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AgentList from "./agent-list"
import AgentDetails from "./agent-details"
import AgentInteraction from "./agent-interaction"

export default function AgentsComponent() {
  const [selectedAgent, setSelectedAgent] = useState(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Agents</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Available Agents</CardTitle>
            <CardDescription>Select an agent to view details and interact</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentList onSelectAgent={setSelectedAgent} />
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{selectedAgent ? selectedAgent.name : "Select an Agent"}</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedAgent ? (
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="interact">Interact</TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <AgentDetails agent={selectedAgent} />
                </TabsContent>
                <TabsContent value="interact">
                  <AgentInteraction agent={selectedAgent} />
                </TabsContent>
              </Tabs>
            ) : (
              <p>Please select an agent from the list to view details and interact.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

