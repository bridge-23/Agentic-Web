import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const rewardCategories = [
  { name: "Task Completion", current: 275, target: 500 },
  { name: "Agent Interactions", current: 120, target: 200 },
  { name: "Data Contributions", current: 50, target: 100 },
]

export function RewardsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {rewardCategories.map((category) => (
        <Card key={category.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {category.current} / {category.target} BUD
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((category.current / category.target) * 100)}% complete
            </p>
            <Progress
              value={(category.current / category.target) * 100}
              className="mt-2"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

