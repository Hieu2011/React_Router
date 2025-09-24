import { Toaster } from 'sonner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Index from '~/pages/Index'

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
