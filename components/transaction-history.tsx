import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const transactions = [
  { id: 1, type: "Reward", amount: 50, date: "2023-06-15T10:30:00Z", description: "Task completion bonus" },
  { id: 2, type: "Purchase", amount: -100, date: "2023-06-14T15:45:00Z", description: "Token purchase" },
  { id: 3, type: "Reward", amount: 25, date: "2023-06-13T09:15:00Z", description: "Successful agent interaction" },
  { id: 4, type: "Transfer", amount: -75, date: "2023-06-12T14:20:00Z", description: "Transfer to Team Account" },
  { id: 5, type: "Reward", amount: 100, date: "2023-06-11T11:00:00Z", description: "Weekly performance bonus" },
]

export function TransactionHistory() {
  return (
    <div>
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.type}</TableCell>
                <TableCell className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                  {transaction.amount > 0 ? "+" : ""}{transaction.amount} PTN
                </TableCell>
                <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden space-y-4">
        {transactions.map((transaction) => (
          <Card key={transaction.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{transaction.type}</span>
                <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                  {transaction.amount > 0 ? "+" : ""}{transaction.amount} PTN
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {new Date(transaction.date).toLocaleString()}
              </div>
              <div className="text-sm">{transaction.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

