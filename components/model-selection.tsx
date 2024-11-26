import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Cpu, Zap, Rocket } from 'lucide-react'

const models = [
  { id: "base", name: "Base Model", description: "General-purpose model suitable for a wide range of tasks", icon: Cpu },
  { id: "advanced", name: "Advanced Model", description: "Enhanced model with improved performance on complex tasks", icon: Zap },
  { id: "specialized", name: "Specialized Model", description: "Domain-specific model optimized for particular use cases", icon: Rocket },
]

export default function ModelSelection() {
  const [selectedModel, setSelectedModel] = useState("base")

  const handleSave = () => {
    console.log("Selected model:", selectedModel)
    // Here you would typically send the selected model to your backend
  }

  return (
    <div className="space-y-6">
      <RadioGroup value={selectedModel} onValueChange={setSelectedModel}>
        {models.map((model) => {
          const Icon = model.icon
          return (
            <div key={model.id} className="flex items-center space-x-2">
              <RadioGroupItem value={model.id} id={model.id} />
              <Label htmlFor={model.id} className="flex items-center space-x-2 cursor-pointer">
                <Icon className="w-5 h-5" />
                <div>
                  <p className="font-medium">{model.name}</p>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              </Label>
            </div>
          )
        })}
      </RadioGroup>
      <Button onClick={handleSave}>Save Model Selection</Button>
    </div>
  )
}

