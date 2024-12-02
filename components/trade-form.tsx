"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

export function TradeForm() {
  const [tradeType, setTradeType] = useState("buy")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the trade order to your backend
    toast({
      title: "Order Placed",
      description: `${tradeType.charAt(0).toUpperCase() + tradeType.slice(1)} order for ${amount} credits at $${price} each.`,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <RadioGroup defaultValue="buy" onValueChange={setTradeType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="buy" id="buy" />
          <Label htmlFor="buy">Buy</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sell" id="sell" />
          <Label htmlFor="sell">Sell</Label>
        </div>
      </RadioGroup>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount of Credits</Label>
        <Input
          id="amount"
          placeholder="Enter amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="price">Price per Credit</Label>
        <Input
          id="price"
          placeholder="Enter price"
          type="number"
          step="0.0001"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <Button type="submit">Place Order</Button>
    </form>
  )
}

