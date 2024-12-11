'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const steps = [
  { title: 'Welcome to Pantheon', content: 'Your personal AI avatar' },
  { title: 'Upload and Connect', content: 'Learn how to upload files, pictures, and connect accounts' },
  { title: 'Set Goals and Review', content: 'Set up agent goals, check activity, review memory, and view recommendations' },
  { title: 'Track Communications', content: 'Learn how to track agent communications' },
  { title: 'Complete Your Profile', content: 'Set up your account details' },
  { title: 'How You Plan to Use Prometheus', content: 'Tell us about your intended use' },
]

const timezones = [
  { value: "UTC", label: "UTC" },
  { value: "EST", label: "Eastern Standard Time (EST)" },
  { value: "CST", label: "Central Standard Time (CST)" },
  { value: "MST", label: "Mountain Standard Time (MST)" },
  { value: "PST", label: "Pacific Standard Time (PST)" },
]

const currencies = [
  { value: "USD", label: "US Dollar (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "GBP", label: "British Pound (GBP)" },
  { value: "JPY", label: "Japanese Yen (JPY)" },
  { value: "CAD", label: "Canadian Dollar (CAD)" },
]

export function OnboardingContent() {
  const [step, setStep] = useState(0)
  const [nickname, setNickname] = useState("")
  const [avatar, setAvatar] = useState("")
  const [timezone, setTimezone] = useState("")
  const [currency, setCurrency] = useState("")
  const [useCase, setUseCase] = useState("")
  const [otherUseCase, setOtherUseCase] = useState("")
  const [showCongrats, setShowCongrats] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      // Here you would typically save the user's profile data
      console.log("Profile data:", { nickname, avatar, timezone, currency, useCase, otherUseCase })
      setShowCongrats(true)
      router.push('/dashboard')
    }
  }

  const CongratsWindow = () => (
    <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Congratulations!</DialogTitle>
          <DialogDescription>
            You have successfully completed the onboarding process.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => {
            setShowCongrats(false)
            router.push('/dashboard')
          }}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{steps[step].title}</CardTitle>
          <CardDescription>{steps[step].content}</CardDescription>
        </CardHeader>
        <div className="px-6 py-4">
          <div className="relative w-full aspect-[1/1] max-w-[280px] mx-auto mb-6 sm:max-w-[320px] md:max-w-[360px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Optimus%203-q8t0PQzUhmH5cXteUajo6w4nR86S2l.png"
              alt="AI Assistant Avatar"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <CardContent>
          {step === 4 && (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nickname">Nickname</Label>
                <Input
                  id="nickname"
                  placeholder="Enter your nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar</Label>
                <Select value={avatar} onValueChange={setAvatar}>
                  <SelectTrigger id="avatar">
                    <SelectValue placeholder="Select Avatar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avatar1">Avatar 1</SelectItem>
                    <SelectItem value="avatar2">Avatar 2</SelectItem>
                    <SelectItem value="avatar3">Avatar 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select Timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((curr) => (
                      <SelectItem key={curr.value} value={curr.value}>
                        {curr.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </form>
          )}
          {step === 5 && (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label>How do you plan to use Prometheus?</Label>
                <RadioGroup value={useCase} onValueChange={setUseCase}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label htmlFor="personal">Personal Assistant</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Business</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="study" id="study" />
                    <Label htmlFor="study">Study</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              {useCase === 'other' && (
                <div className="space-y-2">
                  <Label htmlFor="otherUseCase">Please specify:</Label>
                  <Textarea
                    id="otherUseCase"
                    placeholder="Tell us how you plan to use Prometheus"
                    value={otherUseCase}
                    onChange={(e) => setOtherUseCase(e.target.value)}
                  />
                </div>
              )}
            </form>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} className="w-full">
            {step < steps.length - 1 ? 'Next' : 'Finish'}
          </Button>
        </CardFooter>
      </Card>
      {showCongrats && <CongratsWindow />}
    </div>
  )
}

