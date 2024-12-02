import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const reportsData = [
  { id: 1, name: "Monthly Performance Summary", date: "2023-06-30", status: "Generated" },
  { id: 2, name: "Token Usage Analysis", date: "2023-06-15", status: "Generated" },
  { id: 3, name: "Agent Efficiency Report", date: "2023-06-01", status: "Generated" },
  { id: 4, name: "User Engagement Metrics", date: "2023-05-31", status: "Generated" },
  { id: 5, name: "Financial Overview Q2", date: "2023-07-15", status: "Scheduled" },
]

export function Reports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Reports</CardTitle>
        <CardDescription>View and download your recent reports</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportsData.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

