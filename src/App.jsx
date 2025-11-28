import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { AspectRatio } from '@/components/ui/aspect-ratio.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Switch } from '@/components/ui/switch.jsx'
import { Download, Loader, PlusIcon, SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Design System</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Explore components using the sidebar navigation</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-slate-600 mb-4">
            This design system uses React Router from reactrouter.com for navigation. Click any component in the sidebar
            to view examples.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold mb-2">📦 Components</div>
              <div className="text-slate-600">8+ ready-to-use components</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold mb-2">🚀 React Router</div>
              <div className="text-slate-600">Latest routing implementation</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ButtonPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Button</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-4">
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Button with icons</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
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
        </CardContent>
      </Card>
    </div>
  )
}

function CardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Card</h1>
        <p className="text-slate-600">Container component with header, content, and footer</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Example</CardTitle>
            <CardDescription>A simple card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Card content goes here.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Action</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pricing Card</CardTitle>
            <CardDescription>Example with pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Monthly</span>
                <span className="font-medium">$29</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Yearly</span>
                <span className="font-medium">$290</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function InputPage() {
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

function BadgePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Badge</h1>
        <p className="text-slate-600">Small status indicators</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AlertPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Alert</h1>
        <p className="text-slate-600">Notification messages</p>
      </div>

      <div className="space-y-4">
        <Alert>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is an informational alert.</AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>This is an error alert.</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

function SwitchPage() {
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

function CheckboxPage() {
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

function AccordionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Accordion</h1>
      </div>

      <Card>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">Product Information</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with sleek design. Built with premium materials,
                  it offers unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an intuitive user interface designed for
                  both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business
                  days, while express shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track your shipment in real-time through our
                  dedicated tracking portal.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely
                  satisfied, simply return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping and full refunds processed within 48
                  hours of receiving the returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

function AspectRatioPage() {
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

function AvatarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Avatar</h1>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>

            <Avatar className="rounded-full border border-gray-500">
              <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/non-existing" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>

            {/* avatar group */}
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
                <AvatarFallback>FV</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/evilrabbit.png" alt="" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ComponentPagePlaceholder({ title }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-600">Interactive examples for {title} are coming soon.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{title} overview</CardTitle>
          <CardDescription>Use this page to document usage, props, and design notes.</CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Describe when to use {title} in your product.</li>
            <li>Show variations and states once they are available.</li>
            <li>Link to related Figma resources or guidelines.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

const componentPageComponents = {
  accordion: AccordionPage,
  alert: AlertPage,
  'aspect-ratio': AspectRatioPage,
  avatar: AvatarPage,
  badge: BadgePage,
  button: ButtonPage,
  card: CardPage,
  checkbox: CheckboxPage,
  input: InputPage,
  switch: SwitchPage,
}

const uiComponents = [
  'accordion',
  'alert-dialog',
  'alert',
  'aspect-ratio',
  'avatar',
  'badge',
  'breadcrumb',
  'button-group',
  'button',
  'calendar',
  'card',
  'carousel',
  'chart',
  'checkbox',
  'collapsible',
  'command',
  'context-menu',
  'dialog',
  'drawer',
  'dropdown-menu',
  'empty',
  'field',
  'form',
  'hover-card',
  'input-group',
  'input-otp',
  'input',
  'item',
  'kbd',
  'label',
  'menubar',
  'navigation-menu',
  'pagination',
  'popover',
  'progress',
  'radio-group',
  'resizable',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'sidebar',
  'skeleton',
  'slider',
  'sonner',
  'spinner',
  'switch',
  'table',
  'tabs',
  'textarea',
  'toggle-group',
  'toggle',
  'tooltip',
]

const componentPages = uiComponents.map(key => {
  const name = key
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
  const Component = componentPageComponents[key] ?? (() => <ComponentPagePlaceholder title={name} />)

  return {
    key,
    name,
    path: `/${key}`,
    Component,
  }
})

const navigationItems = [
  { name: 'Home', path: '/' },
  ...componentPages.map(page => ({ name: page.name, path: page.path })),
]

function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900">Components</h2>
      </div>

      <nav className="px-3 pb-4">
        {navigationItems.map(route => (
          <Link
            key={route.path}
            to={route.path}
            className={twMerge(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1',
              location.pathname === route.path
                ? 'bg-slate-100 text-gray-900'
                : 'text-gray-600 hover:bg-slate-50 hover:text-slate-900',
            )}>
            <span>{route.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
function Layout({ children }) {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">{children}</div>
      </main>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {componentPages.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
