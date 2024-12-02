import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, CheckCircle, AlertCircle, InfoIcon } from 'lucide-react'

const notificationsData = [
  { id: 1, type: "info", message: "New feature: Analytics dashboard is now available!", time: "2 hours ago" },
  { id: 2, type: "success", message: "Your monthly report has been generated successfully.", time: "1 day ago" },
  { id: 3, type: "warning", message: "Your token balance is running low. Consider purchasing more.", time: "3 days ago" },
  { id: 4, type: "error", message: "Failed to connect to Twitter. Please check your credentials.", time: "1 week ago" },
]

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Stay updated with the latest information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notificationsData.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
              {notification.type === "info" && <InfoIcon className="h-5 w-5 text-blue-500" />}
              {notification.type === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {notification.type === "warning" && <Bell className="h-5 w-5 text-yellow-500" />}
              {notification.type === "error" && <AlertCircle className="h-5 w-5 text-red-500" />}
              <div className="flex-1">
                <p className="text-sm font-medium">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

