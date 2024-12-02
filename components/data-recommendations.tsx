import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const recommendations = [
  {
    title: "Financial Statements",
    description: "Upload your financial statements to unlock insights for better financial planning.",
    benefits: ["Improved budgeting", "Tax optimization", "Investment recommendations"],
  },
  {
    title: "Travel Itinerary",
    description: "Share your travel plans to get personalized recommendations and optimize your trips.",
    benefits: ["Efficient route planning", "Local attraction suggestions", "Travel expense tracking"],
  },
  {
    title: "Health and Fitness Data",
    description: "Connect your fitness devices to receive tailored health advice and workout plans.",
    benefits: ["Personalized fitness goals", "Nutrition recommendations", "Sleep pattern analysis"],
  },
]

export function DataRecommendations() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((rec) => (
        <Card key={rec.title}>
          <CardHeader>
            <CardTitle>{rec.title}</CardTitle>
            <CardDescription>{rec.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {rec.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Upload Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

