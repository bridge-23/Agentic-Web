import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Portfolio",
  description: "Manage your data sources and files in Pantheon",
}

export default function DataPortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}