import { Metadata } from "next"
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
// import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { MarketOverview } from "@/components/market-overview"
import { ExchangeRates } from "@/components/exchange-rates"
import { TradeForm } from "@/components/trade-form"
import { TradingHistory } from "@/components/trading-history"
import { AutoTradeSettings } from "@/components/auto-trade-settings"

export const metadata: Metadata = {
  title: "Credits Marketplace",
  description: "Trade chat credits in the Pantheon ecosystem",
}

export default function CreditsMarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher /> */}
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Credits Marketplace</h2>
          <div className="flex items-center">
            <Button className="w-full md:w-auto">
              <TrendingUp className="mr-2 h-4 w-4" /> View Market Trends
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trade">Trade</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="auto-trade">Auto-Trade</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Current Credit Price
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$0.052</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% from last hour
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    24h Trading Volume
                  </CardTitle>
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245,890 Credits</div>
                  <p className="text-xs text-muted-foreground">
                    -5.1% from yesterday
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Your Credit Balance
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,231 Credits</div>
                  <p className="text-xs text-muted-foreground">
                    ≈ $272.01 at current price
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Your Trading Profit
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$89.32</div>
                  <p className="text-xs text-muted-foreground">
                    +12.3% this week
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Market Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <MarketOverview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Exchange Rates</CardTitle>
                  <CardDescription>
                    Current buy and sell prices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ExchangeRates />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="trade" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Place an Order</CardTitle>
                <CardDescription>Buy or sell credits at your preferred price</CardDescription>
              </CardHeader>
              <CardContent>
                <TradeForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Trading History</CardTitle>
                <CardDescription>Your past transactions and portfolio value</CardDescription>
              </CardHeader>
              <CardContent>
                <TradingHistory />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="auto-trade" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Auto-Trade Settings</CardTitle>
                <CardDescription>Set up automatic buy/sell orders based on credit thresholds</CardDescription>
              </CardHeader>
              <CardContent>
                <AutoTradeSettings />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

