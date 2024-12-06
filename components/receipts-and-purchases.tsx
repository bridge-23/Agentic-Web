import { useState } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const receiptsAndPurchases = [
  {
    id: 1,
    merchant: "Office Supplies Co.",
    date: "2023-06-15",
    amount: 150.75,
    category: "Business Expense",
    items: [
      { name: "Printer Paper", quantity: 5, price: 20.00, tax: 5.00 },
      { name: "Ink Cartridges", quantity: 2, price: 30.00, tax: 3.00 },
      { name: "Stapler", quantity: 1, price: 12.75, tax: 0.75 },
    ],
  },
  {
    id: 2,
    merchant: "Software Solutions Inc.",
    date: "2023-06-14",
    amount: 49.99,
    category: "Software",
    items: [
      { name: "Monthly Subscription", quantity: 1, price: 49.99, tax: 0 },
    ],
  },
  {
    id: 3,
    merchant: "Downtown Diner",
    date: "2023-06-13",
    amount: 85.20,
    category: "Entertainment",
    items: [
      { name: "Lunch Special", quantity: 3, price: 25.00, tax: 2.25 },
      { name: "Beverages", quantity: 3, price: 3.00, tax: 0.90 },
    ],
  },
  {
    id: 4,
    merchant: "City Transit",
    date: "2023-06-12",
    amount: 32.50,
    category: "Travel",
    items: [
      { name: "Monthly Pass", quantity: 1, price: 32.50, tax: 0 },
    ],
  },
  {
    id: 5,
    merchant: "Tech Conference Organizers",
    date: "2023-06-11",
    amount: 299.00,
    category: "Professional Development",
    items: [
      { name: "Conference Ticket", quantity: 1, price: 275.00, tax: 24.00 },
    ],
  },
]

export function ReceiptsAndPurchases() {
  const [expandedReceipts, setExpandedReceipts] = useState<number[]>([])

  const toggleReceipt = (id: number) => {
    setExpandedReceipts(prev =>
      prev.includes(id) ? prev.filter(receiptId => receiptId !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      {receiptsAndPurchases.map((receipt) => (
        <Card key={receipt.id}>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{receipt.merchant}</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleReceipt(receipt.id)}
                aria-expanded={expandedReceipts.includes(receipt.id)}
                aria-controls={`receipt-details-${receipt.id}`}
              >
                {expandedReceipts.includes(receipt.id) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {expandedReceipts.includes(receipt.id) ? "Collapse" : "Expand"} receipt details
                </span>
              </Button>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{receipt.date}</span>
              <span>${receipt.amount.toFixed(2)}</span>
              <span>{receipt.category}</span>
            </div>
          </CardHeader>
          {expandedReceipts.includes(receipt.id) && (
            <CardContent id={`receipt-details-${receipt.id}`}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Tax</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {receipt.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">${item.tax.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        ${((item.quantity * item.price) + item.tax).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}

