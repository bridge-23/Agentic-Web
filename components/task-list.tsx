"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"

const taskVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: {
      duration: 0.2
    }
  }
}

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Connect data sources", completed: false },
    { id: 2, title: "Upload files", completed: false },
    { id: 3, title: "Set privacy controls", completed: true },
    { id: 4, title: "Select primary agent", completed: false },
  ])

  const handleCheckTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Your current tasks and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.ul className="space-y-2">
          <AnimatePresence mode="popLayout">
            {tasks.map((task) => (
              <motion.li
                key={task.id}
                variants={taskVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="flex items-center space-x-2"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                >
                  <Checkbox 
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onCheckedChange={() => handleCheckTask(task.id)}
                  />
                </motion.div>
                <motion.label
                  htmlFor={`task-${task.id}`}
                  className={`cursor-pointer select-none ${task.completed ? "line-through text-muted-foreground" : ""}`}
                  animate={{
                    color: task.completed ? "var(--muted-foreground)" : "var(--foreground)",
                    scale: task.completed ? 0.95 : 1
                  }}
                >
                  {task.title}
                </motion.label>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </CardContent>
    </Card>
  )
}