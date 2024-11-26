import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Wallet() {
  const earnings = 500
  const goal = 1000

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
        <CardDescription>Track your data usage revenue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Total Earnings:</span>
          <span className="font-bold">${earnings}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to $1000</span>
            <span>{Math.round((earnings / goal) * 100)}%</span>
          </div>
          <Progress value={(earnings / goal) * 100} />
        </div>
        <p className="text-sm text-muted-foreground">
          Tip: Connect more accounts or upload files to increase your earnings!
        </p>
      </CardContent>
    </Card>
  )
}

