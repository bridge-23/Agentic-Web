import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tradingHistory = [
  { id: 1, type: "Buy", amount: 100, price: 0.051, total: 5.10, date: "2023-06-15T10:30:00Z" },
  { id: 2, type: "Sell", amount: 50, price: 0.053, total: 2.65, date: "2023-06-14T15:45:00Z" },
  { id: 3, type: "Buy", amount: 200, price: 0.050, total: 10.00, date: "2023-06-13T09:15:00Z" },
  { id: 4, type: "Sell", amount: 75, price: 0.052, total: 3.90, date: "2023-06-12T14:20:00Z" },
  { id: 5, type: "Buy", amount: 150, price: 0.049, total: 7.35, date: "2023-06-11T11:00:00Z" },
]

export function TradingHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tradingHistory.map((trade) => (
          <TableRow key={trade.id}>
            <TableCell className={trade.type === "Buy" ? "text-green-600" : "text-red-600"}>
              {trade.type}
            </TableCell>
            <TableCell>{trade.amount} Credits</TableCell>
            <TableCell>${trade.price.toFixed(4)}</TableCell>
            <TableCell>${trade.total.toFixed(2)}</TableCell>
            <TableCell>{new Date(trade.date).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

