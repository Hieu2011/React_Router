import { ArrowRight, Code2, Github, Palette, Zap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '~/components/ui/card'

function Home() {
  return (
    <div className='container mx-auto py-6 sm:py-12'>
      <div className='max-w-6xl mx-auto'>
        {/* Hero Section */}
        <div className='text-center mb-12 sm:mb-16'>
          <Badge variant='secondary' className='mb-4'>
            React Router + shadcn/ui
          </Badge>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent px-2'>
            Modern React Setup
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4'>
            A complete React Router setup with shadcn/ui components, TypeScript,
            Tailwind CSS, and ESLint. Everything you need to build beautiful,
            type-safe web applications.
          </p>
          <div className='flex gap-3 sm:gap-4 justify-center flex-wrap px-4'>
            <Link to='/about'>
              <Button
                size='lg'
                className='gap-2 shadow-elegant text-sm sm:text-base'
              >
                Learn More
                <ArrowRight className='h-4 w-4' />
              </Button>
            </Link>
            <Button
              variant='outline'
              size='lg'
              className='gap-2 text-sm sm:text-base'
            >
              <Github className='h-4 w-4' />
              View Source
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16'>
          <Card className='hover:shadow-elegant transition-smooth'>
            <CardHeader className='p-4 sm:p-6'>
              <Code2 className='h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2' />
              <CardTitle className='text-lg sm:text-xl'>
                TypeScript Ready
              </CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                Full type safety with excellent IntelliSense and developer
                experience.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='hover:shadow-elegant transition-smooth'>
            <CardHeader className='p-4 sm:p-6'>
              <Palette className='h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2' />
              <CardTitle className='text-lg sm:text-xl'>
                Beautiful Design
              </CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                shadcn/ui components with a custom design system and Tailwind
                CSS.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='hover:shadow-elegant transition-smooth sm:col-span-2 lg:col-span-1'>
            <CardHeader className='p-4 sm:p-6'>
              <Zap className='h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2' />
              <CardTitle className='text-lg sm:text-xl'>
                Fast Navigation
              </CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                React Router for seamless client-side routing and navigation.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className='bg-gradient-primary text-primary-foreground'>
          <CardHeader className='text-center p-4 sm:p-6'>
            <CardTitle className='text-2xl sm:text-3xl mb-2'>
              Ready to Explore?
            </CardTitle>
            <CardDescription className='text-primary-foreground/80 text-base sm:text-lg'>
              Navigate through the different pages to see all the features in
              action.
            </CardDescription>
          </CardHeader>
          <CardContent className='text-center p-4 sm:p-6 pt-0'>
            <div className='flex gap-3 sm:gap-4 justify-center flex-wrap'>
              <Link to='/team'>
                <Button
                  variant='secondary'
                  size='lg'
                  className='text-sm sm:text-base'
                >
                  Meet the Team
                </Button>
              </Link>
              <Link to='/settings'>
                <Button
                  variant='outline'
                  size='lg'
                  className='bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-sm sm:text-base'
                >
                  View Settings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
