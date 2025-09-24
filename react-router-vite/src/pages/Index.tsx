import Footer from '~/components/layout/footer'
import Header from '~/components/layout/header'
import Home from '~/components/layout/home'

const Index = () => {
  return (
    <div className='min-h-dvh flex flex-col'>
      <Header />
      <main className='flex-1 container mx-auto px-4 pb-12 pt-8 space-y-16'>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default Index
