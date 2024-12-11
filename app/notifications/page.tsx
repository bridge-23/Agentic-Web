import { Metadata } from "next"
import { Notifications } from "@/components/notifications"

export const metadata: Metadata = {
  title: "Notifications",
  description: "View your notifications",
}

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <Notifications />
    </div>
  )
}

