import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const buyOrders = [
  { price: 0.98, amount: 1000 },
  { price: 0.97, amount: 1500 },
  { price: 0.96, amount: 2000 },
]

const sellOrders = [
  { price: 1.02, amount: 800 },
  { price: 1.03, amount: 1200 },
  { price: 1.04, amount: 1800 },
]

export default function OrderBook() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Sell Orders</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sellOrders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="text-red-500">{order.price}</TableCell>
                <TableCell>{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Buy Orders</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buyOrders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="text-green-500">{order.price}</TableCell>
                <TableCell>{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

