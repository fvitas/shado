import { AspectRatio } from '@/components/ui/aspect-ratio.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'

export function AspectRatioPage() {
  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Aspect Ratio</h1>

      <PreviewWrapper className="flex gap-2">
        <div className="w-1/2">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt=""
              fill
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
        </div>

        <div className="w-1/2">
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt=""
              fill
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
      </PreviewWrapper>
    </div>
  )
}
