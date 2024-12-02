import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const dataUsageHistory = [
  { id: 1, dataSource: "Google Calendar", agent: "Travel Planner", date: "2023-06-15", action: "Read" },
  { id: 2, dataSource: "Dropbox", agent: "Task Manager", date: "2023-06-14", action: "Write" },
  { id: 3, dataSource: "Fitbit", agent: "Nutrition Guide", date: "2023-06-13", action: "Read" },
  { id: 4, dataSource: "Financial Report Q2.xlsx", agent: "Meeting Scheduler", date: "2023-06-12", action: "Read" },
  { id: 5, dataSource: "Client Presentation.pptx", agent: "Meeting Scheduler", date: "2023-06-11", action: "Read" },
]

export function DataUsageHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data Source</TableHead>
          <TableHead>Agent</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataUsageHistory.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.dataSource}</TableCell>
            <TableCell>{item.agent}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

