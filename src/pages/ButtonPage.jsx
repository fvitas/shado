import { Button } from '@/components/ui/button.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'
import { Download, Loader, PlusIcon, SearchIcon } from 'lucide-react'

export function ButtonPage() {
  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Button</h1>

      <PreviewWrapper className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2>Variants</h2>

          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>

            <Button variant="success">Success</Button>
            <Button variant="error">Error</Button>
            <Button variant="warning">Warning</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Sizes</h2>

          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Button with icons</h2>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="icon">
              <Download />
            </Button>

            <Button>
              <PlusIcon /> Add new
            </Button>

            <Button>
              Search <SearchIcon />
            </Button>

            {/*todo better loading state*/}

            <Button disabled>
              <Loader className="animate-spin" /> Loading...
            </Button>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  )
}
