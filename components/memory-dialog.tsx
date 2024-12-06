import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface MemoryDialogProps {
  memory: {
    id: number
    agent: string
    content: string
    created: string
    details: string
  }
}

export function MemoryDialog({ memory }: MemoryDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{memory.agent}&apos;s Memory</DialogTitle>
          <DialogDescription>Created {memory.created}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="mb-2 font-medium">Memory Content</h4>
            <p>{memory.content}</p>
          </div>
          <div>
            <h4 className="mb-2 font-medium">Additional Details</h4>
            <p>{memory.details}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
