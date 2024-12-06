"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const agentPerformanceData = [
  { agent: "Travel Planner", tasks: 120, efficiency: 95 },
  { agent: "Nutrition Guide", tasks: 80, efficiency: 88 },
  { agent: "Task Manager", tasks: 180, efficiency: 92 },
  { agent: "Day Planner", tasks: 90, efficiency: 85 },
  { agent: "Meeting Scheduler", tasks: 110, efficiency: 90 },
]

const tokenUsageData = [
  { date: "2023-06-01", tokens: 1000 },
  { date: "2023-06-02", tokens: 1200 },
  { date: "2023-06-03", tokens: 800 },
  { date: "2023-06-04", tokens: 1500 },
  { date: "2023-06-05", tokens: 1800 },
  { date: "2023-06-06", tokens: 2000 },
  { date: "2023-06-07", tokens: 1700 },
]

export function Analytics() {
  const [activeTab, setActiveTab] = useState("performance")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="performance">Agent Performance</TabsTrigger>
        <TabsTrigger value="usage">Token Usage</TabsTrigger>
      </TabsList>
      <TabsContent value="performance" className="space-y-4">
        <div className="h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={agentPerformanceData}>
              <XAxis dataKey="agent" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar yAxisId="left" dataKey="tasks" fill="#8884d8" name="Tasks Completed" />
              <Bar yAxisId="right" dataKey="efficiency" fill="#82ca9d" name="Efficiency %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agentPerformanceData.map((agent) => (
            <Card key={agent.agent}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {agent.agent}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{agent.tasks} tasks</div>
                <p className="text-xs text-muted-foreground">
                  {agent.efficiency}% efficiency
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="usage" className="space-y-4">
        <div className="h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tokenUsageData}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="tokens" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tokenUsageData.map((day) => (
            <Card key={day.date}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {day.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{day.tokens} tokens</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

