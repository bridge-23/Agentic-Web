"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DataSourceWizard from "./data-source-wizard"
import FileUploadManager from "./file-upload-manager"
import PrivacyControls from "./privacy-controls"

export default function DataManagementComponent() {
  const [activeTab, setActiveTab] = useState("sources")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Data Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Data</CardTitle>
          <CardDescription>
            Connect data sources, upload files, and control your privacy settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sources">Data Sources</TabsTrigger>
              <TabsTrigger value="uploads">File Uploads</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Controls</TabsTrigger>
            </TabsList>
            <TabsContent value="sources">
              <DataSourceWizard />
            </TabsContent>
            <TabsContent value="uploads">
              <FileUploadManager />
            </TabsContent>
            <TabsContent value="privacy">
              <PrivacyControls />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

