import { MainContent } from '@/MainContent.jsx'
import { Sidebar, uiComponents } from '@/Sidebar.jsx'
import { ThemeProvider } from '@/theme-provider.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function Layout() {
  return (
    <div className="bg-background flex h-screen overflow-hidden">
      <Sidebar />

      <main className="mx-auto flex h-screen items-center justify-center p-8">
        <Outlet />
      </main>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContent />} />

            {uiComponents.map(component => (
              <Route key={component.href} path={component.href} element={<component.page />} />
            ))}
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
