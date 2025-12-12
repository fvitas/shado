import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Download, Loader, PlusIcon, SearchIcon } from 'lucide-react'

export function ButtonPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Button</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>

            <Button variant="success">Success</Button>
            <Button variant="error">Error</Button>
            <Button variant="warning">Warning</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Button with icons</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="icon">
              <Download />
            </Button>

            <Button>
              <PlusIcon /> Add new
            </Button>

            <Button>
              Search <SearchIcon />
            </Button>

            {/*todo better loading state*/}

            <Button disabled>
              <Loader className="animate-spin" /> Loading...
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
