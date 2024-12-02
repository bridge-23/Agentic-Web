import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  role: "user" | "agent"
  content: string
}

export default function AgentInteraction() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically send the message to your AI service and get a response
      // For this example, we'll just echo the message back
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "agent", content: `You said: ${input}` },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="space-y-4">
      <ScrollArea className="h-[300px] border rounded-md p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.content}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex space-x-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-grow"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}
