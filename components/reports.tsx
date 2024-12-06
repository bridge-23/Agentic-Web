import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Download } from 'lucide-react'
import { useState } from "react"

const reportsData = [
  { id: 1, name: "Monthly Performance Summary", date: "2023-06-30", status: "Generated" },
  { id: 2, name: "Token Usage Analysis", date: "2023-06-15", status: "Generated" },
  { id: 3, name: "Agent Efficiency Report", date: "2023-06-01", status: "Generated" },
  { id: 4, name: "User Engagement Metrics", date: "2023-05-31", status: "Generated" },
  { id: 5, name: "Financial Overview Q2", date: "2023-07-15", status: "Scheduled" },
]

export function Reports() {
  const [expandedReport, setExpandedReport] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedReport(expandedReport === id ? null : id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Reports</CardTitle>
        <CardDescription>View and download your recent reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="md:hidden">
          {reportsData.map((report) => (
            <div key={report.id} className="mb-4 last:mb-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">{report.name}</h3>
                  <p className="text-sm text-muted-foreground">{report.date}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(report.id)}
                  aria-expanded={expandedReport === report.id}
                >
                  {expandedReport === report.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle report details</span>
                </Button>
              </div>
              {expandedReport === report.id && (
                <div className="mt-2 space-y-2">
                  <Badge variant={report.status === "Generated" ? "default" : "secondary"}>
                    {report.status}
                  </Badge>
                  <Button size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <ScrollArea className="h-[300px] w-full rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Report Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportsData.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={report.status === "Generated" ? "default" : "secondary"}
                      >
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}

