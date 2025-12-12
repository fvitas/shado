import { AspectRatio } from '@/components/ui/aspect-ratio.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

export function AspectRatioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Aspect Ratio</h1>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4">
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
        </CardContent>
      </Card>
    </div>
  )
}
