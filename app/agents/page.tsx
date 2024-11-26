import { Metadata } from "next"
import AgentsComponent from "@/components/agents-component"

export const metadata: Metadata = {
  title: "AI Agents | Agentic",
  description: "View and interact with AI agents",
}

export default function AgentsPage() {
  return <AgentsComponent />
}

