import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'

const steps = [
  { id: "select", title: "Select Data Source" },
  { id: "configure", title: "Configure Connection" },
  { id: "verify", title: "Verify and Save" },
]

export default function DataSourceWizard() {
  const [currentStep, setCurrentStep] = useState("select")
  const [dataSource, setDataSource] = useState("")
  const [connectionDetails, setConnectionDetails] = useState({
    apiKey: "",
    url: "",
  })

  const handleNext = () => {
    if (currentStep === "select") setCurrentStep("configure")
    else if (currentStep === "configure") setCurrentStep("verify")
    else if (currentStep === "verify") {
      // Here you would typically send the data to your backend
      console.log("Saving data source:", { dataSource, connectionDetails })
      // Reset the form
      setCurrentStep("select")
      setDataSource("")
      setConnectionDetails({ apiKey: "", url: "" })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between mb-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center ${currentStep === step.id ? "text-primary" : "text-muted-foreground"
              }`}
          >
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2">
              {steps.indexOf(step) + 1}
            </div>
            <span>{step.title}</span>
            {step.id !== "verify" && <ArrowRight className="w-4 h-4 mx-2" />}
          </div>
        ))}
      </div>

      {currentStep === "select" && (
        <div className="space-y-4 relative z-10">
          <Label htmlFor="data-source">Select a data source</Label>
          <Select
            value={dataSource}
            onValueChange={setDataSource}
            name="data-source"
          >
            <SelectTrigger
              id="data-source"
              className="w-full bg-popover relative"
            >
              <SelectValue placeholder="Choose a data source" />
            </SelectTrigger>
            <SelectContent
              ref={(ref) =>
                ref?.addEventListener("touchend", (e) => e.preventDefault())
              }
            >
              <SelectItem value="google-analytics">Google Analytics</SelectItem>
              <SelectItem value="salesforce">Salesforce</SelectItem>
              <SelectItem value="hubspot">HubSpot</SelectItem>
              <SelectItem value="customapi">Custom API</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {currentStep === "configure" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">API Key</Label>
            <Input
              id="api-key"
              value={connectionDetails.apiKey}
              onChange={(e) =>
                setConnectionDetails({ ...connectionDetails, apiKey: e.target.value })
              }
              placeholder="Enter your API key"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              value={connectionDetails.url}
              onChange={(e) =>
                setConnectionDetails({ ...connectionDetails, url: e.target.value })
              }
              placeholder="Enter the API URL"
            />
          </div>
        </div>
      )}

      {currentStep === "verify" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Verify Your Connection</h3>
          <p>Data Source: {dataSource}</p>
          <p>API Key: {connectionDetails.apiKey}</p>
          <p>URL: {connectionDetails.url}</p>
        </div>
      )}

      <Button onClick={handleNext} className="mt-4">
        {currentStep === "verify" ? "Save" : "Next"}
      </Button>
    </div>
  )
}

