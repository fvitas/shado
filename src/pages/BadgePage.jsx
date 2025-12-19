import { Badge } from '@/components/ui/badge.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'

export function BadgePage() {
  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Badge</h1>

      <PreviewWrapper>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </PreviewWrapper>
    </div>
  )
}
