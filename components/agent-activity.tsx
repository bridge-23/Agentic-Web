import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  { agent: "General Assistant", status: "Active", tasks: 150, lastActive: "2 minutes ago" },
  { agent: "Code Helper", status: "Idle", tasks: 75, lastActive: "15 minutes ago" },
  { agent: "Creative Writer", status: "Active", tasks: 100, lastActive: "5 minutes ago" },
  { agent: "Data Analyst", status: "Offline", tasks: 200, lastActive: "1 hour ago" },
]

export default function AgentActivity() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {activities.map((activity) => (
        <Card key={activity.agent}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {activity.agent}
            </CardTitle>
            <Badge
              variant={
                activity.status === "Active"
                  ? "default"
                  : activity.status === "Idle"
                  ? "secondary"
                  : "outline"
              }
            >
              {activity.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activity.tasks} tasks</div>
            <p className="text-xs text-muted-foreground">
              Last active: {activity.lastActive}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

