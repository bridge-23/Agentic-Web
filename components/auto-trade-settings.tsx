"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export function AutoTradeSettings() {
  const [autoBuyEnabled, setAutoBuyEnabled] = useState(false)
  const [autoSellEnabled, setAutoSellEnabled] = useState(false)
  const [buyThreshold, setBuyThreshold] = useState("")
  const [sellThreshold, setSellThreshold] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the settings to your backend
    toast({
      title: "Auto-Trade Settings Updated",
      description: `Auto-Buy: ${autoBuyEnabled ? 'Enabled' : 'Disabled'}, Auto-Sell: ${autoSellEnabled ? 'Enabled' : 'Disabled'}`,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-buy">Enable Auto-Buy</Label>
          <Switch
            id="auto-buy"
            checked={autoBuyEnabled}
            onCheckedChange={setAutoBuyEnabled}
          />
        </div>
        {autoBuyEnabled && (
          <div className="space-y-2">
            <Label htmlFor="buy-threshold">Buy Threshold (USD)</Label>
            <Input
              id="buy-threshold"
              placeholder="Enter buy threshold"
              type="number"
              step="0.0001"
              value={buyThreshold}
              onChange={(e) => setBuyThreshold(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-sell">Enable Auto-Sell</Label>
          <Switch
            id="auto-sell"
            checked={autoSellEnabled}
            onCheckedChange={setAutoSellEnabled}
          />
        </div>
        {autoSellEnabled && (
          <div className="space-y-2">
            <Label htmlFor="sell-threshold">Sell Threshold (USD)</Label>
            <Input
              id="sell-threshold"
              placeholder="Enter sell threshold"
              type="number"
              step="0.0001"
              value={sellThreshold}
              onChange={(e) => setSellThreshold(e.target.value)}
            />
          </div>
        )}
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}

