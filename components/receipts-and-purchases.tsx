import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const receiptsAndPurchases = [
  { id: 1, name: "Office Supplies", date: "2023-06-15", amount: 150.75, category: "Business Expense" },
  { id: 2, name: "Software Subscription", date: "2023-06-14", amount: 49.99, category: "Software" },
  { id: 3, name: "Client Lunch", date: "2023-06-13", amount: 85.20, category: "Entertainment" },
  { id: 4, name: "Train Ticket", date: "2023-06-12", amount: 32.50, category: "Travel" },
  { id: 5, name: "Conference Registration", date: "2023-06-11", amount: 299.00, category: "Professional Development" },
]

export function ReceiptsAndPurchases() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {receiptsAndPurchases.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>${item.amount.toFixed(2)}</TableCell>
            <TableCell>{item.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

