import { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import TaskList from "@/components/task-list"
import PointTracker from "@/components/point-tracker"
import CreditMarket from "@/components/credit-market"
import FineTuning from "@/components/fine-tuning"
import Wallet from "@/components/wallet"
import PersonalInsights from "@/components/personal-insights"
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "Dashboard | Agentic",
  description: "Manage your tasks, credits, and insights with Agentic",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <motion.div 
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <TaskList />
        </motion.div>
        <motion.div variants={itemVariants}>
          <PointTracker />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CreditMarket />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FineTuning />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Wallet />
        </motion.div>
        <motion.div variants={itemVariants}>
          <PersonalInsights />
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}