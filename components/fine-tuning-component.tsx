"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ModelSelection from "./model-selection"
import TrainingDataManagement from "./training-data-management"
import HyperparameterTuning from "./hyperparameter-tuning"
import FineTuningJobs from "./fine-tuning-jobs"

export default function FineTuningComponent() {
  const [activeTab, setActiveTab] = useState("model")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Fine-Tuning</h1>
      <Card>
        <CardHeader>
          <CardTitle>Customize Your AI Agents</CardTitle>
          <CardDescription>
            Select models, manage training data, and adjust hyperparameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="model">Model Selection</TabsTrigger>
              <TabsTrigger value="data">Training Data</TabsTrigger>
              <TabsTrigger value="hyperparameters">Hyperparameters</TabsTrigger>
              <TabsTrigger value="jobs">Fine-Tuning Jobs</TabsTrigger>
            </TabsList>
            <TabsContent value="model">
              <ModelSelection />
            </TabsContent>
            <TabsContent value="data">
              <TrainingDataManagement />
            </TabsContent>
            <TabsContent value="hyperparameters">
              <HyperparameterTuning />
            </TabsContent>
            <TabsContent value="jobs">
              <FineTuningJobs />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

