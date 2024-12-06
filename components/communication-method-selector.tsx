"use client"

import { useState } from "react"
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const communicationMethods = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "kakaotalk", label: "KakaoTalk" },
  { value: "telegram", label: "Telegram" },
  { value: "imessage", label: "iMessage" },
  { value: "x", label: "X (Twitter)" },
  { value: "messenger", label: "Facebook Messenger" },
  { value: "line", label: "Line" },
]

export function CommunicationMethodSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between md:w-[300px]"
        >
          {value
            ? communicationMethods.find((method) => method.value === value)?.label
            : "Select communication method..."}
          <Check className={cn("ml-2 h-4 w-4 shrink-0 opacity-0", value && "opacity-100")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 md:w-[300px]">
        <Command>
          <CommandInput placeholder="Search communication method..." />
          <CommandEmpty>No communication method found.</CommandEmpty>
          <CommandGroup>
            {communicationMethods.map((method) => (
              <CommandItem
                key={method.value}
                value={method.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === method.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {method.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

