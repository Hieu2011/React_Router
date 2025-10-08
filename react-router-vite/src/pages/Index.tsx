import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import Home from '~/components/layout/Home'

const Index = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <Header />
      <main className='container mx-auto flex-1 space-y-16 px-4 pt-8 pb-12'>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default Index
