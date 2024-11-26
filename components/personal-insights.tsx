import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function PersonalInsights() {
  const insights = [
    {
      category: "Education",
      recommendation: "Consider taking an online course in data science",
      impact: "High",
      difficulty: "Medium",
      timeframe: "3 months",
    },
    {
      category: "Work",
      recommendation: "Update your LinkedIn profile to attract more opportunities",
      impact: "Medium",
      difficulty: "Low",
      timeframe: "1 week",
    },
    {
      category: "Social Media",
      recommendation: "Increase engagement by posting more consistently",
      impact: "Medium",
      difficulty: "Low",
      timeframe: "Ongoing",
    },
    {
      category: "Habits",
      recommendation: "Try incorporating a 10-minute meditation into your daily routine",
      impact: "High",
      difficulty: "Low",
      timeframe: "2 weeks",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Insights</CardTitle>
        <CardDescription>AI-generated recommendations for personal growth</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {insights.map((insight, index) => (
            <li key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge>{insight.category}</Badge>
                <Badge variant="outline" className="ml-2">
                  Impact: {insight.impact}
                </Badge>
              </div>
              <p className="text-sm font-medium">{insight.recommendation}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="mr-2">Difficulty: {insight.difficulty}</span>
                <span>Timeframe: {insight.timeframe}</span>
              </div>
              <Button variant="link" className="p-0 h-auto" size="sm">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

