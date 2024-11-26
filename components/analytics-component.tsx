"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UsageChart from "./usage-chart"
import PerformanceMetrics from "./performance-metrics"
import AgentActivity from "./agent-activity"

export default function AnalyticsComponent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <Tabs defaultValue="usage">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="agents">Agent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>View your platform usage over time</CardDescription>
            </CardHeader>
            <CardContent>
              <UsageChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Analyze your AI models' performance</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceMetrics />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agents">
          <Card>
            <CardHeader>
              <CardTitle>Agent Activity</CardTitle>
              <CardDescription>Monitor your AI agents' activities</CardDescription>
            </CardHeader>
            <CardContent>
              <AgentActivity />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

