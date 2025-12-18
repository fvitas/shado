import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AccordionPage } from '@/pages/AccordionPage.jsx'
import { AlertPage } from '@/pages/AlertPage.jsx'
import { AspectRatioPage } from '@/pages/AspectRatioPage.jsx'
import { AvatarPage } from '@/pages/AvatarPage.jsx'
import { BadgePage } from '@/pages/BadgePage.jsx'
import { ButtonPage } from '@/pages/ButtonPage.jsx'
import { CardPage } from '@/pages/CardPage.jsx'
import { CheckboxPage } from '@/pages/CheckboxPage.jsx'
import { InputPage } from '@/pages/InputPage.jsx'
import { SwitchPage } from '@/pages/SwitchPage.jsx'
import { THEME, useTheme } from '@/theme-provider'
import { ChevronDown, ChevronRight, MoonIcon, PanelLeft, PanelLeftClose, SunIcon } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const uiComponentList = [
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

export const uiComponents = [
  { title: 'Accordion', href: 'accordion', page: AccordionPage },
  { title: 'Alert', href: 'alert', page: AlertPage },
  { title: 'Aspect ratio', href: 'aspect-ratio', page: AspectRatioPage },
  { title: 'Avatar', href: 'avatar', page: AvatarPage },
  { title: 'Badge', href: 'badge', page: BadgePage },
  { title: 'Button', href: 'button', page: ButtonPage },
  { title: 'Card', href: 'card', page: CardPage },
  { title: 'Checkbox', href: 'checkbox', page: CheckboxPage },
  { title: 'Input', href: 'input', page: InputPage },
  { title: 'Switch', href: 'switch', page: SwitchPage },
]

const navItems = [
  {
    title: 'Docs',
    items: [
      { title: 'Introduction', href: '/' },
      {
        title: 'Components',
        href: '#components',
        children: [
          ...uiComponents,

          // { title: 'Angle Slider', href: 'angle-slider' },
          // { title: 'Avatar Group', href: 'avatar-group' },
          // { title: 'Badge Overflow', href: 'badge-overflow' },
          // { title: 'Checkbox Group', href: 'checkbox-group' },
          // { title: 'Circular Progress', href: 'circular-progress' },
          // { title: 'Color Picker', href: 'color-picker' },
          // { title: 'Color Swatch', href: 'color-swatch' },
          // { title: 'Combobox', href: 'combobox' },
          // { title: 'Compare Slider', href: 'compare-slider' },
          // { title: 'Cropper', href: 'cropper' },
          // { title: 'Data Grid', href: 'data-grid' },
          // { title: 'Data Table', href: 'data-table' },
        ],
      },
      {
        title: 'Blocks',
        href: '#blocks',
        children: [
          { title: 'Action Bar', href: '#action-bar' },
          { title: 'Angle Slider', href: '#angle-slider' },
          { title: 'Avatar Group', href: '#avatar-group' },
          { title: 'Badge Overflow', href: '#badge-overflow' },
          { title: 'Checkbox Group', href: '#checkbox-group' },
          { title: 'Circular Progress', href: '#circular-progress' },
          { title: 'Color Picker', href: '#color-picker' },
          { title: 'Color Swatch', href: '#color-swatch' },
          { title: 'Combobox', href: '#combobox' },
          { title: 'Compare Slider', href: '#compare-slider' },
          { title: 'Cropper', href: '#cropper' },
          { title: 'Data Grid', href: '#data-grid' },
          { title: 'Data Table', href: '#data-table' },
        ],
      },
    ],
  },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState(['Components'])
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  function toggleExpanded(title) {
    setExpandedItems(prev => (prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]))
  }

  const isDarkMode = theme === THEME.DARK

  return (
    <aside
      className={twMerge(
        'border-sidebar-border bg-sidebar flex shrink-0 flex-col border-r transition-[width] duration-300',
        isCollapsed ? 'w-16' : 'w-64',
      )}>
      {/* Header */}
      <div className="border-sidebar-border flex h-14 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="bg-sidebar-primary flex h-6 w-6 items-center justify-center rounded">
              <span className="text-sidebar-primary-foreground text-xs font-bold">S</span>
            </div>
            <span className="text-sidebar-foreground font-semibold">Shado</span>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent h-8 w-8">
          {isCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div
          className={twMerge(
            'space-y-1 [&_*]:opacity-100 [&_*]:transition-opacity [&_*]:duration-400',
            isCollapsed && '[&_*]:opacity-0',
          )}>
          {navItems.map(section => (
            <div key={section.title} className="space-y-1">
              {section.items.map(item =>
                item.children ? (
                  <div key={item.title}>
                    <button
                      onClick={() => toggleExpanded(item.title)}
                      className="text-sidebar-foreground hover:bg-sidebar-accent flex w-full items-center justify-between rounded-md px-3 py-2 text-sm">
                      <span>{item.title}</span>

                      {expandedItems.includes(item.title) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>

                    {expandedItems.includes(item.title) && (
                      <div className="border-sidebar-border ml-3 space-y-1 border-l pl-3">
                        {item.children.map(child => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className={twMerge(
                              'mb-1 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                              'text-sidebar-foreground hover:bg-sidebar-accent flex w-full items-center justify-between rounded-md px-3 py-2 text-sm',
                              location.pathname.replace('/', '') === child.href &&
                                'bg-sidebar-border text-sidebar-foreground hover:bg-sidebar-border hover:text-sidebar-foreground',
                            )}>
                            <span>{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={twMerge(
                      'mb-1 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      'text-sidebar-foreground hover:bg-sidebar-accent flex w-full items-center justify-between rounded-md px-3 py-2 text-sm',

                      location.pathname === item.href &&
                        'bg-sidebar-border text-sidebar-foreground hover:bg-sidebar-border hover:text-sidebar-foreground',
                    )}>
                    <span>{item.title}</span>
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Theme Toggle */}
      <div className="border-sidebar-border border-t p-3">
        <div className="bg-accent overflow-hidden rounded-lg p-1">
          <label
            aria-checked={isDarkMode}
            className={` ${isCollapsed ? 'before:hidden' : ''} before:bg-background relative flex cursor-pointer before:absolute before:h-full before:w-1/2 before:translate-x-0 before:rounded-md before:shadow before:transition-[transform] before:duration-300 aria-checked:before:translate-x-full`}>
            <input className="absolute h-0 w-0 opacity-0" type="checkbox" onChange={toggleTheme} />

            <div
              aria-checked={!isDarkMode}
              className={twMerge(
                `z-10 flex w-1/2 items-center justify-center gap-2 p-2 ${isDarkMode && isCollapsed ? 'hidden' : ''} ${isCollapsed ? 'w-full' : ''} `,
              )}>
              <SunIcon className="h-4 w-4" />
              <span className={`select-none ${isCollapsed ? 'hidden' : ''}`}>Light</span>
            </div>

            <div
              aria-checked={isDarkMode}
              className={cn(
                `z-10 flex w-1/2 items-center justify-center gap-2 p-2 ${!isDarkMode && isCollapsed ? 'hidden' : ''} ${isCollapsed ? 'w-full' : ''} `,
              )}>
              <MoonIcon className="h-4 w-4" />
              <span className={`select-none ${isCollapsed ? 'hidden' : ''}`}>Dark</span>
            </div>
          </label>
        </div>
      </div>
    </aside>
  )
}
