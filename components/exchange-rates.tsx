import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const exchangeRates = [
  { type: "Buy", price: 0.0525, change: "+0.5%" },
  { type: "Sell", price: 0.0515, change: "-0.3%" },
]

export function ExchangeRates() {
  return (
    <div>
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exchangeRates.map((rate) => (
              <TableRow key={rate.type}>
                <TableCell>{rate.type}</TableCell>
                <TableCell>${rate.price.toFixed(4)}</TableCell>
                <TableCell className={rate.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                  {rate.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden space-y-4">
        {exchangeRates.map((rate) => (
          <Card key={rate.type}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{rate.type}</span>
                <span>${rate.price.toFixed(4)}</span>
              </div>
              <div className={rate.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                {rate.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

