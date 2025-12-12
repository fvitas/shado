import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export function CardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Card</h1>
        <p className="text-slate-600">Container component with header, content, and footer</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Example</CardTitle>
            <CardDescription>A simple card component</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-slate-600">Card content goes here.</p>
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
                <span className="text-slate-600">Monthly</span>
                <span className="font-medium">$29</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Yearly</span>
                <span className="font-medium">$290</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
