"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AgentActivityProps {
  activities: Array<{
    agent: string;
    status: string;
    tasks: number;
    lastActive: string;
  }>
}


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function AgentActivity({ activities }: AgentActivityProps) {
  return (
    <motion.div 
      className="grid gap-4 md:grid-cols-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {activities?.map((activity: {
        agent: string;
        status: string;
        tasks: number;
        lastActive: string;
      }) => (
        <motion.div key={activity.agent} variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {activity.agent}
              </CardTitle>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Badge
                  variant={
                    activity.status === "Active"
                      ? "default"
                      : activity.status === "Idle"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {activity.status}
                </Badge>
              </motion.div>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="text-2xl font-bold"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                {activity.tasks} tasks
              </motion.div>
              <p className="text-xs text-muted-foreground">
                Last active: {activity.lastActive}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}