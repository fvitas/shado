import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Label } from '@/components/ui/label.jsx'
import { useState } from 'react'

export function CheckboxPage() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Checkbox</h1>
        <p className="text-slate-600">Selection control</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox checked={checked} onCheckedChange={setChecked} />
              <Label>Accept terms</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
