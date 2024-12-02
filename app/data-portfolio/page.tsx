import { Metadata } from "next"
import { Plus, Upload, FileUp, BanknoteIcon as Bank, TrendingUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { DataSourceCard } from "@/components/data-source-card"
import { FileCard } from "@/components/file-card"
import { UploadFileDialog } from "@/components/upload-file-dialog"
import { ReceiptsAndPurchases } from "@/components/receipts-and-purchases"
import { DataUsageHistory } from "@/components/data-usage-history"
import { PopularData } from "@/components/popular-data"
import { DataRecommendations } from "@/components/data-recommendations"
import { BankAccounts } from "@/components/bank-accounts"
import { InvestmentPortfolio } from "@/components/investment-portfolio"

export const metadata: Metadata = {
  title: "Data Portfolio",
  description: "Manage your data sources and files in Pantheon",
}

const dataSources = [
  {
    name: "Google Calendar",
    type: "Calendar",
    status: "Connected",
    lastSync: "2023-06-15T10:30:00Z",
    agentsUsing: ["Travel Planner", "Day Planner"],
  },
  {
    name: "Dropbox",
    type: "File Storage",
    status: "Connected",
    lastSync: "2023-06-14T14:45:00Z",
    agentsUsing: ["Task Manager", "Meeting Scheduler"],
  },
  {
    name: "Fitbit",
    type: "Health Data",
    status: "Connected",
    lastSync: "2023-06-15T08:00:00Z",
    agentsUsing: ["Nutrition Guide"],
  },
  {
    name: "Instagram",
    type: "Social Media",
    status: "Connected",
    lastSync: "2023-06-15T11:00:00Z",
    agentsUsing: ["Social Media Manager"],
  },
  {
    name: "X",
    type: "Social Media",
    status: "Connected",
    lastSync: "2023-06-15T11:05:00Z",
    agentsUsing: ["Social Media Manager", "News Aggregator"],
  },
  {
    name: "Meta",
    type: "Social Media",
    status: "Connected",
    lastSync: "2023-06-15T11:10:00Z",
    agentsUsing: ["Social Media Manager", "Ad Campaign Manager"],
  },
  {
    name: "YouTube",
    type: "Video Platform",
    status: "Connected",
    lastSync: "2023-06-15T11:15:00Z",
    agentsUsing: ["Content Creator Assistant", "Video Analyzer"],
  },
  {
    name: "Spotify",
    type: "Music",
    status: "Disconnected",
    lastSync: "2023-06-10T16:20:00Z",
    agentsUsing: [],
  },
]

const files = [
  {
    name: "Project Proposal.docx",
    type: "Document",
    size: "2.5 MB",
    uploadDate: "2023-06-14T09:30:00Z",
    agentsUsing: ["Task Manager"],
  },
  {
    name: "Financial Report Q2.xlsx",
    type: "Spreadsheet",
    size: "4.8 MB",
    uploadDate: "2023-06-13T11:45:00Z",
    agentsUsing: ["Task Manager", "Meeting Scheduler"],
  },
  {
    name: "Team Photo.jpg",
    type: "Image",
    size: "3.2 MB",
    uploadDate: "2023-06-12T15:20:00Z",
    agentsUsing: [],
  },
  {
    name: "Client Presentation.pptx",
    type: "Presentation",
    size: "10.1 MB",
    uploadDate: "2023-06-11T14:00:00Z",
    agentsUsing: ["Meeting Scheduler"],
  },
]

export default function DataPortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Data Portfolio</h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <Button className="w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Connect Data Source
            </Button>
            <UploadFileDialog>
              <Button variant="outline" className="w-full md:w-auto">
                <Upload className="mr-2 h-4 w-4" /> Upload File
              </Button>
            </UploadFileDialog>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Data Sources</CardTitle>
              <CardDescription>
                Manage your connected data sources and their permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {dataSources.map((source) => (
                  <DataSourceCard key={source.name} dataSource={source} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Files</CardTitle>
              <CardDescription>
                Manage your uploaded files and their usage by agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {files.map((file) => (
                  <FileCard key={file.name} file={file} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connected Bank Accounts</CardTitle>
              <CardDescription>
                Manage your connected bank accounts and financial data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BankAccounts />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
              <CardDescription>
                View and manage your investment portfolio, including cryptocurrencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InvestmentPortfolio />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Receipts and Purchases History</CardTitle>
              <CardDescription>
                View and manage your uploaded receipts and purchase history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ReceiptsAndPurchases />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Usage History</CardTitle>
              <CardDescription>
                Track how your data is being used by agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataUsageHistory />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Most Popular Data</CardTitle>
              <CardDescription>
                See which of your data sources are most frequently used
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PopularData />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>
                Suggestions for data you should upload to grow your revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataRecommendations />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

