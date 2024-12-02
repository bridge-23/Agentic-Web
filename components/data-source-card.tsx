import { MoreHorizontal, Power, RefreshCw } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface DataSourceCardProps {
  dataSource: {
    name: string
    type: string
    status: string
    lastSync: string
    agentsUsing: string[]
  }
}

export function DataSourceCard({ dataSource }: DataSourceCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{dataSource.name}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Check permissions</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Disconnect</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <CardDescription>{dataSource.type}</CardDescription>
        <div className="mt-4 flex items-center space-x-4">
          <Badge
            variant={dataSource.status === "Connected" ? "default" : "secondary"}
          >
            {dataSource.status}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Last sync: {new Date(dataSource.lastSync).toLocaleString()}
          </span>
        </div>
        <div className="mt-4">
          <span className="text-sm font-medium">Agents using:</span>
          <ul className="mt-2 text-sm text-muted-foreground">
            {dataSource.agentsUsing.map((agent) => (
              <li key={agent}>{agent}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync
          </Button>
          <Button size="sm" variant="outline">
            <Power className="mr-2 h-4 w-4" />
            {dataSource.status === "Connected" ? "Disconnect" : "Connect"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

