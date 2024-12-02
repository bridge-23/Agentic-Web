import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const bankAccounts = [
  { id: 1, name: "Main Checking", bank: "Bank of America", accountNumber: "****1234", balance: 5000.00 },
  { id: 2, name: "Savings", bank: "Wells Fargo", accountNumber: "****5678", balance: 10000.00 },
  { id: 3, name: "Business Checking", bank: "Chase", accountNumber: "****9012", balance: 15000.00 },
]

export function BankAccounts() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account Name</TableHead>
              <TableHead>Bank</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bankAccounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.bank}</TableCell>
                <TableCell>{account.accountNumber}</TableCell>
                <TableCell>${account.balance.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden">
        {bankAccounts.map((account) => (
          <Card key={account.id} className="mb-4">
            <CardContent className="p-4">
              <p><strong>Account:</strong> {account.name}</p>
              <p><strong>Bank:</strong> {account.bank}</p>
              <p><strong>Number:</strong> {account.accountNumber}</p>
              <p><strong>Balance:</strong> ${account.balance.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center md:justify-start">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Connect New Bank Account
        </Button>
      </div>
    </div>
  )
}

