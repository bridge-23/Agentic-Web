import { MoreHorizontal, Download, Trash2 } from 'lucide-react'

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

interface FileCardProps {
  file: {
    name: string
    type: string
    size: string
    uploadDate: string
    agentsUsing: string[]
  }
}

export function FileCard({ file }: FileCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{file.name}</CardTitle>
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
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <CardDescription>{file.type}</CardDescription>
        <div className="mt-4 flex items-center space-x-4">
          <Badge variant="secondary">{file.size}</Badge>
          <span className="text-sm text-muted-foreground">
            Uploaded: {new Date(file.uploadDate).toLocaleString()}
          </span>
        </div>
        <div className="mt-4">
          <span className="text-sm font-medium">Agents using:</span>
          <ul className="mt-2 text-sm text-muted-foreground">
            {file.agentsUsing.length > 0 ? (
              file.agentsUsing.map((agent) => <li key={agent}>{agent}</li>)
            ) : (
              <li>No agents currently using this file</li>
            )}
          </ul>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button size="sm" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button size="sm" variant="outline" className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

