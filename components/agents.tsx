import Layout from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const agents = [
  { name: 'Travel Planner', uptime: '99.9%', completedTasks: 152, recentActivity: 'Booked flight to New York' },
  { name: 'Nutrition Guide', uptime: '98.5%', completedTasks: 87, recentActivity: 'Created meal plan for user' },
  { name: 'Task Manager', uptime: '100%', completedTasks: 203, recentActivity: 'Prioritized weekly tasks' },
]

export default function Agents() {
  return (
    <Layout>
      <h1 className="mb-6 text-3xl font-bold">Agents</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.name}>
            <CardHeader>
              <CardTitle>{agent.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Uptime: {agent.uptime}</p>
              <p>Completed Tasks: {agent.completedTasks}</p>
              <p>Recent Activity: {agent.recentActivity}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="mt-6">Create New Agent</Button>
    </Layout>
  )
}

