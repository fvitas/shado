import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'

export function CardPage() {
  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Card</h1>

      <PreviewWrapper className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Example</CardTitle>
            <CardDescription>A simple card component</CardDescription>
          </CardHeader>

          <CardContent>
            <p>Card content goes here.</p>
          </CardContent>

          <CardFooter>
            <Button className="w-full">Action</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pricing Card</CardTitle>
            <CardDescription>Example with pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly</span>
                <span className="font-medium">$29</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Yearly</span>
                <span className="font-medium">$290</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </PreviewWrapper>
    </div>
  )
}
