import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentTrades = [
  { price: 1.01, amount: 500, time: "14:30:45" },
  { price: 1.00, amount: 750, time: "14:29:30" },
  { price: 1.02, amount: 300, time: "14:28:15" },
  { price: 0.99, amount: 1000, time: "14:27:00" },
  { price: 1.01, amount: 600, time: "14:26:45" },
]

export default function RecentTrades() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Price</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentTrades.map((trade, index) => (
          <TableRow key={index}>
            <TableCell>{trade.price}</TableCell>
            <TableCell>{trade.amount}</TableCell>
            <TableCell>{trade.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

