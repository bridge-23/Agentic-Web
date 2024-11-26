import { Metadata } from "next"
import AnalyticsComponent from "@/components/analytics-component"

export const metadata: Metadata = {
  title: "Analytics | Agentic",
  description: "View your Agentic usage analytics and insights",
}

export default function AnalyticsPage() {
  return <AnalyticsComponent />
}

