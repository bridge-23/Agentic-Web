import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatar: "/avatars/01.png",
    activity: "Travel Planner completed a task",
    amount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar: "/avatars/02.png",
    activity: "Nutrition Guide created a meal plan",
    amount: "+$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
    activity: "Task Manager prioritized tasks",
    amount: "+$299.00",
  },
]

export function RecentActivities() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt="Avatar" />
            <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 flex-grow">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.activity}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm md:text-base">{activity.amount}</div>
        </div>
      ))}
    </div>
  )
}

