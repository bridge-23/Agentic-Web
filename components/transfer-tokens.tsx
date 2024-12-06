"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

export function TransferTokens() {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")

  const handleTransfer = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the transfer request to your backend
    toast({
      title: "Transfer Initiated",
      description: `Transferring ${amount} BUD to ${recipient}`,
    })
    // Reset form
    setRecipient("")
    setAmount("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Transfer Tokens</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Transfer Tokens</DialogTitle>
          <DialogDescription>
            Send BUD tokens to another user. Please double-check the recipient address before confirming.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleTransfer}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="recipient" className="text-right">
                Recipient
              </Label>
              <Input
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Confirm Transfer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

