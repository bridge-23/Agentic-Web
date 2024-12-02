import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const investments = [
  { id: 1, name: "S&P 500 ETF", type: "Stock", value: 10000.00, change: "+2.5%" },
  { id: 2, name: "Bitcoin", type: "Cryptocurrency", value: 5000.00, change: "-1.8%" },
  { id: 3, name: "Corporate Bond Fund", type: "Bond", value: 7500.00, change: "+0.5%" },
  { id: 4, name: "Ethereum", type: "Cryptocurrency", value: 3000.00, change: "+3.2%" },
]

export function InvestmentPortfolio() {
  const totalValue = investments.reduce((sum, investment) => sum + investment.value, 0)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Summary</CardTitle>
          <CardDescription>Total value of your investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
        </CardContent>
      </Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investment</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>24h Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell>{investment.name}</TableCell>
                <TableCell>{investment.type}</TableCell>
                <TableCell>${investment.value.toFixed(2)}</TableCell>
                <TableCell className={investment.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                  {investment.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden space-y-4">
        {investments.map((investment) => (
          <Card key={investment.id}>
            <CardContent className="p-4">
              <p><strong>{investment.name}</strong> ({investment.type})</p>
              <p>Value: ${investment.value.toFixed(2)}</p>
              <p className={investment.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                24h Change: {investment.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

