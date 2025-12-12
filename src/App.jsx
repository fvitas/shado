import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { AccordionPage } from '@/pages/AccordionPage.jsx'
import { AlertPage } from '@/pages/AlertPage.jsx'
import { AspectRatioPage } from '@/pages/AspectRatioPage.jsx'
import { AvatarPage } from '@/pages/AvatarPage.jsx'
import { BadgePage } from '@/pages/BadgePage.jsx'
import { ButtonPage } from '@/pages/ButtonPage.jsx'
import { CardPage } from '@/pages/CardPage.jsx'
import { CheckboxPage } from '@/pages/CheckboxPage.jsx'
import { HomePage } from '@/pages/HomePage.jsx'
import { InputPage } from '@/pages/InputPage.jsx'
import { SwitchPage } from '@/pages/SwitchPage.jsx'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

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
  'accordion', // ✅
  'alert-dialog',
  'alert', // ✅
  'aspect-ratio', // ✅
  'avatar', // ✅
  'badge', // ✅
  'breadcrumb',
  'button-group',
  'button', // ✅
  'calendar',
  'card', // ✅
  'carousel',
  'chart',
  'checkbox', // ✅
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
  'input', // ✅
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
  'switch', // ✅
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
