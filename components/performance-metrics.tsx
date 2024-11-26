import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const metrics = [
  { model: "General Assistant", accuracy: "92%", latency: "150ms", uptime: "99.9%" },
  { model: "Code Helper", accuracy: "89%", latency: "180ms", uptime: "99.7%" },
  { model: "Creative Writer", accuracy: "87%", latency: "200ms", uptime: "99.8%" },
  { model: "Data Analyst", accuracy: "94%", latency: "160ms", uptime: "99.9%" },
]

export default function PerformanceMetrics() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Model</TableHead>
          <TableHead>Accuracy</TableHead>
          <TableHead>Latency</TableHead>
          <TableHead>Uptime</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metrics.map((metric) => (
          <TableRow key={metric.model}>
            <TableCell className="font-medium">{metric.model}</TableCell>
            <TableCell>{metric.accuracy}</TableCell>
            <TableCell>{metric.latency}</TableCell>
            <TableCell>{metric.uptime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

