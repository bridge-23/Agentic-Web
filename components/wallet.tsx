import Layout from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Wallet() {
  return (
    <Layout>
      <h1 className="mb-6 text-3xl font-bold">Wallet</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Token Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,000 PTN</p>
            <Button className="mt-4">Purchase Tokens</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc">
              <li>Reward: +50 PTN (Task completion)</li>
              <li>Purchase: -100 PTN (New agent creation)</li>
              <li>Reward: +25 PTN (Successful interaction)</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Earned: 275 PTN</p>
            <p>This Month: 75 PTN</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

