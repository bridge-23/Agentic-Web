import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface ThreadDialogProps {
  thread: {
    id: number
    agent: string
    topic: string
    lastUpdated: string
    messages: Message[]
  }
}

export function ThreadDialog({ thread }: ThreadDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Thread</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{thread.topic}</DialogTitle>
          <DialogDescription>Conversation with {thread.agent}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[350px] w-full rounded-md border p-4">
          {thread.messages.map((message) => (
            <div key={message.id} className="mb-4">
              <div className="font-semibold">{message.sender}</div>
              <div className="text-sm">{message.content}</div>
              <div className="text-xs text-muted-foreground">{message.timestamp}</div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

