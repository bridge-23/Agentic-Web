import { Progress } from "@/components/ui/progress"

const popularData = [
  { name: "Google Calendar", usageCount: 150 },
  { name: "Dropbox", usageCount: 120 },
  { name: "Fitbit", usageCount: 90 },
  { name: "Financial Report Q2.xlsx", usageCount: 75 },
  { name: "Client Presentation.pptx", usageCount: 60 },
]

const maxUsage = Math.max(...popularData.map(item => item.usageCount))

export function PopularData() {
  return (
    <div className="space-y-4">
      {popularData.map((item) => (
        <div key={item.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm text-muted-foreground">{item.usageCount} uses</span>
          </div>
          <Progress value={(item.usageCount / maxUsage) * 100} />
        </div>
      ))}
    </div>
  )
}

