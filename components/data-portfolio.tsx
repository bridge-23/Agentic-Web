import Layout from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DataPortfolio() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Data Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a data portfolio.</p>
          <Button>Learn More</Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

