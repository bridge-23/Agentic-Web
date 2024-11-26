import { Metadata } from "next"
import DataManagementComponent from "@/components/data-management-component"

export const metadata: Metadata = {
  title: "Data Management | Agentic",
  description: "Manage your data sources, uploads, and privacy settings",
}

export default function DataPage() {
  return <DataManagementComponent />
}

