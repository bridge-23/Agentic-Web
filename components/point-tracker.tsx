import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PointTracker() {
  const points = 750
  const nextLevel = 1000

  return (
    <Card>
      <CardHeader>
        <CardTitle>Point Level</CardTitle>
        <CardDescription>Track your progress and unlock new features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">{points} / {nextLevel}</p>
          <Progress value={(points / nextLevel) * 100} />
          <p className="text-sm text-muted-foreground">
            {nextLevel - points} points to next level
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

