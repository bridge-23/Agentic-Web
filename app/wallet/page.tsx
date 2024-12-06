import { Metadata } from "next"
import { CreditCard, DollarSign, PlusCircle, ArrowUpDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TokenBalance } from "@/components/token-balance"
import { TransactionHistory } from "@/components/transaction-history"
import { RewardsOverview } from "@/components/rewards-overview"
import { ScheduleCreditDistribution } from "@/components/schedule-credit-distribution"

export const metadata: Metadata = {
  title: "Wallet",
  description: "Manage your tokens and view transaction history in Pantheon",
}

export default function WalletPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Wallet</h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <Button className="w-full md:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" /> Purchase Tokens
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              <ArrowUpDown className="mr-2 h-4 w-4" /> Transfer Tokens
            </Button>
            <ScheduleCreditDistribution />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <TokenBalance />
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$890.32</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Credits Earned
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">275 Credits</div>
              <p className="text-xs text-muted-foreground">
                75 Credits this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Upcoming Distribution
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">600 Credits</div>
              <p className="text-xs text-muted-foreground">
               111 Credits this month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <TransactionHistory />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Rewards Overview</CardTitle>
              <CardDescription>
                Your rewards and how to earn more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RewardsOverview />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

