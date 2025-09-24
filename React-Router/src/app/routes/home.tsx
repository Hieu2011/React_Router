import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'XTask' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  return (
    <section className='space-y-8'>
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold tracking-tight'>Welcome</h1>
        <p className='text-muted-foreground max-w-xl mx-auto'>
          Starter layout with Header, dropdown nav, Footer. Replace this content
          with your homepage sections.
        </p>
      </div>
    </section>
  )
}
