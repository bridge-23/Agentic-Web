import { Metadata } from "next"
import ProfileComponent from "@/components/profile-component"

export const metadata: Metadata = {
  title: "Profile | Agentic",
  description: "Manage your Agentic profile and settings",
}

export default function ProfilePage() {
  return <ProfileComponent />
}

