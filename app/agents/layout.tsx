import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agents",
  description: "Manage your AI agents in Pantheon",
}

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}