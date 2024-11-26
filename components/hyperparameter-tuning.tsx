import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HyperparameterTuning() {
  const [learningRate, setLearningRate] = useState(0.001)
  const [batchSize, setBatchSize] = useState(32)
  const [epochs, setEpochs] = useState(10)

  const handleSave = () => {
    console.log("Saving hyperparameters:", { learningRate, batchSize, epochs })
    // Here you would typically send the hyperparameters to your backend
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="learning-rate">Learning Rate</Label>
        <Slider
          id="learning-rate"
          min={0.0001}
          max={0.1}
          step={0.0001}
          value={[learningRate]}
          onValueChange={(value) => setLearningRate(value[0])}
        />
        <Input
          type="number"
          value={learningRate}
          onChange={(e) => setLearningRate(parseFloat(e.target.value))}
          step={0.0001}
          min={0.0001}
          max={0.1}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="batch-size">Batch Size</Label>
        <Slider
          id="batch-size"
          min={1}
          max={128}
          step={1}
          value={[batchSize]}
          onValueChange={(value) => setBatchSize(value[0])}
        />
        <Input
          type="number"
          value={batchSize}
          onChange={(e) => setBatchSize(parseInt(e.target.value))}
          step={1}
          min={1}
          max={128}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="epochs">Number of Epochs</Label>
        <Slider
          id="epochs"
          min={1}
          max={100}
          step={1}
          value={[epochs]}
          onValueChange={(value) => setEpochs(value[0])}
        />
        <Input
          type="number"
          value={epochs}
          onChange={(e) => setEpochs(parseInt(e.target.value))}
          step={1}
          min={1}
          max={100}
        />
      </div>

      <Button onClick={handleSave}>Save Hyperparameters</Button>
    </div>
  )
}

