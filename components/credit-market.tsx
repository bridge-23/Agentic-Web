import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CreditMarket() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Market</CardTitle>
        <CardDescription>Buy and sell credits</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Current Balance:</span>
          <span className="font-bold">1000 credits</span>
        </div>
        <div className="space-x-2">
          <Button>Buy Credits</Button>
          <Button variant="outline">Sell Credits</Button>
        </div>
      </CardContent>
    </Card>
  )
}

