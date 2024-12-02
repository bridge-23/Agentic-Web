import { Progress } from "@/components/ui/progress"

const rewardCategories = [
  { name: "Task Completion", current: 275, target: 500 },
  { name: "Agent Interactions", current: 120, target: 200 },
  { name: "Data Contributions", current: 50, target: 100 },
]

export function RewardsOverview() {
  return (
    <div className="space-y-8">
      {rewardCategories.map((category) => (
        <div key={category.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {category.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {category.current} / {category.target} PTN
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round((category.current / category.target) * 100)}%
            </div>
          </div>
          <Progress value={(category.current / category.target) * 100} />
        </div>
      ))}
    </div>
  )
}

