import { Badge } from '@/components/ui/badge.jsx'

export function PreviewWrapper({ children }) {
  return (
    <div className="bg-background ring-foreground/15 relative w-full flex-1 overflow-hidden rounded-2xl ring-1">
      <div className="h-full max-h-full w-full overflow-y-auto">
        <div className="p-8">{children}</div>
      </div>

      <Badge variant="outline" className="bg-background absolute right-4 bottom-4">
        Preview
      </Badge>
    </div>
  )
}
