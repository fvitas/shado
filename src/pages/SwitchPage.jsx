import { Label } from '@/components/ui/label.jsx'
import { Switch } from '@/components/ui/switch.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'
import { useState } from 'react'

export function SwitchPage() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Switch</h1>

      <PreviewWrapper>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-notifictions" className="cursor-pointer">
              Enable notifications
            </Label>
            <Switch
              id="enable-notifictions"
              className="cursor-pointer"
              checked={checked}
              onCheckedChange={setChecked}
            />
          </div>

          <p className="text-foreground mt-4 text-sm">Status: {checked ? 'On' : 'Off'}</p>
        </div>
      </PreviewWrapper>
    </div>
  )
}
