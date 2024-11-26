"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FineTuning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fine-Tuning</CardTitle>
        <CardDescription>Customize your agent settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="privacy-mode">Privacy Mode</Label>
          <Switch id="privacy-mode" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="data-usage-pricing">Data Usage Pricing</Label>
          <Select>
            <SelectTrigger id="data-usage-pricing">
              <SelectValue placeholder="Select pricing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="primary-agent">Primary Agent</Label>
          <Select>
            <SelectTrigger id="primary-agent">
              <SelectValue placeholder="Select agent" />
            </SelectTrigger>
            <SelectContent
              ref={(ref) =>
                ref?.addEventListener("touchend", (e) => e.preventDefault())
              }
            >
              <SelectItem value="agent1">Agent 1</SelectItem>
              <SelectItem value="agent2">Agent 2</SelectItem>
              <SelectItem value="agent3">Agent 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

