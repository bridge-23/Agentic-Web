import { Metadata } from "next"
import MarketplaceComponent from "@/components/marketplace-component"

export const metadata: Metadata = {
  title: "Marketplace | Agentic",
  description: "Buy and sell credits in the Agentic marketplace",
}

export default function MarketplacePage() {
  return <MarketplaceComponent />
}

