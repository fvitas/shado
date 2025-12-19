import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Label } from '@/components/ui/label.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'

export function CheckboxPage() {
  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Checkbox</h1>

      <PreviewWrapper className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>

        <div className="flex items-start gap-4">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2" className="cursor-pointer">
              Accept terms and conditions
            </Label>
            <p className="text-muted-foreground text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  )
}
