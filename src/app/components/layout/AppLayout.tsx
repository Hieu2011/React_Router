import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export function AppLayout() {
  return (
    <div className='min-h-dvh flex flex-col'>
      <Header />
      <main className='flex-1 container mx-auto px-4 pb-12 pt-8 space-y-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
