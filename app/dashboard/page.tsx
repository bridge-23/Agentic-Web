import { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import TaskList from "@/components/task-list"
import PointTracker from "@/components/point-tracker"
import CreditMarket from "@/components/credit-market"
import FineTuning from "@/components/fine-tuning"
import Wallet from "@/components/wallet"
import PersonalInsights from "@/components/personal-insights"

export const metadata: Metadata = {
  title: "Dashboard | Agentic",
  description: "Manage your tasks, credits, and insights with Agentic",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TaskList />
        <PointTracker />
        <CreditMarket />
        <FineTuning />
        <Wallet />
        <PersonalInsights />
      </div>
    </DashboardLayout>
  )
}

