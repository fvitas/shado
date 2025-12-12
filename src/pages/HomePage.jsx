import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Design System</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Explore components using the sidebar navigation</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-slate-600 mb-4">
            This design system uses React Router from reactrouter.com for navigation. Click any component in the sidebar
            to view examples.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold mb-2">📦 Components</div>
              <div className="text-slate-600">8+ ready-to-use components</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold mb-2">🚀 React Router</div>
              <div className="text-slate-600">Latest routing implementation</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
