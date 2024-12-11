import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Billing",
  description: "Manage your billing and subscription",
}

export default function BillingPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Billing</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Pro plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-2xl font-bold">$29.99/month</p>
              <p className="text-sm text-muted-foreground">Billed monthly</p>
            </div>
            <Button>Change Plan</Button>
          </div>
          <div className="space-y-2">
            <p className="text-sm">Next billing date: July 1, 2023</p>
            <p className="text-sm">Payment method: Visa ending in 1234</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

