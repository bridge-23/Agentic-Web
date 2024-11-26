import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function TaskList() {
  const tasks = [
    { id: 1, title: "Connect data sources", completed: false },
    { id: 2, title: "Upload files", completed: false },
    { id: 3, title: "Set privacy controls", completed: true },
    { id: 4, title: "Select primary agent", completed: false },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Your current tasks and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-2">
              <Checkbox id={`task-${task.id}`} checked={task.completed} />
              <label htmlFor={`task-${task.id}`} className={task.completed ? "line-through" : ""}>
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

