"use client"

import Layout from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome to your dashboard!</p>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

