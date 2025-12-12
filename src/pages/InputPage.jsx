import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { useState } from 'react'

export function InputPage() {
  const [value, setValue] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Input</h1>
        <p className="text-slate-600">Form input fields</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Input Examples</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label>Text Input</Label>
              <Input placeholder="Enter text..." value={value} onChange={e => setValue(e.target.value)} />
              <p className="text-xs text-slate-500">Value: {value || '(empty)'}</p>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="email@example.com" />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
