import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, XCircle } from 'lucide-react'

const jobs = [
  { id: 1, name: "Customer Support Agent", status: "Running", progress: 75 },
  { id: 2, name: "Sales Assistant", status: "Queued", progress: 0 },
  { id: 3, name: "Data Analyst", status: "Completed", progress: 100 },
  { id: 4, name: "Content Writer", status: "Failed", progress: 30 },
]

export default function FineTuningJobs() {
  const handleAction = (jobId, action) => {
    console.log(`${action} job ${jobId}`)
    // Here you would typically send the action to your backend
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    job.status === "Running"
                      ? "default"
                      : job.status === "Queued"
                      ? "secondary"
                      : job.status === "Completed"
                      ? "success"
                      : "destructive"
                  }
                >
                  {job.status}
                </Badge>
              </TableCell>
              <TableCell>{job.progress}%</TableCell>
              <TableCell>
                {job.status === "Running" && (
                  <Button variant="ghost" size="sm" onClick={() => handleAction(job.id, "pause")}>
                    <Pause className="w-4 h-4" />
                  </Button>
                )}
                {job.status === "Queued" && (
                  <Button variant="ghost" size="sm" onClick={() => handleAction(job.id, "start")}>
                    <Play className="w-4 h-4" />
                  </Button>
                )}
                {(job.status === "Queued" || job.status === "Failed") && (
                  <Button variant="ghost" size="sm" onClick={() => handleAction(job.id, "cancel")}>
                    <XCircle className="w-4 h-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

