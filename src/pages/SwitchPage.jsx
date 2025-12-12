import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Switch } from '@/components/ui/switch.jsx'
import { useState } from 'react'

export function SwitchPage() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Switch</h1>
        <p className="text-slate-600">Toggle switch control</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between">
            <Label>Enable notifications</Label>
            <Switch checked={checked} onCheckedChange={setChecked} />
          </div>

          <p className="text-sm text-slate-600 mt-4">Status: {checked ? 'On' : 'Off'}</p>
        </CardContent>
      </Card>
    </div>
  )
}
