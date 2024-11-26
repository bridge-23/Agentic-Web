import { Metadata } from "next"
import FineTuningComponent from "@/components/fine-tuning-component"

export const metadata: Metadata = {
  title: "Fine-Tuning | Agentic",
  description: "Customize and fine-tune your AI agents",
}

export default function FineTuningPage() {
  return <FineTuningComponent />
}

